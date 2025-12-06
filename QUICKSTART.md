# ⚡ Quick Start Guide

Get up and running with Arduino Robotics Academy in 5 minutes!

## 🚀 Installation (Windows)

### Option A: Quick Start (If you have Node.js)

```powershell
# 1. Clone the repository
git clone https://github.com/balasureshk1984/rira.git
cd rira

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open browser to: **http://localhost:5173**

### Option B: First Time Setup (Complete)

1. **Install Node.js:**
   - Download: https://nodejs.org/ (LTS version)
   - Install (next, next, finish)
   - Restart your computer

2. **Install Git:**
   - Download: https://git-scm.com/download/win
   - Install (next, next, finish)
   - Restart PowerShell/Terminal

3. **Clone & Run:**
   ```powershell
   git clone https://github.com/balasureshk1984/rira.git
   cd rira
   npm install
   npm run dev
   ```

4. **Open in Browser:**
   - Go to: http://localhost:5173

---

## 📚 Using the Application

### Home Page
- Click **Beginner**, **Intermediate**, or **Advanced** tabs
- Modules appear based on your selection
- Use search box to find specific modules

### Tutorial & Guides Page
- Click "Tutorial & Guides" in header
- Browse all 15 complete lessons
- Each lesson has:
  - Learning objectives (numbered 1, 2, 3...)
  - Materials list (with quantities)
  - Step-by-step instructions
  - Arduino code examples

### Module Details
- Click any module to expand it
- Read full description
- View objectives and outcomes
- See all topics (numbered)
- Check prerequisites
- Find external resources

---

## 💻 Development Commands

```powershell
# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Stop server: Press Ctrl+C
```

---

## 📦 Project Files Explained

```
rira/
├── src/
│   ├── App.jsx                    # Main application component
│   ├── main.jsx                  # React entry point
│   ├── index.css                 # Global styles
│   ├── pages/
│   │   └── Tutorial.jsx          # All 15 lessons with code examples
│   ├── components/
│   │   └── SyllabusList.jsx     # Module card component
│   └── data/
│       └── syllabus.json        # Curriculum data (15 modules)
├── public/                       # Static files
├── index.html                    # HTML template
├── package.json                  # Project configuration
├── vite.config.js               # Vite configuration
└── README.md                     # Documentation
```

---

## 🎯 First Steps

### For Students:
1. Open app to **Beginner** level
2. Click **"Lesson 1: Electronics Basics & Safety"**
3. Read the objectives
4. Check materials you need
5. Follow the step-by-step instructions
6. Try the code examples on your Arduino

### For Teachers:
1. Explore all 15 modules
2. Check hour estimates for lesson planning
3. Share the GitHub link with students
4. Use as classroom curriculum
5. Modify/fork for your specific needs

---

## 🔧 Troubleshooting

### Problem: "npm is not recognized"
**Solution:** 
- Install Node.js from https://nodejs.org/
- Restart PowerShell

### Problem: "git is not recognized"
**Solution:**
- Install Git from https://git-scm.com/download/win
- Restart PowerShell

### Problem: Port 5173 already in use
**Solution:**
```powershell
npm run dev -- --port 3000
```

### Problem: Blank page loads
**Solution:**
- Press Ctrl+Shift+R (hard refresh)
- Clear browser cache
- Close dev server and run `npm run dev` again

---

## 🌐 Deploy (Optional)

### Deploy to Vercel (FREE)
1. Go to https://vercel.com
2. Sign up with GitHub
3. Import repository
4. Auto-deploys on every push!

### Deploy to GitHub Pages
1. Edit `vite.config.js` - add: `base: '/rira/'`
2. Run: `npm run build`
3. Deploy `dist` folder to GitHub Pages

---

## 📖 Documentation

- **README.md** - Full project documentation
- **CURRICULUM_SUMMARY.md** - All 15 modules detailed
- **GITHUB_PUSH_GUIDE.md** - How to push to GitHub
- **QUICKSTART.md** - This file!

---

## 🤝 Contributing

Found a bug or want to improve?
1. Fork the repository
2. Make changes
3. Create pull request
4. Help make robotics education better!

---

## ✨ Features at a Glance

- ✅ 15 complete lessons
- ✅ 205 hours of content
- ✅ 120+ serialized concepts
- ✅ Grade 6-10 appropriate
- ✅ Zero prior knowledge needed
- ✅ Dark theme UI
- ✅ Fully responsive
- ✅ Free and open source

---

**Ready to learn robotics? Start with Lesson 1! 🤖**

*Arduino Robotics Academy - Making Robotics Accessible*
