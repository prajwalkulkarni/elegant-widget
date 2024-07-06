import { describe, expect, test } from "vitest";
import { getFormattedDate } from "./getFormattedDate";

describe("Test getFormattedDate utility", () => {
  test("Throw error if argument is not instanceof Date", () => {
    const arg = "abc" as any;

    expect(() => getFormattedDate(arg)).toThrowError();
  });
  test("Return date in YYYY-MM-DD format", () => {
    const currentDate = new Date();
    const result = getFormattedDate(currentDate);

    const currentDateInStringFormat =
      currentDate.getFullYear() +
      "-" +
      (currentDate.getMonth() + 1).toString().padStart(2, "0") +
      "-" +
      currentDate.getDate().toString().padStart(2, "0");
    expect(result).toBe(currentDateInStringFormat);
  });
});
