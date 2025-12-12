// CppRoboticsCore/PID_Controller_Design.hpp
//
// Demonstrates: Object-Oriented Design (OOP) and Digital Control Theory.
// Represents a C++ implementation of a Proportional-Integral-Derivative (PID) Controller.

#pragma once

#include <iostream>
#include <cmath>
#include <string>

// Include necessary VEX or standard utilities
// Note: We include basic types here, but the actual VEX-specific functions are commented out.
// using namespace vex; 
// using namespace std; 

class PID {
private:
    /* Controller gains for orientation and distance */
    double Kp_O, Ki_O, Kd_O; // Gains for Orientation (Heading)
    double Kp_D, Ki_D, Kd_D; // Gains for Distance (Position)

    /* Controller memory for persistent variables */
    double integrator;
    double differentiator;
    double error;
    double prevError; 
    
    /* Control limits and time slicing */
    double tau = 0.02;     // Derivative low-pass filter time constant (for noise reduction)
    double limMin;         // Minimum output limit (saturation)
    double limMax;         // Maximum output limit (saturation)
    double T = 0.02;       // Sample time in seconds (e.g., 20ms update rate)
    
    double output;
    
    // Internal helper methods for the three control terms
    double proportionalTerm(double setpoint, double measurement, double gain);
    double integralTerm(double setpoint, double measurement, double gain);
    double derivativeTerm(double setpoint, double measurement, double gain);


public:
    std::string PIDIntro;

    // Constructor Declaration
    PID(std::string intro, double kpO, double kiO, double kdO, double kpD, double kiD, double kdD,
        double t_tau, double min, double max, double t_sample);

    // Public methods - implementation below
    void initializeController();
    double getOutput(double measurement, double accumulatedDistance, double setpoint, double gainP, double gainI, double gainD);
};

// --- PID Implementation (.cpp content merged here for simplicity) ---

// Constructor Definition
PID::PID(std::string intro, double kpO, double kiO, double kdO, double kpD, double kiD, double kdD,
         double t_tau, double min, double max, double t_sample) 
{
    this->PIDIntro = intro;
    this->Kp_O = kpO; this->Ki_O = kiO; this->Kd_O = kdO;
    this->Kp_D = kpD; this->Ki_D = kiD; this->Kd_D = kdD;
    this->tau = t_tau;
    this->limMin = min; this->limMax = max;
    this->T = t_sample;

    // Initialize state variables
    initializeController();
}

void PID::initializeController() {
  /* Clears all controller variables, setting them to zero */
  integrator = 0.0;
  differentiator = 0.0;
  error = 0.0;
  prevError = 0.0;
  output = 0.0;
  // cout << "PID initialized. \n";
}

double PID::proportionalTerm(double setpoint, double measurement, double gain) {
    error = setpoint - measurement;
    return gain * error;
}

double PID::integralTerm(double setpoint, double measurement, double gain) {
    // Accumulate error over time, scaled by the sample time T
    integrator += (setpoint - measurement) * T;
    
    // Simple anti-windup could be implemented here to limit integrator
    // if (integrator > PID_LIM_MAX_INT) integrator = PID_LIM_MAX_INT;

    return gain * integrator;
}

double PID::derivativeTerm(double setpoint, double measurement, double gain) {
    // Simple derivative calculation (rate of change of error)
    double derivativeError = setpoint - measurement;
    
    // Differentiation: (Current Error - Previous Error) / T
    // This calculation is sensitive to noise, hence the 'tau' LPF in advanced PID
    differentiator = (derivativeError - prevError) / T;
    prevError = derivativeError; // Update previous error for the next cycle
    
    return gain * differentiator;
}


double PID::getOutput(double measurement, double accumulatedDistance, double setpoint, double gainP, double gainI, double gainD) {
  
  // Calculate current total position
  double currentPos = measurement + accumulatedDistance;
  
  // Sum the three control terms
  this->output = proportionalTerm(setpoint, currentPos, gainP) + 
                 integralTerm(setpoint, currentPos, gainI) + 
                 derivativeTerm(setpoint, currentPos, gainD);
  
  // Output Saturation (Anti-windup on the output)
  if (this->output > this->limMax) {
    this->output = this->limMax;
  } else if (this->output < this->limMin) {
    this->output = this->limMin;
  }

  // Typically, a control loop sleeps here to maintain the fixed sample time T
  // vex::task::sleep(T * 1000); 

  return this->output;
}