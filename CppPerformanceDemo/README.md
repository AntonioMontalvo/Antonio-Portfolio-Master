# C++ Performance Benchmark

Runs recursive Fibonacci calculation (N=45) to benchmark C++ performance. Used as comparison baseline against the identical Node.js implementation to understand performance trade-offs between compiled and interpreted languages.

## Screenshots

### C++ Source Code
![C++ Source](screenshots/cpp-perf-01-source-code.png)
Recursive Fibonacci implementation in C++ with high-resolution timing.

### Execution Output
![Execution Output](screenshots/cpp-perf-02-output.png)
C++ completes Fibonacci(40) in **~311 milliseconds** on this machine.

## 🛠️ Tech Stack

- **C++** with STL (Standard Library)
- **chrono** library for high-resolution timing
- Native compilation with g++

## 🎯 Purpose

This demo establishes a performance baseline for comparison with the [Node.js Async Demo](../NodeJsFlexibilityDemo). The same recursive Fibonacci algorithm runs ~100x faster in compiled C++ than interpreted JavaScript.

## ⚡ Performance Results

**C++ (Compiled):**
- Fibonacci(40): ~311ms
- Direct machine code execution
- No runtime interpretation overhead

**Node.js (Interpreted):**
- Fibonacci(40): ~30,000ms+ (100x slower)
- V8 JIT compilation helps, but still interpreted
- Runtime type checking and garbage collection overhead

## 🔧 Technical Details

### Why Recursive Fibonacci?
Intentionally inefficient algorithm (exponential time complexity) amplifies performance differences. A memoized or iterative version would be faster, but wouldn't clearly demonstrate the compiled vs interpreted gap.

### Why This Matters for Robotics
Control loops in robotics run at 20-50ms intervals. When you need to process sensor data, calculate PID outputs, and command motors within that window, C++'s performance advantage matters. See [C++ Robotics Core](../CppRoboticsCore) for real-world control system implementation.

### Compilation
```bash
# Compile with optimization
g++ -O2 -o fibonacci_calc fibonacci_calc.cpp

# Run
./fibonacci_calc
```

## 🔗 Related Projects

- **[C++ Robotics Core](../CppRoboticsCore)** - Why performance matters in real-time control systems
- **[Node.js Async Demo](../NodeJsFlexibilityDemo)** - When JavaScript's flexibility outweighs performance concerns

## 💡 When to Choose C++ vs JavaScript

**Choose C++:**
- Real-time systems with strict timing requirements
- CPU-intensive calculations (physics, graphics, signal processing)
- Embedded systems with limited resources

**Choose JavaScript/Node.js:**
- I/O-bound operations (web servers, APIs, databases)
- Rapid prototyping and iteration
- Concurrent async operations (Node.js excels here)

## 👤 Author

**Antonio Montalvo**
- GitHub: [@AntonioMontalvo](https://github.com/AntonioMontalvo)
- Portfolio: [antonio-portfolio-master.vercel.app](https://antonio-portfolio-master.vercel.app/)

## 📄 License

MIT License
