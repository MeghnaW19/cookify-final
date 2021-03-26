export class OrderDetails {
  orderId: String;
  address: Address;
  ingredients: Ingredients;
}

export class Address{
    addressName: String;
    name: String;
    location: String;
    city: String;
    state: String;
    pin: number;
    mobileNumber: number;
    coordinate: Coordinates;
  }

  export class Coordinates{
    latitude: number;
    longitude: number;
}

export class Ingredients {
  name: String;
  quantity: number;
  unit: String;
  category: string;
}
