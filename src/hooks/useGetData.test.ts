import { useGetData } from "./useGetData";
import { renderHook, waitFor } from "@testing-library/react";
import { expect, test } from "vitest";
import { getFormattedDate } from "../utils/getFormattedDate";

test("useGetData", async () => {
  const { result } = renderHook(() =>
    useGetData({
      startDate: "1970-01-01",
      endDate: getFormattedDate(new Date()),
    })
  );

  expect(result.current.loading).toBe(true);
  expect(result.current.error).toBe("");

  await waitFor(() => {
    // waiting to get resolve the current promise
    expect(result.current.data?.data.length).toEqual(200); // expect to return 200 rows of data
  });
});
