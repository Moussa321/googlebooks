class Venue {
  constructor(
    id,
    sportIds,
    title,
    imageUrl,
    rating,
    numberOfRatings,
    address,
    lat,
    lng,
    openingHours = {
      Mon: ["08:00", "01:30"],
      Tue: ["09:00", "17:00"],
      Wed: ["10:00", "1:30"],
      Thu: ["08:00", "16:00"],
      Fri: ["09:00", "17:00"],
      Sat: ["10:00", "01:30"],
      Sun: ["10:00", "01:30"],
    },
    pushToken,
    phoneNumber,
    available = true
  ) {
    this.id = id;
    this.sportIds = sportIds;
    this.title = title;
    this.imageUrl = imageUrl;
    this.rating = rating;
    this.numberOfRatings = numberOfRatings;
    this.address = address;
    this.lat = lat;
    this.lng = lng;
    this.openingHours = openingHours;
    this.pushToken = pushToken;
    this.phoneNumber = phoneNumber;
    this.available = available;
  }
}

export default Venue;
