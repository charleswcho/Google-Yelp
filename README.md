# Google Yelp

Google Yelp, inspired by Yelp but powered by Google.

[Google-Yelp Live](https://charleswcho.github.io/google-yelp/)

## Features & Implementation

### Search

Users have the option of inputing a query and a location to search for places.  Very much like Yelp...  The default is a search in San Francisco for restaurants.  

First, the location input is parsed by Google's Geocoder.  After completion the resulting coordinates are sent to the `ResultStore` which triggers a listener in the `Results` component.  The Results component re-renders and sends down the coordinates and the query to the `Map` component which then starts a `google.maps.places.PlacesService` text search.

![filters][filters]

[filters]: src/assets/splash.png


### Index

With the resulting data from the text search, various data points were parsed out to be displayed.  The items were given a numerical order by using the current index plus 1 which looping through them.  

The cost was a numerical value so to represent it like Yelp I looped cost times adding $'s every loop.

### Markers

When the results are returned the `Map` also gets passed them as a prop.  The results have a latitude and longitude which I used to create markers.  I also labeled the markers with their index plus 1.  One issue is that I had to limit the results to 10 due to the fact that default google markers don't support double digit numbers (11, 12, 13 all all just become a 1).

## Bugs

Currently there are many more google places api calls than necessary with 8 or 9 repeat calls for every 1 needed.

## Future features

### Marker Animations

When you hover over a specific item on the index you should be able to see exactly where it is on the map.  A bounce animation could be added to the markers to add more clarity.
