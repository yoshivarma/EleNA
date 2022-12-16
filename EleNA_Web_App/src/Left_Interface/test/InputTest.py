import time
from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains

driver = webdriver.Chrome("C:\\Users\\Tejaswini\\Downloads\\chromedriver_win32\\chromedriver.exe")
driver.get("http://localhost:3000/")

driver.implicitly_wait(10) 
driver.maximize_window()

source_box = driver.find_element("id", "source")
source_box.send_keys("worcester commons, Amherst, MA")
destination_box = driver.find_element("id", "destination")
destination_box.send_keys("Boulders, Amherst, MA")
min = driver.find_element("name","min")
min.click()
range = driver.find_element("id", "slider")
actions = ActionChains(driver)
actions.click_and_hold(range).move_by_offset(100, 100)
actions.perform()
submit = driver.find_element("id", "submit button")
submit.click()