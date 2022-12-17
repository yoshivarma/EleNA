import time
from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException

driver = webdriver.Chrome("C:\\Users\\SUSMITA\\Downloads\\chromedriver_win32\\chromedriver.exe")
driver.get("http://localhost:3000/")

driver.implicitly_wait(10)
driver.maximize_window()

# Testing Happy path when min elevation is provided

# find source element and pass the source address as keys
source_box = driver.find_element("id", "source")
source_box.send_keys("Worcester,Amherst,MA")

# find destination element and pass the destination address as keys
destination_box = driver.find_element("id", "destination")
destination_box.send_keys("Boulders,Amherst,MA")

# find minimum elevation button and click it
min = driver.find_element("name", "min")
min.click()

# find slider element and slide it
range = driver.find_element("id", "slider")
actions = ActionChains(driver)
actions.click_and_hold(range).move_by_offset(100, 100)
actions.perform()

# find Submit button and click it
submit = driver.find_element("id", "submit button")
submit.click()

time.sleep(20)
# find distance statistics and verify the calculated values
distance = driver.find_element("name", "fee_distance")
distance_value = distance.get_attribute("value")
if distance_value == '6116.204':
    print("Obtained distance value is correct for minimum elevation gain")
#
# find elevation statistics and verify the calculated values
elevation = driver.find_element("name", "fee_elevation")
elevation_value = elevation.get_attribute("value")
if elevation_value == '50':
    print("Obtained elevation value is correct for minimum elevation gain")

print("----Reached end of testing when minimum elevation gain is selected----")

# Testing Happy path when max elevation is provided

driver.refresh()

# find source element and pass the source address as keys
source_box = driver.find_element("id", "source")
source_box.send_keys("Worcester,Amherst,MA")

# find destination element and pass the destination address as keys
destination_box = driver.find_element("id", "destination")
destination_box.send_keys("university health services, amherst, ma")

# find maximum elevation button and click it
max_button = driver.find_element("name", "max")
max_button.click()

# find slider element and slide it
range_max = driver.find_element("id", "slider")
actions = ActionChains(driver)
actions.click_and_hold(range_max).move_by_offset(100, 100)
actions.perform()

# find Submit button and click it
submit = driver.find_element("id", "submit button")
submit.click()

time.sleep(10)
# find distance statistics and verify the calculated values
distance = driver.find_element("name", "fee_distance")
distance_value_max = distance.get_attribute("value")
if distance_value_max == '3695.6650000000013':
    print("Obtained distance value is correct for maximum elevation gain")
#
# #find elevation statistics and verify the calculated values
elevation = driver.find_element("name", "fee_elevation")
elevation_value_max = elevation.get_attribute("value")
if elevation_value_max == '48':
    print("Obtained elevation value is correct for maximum elevation gain")

print("----Reached end of testing when maximum elevation gain is selected----")

# Testing ALERT popup when source and destination are provided blank

driver.refresh()

# find source element and pass the source address as keys
source_box = driver.find_element("id", "source")
source_box.send_keys("")

# find destination element and pass the destination address as keys
destination_box = driver.find_element("id", "destination")
destination_box.send_keys("")

# find Submit button and click it
submit = driver.find_element("id", "submit button")
submit.click()

try:
    WebDriverWait(driver, 5).until(EC.alert_is_present())
    alert = driver.switch_to.alert
    alert.accept()
    print("Alert exists in page when source and destination are blank")
except TimeoutException:
    print("Alert does not exist in page when source and destination are blank")

print("----Reached end of testing when source and destination are provided blank----")

# Testing ALERT popup when source and destination are provided same

driver.refresh()

# find source element and pass the source address as keys
source_box = driver.find_element("id", "source")
source_box.send_keys("university health services, amherst, ma")

# find destination element and pass the destination address as keys
destination_box = driver.find_element("id", "destination")
destination_box.send_keys("university health services, amherst, ma")

# find Submit button and click it
submit = driver.find_element("id", "submit button")
submit.click()

try:
    WebDriverWait(driver, 5).until(EC.alert_is_present())
    alert = driver.switch_to.alert
    alert.accept()
    print("Alert exists in page when source and destination are same")
except TimeoutException:
    print("Alert does not exist in page when source and destination are same")

print("----Reached end of testing when source and destination are provided same----")

# Testing ALERT popup when source is spelled incorrectly

driver.refresh()

# find source element and pass the source address as keys
source_box = driver.find_element("id", "source")
source_box.send_keys("univer$sity health services, amherst, ma")

# find destination element and pass the destination address as keys
destination_box = driver.find_element("id", "destination")
destination_box.send_keys("worcester, amherst, ma")

# find Submit button and click it
submit = driver.find_element("id", "submit button")
submit.click()

try:
    WebDriverWait(driver, 5).until(EC.alert_is_present())
    alert = driver.switch_to.alert
    alert.accept()
    print("Alert exists in page when source is spelled incorrectly")
except TimeoutException:
    print("Alert does not exist in page when source is spelled incorrectly")

print("----Reached end of testing when source is spelled incorrectly----")

# Testing ALERT popup when destination is spelled incorrectly

driver.refresh()

# find source element and pass the source address as keys
source_box = driver.find_element("id", "source")
source_box.send_keys("university health services, amherst, ma")

# find destination element and pass the destination address as keys
destination_box = driver.find_element("id", "destination")
destination_box.send_keys("worcest$er, amherst, ma")

# find Submit button and click it
submit = driver.find_element("id", "submit button")
submit.click()

try:
    WebDriverWait(driver, 5).until(EC.alert_is_present())
    alert = driver.switch_to.alert
    alert.accept()
    print("Alert exists in page when destination is spelled incorrectly")
except TimeoutException:
    print("Alert does not exist in page when destination is spelled incorrectly")

print("----Reached end of testing when destination is spelled incorrectly----")