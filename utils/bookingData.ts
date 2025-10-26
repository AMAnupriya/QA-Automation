interface Destination {
  destinationPartial: string;
  destinationCity: string;
}

export interface BookingData {
  depatureCity: string;
  destination: Destination;
  month: string;
  date: string;
  duration: string;
  rooms: string;
  adult: number;
  children: number;
  childAge: string[];
}