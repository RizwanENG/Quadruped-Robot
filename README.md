# Quadruped-Robot
Final Year Project
# Quadruped Robot - 3D CAD Design & Hardware Integration


## Overview
A four-legged mobile robot designed and modeled from scratch using **Autodesk Fusion 360**. The project combines mechanical design with hardware integration, featuring a custom dual-servo turret mechanism for head rotation and a Raspberry Pi-based control system.

**Role:** Mechanical Designer & Hardware Integrator  
**Status:** Fully assembled and operational  
**Completion Date:** 19/5/2026

---

## Technical Specifications

| Parameter | Value |
|-----------|-------|
| **Platform** | Raspberry Pi 4B (4GB RAM) |
| **Actuators** | 10× MG996R servo motors |
| **Leg Mechanism** | Custom dual-servo turret (tilting + rotating head) |
| **Power** | 5V/3A USB adapter |
| **Simulation** | RoboDK motion planning |

---

## Design & Manufacturing

### CAD Modeling (Fusion 360)
- **Full parametric assembly** with 12+ linked parts
- **Servo mounting brackets** designed for MG996R dimensions
- **Custom turret mechanism** with dual servo integration for independent pan/tilt control
- **Iterative design** incorporating hardware constraints (servo torque, reach, balance)
- **Bill of Materials** generated directly from model

**Key Design Features:**
- Lightweight aluminum/3D-printed hybrid structure
- Center of gravity optimized for stable walking
- Servo alignment for synchronized leg movement
- Quick-disconnect joints for assembly/disassembly

### Simulation & Motion Planning
- **RoboDK workspace simulation** to validate leg trajectories and servo angles
- Verified reachability and joint limits before hardware assembly
- Identified collision points and refined bracket geometry

### Hardware Integration
- Servo calibration and testing
- Power distribution circuit for 10 servos + Raspberry Pi
- GPIO pinout documentation for RPI4B control

---

## Skills Demonstrated

✅ **3D Mechanical Design**
- Parametric modeling with constraints
- Assembly management and mate relationships
- Tolerance stack-up analysis for servo clearances

✅ **Motion Simulation**
- Robot kinematics validation (RoboDK)
- Servo trajectory planning and limit checking

✅ **Hardware-Driven Design**
- Design-for-assembly (DFA) principles
- Constraint-driven iterations based on physical components
- Rapid prototyping feedback loop

✅ **Documentation**
- Engineering drawings with dimensions and tolerances
- Assembly instructions with part callouts
- Servo wiring schematic

---

## Project Timeline & Iterations

| Phase | Outcome |
|-------|---------|
| **V1 (Initial Design)** | Single servo per leg – identified balance issues |
| **V2 (Dual Turret)** | Added custom pan/tilt mechanism – improved stability |
| **V3 (Final)** | Optimized bracket geometry, integrated Raspberry Pi mount |

---

## Files in This Repository

```
quadruped-robot/
├── CAD/
│   ├── quadruped-assembly.f3z         (Fusion 360 source file)
│   ├── quadruped-assembly.step        (STEP export for compatibility)
│   ├── leg-assembly.f3z               (subassembly)
│   ├── servo-bracket.f3z              (custom bracket)
│   └── turret-mechanism.f3z           (dual-servo head)
├── Drawings/
│   ├── assembly-drawing.pdf           (engineering drawing with BOM)
│   └── servo-mounting-details.pdf
├── Simulation/
│   ├── robodk-workspace.rdk           (motion planning simulation)
│   └── trajectory-analysis.pdf
├── images/
│   ├── quadruped-assembled.png        (final product)
│   ├── isometric-view.png
│   ├── exploded-view.png
│   ├── turret-mechanism-closeup.png
│   └── robodk-simulation.png
├── Hardware/
│   ├── parts-list.txt                 (servo specs, fasteners, materials)
│   ├── wiring-diagram.png
│   └── assembly-guide.md
└── README.md (this file)
```

### Alternative Viewers
- **GrabCAD** – Upload `.f3z` for cloud viewing
- **Thangs** – For community feedback on design

## Key Learnings

- **Servo torque constraints** require careful CG placement and mechanical advantage calculations
- **Iterative simulation** caught interference issues before physical build
- **Parametric design** made geometry refinement fast when servo brackets needed adjustments
- **Assembly complexity** benefits from subassemblies and clear naming conventions

## Next Steps / Future Improvements

- [ ] Add payload capacity analysis for sensor mounting
- [ ] Implement obstacle avoidance (camera + depth sensor integration)
- [ ] Optimize gait algorithms for terrain adaptation
- [ ] Design protective enclosure for electronics

**Software Used:**
- Autodesk Fusion 360 (CAD modeling)
- RoboDK (motion simulation)
- Raspberry Pi OS (hardware control – Python)


