
// import { test } from "jest-circus";
import { countdown } from "../client/js/app";

test('testing countdown function', () => {
  const date = 1628143200000;
  expect(countdown(date)).toBe(23);
});
