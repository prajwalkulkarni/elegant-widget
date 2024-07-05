import { useEffect, useState } from "react";
const DATA_ENDPOINT = `https://api.tinybird.co/v0/pipes/yellow_tripdata_2017_pipe.json?token=p.eyJ1IjogIjdmOTIwMmMzLWM1ZjctNDU4Ni1hZDUxLTdmYzUzNTRlMTk5YSIsICJpZCI6ICJmZTRkNWFiZS05ZWIyLTRjMjYtYWZiZi0yYTdlMWJlNDQzOWEifQ.P67MfoqTixyasaMGH5RIjCrGc0bUKvBoKMwYjfqQN8c`;

export interface Response {
  meta: Array<{ name: string; type: string }>;
  data: Data[];
  rows: number;
  rows_before_limit_at_least: number;
  statistics: {
    elapsed: number;
    rows_read: number;
    bytes_read: number;
  };
}
interface Data {
  vendorid: number;
  tpep_pickup_datetime: string;
  tpep_dropoff_datetime: string;
  passenger_count: number;
  trip_distance: number;
  ratecodeid: number;
  store_and_fwd_flag: string;
  pulocationid: number;
  dolocationid: number;
  payment_type: number;
  fare_amount: string;
  extra: number;
  mta_tax: number;
  tip_amount: number;
  tolls_amount: number;
  improvement_surcharge: number;
  total_amount: number;
}

export const useGetData = ({
  startDate,
  endDate,
}: {
  startDate: string;
  endDate: string;
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<Response>();

  useEffect(() => {
    const abortController = new AbortController();
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(
          `${DATA_ENDPOINT}&q=SELECT * FROM yellow_tripdata_2017_pipe WHERE tpep_pickup_datetime >= '${startDate}' AND tpep_dropoff_datetime <= '${endDate}' LIMIT 200`,
          {
            signal: abortController.signal,
          }
        );

        if (!response.ok) {
          setLoading(false);
          throw new Error("Net request failed");
        }
        const formattedResponse = await response.json();
        setData(formattedResponse);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError("Could not fetch response");
      }
    }
    fetchData();

    return () => {
      abortController.abort();
    };
  }, [startDate, endDate]);

  return {
    data,
    loading,
    error,
  };
};
