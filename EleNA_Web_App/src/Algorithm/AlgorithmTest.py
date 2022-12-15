import unittest
# from ./src import *
# from src.Algorithm.algorithm import Route_Statistics
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
# from Algorithm import algorithm
from algorithm import *

class AlgorithmTest(unittest.TestCase):

    def setUp(self):
        self.my_google_elevation_api_key = '<your_api_key>'
        self.query = {'city':  'Amherst', 'state': 'Massachusetts', 'country': 'USA'}
        self.graph1 = ox.graph_from_place(self.query, network_type='drive')
        self.loc = Nominatim(user_agent= "GetLoc")
        self.model = Model('Amherst', 'Massachusetts', "worcester commons, Amherst, MA", "Boulders, Amherst, MA", 50, True)
    
    def test_Cordinates(self):
        self.assertEqual(self.model.Cordinates(self.loc, "worcester commons, Amherst, MA", "Boulders, Amherst, MA"), (42.3932937, -72.52504777733523, 42.3494379, -72.52897654681928))

    
if __name__ == '__main__':
    unittest.main()