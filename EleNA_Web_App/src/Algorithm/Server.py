import os
from flask import Flask, render_template, request, jsonify
from flask_cors import CORS, cross_origin
from geopy import Nominatim
from algorithm import Route_Statistics
import json

app = Flask(__name__)
CORS(app)
geolocator = Nominatim(user_agent="elena")



# #Importing 'http' module 
# const http = require('http')
# const port = 8080;

# # Setting hostname as the localhost
# # NOTE: You can set hostname to something 
# # else as well, for example, say 127.0.0.1
# const hostname = 'localhost';

# // Creating Server 
# const server = http.createServer((req,res)=>{

#     // Handling Request and Response 
#     res.statusCode=200;
#     res.setHeader('Content-Type', 'text/plain')
#     res.end("Welcome to Geeks For Geeks")
# });

@app.route("/get_route", methods=['POST'])
def get_route():
    content = request.get_json()
    source = content['source']
    destination = content['destination']
    elevation_type = (content['elevationType'] == "MIN")
    percentage = int(content['percentage'])

    # # convert the source,destination addresses to lat,lng coordinates
    # source_lat, source_lng = convert_addresss_to_lat_lng(source)
    # dest_lat, dest_lng = convert_addresss_to_lat_lng(destination)

    # get the city, country of the sourcef
    # print(source)
    # address_split = source.split(",")
    # print(address_split)
    city = "Amherst"
    state = "MA"
    # city, state = get_city_country(source)

    # find the best path between source & destination based on elevation
    route, max_ele_gain, total_distance = Route_Statistics(source, destination, percentage, elevation_type)
    # route = [1,2,3]
    
    print(route)
    print(max_ele_gain)
    print(total_distance)
    print(elevation_type)

    result = []
    # x=[0, 1, 2]
    for i in range(len(route)-1):
        result.append((route[i], route[i+1]))
     # send a response back (w/ the route)
    response = jsonify({'Route': result, "Distance": total_distance, "Elevation Gain": max_ele_gain})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response



if __name__ == "__main__":
    app.run(debug = True, port=9000)