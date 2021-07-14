/* eslint-disable no-undef */
import { countdown } from '../client/js/countdown';

// test countdownt to trip function
describe('checks how many days before trip', () => {
  test('converts to days', () => {
    const input = 1628143200000;
    const output = 23;
    expect(countdown(input)).toBe(output);
  });
});
