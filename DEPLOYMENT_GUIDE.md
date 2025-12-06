# 🚀 Getting Started & Deployment Guide

## Quick Start (5 minutes)

### Step 1: Start the Server
```bash
cd C:\Syllabus\robotics-syllabus
npm run dev
```

### Step 2: Open in Browser
- **URL**: http://localhost:5173
- **You should see**: Robotics Academy homepage with grade tabs

### Step 3: Navigate
- **Home Page**: View modules by grade 6-9
- **Search**: Type keywords to filter modules
- **Details**: Click "View Details" on any module
- **Tutorial**: Click "Tutorial" button in header

### Step 4: Explore Tutorial Page
- Scroll through lessons for Grades 6-9
- Click to expand Arduino Advanced sections
- Review code examples and assessments

---

## 🎯 Using in Classroom

### Option 1: Live Demo (Recommended for first time)
```bash
# On your computer:
npm run dev

# Share screen to class:
# Show http://localhost:5173
# Navigate through modules
# Expand Arduino sections
# Show code examples
```

### Option 2: Printed Handouts
```bash
# Print from Tutorial page:
# Press Ctrl+P or Cmd+P
# Select PDF printer or "Print to PDF"
# One lesson per page
```

### Option 3: Shared Link (after deployment)
```bash
# After deploying to web server:
# Share URL with students/teachers
# No installation needed
# Access from any device with browser
```

---

## 📦 Deployment Options

### Option A: Vercel (Recommended - Free)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   cd C:\Syllabus\robotics-syllabus
   vercel
   ```

3. **Follow prompts** - Select project settings
4. **Get URL** - Something like: `https://robotics-syllabus.vercel.app`

### Option B: Netlify (Free)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Drag & drop `dist/` folder** to Netlify
   - Visit https://netlify.com
   - Drag folder to deploy area
   - Get instant URL

### Option C: GitHub Pages (Free)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable Pages** in GitHub Settings
3. **Get URL** - `https://yourusername.github.io/robotics-syllabus`

### Option D: Self-Hosted Server

1. **Build project**
   ```bash
   npm run build
   ```

2. **Copy `dist/` folder** to web server (Apache, Nginx, etc.)
3. **Configure server** to serve `dist/index.html` for all routes
4. **Access** via your server URL

---

## 📊 What to Show During Demo

### Homepage Demo (2 minutes)
```
1. Show grade tabs (6, 7, 8, 9)
2. Search for "robot" 
3. Show results with badge count
4. Click "View Details" on a module
5. Show dialog with color-coded sections
6. Note the code example at bottom
```

### Tutorial Page Demo (3 minutes)
```
1. Click "Tutorial" button
2. Scroll through Quick Starter
3. Show Grade 6 lessons
4. Expand Grade 8 code example
5. Scroll to Arduino Advanced
6. Click to expand "Arduino Fundamentals"
7. Show working code snippet
8. Show assessment rubric
9. Click resources at bottom
```

### Key Features to Highlight
- ✨ Modern gradient design
- ✨ Smooth hover animations
- ✨ Color-coded information
- ✨ Working code examples
- ✨ Complete lesson plans
- ✨ Assessment rubrics

---

## 💼 For School/District Implementation

### Step 1: Build Production Version
```bash
cd C:\Syllabus\robotics-syllabus
npm run build
```
Output files will be in `dist/` folder (~500KB)

### Step 2: Deploy to School Server
- Contact your IT department
- Request web hosting for the `dist/` folder
- Get public URL to share

### Step 3: Share with Teachers
- Send email with link and screenshot
- Include brief "Getting Started" guide
- Offer live demo session

### Step 4: Gather Feedback
- Ask teachers for suggestions
- Track which lessons are most used
- Plan updates based on needs

### Step 5: Customize (Optional)
- Add school logo to header
- Change colors to school colors
- Add school-specific resources
- Add teacher-only content (password protected)

---

## 🔍 Troubleshooting

### Dev Server Won't Start
```bash
# Try these steps:
1. Close all Node processes: Ctrl+C
2. Delete node_modules: rm -r node_modules
3. Reinstall: npm install
4. Start again: npm run dev
```

### Port 5173 Already in Use
```bash
# Use different port:
npm run dev -- --port 5174
```

### Build Fails
```bash
# Clear cache:
rm -rf dist
npm run build
```

### CSS/Styling Not Loading
```bash
# In browser:
1. Press F12 (Developer Tools)
2. Press Ctrl+Shift+R (Hard Refresh)
3. Check Console for errors
```

---

## 📱 Accessing on Different Devices

### Same Network (Recommended)
```bash
# On your computer:
npm run dev

# Find your IP:
ipconfig  # Windows
ifconfig  # Mac/Linux

# On student device:
# Open http://YOUR.IP.ADDRESS:5173
```

### Over Internet
1. Deploy to Vercel/Netlify (see Deployment section)
2. Share the public URL
3. Works from anywhere with internet

---

## 🎓 Integration with LMS

### Canvas Integration
1. In Canvas course, add new "External Tool"
2. Paste URL: `https://your-deployed-url/`
3. Link assignments to tutorial page

### Google Classroom Integration
1. Create assignment
2. Add link in instructions: `https://your-deployed-url/`
3. Students click to access

### Blackboard Integration
1. Add "Web Link" content type
2. Paste URL: `https://your-deployed-url/`
3. Students can access directly

---

## 📈 Analytics & Usage

### Tracking Views (Optional Enhancement)
Add Google Analytics:
```bash
npm install react-ga4
```

Then in `main.jsx`:
```jsx
import ReactGA from "react-ga4";
ReactGA.initialize("GA_TRACKING_ID");
ReactGA.pageview(window.location.pathname);
```

### Monitoring Performance
- Chrome DevTools (F12) → Lighthouse
- Check load time: should be < 3 seconds
- Monitor CSS and JS file sizes

---

## 🛠️ Customization Guide

### Change Brand Colors
Edit `src/main.jsx`:
```jsx
palette: {
  primary: { main: '#00d9ff' },    // Change cyan
  secondary: { main: '#ff6b9d' }   // Change pink
}
```

### Add School Logo
1. Place logo in `public/` folder
2. Edit `src/App.jsx` header section
3. Add `<img src="/logo.png" alt="School" />`

### Update Resource Links
Edit `src/pages/Tutorial.jsx`:
- Find "Recommended Resources" section
- Update URLs to your preferred sites

### Add Custom Lessons
Edit `src/data/syllabus.json`:
```json
{
  "id": "custom-1",
  "title": "Your Custom Lesson",
  "duration": "45 minutes",
  // Add all required fields...
}
```

---

## 📞 Technical Support

### If You Need Help

1. **Check documentation**:
   - QUICK_START.md (quick reference)
   - UPDATES.md (detailed changelog)
   - COMPLETION_REPORT.md (full overview)

2. **Check browser console**:
   - Press F12
   - Look for red error messages
   - Screenshot errors for support

3. **Verify npm packages**:
   ```bash
   npm list
   ```

4. **Clear cache and rebuild**:
   ```bash
   npm cache clean --force
   rm -rf dist node_modules package-lock.json
   npm install
   npm run dev
   ```

---

## 🎯 Best Practices

### For Teachers
- ✅ Start with Quick Starter lesson
- ✅ Use grade-level lessons sequentially
- ✅ Show code examples during live demo
- ✅ Encourage students to read full lesson plans
- ✅ Use assessment rubric for grading

### For IT/Deployment
- ✅ Use HTTPS for security (Vercel/Netlify do this)
- ✅ Monitor server performance
- ✅ Back up code regularly (GitHub)
- ✅ Test on multiple browsers
- ✅ Keep Node packages updated

### For Students
- ✅ Read learning objectives first
- ✅ Review code examples carefully
- ✅ Try hands-on activities
- ✅ Reference material list before starting
- ✅ Review assessment criteria

---

## 📚 Additional Resources

### Learning More
- React Docs: https://react.dev
- Material UI: https://mui.com
- Vite Guide: https://vitejs.dev
- Arduino Docs: https://arduino.cc

### Community Help
- Stack Overflow: tag "react" + "material-ui"
- Arduino Forum: https://forum.arduino.cc
- Reddit: r/robotics, r/arduino, r/learnprogramming

---

## ✅ Pre-Launch Checklist

Before sharing with teachers/students:

- [ ] Tested on desktop browser (Chrome, Firefox)
- [ ] Tested on tablet/mobile
- [ ] Searched all modules - results appear
- [ ] Clicked module details - dialogs open
- [ ] Expanded Arduino sections - content shows
- [ ] Clicked resource links - pages load
- [ ] Viewed code examples - syntax highlighted
- [ ] Checked on different networks
- [ ] Confirmed URLs are accessible
- [ ] Documented any issues
- [ ] Created backup of code

---

## 🚀 Launch Timeline

**Day 1**: Internal testing (IT/Teachers)
**Day 2**: Soft launch to early adopters
**Day 3**: Full launch to all teachers
**Week 2**: Gather feedback, plan improvements
**Week 3**: Deploy updates based on feedback

---

## 📞 Support Contact Info

For questions or issues:
1. Check QUICK_START.md first
2. Review COMPLETION_REPORT.md for details
3. Check browser console (F12) for errors
4. Screenshot errors for support requests
5. Contact: [Support Email/Phone]

---

**🎉 You're ready to launch!**

**Start with**: `npm run dev` and enjoy! 🚀

---

**Last Updated**: Today  
**Version**: 1.0  
**Status**: Ready for Production ✅
