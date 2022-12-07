# from dijkstar import graph, find_path
import osmnx as ox
from flask import Flask
from osmnx.utils import log
from geopy.geocoders import Nominatim
# from flask_marshmallow import Marshmallow
import matplotlib
import pandas as pd
from shapely.geometry import Point
import networkx as nx
import folium


# app = Flask(__name__)
# if __name__ == '__main__':
#     app.run(host='0.0.0.0', port=105)
# ma = Marshmallow(app)



class Model:
    def _init_(self, city, state, start, end, k):
        self.city = city
        self.state = state
        self.start = start
        self.end = end
        self.k = k

    def Locator(self, city, state):
        my_google_elevation_api_key = '<your_api_key>'
        query = {'city': city, 'state': state, 'country': 'USA'}
        graph1 = ox.graph_from_place(query, network_type='drive')
        graph_proj = ox.project_graph(graph1)
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

    def Route(self, city, state, start, end, k, elevation):
        total_distance = 0
        total_elevation = 0
        temp = [1,2,3]
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

        lat_long = list()
        for x in routes[k]:
            n = graph1.nodes[x]
            lat = n['y']
            longi = n['x']
            lat_long.append((longi,lat))
    
        return temp, total_distance, total_elevation

#def Route_Statistics(start, end):
if __name__ == '_main_':
    city = 'Amherst'
    state = 'Massachusetts'
    start = "worcester commons, Amherst, MA"
    end = "Boulders, Amherst, MA"
    k = 0
    model = Model(city, state, start, end, k)
    lat_long = model.Route(city, state, start, end, k)
    print(lat_long)