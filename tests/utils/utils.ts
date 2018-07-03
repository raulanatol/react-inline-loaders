import * as color from 'onecolor';

export function colorEquals(actual, expected) {
  const actualColor = color(actual);
  const expectedColor = color(expected);
  if (!actualColor.equals(expectedColor)) {
    console.log(`expected ${actualColor.hex()} to be the same color as ${expectedColor.hex()}`);
    return false;
  }
  return true;
}
