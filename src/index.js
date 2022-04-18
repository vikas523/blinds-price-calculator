// import "./styles.css";
let width,
  height,
  color = "green",
  blindPart="bamboo",
  mountType="outside",
  cordType="cordless lift",
  cassetteType="A-type pink"
const colorLookup = {
  "SilverWhite": 3,
  "Ivory": 9,
  "Cream": 2,
  "Beige": 5,
  "Brown": 6,
  "moka": 7,
  "silver-gray": 8,
  "ocean-gray": 9,
  "navy": 10,
  "pink": 11,
  "purple": 12,
  "dark-brown": 13,
  "mint": 14,
  "blue": 16,
  "chocolate": 17,
  "green": 18,
  "warm-gray": 19,
  "cool-gray": 20,
  "maple": 21
};

// create width and height where customer choose their curtain according his/her demand
const widthLookup = [
  {
    start: 0,
    end: 10,
    price: 10
  },
  {
    start: 11,
    end: 20,
    price: 15
  },
  {
    start: 21,
    end: 30,
    price: 16
  }
];

const heightLookup = [
  {
    start: 0,
    end: 10,
    price: 12
  },
  {
    start: 11,
    end: 20,
    price: 15
  },
  {
    start: 21,
    end: 30,
    price: 17
  }
];

const blindPartsLookup={
    "wood":20,
    "bamboo":40,
    "aluminum":50,
    "metal":70
}

const  mountTypeLookup ={
  "inside":2,
  "outside":3
}

const cordTypeLookup ={
  "cordless lift":2,
  "continous crystal loop position Left":3,
  "continous crystal loop position right":4,
}

const cassetteTypeLookup ={
  "none":1,
  "A-type pink":2,
  "A-type red":3
}

document.getElementById("width").addEventListener("keyup", (e) => {
  width = parseInt(e.target.value, 10);
});

document.getElementById("height").addEventListener("keyup", (e) => {
  height = parseInt(e.target.value, 10);
});

document.getElementById("color").addEventListener("change", (e) => {
  color = e.target.value;
});

document.getElementById("blindPart").addEventListener("change", (e) => {
    blindPart = e.target.value;
});

document.getElementById("mountType").addEventListener("change", (e) => {
  mountType = e.target.value;
});

document.getElementById("cordType").addEventListener("change", (e) => {
  cordType = e.target.value;
});

document.getElementById("cassetteType").addEventListener("change", (e) => {
  cassetteType = e.target.value;
});

function calculatePrice(color, width, height,blindPart,mountType,cordType,cassetteType) {
  const cPrice = colorLookup[color];
  const bprice = blindPartsLookup[blindPart]
  const mountPrice = mountTypeLookup[mountType]
  const cordPrice=cordTypeLookup[cordType]
  const cassetPrice=cassetteTypeLookup[cassetteType]

  const wPrice = widthLookup.reduce(
    (acc, w) => {
      if (width >= w.start && width <= w.end) acc = w.price;
      return acc;
    },
    [0]
  );
  const hPrice = heightLookup.reduce(
    (acc, h) => {
      if (height >= h.start && height <= h.end) acc = h.price;
      return acc;
    },
    [0]
  );
  return cPrice * wPrice * hPrice * bprice * mountPrice * cordPrice* cassetPrice;
}

document.getElementById("submitBtn").addEventListener("click", (e) => {
  console.log("asldfjkas", width, height, color,blindPart,mountType,cordType,cassetteType);
  let total = 0;
  total = calculatePrice(color, width, height,blindPart,mountType,cordType,cassetteType);

  document.getElementById("total").value = total;
});
