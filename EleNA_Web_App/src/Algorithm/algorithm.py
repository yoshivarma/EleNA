# from dijkstar import graph, find_path
import osmnx as ox
from osmnx.utils import log
from geopy.geocoders import Nominatim
import matplotlib
import pandas as pd
from shapely.geometry import Point
import networkx as nx
import folium
import json
import urllib.request

class Model:
  def __init__(self, city, state, start, end, k, minimum_elevation):
    self.city = city
    self.state = state
    self.start = start
    self.end = end
    self.k = k
    self.minimum_elevation = minimum_elevation

  def Locator(self, city, state):
    my_google_elevation_api_key = '<your_api_key>'
    query = {'city': city, 'state': state, 'country': 'USA'}
    graph1 = ox.graph_from_place(query, network_type='drive')
    # graph_proj = ox.project_graph(graph1)
    # fig, ax = ox.plot_graph(graph1)
    loc = Nominatim(user_agent= "GetLoc")
    return loc, graph1
  
  def Cordinates(self, loc, start, end):
    #start latitue and longitude
    start_loc = loc.geocode(start)
    start_latitude = start_loc.latitude
    start_longitude = start_loc.longitude
    #end latitude and longitude
    end_loc = loc.geocode(end)
    end_latitude = end_loc.latitude
    end_longitude = end_loc.longitude
    return start_latitude, start_longitude, end_latitude, end_longitude
  
  def Route(self, city, state, start, end, k, minimum_elevation):
    #obtainin location, graphs
    loc, graph1 = self.Locator(city, state)
    #getting lattitudes, longitudes from the location
    start_latitude, start_longitude, end_latitude, end_longitude = self.Cordinates(loc, start, end)
    #Obtaining the nearest nodes from the graph(Geo Data) for that location
    end_N = ox.nearest_nodes(graph1, end_longitude, end_latitude, True)
    start_N = ox.nearest_nodes(graph1, start_longitude, start_latitude, True)
    #shortest 150 routes
    route = ox.k_shortest_paths(graph1, start_N[0], end_N[0],150)
    routes = list()
    for x in route:
      routes.append(x)

    if minimum_elevation:
      lat_long = list()
      for x in routes[k]:
          n = graph1.nodes[x]
          lat = n['y']
          longi = n['x']
          lat_long.append((lat,longi))
      return lat_long

    else:
      list_lat_long = list()
      #Adjusting k
      if k < 10:
          k = 10
      elif k >140:
          k = 140
      for route in routes[k-10:k+10]:
        lat_long = list()
        for x in route:
            n = graph1.nodes[x]
            lat = n['y']
            longi = n['x']
            lat_long.append((lat,longi))
        list_lat_long.append(lat_long)
      #find elevation gain for all 150 routes
      max_ele_gain = -10000000
      for new_list in list_lat_long:
        #CONSTRUCT JSON
        d_ar=[{}]*len(new_list)
        for i in range(len(new_list)):
            d_ar[i]={"latitude":new_list[i][0],"longitude":new_list[i][1]}
        location={"locations":d_ar}
        json_data=json.dumps(location,skipkeys=int).encode('utf8')

        #SEND REQUEST 
        url="https://api.open-elevation.com/api/v1/lookup"
        response = urllib.request.Request(url,json_data,headers={'Content-Type': 'application/json'})
        fp = urllib.request.urlopen(response)
        #RESPONSE PROCESSING
        res_byte=fp.read()
        res_str=res_byte.decode("utf8")
        js_str=json.loads(res_str)
        #print (js_mystr)
        fp.close()

        #GETTING ELEVATION 
        response_len=len(js_str['results'])
        elev_list=[]
        for j in range(response_len):
            elev_list.append(js_str['results'][j]['elevation'])

        #BASIC STAT INFORMATION
        mean_elev=round((sum(elev_list)/len(elev_list)),3)
        min_elev=min(elev_list)
        max_elev=max(elev_list)
        if max_elev-min_elev > max_ele_gain:
          max_ele_gain = max_elev-min_elev
          lat_long = new_list
      return lat_long


def Route_Statistics(start, end, k, minimum_elevation):
    city = 'Amherst'
    state = 'Massachusetts'
    start = "worcester commons, Amherst, MA"
    end = "Boulders, Amherst, MA"
    minimum_elevation = False
    k = 140
    model = Model(city, state, start, end, k, minimum_elevation)
    lat_long = model.Route(city, state, start, end, k, minimum_elevation)
    print(lat_long)
    return lat_long