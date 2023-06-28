module.exports = {
  shortestDistance: (_startingPoint, _options) => {
    let R = 3958.8; // Radius of earth calculated in miles

    let shortest = {
      index: 0,
      distance: Number.MAX_VALUE,
    };

    const lat1 = _startingPoint.latitude;
    const lon1 = _startingPoint.longitude;

    _options.forEach((option, i) => {
      const lat2 = option.latitude;
      const lon2 = option.longitude;
      let dLat = ((lat2 - lat1) * Math.PI) / 180;
      let dLon = ((lon2 - lon1) * Math.PI) / 180;

      let a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos((lat1 * Math.PI) / 180) *
          Math.cos((lat2 * Math.PI) / 180) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      let d = R * c; // Distance in miles

      if (d < shortest.distance) {
        shortest.index = i;
        shortest.distance = d;
      }
    });

    return shortest;
  },
};
