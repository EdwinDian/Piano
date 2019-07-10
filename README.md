# Requirements
Complete assignment in 2 different programming languages of your choice.  
Provide a github link to 2 project upon completion

# Assignment
The client has provided 2 csv files with user data that they would like to import to the system:
### File A:
user_id,email  
oi6IhEzu9R,user_2@example.com\
fQFLNRDae8,user_5@example.com\
fBYRtPtAlC,user_7@example.com\
fOSjdLnNP3,user_9@example.com\
uxz2jFwr5I,user_1@example.com\
zSbmdNiSHH,user_4@example.com\
fjM66woroy,user_0@example.com\
oh4mHXh8zN,user_3@example.com\
gXWj37JC5d,user_8@example.com\
4dBdXURAz3,user_6@example.com

### File B:
user_id,first_name,last_name\
oh4mHXh8zN,Julie,Mosser\
zSbmdNiSHH,Taryn,Jaycox\
fBYRtPtAlC,John,Smith\
fjM66woroy,Yadira,Irving\
fQFLNRDae8,Vella,Lynam\
fOSjdLnNP3,Qiana,Walk\
uxz2jFwr5I,Benito,Festa\
oi6IhEzu9R,Leatrice,Oquinn\
4dBdXURAz3,Jacques,Cuellar\
gXWj37JC5d,Shaun,Kreiger

However some user IDs are incorrect, because these users already exist in the system under different user_id value. Generate a merged file in the format:  
user_id,email,first_name,last_name  
But make sure that for the incorrect records, user_id is taken from the system, rather than from the list provided from the client.

## Materials
API documentation - https://docs.piano.io/api  
Domain for API requests - sandbox.tinypass.com  
AID (Application ID) - o1sRRZSLlw  
API Token - zziNT81wShznajW2BD5eLA4VCkmNJ88Guye7Sw4D

# Conclusion
I've used JS and jQuery to allow the user to validate a merged version of the
clients data, in the column order defined in the exercise.  The page
will then list the rows that were changed (based on email address as the
reference point) as well as auto download an updated version of the CSV,
with the IDs from the Piano DB.

### Further enhancements/obsticles:
-  Due to CORS restrictions, I didnt set up the API query (although you
can see the call commented out in the JS code).  Instead I exported the
JSON and saved it locally (currently in site files).
-  To accept the client CSV in any given column order and identify the
email address column.
-  To further enhance the UI.
-  Additional testing across various browsers and responsiveness to various resolutions and devices.

