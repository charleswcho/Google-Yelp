# Google Yelp

Google Yelp, inspired by Yelp but powered by Google.

[Live](https://charleswcho.github.io/google-yelp/)

## Features & Implementation

### Search

Users can input a query and a location to search for places.  Very much like Yelp...  The default is 
a search for tacos in San Francisco.

First, the location input is parsed by Google's Geocoder.  After completion the resulting coordinates are used by Google's Places service.  The coordinates are also used to set the new center of the map.

![filters][filters]

[filters]: src/assets/splash.png

### Markers

The results have latitude and longitude which are used to create markers.  A bounce animation is added when you hover over a specific listing so you can see exactly where it is on the map.

## Bugs

Currently there are some queries that trigger Google's image limit resulting in images not loading
properly.

## Future features?

* Detail view
* Place phone number
* Link to website


