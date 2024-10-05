// types.ts

export interface Airport {
  name: string;
  code: string;
  city: string;
  country: string;
}

export interface Flight {
  arrival_airline: string;
  arrival_flight_number: string;
  arrival_flight_arrival_time: string;
  arrival_flight_departure_time: string;
  arrival_flight_arrival_duration: string;
  // Add other necessary properties
}

export interface FlightData {
  airports: Airport[];
}

export interface FlightDetails {
  flights: Flight[];
}
