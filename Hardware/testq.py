import random

from iot import WaterIot
#
#
water = WaterIot()
water.run_water_test(7 , 3)
print(water.get_data())
print (water.check_sensor_status())

