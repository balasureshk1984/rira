import React, { useState } from 'react'
import {
  Container, Typography, Box, Paper, List, ListItem, ListItemText, Grid, Chip, Link as MuiLink,
  Accordion, AccordionSummary, AccordionDetails, Card, CardContent
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CodeIcon from '@mui/icons-material/Code'
import SchoolIcon from '@mui/icons-material/School'

function LessonTemplate({title, duration, objectives, materials, steps, code}){
  return (
    <Paper sx={{p:3, mb:3, background:'linear-gradient(135deg, rgba(26,31,58,0.8) 0%, rgba(10,14,39,0.7) 100%)', border:'1px solid rgba(0,217,255,0.1)'}}>
      <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', mb:2}}>
        <Typography variant="h6" sx={{fontWeight:700, color:'#00d9ff'}}>{title}</Typography>
        <Chip label={duration} sx={{background:'rgba(0,217,255,0.15)', color:'#00d9ff'}} />
      </Box>

      <Grid container spacing={2} sx={{mb:2}}>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle2" sx={{color:'#10b981', fontWeight:700}}>Learning Goals</Typography>
          <List dense>
            {objectives.map((o,i) => <ListItem key={i}><ListItemText primary={o} primaryTypographyProps={{variant:'body2'}} /></ListItem>)}
          </List>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="subtitle2" sx={{color:'#10b981', fontWeight:700}}>What You'll Need</Typography>
          <List dense>
            {materials.map((m,i) => <ListItem key={i}><ListItemText primary={m} primaryTypographyProps={{variant:'body2'}} /></ListItem>)}
          </List>
        </Grid>
      </Grid>

      <Box sx={{mb:2}}>
        <Typography variant="subtitle2" sx={{color:'#f59e0b', fontWeight:700}}>Step-by-Step Instructions</Typography>
        <ol style={{margin:'0.5rem 0', paddingLeft:'1.5rem'}}>
          {steps.map((s,i) => <li key={i}><Typography variant="body2" sx={{mb:0.5}}>{s}</Typography></li>)}
        </ol>
      </Box>

      {code && (
        <Box sx={{background:'#001318', border:'1px solid rgba(0,217,255,0.2)', borderRadius:1, p:2}}>
          <Typography variant="subtitle2" sx={{color:'#00d9ff', fontWeight:700, mb:1, display:'flex', alignItems:'center', gap:1}}>
            <CodeIcon sx={{fontSize:18}} /> Example Code
          </Typography>
          <Typography component="pre" sx={{whiteSpace:'pre-wrap', overflowX:'auto', color:'#aeead7', fontSize:'0.75rem', margin:0, fontFamily:'monospace'}}>
{code}
          </Typography>
        </Box>
      )}
    </Paper>
  )
}

export default function Tutorial(){
  const [expandedLevel, setExpandedLevel] = useState('beginner')

  return (
    <Container maxWidth="lg" sx={{py:5}}>
      <Box sx={{mb:4}}>
        <Box sx={{display:'flex', alignItems:'center', gap:1, mb:1}}>
          <SchoolIcon sx={{fontSize:40, color:'#00d9ff'}} />
          <Typography variant="h4" sx={{fontWeight:700, color:'#00d9ff'}}>
            🤖 Complete Arduino Training Guide
          </Typography>
        </Box>
        <Typography color="text.secondary" sx={{fontSize:'1.1rem'}}>
          Perfect for students in grades 6-10 with NO experience! Learn electronics and robotics from the very beginning.
        </Typography>
      </Box>

      {/* Learning Path Overview */}
      <Box sx={{mb:4}}>
        <Typography variant="h5" sx={{color:'#00d9ff', fontWeight:700, mb:2}}>Your Learning Journey</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Card sx={{background:'linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(16,185,129,0.05) 100%)', border:'2px solid #10b981'}}>
              <CardContent>
                <Typography variant="h6" sx={{color:'#10b981', fontWeight:700, mb:1}}>🟢 BEGINNER (60 hours total)</Typography>
                <Typography variant="body2" color="text.secondary">
                  Start here if you're new!<br/>
                  • Electronics basics<br/>
                  • First Arduino programs<br/>
                  • Control LEDs & buttons<br/>
                  • Read sensors<br/>
                  <strong>6 modules</strong>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{background:'linear-gradient(135deg, rgba(245,158,11,0.1) 0%, rgba(245,158,11,0.05) 100%)', border:'2px solid #f59e0b'}}>
              <CardContent>
                <Typography variant="h6" sx={{color:'#f59e0b', fontWeight:700, mb:1}}>🟡 INTERMEDIATE (70 hours total)</Typography>
                <Typography variant="body2" color="text.secondary">
                  Build cool projects!<br/>
                  • Talk to your Arduino<br/>
                  • Build moving robots<br/>
                  • Add smart sensors<br/>
                  • Connect modules<br/>
                  <strong>4 modules</strong>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{background:'linear-gradient(135deg, rgba(239,68,68,0.1) 0%, rgba(239,68,68,0.05) 100%)', border:'2px solid #ef4444'}}>
              <CardContent>
                <Typography variant="h6" sx={{color:'#ef4444', fontWeight:700, mb:1}}>🔴 ADVANCED (75 hours total)</Typography>
                <Typography variant="body2" color="text.secondary">
                  Become a robot expert!<br/>
                  • Remote control via phone<br/>
                  • Advanced robot control<br/>
                  • Save & analyze data<br/>
                  • Your own robot project<br/>
                  <strong>5 modules</strong>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Beginner Section */}
      <Box sx={{mb:4}}>
        <Accordion expanded={expandedLevel === 'beginner'} onChange={() => setExpandedLevel(expandedLevel === 'beginner' ? '' : 'beginner')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{background:'rgba(16,185,129,0.1)', border:'2px solid rgba(16,185,129,0.3)'}}>
            <Typography sx={{fontWeight:700, color:'#10b981', fontSize:'1.1rem'}}>🟢 BEGINNER LEVEL - Start Here! (60 hours total)</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{background:'rgba(10,14,39,0.5)'}}>
            <Box sx={{width:'100%'}}>
              <Typography variant="body2" color="text.secondary" sx={{mb:3, fontSize:'1rem'}}>
                Never done electronics before? Perfect! We start from ZERO. You'll learn what electricity is, then build actual working circuits!
              </Typography>

              <LessonTemplate
                title="Lesson 1: Electronics Basics & Safety (1 week / 10 hours)"
                duration="Week 1"
                objectives={[
                  "1. Understand what electricity really is",
                  "2. Learn how circuits work",
                  "3. Know the safety rules",
                  "4. Identify resistors, LEDs, batteries, breadboards"
                ]}
                materials={["1. Arduino Uno", "2. Breadboard", "3. Jumper wires", "4. LED (red)", "5. 220Ω resistor", "6. Battery (9V or USB)", "7. Computer"]}
                steps={[
                  "Watch: What is electricity? (5 min video)",
                  "Learn: Voltage, current, resistance (simple terms)",
                  "Read: Electronics safety rules (IMPORTANT!)",
                  "Build: Your first LED circuit with battery",
                  "Test: Make the LED light up - you did it!",
                  "Experiment: Try different resistor values",
                  "Challenge: Make 2 LEDs light up in series"
                ]}
                code={`// You don't write code yet - just build circuits!
// But here's what you're practicing:

// Later, Arduino will control this:
void setup() {
  pinMode(13, OUTPUT);  // Set pin 13 for LED
}

void loop() {
  digitalWrite(13, HIGH);  // Turn on
  delay(500);
  digitalWrite(13, LOW);   // Turn off
  delay(500);
}`}
              />

              <LessonTemplate
                title="Lesson 2: Meet Your Arduino (1 week / 10 hours)"
                duration="Week 2"
                objectives={[
                  "1. Understand what Arduino is",
                  "2. Install the free software",
                  "3. Write your FIRST program",
                  "4. Upload it to the board"
                ]}
                materials={["1. Arduino Uno", "2. USB cable", "3. Computer", "4. LED", "5. Resistor", "6. Breadboard"]}
                steps={[
                  "Download Arduino IDE (free) from arduino.cc",
                  "Install it on your computer",
                  "Connect Arduino to your computer with USB",
                  "Open the IDE",
                  "Go to File → Examples → 01.Basics → Blink",
                  "Click Upload button",
                  "Watch the built-in LED blink! AMAZING!",
                  "Now change 1000 to 500 - it blinks faster!",
                  "Upload again and watch the change"
                ]}
                code={`void setup() {
  // This runs ONCE when powered on
  pinMode(13, OUTPUT);  // Use pin 13 for LED
}

void loop() {
  // This runs over and over, forever
  digitalWrite(13, HIGH);   // Turn LED ON
  delay(1000);              // Wait 1 second (1000 milliseconds)
  digitalWrite(13, LOW);    // Turn LED OFF
  delay(1000);              // Wait 1 second
  // Then loop() runs again!
}`}
              />

              <LessonTemplate
                title="Lesson 3: Control Things - LED Patterns (1.5 weeks / 15 hours)"
                duration="Weeks 3-4"
                objectives={[
                  "1. Control LED on/off from code",
                  "2. Create time delays",
                  "3. Make LED patterns (traffic light, SOS)",
                  "4. Control multiple LEDs"
                ]}
                materials={["1. Arduino", "2. 3 LEDs (red, yellow, green)", "3. 3x 220Ω resistors", "4. Breadboard", "5. Jumper wires"]}
                steps={[
                  "Build circuit: Connect red LED to pin 2",
                  "Connect yellow LED to pin 3",
                  "Connect green LED to pin 4",
                  "Write code to turn them on/off",
                  "Create a traffic light pattern (RED → YELLOW → GREEN)",
                  "Make an SOS flasher (... --- ...)",
                  "Challenge: Make a rainbow chase effect",
                  "Test everything works correctly"
                ]}
                code={`void setup() {
  pinMode(2, OUTPUT);  // Red LED
  pinMode(3, OUTPUT);  // Yellow LED
  pinMode(4, OUTPUT);  // Green LED
}

void loop() {
  // Traffic Light Pattern
  digitalWrite(2, HIGH);   // Red ON
  digitalWrite(3, LOW);
  digitalWrite(4, LOW);
  delay(2000);             // Wait 2 seconds
  
  digitalWrite(2, LOW);
  digitalWrite(3, HIGH);   // Yellow ON
  digitalWrite(4, LOW);
  delay(1000);             // Wait 1 second
  
  digitalWrite(2, LOW);
  digitalWrite(3, LOW);
  digitalWrite(4, HIGH);   // Green ON
  delay(2000);             // Wait 2 seconds
}`}
              />

              <LessonTemplate
                title="Lesson 4: Read Input - Buttons (1.5 weeks / 15 hours)"
                duration="Weeks 5-6"
                objectives={[
                  "1. Read button presses in code",
                  "2. Make if/else decisions",
                  "3. Make projects react to buttons",
                  "4. Fix button bouncing problems"
                ]}
                materials={["1. Arduino", "2. Button switch", "3. 10kΩ resistor", "4. LED & 220Ω resistor", "5. Breadboard"]}
                steps={[
                  "Build: Connect button to pin 2",
                  "Build: Connect LED to pin 13",
                  "Code: Read button with digitalRead()",
                  "Code: Use if statement to check button",
                  "Test: Press button, LED lights up!",
                  "Challenge: Make LED turn on AND off with button",
                  "Fix: Add debouncing to prevent false presses",
                  "Final: Create a button-controlled game or quiz"
                ]}
                code={`void setup() {
  pinMode(2, INPUT);    // Button on pin 2
  pinMode(13, OUTPUT);  // LED on pin 13
}

void loop() {
  int buttonState = digitalRead(2);  // Read button
  
  if (buttonState == HIGH) {
    // Button is PRESSED
    digitalWrite(13, HIGH);  // Turn LED ON
  } else {
    // Button is NOT pressed
    digitalWrite(13, LOW);   // Turn LED OFF
  }
}`}
              />

              <LessonTemplate
                title="Lesson 5: Measure Things - Sensors (2 weeks / 20 hours)"
                duration="Weeks 7-8"
                objectives={[
                  "1. Read sensor values (0-1023)",
                  "2. Measure light, temperature, position",
                  "3. Display sensor readings on computer",
                  "4. Make decisions based on sensor data"
                ]}
                materials={["1. Arduino", "2. Photoresistor (LDR) or potentiometer", "3. Breadboard", "4. 10kΩ resistor", "5. LEDs"]}
                steps={[
                  "Build circuit: Potentiometer to A0 analog pin",
                  "Code: Use analogRead() to read the value",
                  "Use Serial.begin() to send data to computer",
                  "Use Serial.println() to display values",
                  "Open Serial Monitor to see live numbers",
                  "Turn potentiometer - watch numbers change!",
                  "Challenge: Light up LED only if sensor value > 500",
                  "Advanced: Create a light detector (LDR sensor)"
                ]}
                code={`void setup() {
  Serial.begin(9600);  // Start sending data to computer
  pinMode(13, OUTPUT); // LED
}

void loop() {
  int sensorValue = analogRead(A0);  // Read sensor (0-1023)
  
  Serial.print("Sensor: ");
  Serial.println(sensorValue);  // Display on Serial Monitor
  
  if (sensorValue > 500) {
    digitalWrite(13, HIGH);  // Bright = LED on
  } else {
    digitalWrite(13, LOW);   // Dark = LED off
  }
  
  delay(100);  // Update every 0.1 seconds
}`}
              />

              <LessonTemplate
                title="Lesson 6: Brightness Control - PWM (1.5 weeks / 15 hours)"
                duration="Weeks 9-10"
                objectives={[
                  "1. Control LED brightness (dim to bright)",
                  "2. Understand PWM (pulse width modulation)",
                  "3. Create fading effects",
                  "4. Control motor speed"
                ]}
                materials={["1. Arduino", "2. LED", "3. 220Ω resistor", "4. Potentiometer", "5. Breadboard"]}
                steps={[
                  "Learn: What is PWM? (It flickers really fast!)",
                  "Build: Potentiometer to A0, LED to pin 9 (PWM pin)",
                  "Code: Use analogWrite() instead of digitalWrite()",
                  "Test: Turn knob - LED gets brighter/dimmer!",
                  "Challenge: Make LED fade in and out smoothly",
                  "Advanced: Combine sensor + PWM for brightness control",
                  "Advanced: Try breathing LED effect"
                ]}
                code={`void setup() {
  // Pin 9 is PWM-capable (can dim LEDs)
}

void loop() {
  int sensorValue = analogRead(A0);  // Read 0-1023
  int brightness = sensorValue / 4;   // Convert to 0-255
  
  analogWrite(9, brightness);  // Control brightness
  
  delay(50);
}

// Alternative: Fade in and out
void fadeEffect() {
  for (int i = 0; i <= 255; i++) {
    analogWrite(9, i);   // Fade IN
    delay(10);
  }
  for (int i = 255; i >= 0; i--) {
    analogWrite(9, i);   // Fade OUT
    delay(10);
  }
}`}
              />
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* Intermediate Section */}
      <Box sx={{mb:4}}>
        <Accordion expanded={expandedLevel === 'intermediate'} onChange={() => setExpandedLevel(expandedLevel === 'intermediate' ? '' : 'intermediate')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{background:'rgba(245,158,11,0.1)', border:'2px solid rgba(245,158,11,0.3)'}}>
            <Typography sx={{fontWeight:700, color:'#f59e0b', fontSize:'1.1rem'}}>🟡 INTERMEDIATE LEVEL - Build Cool Projects! (70 hours total)</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{background:'rgba(10,14,39,0.5)'}}>
            <Box sx={{width:'100%'}}>
              <Typography variant="body2" color="text.secondary" sx={{mb:3, fontSize:'1rem'}}>
                Master the basics? Now build REAL robots! Control motors, add displays, and create moving creations!
              </Typography>

              <LessonTemplate
                title="Lesson 7: Talk to Your Arduino (1.5 weeks / 15 hours)"
                duration="Weeks 1-2"
                objectives={[
                  "1. Display sensor readings on your computer",
                  "2. Send commands FROM computer TO Arduino",
                  "3. Debug what your Arduino is doing",
                  "4. Create a simple control system"
                ]}
                materials={["1. Arduino", "2. Sensors", "3. USB cable", "4. Computer with IDE"]}
                steps={[
                  "Review: Serial communication basics",
                  "Code: Use Serial.print() and Serial.println()",
                  "Test: Open Serial Monitor - see live sensor readings",
                  "Challenge: Send command 'L' to turn LED on",
                  "Challenge: Send command 'H' to turn LED off",
                  "Advanced: Create menu system (1=LED ON, 2=LED OFF, 3=EXIT)"
                ]}
                code={`void setup() {
  Serial.begin(9600);
  pinMode(13, OUTPUT);
}

void loop() {
  if (Serial.available() > 0) {
    char command = Serial.read();
    
    if (command == 'L') {
      digitalWrite(13, HIGH);
      Serial.println("LED is ON");
    } else if (command == 'O') {
      digitalWrite(13, LOW);
      Serial.println("LED is OFF");
    }
  }
}`}
              />

              <LessonTemplate
                title="Lesson 8: Make It Move - Control Motors (2 weeks / 20 hours)"
                duration="Weeks 3-5"
                objectives={[
                  "1. Understand how motors work",
                  "2. Control motor speed and direction",
                  "3. Use motor driver chip (L298N)",
                  "4. Build a moving robot!"
                ]}
                materials={["1. Arduino", "2. DC motor", "3. L298N motor driver", "4. Power supply (6-12V)", "5. Robot chassis kit (optional)", "6. Wheels & axles"]}
                steps={[
                  "Learn: How DC motors work",
                  "Build: Connect motor driver to Arduino",
                  "Build: Connect motor to motor driver",
                  "Code: Make motor spin forward",
                  "Code: Make motor spin backward",
                  "Challenge: Speed control with potentiometer",
                  "Build: Full robot car (2 motors + chassis)",
                  "Challenge: Make robot move in patterns"
                ]}
                code={`// Control 2 motors for robot car
int motor1Speed = 9;   // PWM pin for speed
int motor1Dir = 8;     // Direction pin

int motor2Speed = 10;
int motor2Dir = 11;

void setup() {
  pinMode(motor1Speed, OUTPUT);
  pinMode(motor1Dir, OUTPUT);
  pinMode(motor2Speed, OUTPUT);
  pinMode(motor2Dir, OUTPUT);
}

void loop() {
  // Move forward (both motors)
  digitalWrite(motor1Dir, HIGH);
  digitalWrite(motor2Dir, HIGH);
  analogWrite(motor1Speed, 200);
  analogWrite(motor2Speed, 200);
  delay(2000);
  
  // Turn right (left motor slower)
  analogWrite(motor1Speed, 100);
  analogWrite(motor2Speed, 200);
  delay(1000);
}`}
              />

              <LessonTemplate
                title="Lesson 9: Advanced Sensors (2 weeks / 20 hours)"
                duration="Weeks 6-8"
                objectives={[
                  "1. Use ultrasonic distance sensor",
                  "2. Build obstacle detector",
                  "3. Use line sensors for navigation",
                  "4. Combine multiple sensors"
                ]}
                materials={["1. Arduino", "2. HC-SR04 ultrasonic sensor", "3. Line sensors (IR)", "4. Robot chassis", "5. Motors", "6. Jumper wires"]}
                steps={[
                  "Build: HC-SR04 ultrasonic sensor circuit",
                  "Code: Measure distance to objects",
                  "Test: Make robot detect obstacles",
                  "Build: Obstacle-avoiding robot",
                  "Build: Line sensor circuit (IR reflectance)",
                  "Challenge: Line-following robot",
                  "Challenge: Robot that avoids obstacles AND follows line"
                ]}
                code={`// Ultrasonic distance sensor
int trigPin = 7;
int echoPin = 6;

void setup() {
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  Serial.begin(9600);
}

long getDistance() {
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  
  long duration = pulseIn(echoPin, HIGH);
  long distance = duration * 0.034 / 2;
  return distance;
}

void loop() {
  long distance = getDistance();
  Serial.println(distance);
  
  if (distance < 15) {  // Object too close!
    // Stop and back up
  }
}`}
              />

              <LessonTemplate
                title="Lesson 10: Connect Modules - LCD Displays (1.5 weeks / 15 hours)"
                duration="Weeks 9-10"
                objectives={[
                  "1. Connect LCD display to Arduino",
                  "2. Show information on screen",
                  "3. Use I2C protocol (2-wire connection)",
                  "4. Display sensor readings and status"
                ]}
                materials={["1. Arduino", "2. I2C LCD display (16x2)", "3. Breadboard", "4. Jumper wires"]}
                steps={[
                  "Build: Connect LCD display (only 4 wires!)",
                  "Code: Include Wire library",
                  "Code: Initialize LCD",
                  "Code: Write text to display",
                  "Test: Display 'Hello World' on LCD",
                  "Challenge: Display sensor readings",
                  "Challenge: Create custom messages",
                  "Advanced: Use special characters and animations"
                ]}
                code={`#include <Wire.h>
#include <LiquidCrystal_I2C.h>

// Create LCD object (address 0x27)
LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  lcd.init();
  lcd.backlight();
  lcd.print("Hello World!");
}

void loop() {
  int sensor = analogRead(A0);
  
  lcd.setCursor(0, 1);
  lcd.print("Sensor: ");
  lcd.print(sensor);
  
  delay(500);
}`}
              />
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* Advanced Section */}
      <Box sx={{mb:6}}>
        <Accordion expanded={expandedLevel === 'advanced'} onChange={() => setExpandedLevel(expandedLevel === 'advanced' ? '' : 'advanced')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{background:'rgba(239,68,68,0.1)', border:'2px solid rgba(239,68,68,0.3)'}}>
            <Typography sx={{fontWeight:700, color:'#ef4444', fontSize:'1.1rem'}}>🔴 ADVANCED LEVEL - Become an Expert! (75 hours total)</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{background:'rgba(10,14,39,0.5)'}}>
            <Box sx={{width:'100%'}}>
              <Typography variant="body2" color="text.secondary" sx={{mb:3, fontSize:'1rem'}}>
                Master all the basics? Now build PROFESSIONAL-LEVEL robots! Remote control via phone, save data, create intelligent systems!
              </Typography>

              <LessonTemplate
                title="Lesson 11: Remote Control - Bluetooth (2 weeks / 20 hours)"
                duration="Weeks 1-3"
                objectives={[
                  "1. Control robot from your smartphone!",
                  "2. Understand wireless communication",
                  "3. Send commands via Bluetooth",
                  "4. Build a full wireless robot car"
                ]}
                materials={["1. Arduino", "2. HC-05 Bluetooth module", "3. Android phone", "4. Motor driver", "5. Motors", "6. Power supply"]}
                steps={[
                  "Build: Connect HC-05 Bluetooth module",
                  "Pair: Connect Arduino to your phone",
                  "Download: Bluetooth control app (free)",
                  "Code: Read Bluetooth commands",
                  "Test: Send commands from phone",
                  "Challenge: Build Bluetooth-controlled robot",
                  "Advanced: Create custom control app with MIT App Inventor"
                ]}
                code={`#include <SoftwareSerial.h>

// RX, TX pins for Bluetooth
SoftwareSerial BTSerial(10, 11);

void setup() {
  BTSerial.begin(9600);
  pinMode(9, OUTPUT);   // Motor speed
  pinMode(8, OUTPUT);   // Motor direction
}

void loop() {
  if (BTSerial.available() > 0) {
    char command = BTSerial.read();
    
    if (command == 'F') {  // Forward
      digitalWrite(8, HIGH);
      analogWrite(9, 200);
    } else if (command == 'B') {  // Backward
      digitalWrite(8, LOW);
      analogWrite(9, 200);
    } else if (command == 'S') {  // Stop
      analogWrite(9, 0);
    }
  }
}`}
              />

              <LessonTemplate
                title="Lesson 12: Smart Motor Control (2 weeks / 20 hours)"
                duration="Weeks 4-6"
                objectives={[
                  "1. Control multiple motors smoothly",
                  "2. Make robot follow complex paths",
                  "3. Create intelligent movement",
                  "4. Implement speed ramps"
                ]}
                materials={["1. Arduino", "2. 2-4 motors", "3. Motor drivers", "4. Breadboard", "5. Power supply"]}
                steps={[
                  "Learn: Non-blocking timing with millis()",
                  "Code: Create movement patterns",
                  "Challenge: Robot moves in figure-8",
                  "Challenge: Robot slowly accelerates",
                  "Challenge: Robot navigates maze",
                  "Advanced: Coordinated 4-motor movement"
                ]}
                code={`unsigned long lastMove = 0;
int moveCounter = 0;

void setup() {
  // Setup motor pins
}

void loop() {
  // Non-blocking timing
  if (millis() - lastMove > 1000) {
    lastMove = millis();
    moveCounter++;
    
    if (moveCounter == 1) moveForward();
    else if (moveCounter == 2) turnRight();
    else if (moveCounter == 3) moveBackward();
    else { turnLeft(); moveCounter = 0; }
  }
}`}
              />

              <LessonTemplate
                title="Lesson 13: Save Your Data (1.5 weeks / 15 hours)"
                duration="Weeks 7-8"
                objectives={[
                  "1. Save sensor readings to SD card",
                  "2. Create data log files",
                  "3. Analyze what happened",
                  "4. Build data logging systems"
                ]}
                materials={["1. Arduino", "2. SD card module", "3. Micro SD card", "4. Breadboard", "5. Sensors"]}
                steps={[
                  "Build: Connect SD card module",
                  "Code: Create and write files",
                  "Test: Log sensor values every second",
                  "Challenge: Include timestamp",
                  "Challenge: Read data back from card",
                  "Advanced: Transfer data to computer for analysis"
                ]}
                code={`#include <SD.h>

File dataFile;

void setup() {
  if (!SD.begin(10)) {
    Serial.println("SD init failed!");
  }
}

void loop() {
  dataFile = SD.open("data.csv", FILE_WRITE);
  
  if (dataFile) {
    int sensor = analogRead(A0);
    dataFile.print(millis());
    dataFile.print(",");
    dataFile.println(sensor);
    dataFile.close();
  }
  
  delay(1000);  // Save every 1 second
}`}
              />

              <LessonTemplate
                title="Lesson 14: Smart Feedback Control (2 weeks / 20 hours)"
                duration="Weeks 9-11"
                objectives={[
                  "1. Make robot adjust itself automatically",
                  "2. Implement feedback loops",
                  "3. Create self-correcting systems",
                  "4. Build line-following with precision"
                ]}
                materials={["1. Arduino", "2. Motors with encoders", "3. Sensors", "4. Motor drivers"]}
                steps={[
                  "Learn: What is feedback?",
                  "Learn: Simple proportional control",
                  "Code: Calculate error",
                  "Code: Make adjustment based on error",
                  "Test: Robot maintains straight line",
                  "Challenge: Very accurate line follower",
                  "Challenge: Temperature control system"
                ]}
                code={`float setpoint = 100;
float error = 0;
float correction = 0;

void loop() {
  int current = analogRead(A0);
  error = setpoint - current;
  
  // Simple proportional: bigger error = bigger correction
  correction = error * 0.5;
  
  // Apply correction to motors
  int motorSpeed = 150 + correction;
  analogWrite(motorPin, motorSpeed);
}`}
              />

              <LessonTemplate
                title="Lesson 15: YOUR OWN ROBOT PROJECT! (3 weeks / 30 hours)"
                duration="Weeks 12-14"
                objectives={[
                  "1. Design YOUR own robot",
                  "2. Plan what it will do",
                  "3. Build and test it",
                  "4. Fix problems",
                  "5. Present your creation!"
                ]}
                materials={["1. Everything you've learned about!", "2. Plus your imagination!"]}
                steps={[
                  "DESIGN: What will your robot do?",
                  "OPTIONS: Obstacle avoider? Line follower? Plant waterer? Bluetooth car? Alarm system? Anything!",
                  "PLAN: Sketch your design, list parts needed",
                  "BUILD: Assemble your robot step by step",
                  "CODE: Write the program",
                  "TEST: Does it work? Debug problems",
                  "IMPROVE: Make it better",
                  "DOCUMENT: Take photos, write explanation",
                  "PRESENT: Show your creation to class!"
                ]}
                code={`// Your final project will combine EVERYTHING:
// - Motors
// - Sensors
// - Arduino programming
// - Maybe Bluetooth control
// - Maybe data logging
// - Smart feedback control

// This is where YOUR creativity comes in!
// Build something AMAZING!`}
              />
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* Resources & Tips */}
      <Box sx={{mb:6}}>
        <Typography variant="h5" sx={{color:'#00d9ff', fontWeight:700, mb:2}}>📚 Resources & Tips</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Paper sx={{p:2, background:'rgba(0,217,255,0.05)', border:'1px solid rgba(0,217,255,0.1)'}}>
              <Typography variant="subtitle2" sx={{color:'#00d9ff', fontWeight:700}}>Important Links</Typography>
              <List dense>
                <ListItem><MuiLink href="https://www.arduino.cc/" target="_blank" sx={{color:'#00d9ff', textDecoration:'none'}}>✨ Arduino Official Website</MuiLink></ListItem>
                <ListItem><MuiLink href="https://www.arduino.cc/reference/" target="_blank" sx={{color:'#00d9ff', textDecoration:'none'}}>📖 Arduino Code Reference</MuiLink></ListItem>
                <ListItem><MuiLink href="https://learn.sparkfun.com/" target="_blank" sx={{color:'#00d9ff', textDecoration:'none'}}>🚀 SparkFun Tutorials (FREE)</MuiLink></ListItem>
                <ListItem><MuiLink href="https://appinventor.mit.edu/" target="_blank" sx={{color:'#00d9ff', textDecoration:'none'}}>📱 Make Your Own App (MIT)</MuiLink></ListItem>
              </List>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{p:2, background:'rgba(255,107,157,0.05)', border:'1px solid rgba(255,107,157,0.1)'}}>
              <Typography variant="subtitle2" sx={{color:'#ff6b9d', fontWeight:700}}>Success Tips</Typography>
              <List dense>
                <ListItem>✅ Start simple, build complexity gradually</ListItem>
                <ListItem>✅ Test each part before connecting everything</ListItem>
                <ListItem>✅ Use Serial Monitor to see what's happening</ListItem>
                <ListItem>✅ Don't be afraid to experiment and fail</ListItem>
                <ListItem>✅ Document your work with photos/videos</ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Common Problems */}
      <Box sx={{mb:6}}>
        <Paper sx={{p:3, background:'linear-gradient(135deg, rgba(26,31,58,0.8) 0%, rgba(10,14,39,0.7) 100%)', border:'1px solid rgba(0,217,255,0.1)'}}>
          <Typography variant="h5" sx={{color:'#10b981', fontWeight:700, mb:2}}>🔧 Troubleshooting Common Problems</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" sx={{color:'#10b981', fontWeight:700}}>Problem: Code won't upload</Typography>
              <ul style={{paddingLeft:'1.5rem', margin:'0.5rem 0'}}>
                <li><Typography variant="body2">✓ Check board selected in Tools menu</Typography></li>
                <li><Typography variant="body2">✓ Check COM port is correct</Typography></li>
                <li><Typography variant="body2">✓ Try different USB cable</Typography></li>
                <li><Typography variant="body2">✓ Disconnect other USB devices</Typography></li>
              </ul>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" sx={{color:'#10b981', fontWeight:700}}>Problem: LED not lighting up</Typography>
              <ul style={{paddingLeft:'1.5rem', margin:'0.5rem 0'}}>
                <li><Typography variant="body2">✓ Check LED polarity (long leg = positive)</Typography></li>
                <li><Typography variant="body2">✓ Check resistor value is correct</Typography></li>
                <li><Typography variant="body2">✓ Test with multimeter</Typography></li>
                <li><Typography variant="body2">✓ Try LED in opposite direction</Typography></li>
              </ul>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" sx={{color:'#10b981', fontWeight:700}}>Problem: Button doesn't respond</Typography>
              <ul style={{paddingLeft:'1.5rem', margin:'0.5rem 0'}}>
                <li><Typography variant="body2">✓ Check pin numbers match code</Typography></li>
                <li><Typography variant="body2">✓ Check pull-up resistor (10kΩ)</Typography></li>
                <li><Typography variant="body2">✓ Add debouncing delay()</Typography></li>
                <li><Typography variant="body2">✓ Test with Serial.println()</Typography></li>
              </ul>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" sx={{color:'#10b981', fontWeight:700}}>Problem: Sensor reads only 0 or 1023</Typography>
              <ul style={{paddingLeft:'1.5rem', margin:'0.5rem 0'}}>
                <li><Typography variant="body2">✓ Check sensor connections</Typography></li>
                <li><Typography variant="body2">✓ Try a different analog pin</Typography></li>
                <li><Typography variant="body2">✓ Check voltage divider resistor</Typography></li>
                <li><Typography variant="body2">✓ Use Serial Monitor to debug</Typography></li>
              </ul>
            </Grid>
          </Grid>
        </Paper>
      </Box>

      <Box sx={{textAlign:'center', py:4}}>
        <Typography variant="h6" sx={{color:'#00d9ff', fontWeight:700}}>🎉 Ready to Build Amazing Robots?</Typography>
        <Typography color="text.secondary" sx={{mt:1}}>Start with Beginner level - no experience needed! Each lesson builds on the last one.</Typography>
      </Box>
    </Container>
  )
}
