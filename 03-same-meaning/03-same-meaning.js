INPUT : APPA => PANJANG KATA 4 =>
PALINDROM : APPA
OUTPUT : TRUE

INPUT : op 
PALINDROM : po
OUTPUT : FALSE

STORE "input" with any STRING
STORE "palindrom"
FOR "input" FROM "input" index "input" length -1 TO "input"
SET "palindrom" WITH "palindrom" CONCAT WITH "input" index "input"
END FOR

IF "input" is equal "palindrom"
DISPLAY "TRUE"
ELSE
DISPLAY "FALSE"
END IF