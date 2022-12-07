import os
from flask import Flask, render_template, request, jsonify
from flask_cors import CORS, cross_origin
from geopy import Nominatim
from algorithm import Model
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

@app.route("/get_route", methods=["GET"])
def get_route():
    content = request.get_json()

    source = content["Source"]
    destination = content["Destination"]
    max_min = (content["Max_min"] == "max")
    percentage = float(content["Percentage"])

    # # convert the source,destination addresses to lat,lng coordinates
    # source_lat, source_lng = convert_addresss_to_lat_lng(source)
    # dest_lat, dest_lng = convert_addresss_to_lat_lng(destination)

    # get the city, country of the source
    address_split = source.split(",")
    city = address_split[1].strip()
    state = address_split[2].strip()
    # city, state = get_city_country(source)
    print(city, state)

    # find the best path between source & destination based on elevation
    route, total_distance, total_elevation = Model.Route(city, state, source, destination, percentage, max_min)
    print(route)
    print(total_distance)
    print(total_elevation)

     # send a response back (w/ the route)
    response = jsonify({"Distance": total_distance, "Elevation Gain": total_elevation})#jsonify({'Route': route, "Distance": total_distance, "Elevation Gain": total_elevation})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response



if __name__ == "__main__":
    app.run(port=9000)