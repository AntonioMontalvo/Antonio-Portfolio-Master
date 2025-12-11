// fibonacci_calc.cpp
// To compile, run one of the following commands in your terminal:
// run with: make run
#include <iostream>
#include <chrono>

// Function to calculate the Nth Fibonacci number recursively
// This function is intentionally inefficient for demonstration purposes,
// as it recalculates the same values many times.
long long fibonacci(int n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    // Define the input value for the calculation (adjust as needed for performance)
    const int N = 40; 

    std::cout << "--- C++ Performance Demonstration ---" << std::endl;
    std::cout << "Calculating the " << N << "th Fibonacci number recursively..." << std::endl;

    // Start high-resolution timer
    auto start = std::chrono::high_resolution_clock::now();

    // Perform the calculation
    long long result = fibonacci(N);

    // Stop timer
    auto stop = std::chrono::high_resolution_clock::now();

    // Calculate the duration
    auto duration = std::chrono::duration_cast<std::chrono::milliseconds>(stop - start);

    std::cout << "Result (Fib(" << N << ")): " << result << std::endl;
    std::cout << "Execution Time: " << duration.count() << " milliseconds" << std::endl;
    std::cout << "-----------------------------------" << std::endl;

    return 0;
}