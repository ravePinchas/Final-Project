
export const staysList =
[ 
    {
    _id: "s101",
    name: "Ribeira Charming Duplex",
    type: "House",
    imgUrl: "/images/stay01.webp",
    price: 80.00,
    summary: "Fantastic duplex apartment...",
    capacity: 8,
    amenities: [
      "TV",
      "Wifi",
      "Kitchen",
      "Smoking allowed",
      "Pets allowed",
      "Cooking basics"
    ],
    labels: [
      "Top of the world",
      "Trending",
      "Play",
      "Tropical"
    ],
    host: {
      _id: "u101",
      fullname: "Davit Pok",
      imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
    },
    loc: {
      country: "Portugal",
      countryCode: "PT",
      city: "Lisbon",
      address: "17 Kombo st",
      lat: -8.61308,
      lng: 41.1413
    },
    reviews: [
      {
        id: "madeId",
        txt: "Very helpful hosts. Cooked traditional...",
        rate: 4,
        by: {
          _id: "u102",
          fullname: "user2",
          imgUrl: "/img/img2.jpg"
        }
      }
    ],
    likedByUsers: ['mini-user']
  },
  //////////////////////////////////////////
  {
    _id: "s102",
    name: "Byindir, Turkey",
    type: "Villa",
    imgUrl: "/images/stay02.webp",
    price: 3691,
    summary: "Wonderful villa surrounded by sea on three sides",
    capacity: 8,
    amenities: [
      "TV",
      "Wifi",
      "Kitchen",
      "Smoking allowed",
      "Pets allowed",
      "Cooking basics"
    ],
    labels: [
      "Top of the world",
      "Trending",
      "Play",
      "Tropical"
    ],
    host: {
      _id: "u101",
      fullname: "Mehmet Muhammet",
      imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
    },
    loc: {
      country: "Portugal",
      countryCode: "PT",
      city: "Lisbon",
      address: "17 Kombo st",
      lat: -8.61308,
      lng: 41.1413
    },
    reviews: [
      {
        id: "madeId",
        txt: "Very helpful hosts. Cooked traditional...",
        rate: 4,
        by: {
          _id: "u102",
          fullname: "user2",
          imgUrl: "/img/img2.jpg"
        }
      }
    ],
    likedByUsers: ['mini-user']
  }
]