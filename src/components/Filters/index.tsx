import { useRef } from "react";
import { getFormattedDate } from "../../utils/getFormattedDate";
import "./style.css";

const urlParams = new URLSearchParams(window.location.search);
export const Filters = ({ setFilters }: { setFilters: Function }) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const formSubmitHandler = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(formRef.current as HTMLFormElement);
    const startDate = data.get("start_date");
    const endDate = data.get("end_date");
    setFilters((prev: { startDate: string; endDate: string }) => ({
      ...prev,
      startDate,
      endDate,
    }));
    urlParams.set("start_date", startDate!.toString());
    urlParams.set("end_date", endDate!.toString());
    history.pushState(
      {},
      "",
      window.location.origin + `?start_date=${startDate}&end_date=${endDate}`
    );
  };
  return (
    <form onSubmit={formSubmitHandler} ref={formRef} className="filter_form">
      <label htmlFor="start_date">Start Date</label>
      <input
        type="date"
        id="start_date"
        defaultValue={urlParams.get("start_date") ?? "1970-01-01"}
        name="start_date"
      />
      <label htmlFor="end_date">End Date</label>
      <input
        type="date"
        id="end_date"
        defaultValue={urlParams.get("end_date") ?? getFormattedDate(new Date())}
        name="end_date"
        min={urlParams.get("start_date") ?? "1970-01-01"}
      />
      <button type="submit" className="apply_filters">
        Apply Filter
      </button>
    </form>
  );
};
