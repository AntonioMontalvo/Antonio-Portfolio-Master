# Makefile for C++ Fibonacci Calculator

CXX = clang++
CXXFLAGS = -std=c++17 -O2 -isysroot /Library/Developer/CommandLineTools/SDKs/MacOSX.sdk
INCLUDES = -I/Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/usr/include/c++/v1
TARGET = fibonacci_calc
SOURCE = fibonacci_calc.cpp

all: $(TARGET)

$(TARGET): $(SOURCE)
	$(CXX) $(CXXFLAGS) $(INCLUDES) $(SOURCE) -o $(TARGET)

run: $(TARGET)
	./$(TARGET)

clean:
	rm -f $(TARGET)

.PHONY: all run clean
