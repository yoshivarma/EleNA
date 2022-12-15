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

    def test_Route_Minimum_Elevation(self):
        self.assertTrue(self.model.Route('Amherst', 'Massachusetts', "worcester commons, Amherst, MA", "Boulders, Amherst, MA", 50, True), (self.graph1, [(-72.526813, 42.3948838), (-72.522654, 42.386922), (-72.52252, 42.386783), (-72.5225601, 42.3859808), (-72.5226108, 42.3858612), (-72.5224872, 42.3858248), (-72.5218793, 42.3854455), (-72.5216833, 42.3850786), (-72.521259, 42.384304), (-72.520714, 42.383315), (-72.520048, 42.382266), (-72.520111, 42.380181), (-72.5200284, 42.379331), (-72.519771, 42.379239), (-72.5199164, 42.3780544), (-72.5199108, 42.37756), (-72.5198495, 42.375831), (-72.5198407, 42.3756538), (-72.5198329, 42.3748034), (-72.519821, 42.374004), (-72.521331, 42.373932), (-72.5211667, 42.3726155), (-72.519809, 42.373212), (-72.5197519, 42.3722805), (-72.51981, 42.370665), (-72.519979, 42.368846), (-72.520053, 42.368243), (-72.520172, 42.367305), (-72.520181, 42.36722), (-72.520754, 42.362842), (-72.520759, 42.361988), (-72.520781, 42.360697), (-72.520872, 42.355679), (-72.522022, 42.354221), (-72.525857, 42.351601), (-72.527381, 42.351556), (-72.529334, 42.348348)], 60))

    def test_Route_Maximum_Elevation(self):
        self.assertTrue(self.model.Route('Amherst', 'Massachusetts', "worcester commons, Amherst, MA", "Boulders, Amherst, MA", 50, False), (self.graph1, [(-72.526813, 42.3948838), (-72.522654, 42.386922), (-72.52252, 42.386783), (-72.5225601, 42.3859808), (-72.5226108, 42.3858612), (-72.5224872, 42.3858248), (-72.5218793, 42.3854455), (-72.5216833, 42.3850786), (-72.521259, 42.384304), (-72.520714, 42.383315), (-72.520048, 42.382266), (-72.5196838, 42.3818572), (-72.5194327, 42.3815923), (-72.5193804, 42.3814713), (-72.5193317, 42.3810289), (-72.51948, 42.380001), (-72.519771, 42.379239), (-72.5199164, 42.3780544), (-72.5199108, 42.37756), (-72.5198495, 42.375831), (-72.5198407, 42.3756538), (-72.5198329, 42.3748034), (-72.5189538, 42.374795), (-72.518882, 42.373214), (-72.519809, 42.373212), (-72.5197519, 42.3722805), (-72.51981, 42.370665), (-72.519979, 42.368846), (-72.520053, 42.368243), (-72.520172, 42.367305), (-72.520181, 42.36722), (-72.520754, 42.362842), (-72.520759, 42.361988), (-72.520781, 42.360697), (-72.520872, 42.355679), (-72.522022, 42.354221), (-72.523876, 42.354367), (-72.524164, 42.354), (-72.527895, 42.352808), (-72.52788, 42.351557), (-72.527381, 42.351556), (-72.529334, 42.348348)], 61))
    
    
if __name__ == '__main__':
    unittest.main()