#1. Blink Led

import RPi.GPIO as GPIO  #import GPIO library
import time              #import time library

GPIO.setmode(GPIO.BOARD) #set mode definition of pins
GPIO.setwarnings(False)  #disable warnings
GPIO.setup(18, GPIO.OUT) #set pin 18 as output

while True:
    GPIO.output(18, 1)   #pin 18 in high level
    time.sleep(1)        #1 sec. delay
    GPIO.output(18, 0)   #pin 18 in low level
    time.sleep(1)        #1 sec. delay
