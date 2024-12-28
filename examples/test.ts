// test.ts
import { add } from '../lib';

// Basic usage
console.log(add(5, 3));  // Output: 8

// Array of test cases
const testCases = [
    [1, 2],
    [10, -5],
    [3.14, 2.86],
    [0, 0]
];

// Run tests
testCases.forEach(([a, b]) => {
    console.log(`${a} + ${b} = ${add(a, b)}`);
});