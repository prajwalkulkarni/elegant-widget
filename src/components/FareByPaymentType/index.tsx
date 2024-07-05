import { Bar } from "../Bar";
import { useGetData } from "../../hooks/useGetData";
import "./style.css";
import { useMemo, useState } from "react";
import { Summarycards } from "../Summarycards";
import { getFormattedDate } from "../../utils/getFormattedDate";
import { Filters } from "../Filters";

const colors = [
  "#3F888F",
  "#FFA420",
  "#287233",
  "#4E5452",
  "#642424",
  "#1D1E33",
  "#E1CC4F",
];
const maxHeight = 200;
export const FareByPaymentType = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const [filters, setFilters] = useState({
    startDate: urlParams.get("start_date") ?? "1970-01-01",
    endDate: urlParams.get("end_date") ?? getFormattedDate(new Date()),
  });
  const { loading, data } = useGetData({
    startDate: filters.startDate,
    endDate: filters.endDate,
  });

  const amountByPaymentType = data?.data
    ? data.data.reduce((accumulator: { [key: string]: number }, value) => {
        if (accumulator[value["payment_type"]]) {
          accumulator[value["payment_type"]] =
            accumulator[value["payment_type"]] + value["total_amount"];
        } else {
          accumulator[value["payment_type"]] = value["total_amount"];
        }
        return accumulator;
      }, {})
    : {};

  const maxAmount = useMemo(
    () => Math.max(...Object.values(amountByPaymentType)),
    [amountByPaymentType]
  );

  const totalAmount = Object.values(amountByPaymentType).reduce((acc, val) => {
    acc += val;
    return acc;
  }, 0);

  const totalVendors = useMemo(
    () => new Set(data?.data.map((item) => item.vendorid)).size,
    [data?.data]
  );
  if (loading) {
    return (
      <div className="data_container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="data_container">
      <Summarycards
        totalAmount={totalAmount}
        totalVendors={totalVendors}
        avgAmount={totalAmount / Object.values(amountByPaymentType).length ?? 0}
        totalTransactions={data?.rows ?? 0}
      />

      <div className="cards_container">
        <Filters setFilters={setFilters} />
      </div>

      <div className="cards_container">
        <div className="chart_container">
          {Object.keys(amountByPaymentType).map((payment_type, index) => {
            const barHeight =
              maxHeight * (amountByPaymentType[payment_type] / maxAmount);
            return (
              <Bar
                key={payment_type + index}
                height={barHeight}
                color={colors[index]}
                amount={amountByPaymentType[payment_type]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
