# shortest-distance
Calculates the shortest distance from a starting point to multiple destinations.

### Installation
```
npm install shortest-distance
```

### Usage
```
const shortestDistance = require('shortest-distance');

const startingPoint = {
  latitude: 37.77,
  longitude: -122.41 
};

const options = [
  {
    latitude: 37.77, 
    longitude: -122.43 
  },
  {
    latitude: 37.79,
    longitude: -122.40
  }
];

const shortest = shortestDistance(startingPoint, options);

console.log(shortest.index); // Index of closest option
console.log(shortest.distance); // Distance to closest option in miles
```

### How it works
This package uses the Haversine formula to calculate the great-circle distance between two points on a sphere. It iterates over the provided options array and keeps track of the option with the shortest distance from the starting point.

### License
MIT License

Copyright (c) [year] [your name]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
