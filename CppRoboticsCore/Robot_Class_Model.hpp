// CppRoboticsCore/Robot_Class_Model.hpp
//
// Demonstrates: Object-Oriented Design (OOP) and Abstraction.
// Represents a high-level model of the robot system.

#pragma once

#include <iostream>
#include <string>

class Robot
{
private:
    // Attributes are private for strict encapsulation
    int numOfMotors;
    int year;
    std::string competition;
    std::string name;
    std::string teamNumber;

public:
    // Enumeration for sensor types is public and clear
    enum sensor {inertial, GPS, vision, optical, distance};

    // Constructor
    Robot(std::string name, std::string competition, int year, std::string teamNumber, int numMotors);

    // Public Getter Methods (Read-only access to private attributes)
    std::string getName() const { return name; }
    std::string getTeamNumber() const { return teamNumber; }
    int getNumOfMotors() const { return numOfMotors; }

    // High-level behavioral methods (implementation would be in a separate .cpp file)
    void moveForward(int velocity, int torque);
    void moveBackward(int velocity, int torque);
    void turnLeft(int velocity, int torque);
    void turnRight(int velocity, int torque);
    void scoreCup(int velocity, int torque, int numOfCups);
    void scoreRamp(int velocity, int torque);
    void scoreStack(int velocity, int torque, int stackHeight);
};

// Constructor Definition
Robot::Robot(std::string name, std::string competition, int year, std::string teamNumber, int numMotors) {
   this->name = name;
   this->competition = competition;
   this->year = year;
   this->teamNumber = teamNumber;
   this->numOfMotors = numMotors;

   // Console output for confirmation
   std::cout << "Robot object created: " << name << ", Team " << teamNumber << "\n";
}