/* eslint-disable import/no-extraneous-dependencies */
import { assert } from 'chai';

const color = require('onecolor');

/* eslint-disable import/prefer-default-export */
export function colorEquals(actual, expected) {
  const actualColor = color(actual);
  const expectedColor = color(expected);
  assert(actualColor.equals(expectedColor),
    'expected #{act} to be the same color as #{exp}',
    'expected #{act} to be a different color than #{exp}',
    actualColor.hex(),
    expectedColor.hex()
  );
}
