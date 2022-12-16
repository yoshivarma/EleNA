import time
from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains

driver = webdriver.Chrome("C:\\Users\\SUSMITA\\Downloads\\chromedriver_win32\\chromedriver.exe")
driver.get("http://localhost:3000/")

driver.implicitly_wait(10) 
driver.maximize_window()

#Testing Happy path when min elevation is provided 

#find source element and pass the source address as keys
source_box = driver.find_element("id", "source")
source_box.send_keys("worcester commons, Amherst, MA")

#find destination element and pass the destination address as keys
destination_box = driver.find_element("id", "destination")
destination_box.send_keys("Boulders, Amherst, MA")

#find minimum elevation button and click it
min = driver.find_element("name","min")
min.click()

#find slider element and slide it 
range = driver.find_element("id", "slider")
actions = ActionChains(driver)
actions.click_and_hold(range).move_by_offset(100, 100)
actions.perform()

#find Submit button and click it
submit = driver.find_element("id", "submit button")
submit.click()

time.sleep(10)
# find distance statistics and verify the calculated values
distance = driver.find_element("name", "fee_distance")
distance_value = distance.get_attribute("value")
if distance_value == '6116.204':
    print("Obtained distance value is correct")
#
# #find elevation statistics and verify the calculated values
elevation = driver.find_element("name", "fee_elevation")
elevation_value = elevation.get_attribute("value")
if elevation_value == '50':
    print("Obtained elevation value is correct")

print("Testing is successful for Happy path")

