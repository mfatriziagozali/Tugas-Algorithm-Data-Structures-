STAR
STORE N as integer with any value 
STORE type as string with any value
STORE result as integer
IF (type equal fahrenheit)
   calculate (N - 32) * (5/9)
   SET result with calculation result
Else IF (type equal kelvin)
   calculate (N - 273.15)
   SET result with calculation result
Else IF (type equal celcius)
   calculate (N)
   SET result with calculation result
End IF
DISPLAY result