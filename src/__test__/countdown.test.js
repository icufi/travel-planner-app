/* eslint-disable no-undef */
import { countdown } from '../client/js/countdown';

// test countdownt to trip function
describe('checks how many days before trip', () => {
  test('converts to days', () => {
    const input = new Date();
    const output = 1;
    expect(countdown(input)).toBe(output);
  });
});
