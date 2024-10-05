import useSWR from "swr";
import { flightdata, flightDetails } from "../lib/constants";
import { FlightData, FlightDetails } from '../types'; // Adjust path as necessary

// Define the fetcher for FlightData
const fetchFlightData = (): FlightData => {
  return flightdata as FlightData; // Cast to FlightData
};

// Define the fetcher for FlightDetails
const fetchFlightDetails = (): FlightDetails => {
  return flightDetails as FlightDetails; // Cast to FlightDetails
};

export const useFlightData = () => {
  // Fetching airport data
  const { data: airportData, error: airportsError } = useSWR<FlightData>("flightdata", fetchFlightData);
  
  // Fetching flight details
  const { data: flightData, error: flightsError } = useSWR<FlightDetails>("flightDetails", fetchFlightDetails);

  return {
    airports: airportData?.airports || [], // Default to empty array
    flights: flightData?.flights || [], // Default to empty array
    isLoading: !airportData && !flightData,
    hasError: airportsError || flightsError,
  };
};
