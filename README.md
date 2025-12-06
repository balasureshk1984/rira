# 🤖 Arduino Robotics Academy

A comprehensive, beginner-friendly electronics and robotics curriculum for students in grades 6-10. This interactive web application provides a complete learning path from basic electronics to advanced Arduino programming and robotics control.

## 📚 Overview

**Arduino Robotics Academy** is a complete educational platform designed to teach students:
- ✅ Electronics fundamentals (voltage, current, resistance)
- ✅ Arduino microcontroller programming
- ✅ Circuit design and breadboarding
- ✅ Sensor integration and data reading
- ✅ Motor control and robotics
- ✅ Wireless communication (Bluetooth)
- ✅ Advanced topics (PID control, data logging)

## 🎯 Curriculum Structure

### 🟢 **Beginner Level (60 hours)**
1. **Electronics Basics & Safety** - Understanding electricity and components
2. **Meet Arduino** - Introduction to microcontrollers
3. **LED Control** - Digital outputs and patterns
4. **Buttons & Switches** - Reading user input
5. **Sensors** - Measuring light, temperature, distance
6. **PWM & Brightness** - Controlling intensity and speed

### 🟡 **Intermediate Level (70 hours)**
7. **Serial Communication** - Talking to your Arduino
8. **Motor Control** - Making things move
9. **Advanced Sensors** - Obstacle and line detection
10. **I2C Protocol** - Connecting displays and modules

### 🔴 **Advanced Level (75 hours)**
11. **Bluetooth Control** - Remote robot control via smartphone
12. **Smart Motor Control** - Complex movements and path planning
13. **Data Logging** - Saving data to SD cards
14. **Feedback Control** - Self-correcting intelligent systems
15. **Final Project** - Design and build your own robot!

**Total: 205 hours of comprehensive training**

## 🚀 Features

- **15 Complete Lessons** - Each with objectives, materials, step-by-step instructions, and code examples
- **Serial Numbers for All Concepts** - Easy reference and organization
- **Hour Tracking** - Know exactly how much time each module takes
- **Grade 6-10 Appropriate** - Written for absolute beginners with zero prior knowledge
- **Interactive UI** - Search, filter, and browse modules easily
- **Dark Theme** - Easy on the eyes for long study sessions
- **Material UI Components** - Professional, responsive design

## 💻 Technology Stack

- **Frontend:** React 18.2.0 with Vite 5.0.0
- **UI Library:** Material-UI 5.14.11
- **Styling:** Material-UI theming with custom gradients
- **Routing:** React Router v6
- **Data Format:** JSON-based modular curriculum

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)

### Clone Repository
```bash
git clone https://github.com/balasureshk1984/rira.git
cd rira
```

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

The application will start at `http://localhost:5173/`

### Build for Production
```bash
npm run build
npm run preview
```

## 📂 Project Structure

```
rira/
├── src/
│   ├── App.jsx                 # Main app component
│   ├── main.jsx               # Entry point
│   ├── pages/
│   │   ├── Tutorial.jsx       # 15 complete lessons
│   │   └── Home.jsx           # Home page
│   ├── components/
│   │   └── SyllabusList.jsx  # Module display component
│   ├── data/
│   │   └── syllabus.json     # Complete curriculum data (15 modules)
│   └── index.css             # Global styles
├── public/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 📖 How to Use

### For Students
1. **Start with Beginner Level** - No experience needed!
2. **Follow modules sequentially** - Each builds on the previous
3. **Complete all lessons** - Work through code examples and challenges
4. **Build projects** - Apply what you learn in real projects
5. **Share your work** - Document and present your creations

### For Teachers
1. **Use as curriculum** - Complete lesson plans provided
2. **Assign modules** - Clear objectives and outcomes
3. **Track progress** - 15 modules with hour estimates
4. **Reference materials** - Links to external resources included
5. **Customize** - Fork and modify for your class

## 🔗 Resources Included

Each module includes links to:
- Arduino official documentation
- SparkFun tutorials
- MIT App Inventor (for custom apps)
- Component sourcing guides
- Community examples

## 🎓 Learning Outcomes

After completing this curriculum, students will be able to:
- ✅ Understand basic electronics and circuit theory
- ✅ Program Arduino microcontrollers
- ✅ Design and build working circuits
- ✅ Read and use various sensors
- ✅ Control motors and actuators
- ✅ Implement wireless communication
- ✅ Debug and troubleshoot problems
- ✅ Design and build complete robotic systems
- ✅ Document technical projects professionally

## 🛠️ Troubleshooting

### Common Issues

**Dev server won't start?**
```bash
# Clear cache and reinstall
rm -r node_modules package-lock.json
npm install
npm run dev
```

**Port 5173 already in use?**
```bash
npm run dev -- --port 3000
```

**Module import errors?**
- Clear browser cache
- Hard refresh (Ctrl+Shift+R)
- Rebuild: `npm run build`

## 📝 Curriculum Features

Each lesson includes:
- **Learning Objectives** - Clear, numbered goals (1. 2. 3. etc.)
- **Materials List** - Complete component list with serial numbers
- **Step-by-Step Instructions** - Easy to follow with examples
- **Code Examples** - Real, tested Arduino code snippets
- **Challenges** - Extensions to deepen learning
- **Troubleshooting** - Common problems and solutions
- **Resources** - Links to external learning materials

## 🤝 Contributing

To improve this curriculum:
1. Fork the repository
2. Create a feature branch
3. Make improvements
4. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💼 About

Created as a comprehensive educational resource for introducing students (grades 6-10) to electronics and robotics programming with Arduino.

---

**Start your robotics journey today! 🚀**

*Arduino Robotics Academy - Making Robotics Accessible to Everyone*
