// fibonacci_calc.ts
// run with: npx tsx fibonacci_calc.ts
// The function is identical in logic to the C++ version
function fibonacci(n: number): number {
  if (n <= 1) {
    return n;
  }
  // NOTE: TypeScript/JavaScript uses standard numbers (doubles),
  // which might handle larger numbers differently than C++'s long long,
  // but the core computational load remains the same for comparison.
  return fibonacci(n - 1) + fibonacci(n - 2);
}
// Define the input value (must be the SAME as the C++ demo for fairness)
const N = 40;
function runCalculation() {
  console.log("--- Node.js Performance Demonstration ---");
  console.log(`Calculating the ${N}th Fibonacci number recursively...`);
  // Start timer
  const start = performance.now();
  // Perform the calculation
  const result = fibonacci(N);
  // Stop timer and calculate duration
  const end = performance.now();
  const duration = end - start;
  console.log(`Result (Fib(${N})): ${result}`);
  console.log(`Execution Time: ${duration.toFixed(2)} milliseconds`);
  console.log("-----------------------------------------");
  console.log(
    `\n(This timing will be significantly slower than the C++ version, which is the point of the demo.)`,
  );
}

runCalculation();
