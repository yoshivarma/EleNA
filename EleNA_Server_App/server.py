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
@app.route("/get_route", methods=['POST'])
def get_route():
    content = request.get_json()
    source = content['source']
    destination = content['destination']
    elevation_type = (content['elevationType'] == "MIN")
    percentage = int(content['percentage'])

    # # convert the source,destination addresses to lat,lng coordinates

    # get the city, country of the sourcef
    city = "Amherst"
    state = "MA"

    # find the best path between source & destination based on elevation
    result = Route_Statistics(source, destination, percentage, elevation_type)
    if result == "misspelled address":
        response = jsonify({"Error": "Either one of the source and/or destination values are misspelt. Please provide valid source and destination"})
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
    route, max_ele_gain, total_distance = result

    result = []
    for long_lat in route:
        result.append([long_lat[1], long_lat[0]])
    # send a response back (w/ the route)
    response = jsonify({'Route': result, "Distance": total_distance, "Elevation Gain": max_ele_gain, "Error": ""})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


if __name__ == "__main__":
    app.run(debug=True, port=9000)