import React, { useState } from 'react'
import { Routes, Route, Link as RouterLink, useNavigate } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Container, Box, Button, Tabs, Tab, TextField } from '@mui/material'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import HomeIcon from '@mui/icons-material/Home'

import SyllabusList from './components/SyllabusList'
import sampleData from './data/syllabus.json'
import Tutorial from './pages/Tutorial'

function Home(){
  const levels = Object.keys(sampleData)
  const [selectedLevel, setSelectedLevel] = useState(levels[0] || 'beginner')
  const [query, setQuery] = useState('')

  const modules = sampleData[selectedLevel] || []
  const filtered = modules.filter(m =>
    m.title.toLowerCase().includes(query.toLowerCase()) ||
    m.description.toLowerCase().includes(query.toLowerCase()) ||
    m.topics.join(' ').toLowerCase().includes(query.toLowerCase())
  )

  const handleTabChange = (e, newValue) => {
    setSelectedLevel(newValue)
    setQuery('')
  }

  const levelColors = {
    beginner: { bg: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', color: '#10b981' },
    intermediate: { bg: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.2)', color: '#f59e0b' },
    advanced: { bg: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', color: '#ef4444' }
  }

  return (
    <Box sx={{minHeight:'100vh', background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0a0e27 100%)'}}>
      <Container maxWidth="lg" sx={{py:5}}>
        <Box sx={{mb:4}}>
          <Typography variant="h3" sx={{fontWeight:700, color:'#00d9ff', textShadow:'0 0 10px rgba(0,217,255,0.3)'}}>
            🤖 Arduino Robotics Academy
          </Typography>
          <Typography variant="subtitle1" sx={{color:'#a0e7e5', mt:1, fontWeight:500}}>Complete Electronics & Robotics Training for Students (Grades 6-10)</Typography>
        </Box>

        <Box sx={{display:'flex', gap:2, mb:3, flexWrap:'wrap'}}>
          <TextField
            label="Search modules"
            variant="outlined"
            size="small"
            value={query}
            onChange={e => setQuery(e.target.value)}
            sx={{flex:1, minWidth:250}}
          />
          <Typography sx={{alignSelf:'center', color:'text.secondary', fontWeight:700}}>
            {filtered.length} module{filtered.length !== 1 ? 's' : ''}
          </Typography>
        </Box>

        <Box sx={{...levelColors[selectedLevel], borderRadius:2, p:2, mb:3}}>
          <Tabs
            value={selectedLevel}
            onChange={handleTabChange}
            variant="fullWidth"
            sx={{mb:1}}
          >
            <Tab label="🟢 Beginner (60 hrs)" value="beginner" />
            <Tab label="🟡 Intermediate (70 hrs)" value="intermediate" />
            <Tab label="🔴 Advanced (75 hrs)" value="advanced" />
          </Tabs>
        </Box>

        <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', mb:3}}>
          <Typography variant="h5" sx={{color: levelColors[selectedLevel].color, fontWeight:700}}>
            {selectedLevel.charAt(0).toUpperCase() + selectedLevel.slice(1)} Level
          </Typography>
        </Box>
        <SyllabusList modules={filtered} />
      </Container>
    </Box>
  )
}

export default function App(){
  const navigate = useNavigate()

  return (
    <Box sx={{minHeight:'100vh', background:'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)'}}>
      <AppBar position="sticky" sx={{background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)', boxShadow: '0 4px 20px rgba(0,217,255,0.2)'}}>
        <Toolbar sx={{display:'flex', justifyContent:'space-between', py:1}}>
          <Box sx={{display:'flex', alignItems:'center', gap:1.5}}>
            <MenuBookIcon sx={{fontSize:28, color:'#00d9ff'}} />
            <Typography variant="h6" component="div" sx={{fontWeight:700, letterSpacing:-0.5, color:'#00d9ff', textShadow:'0 0 10px rgba(0,217,255,0.3)'}}>
              🤖 Arduino Academy
            </Typography>
          </Box>

          <Box sx={{display:'flex', gap:1}}>
            <Button startIcon={<HomeIcon />} component={RouterLink} to="/" sx={{textTransform:'none', color:'#ffffff', fontWeight:500, '&:hover': {color:'#00d9ff'}}}>Home</Button>
            <Button startIcon={<MenuBookIcon />} component={RouterLink} to="/tutorial" sx={{textTransform:'none', color:'#ffffff', fontWeight:500, '&:hover': {color:'#00d9ff'}}}>Tutorial &amp; Guides</Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutorial" element={<Tutorial />} />
      </Routes>

      <Box component="footer" sx={{background:'rgba(10,14,39,0.8)', borderTop:'1px solid rgba(0,217,255,0.1)', py:3, mt:5, textAlign:'center'}}>
        <Typography variant="caption" color="text.secondary">
          © 2025 Robotics Academy | Comprehensive training for students Grades 6–9 and advanced Arduino programming
        </Typography>
      </Box>
    </Box>
  )
}
