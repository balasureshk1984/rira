import React, { useState } from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Typography, Card, CardContent, Box, Dialog, DialogTitle, DialogContent, DialogActions, Button, Chip, Link as MuiLink, Stack } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function SyllabusList({ modules }){
  const [selected, setSelected] = useState(null)

  if(!modules || modules.length === 0) return <Typography color="text.secondary">No modules match your search.</Typography>

  return (
    <>
      <Box sx={{display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(320px,1fr))', gap:3}}>
        {modules.map(m => (
          <Card key={m.id} sx={{
            height:'100%',
            background: 'linear-gradient(135deg, rgba(26,31,58,0.9) 0%, rgba(10,14,39,0.8) 100%)',
            border: '1px solid rgba(0,217,255,0.15)',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 12px 48px rgba(0,217,255,0.2)',
              borderColor: 'rgba(0,217,255,0.5)',
              background: 'linear-gradient(135deg, rgba(26,31,58,1) 0%, rgba(10,14,39,0.9) 100%)'
            }
          }}>
            <CardContent sx={{height:'100%', display:'flex', flexDirection:'column', pb:1}}>
              <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', mb:1}}>
                <Typography variant="h6" sx={{fontWeight:700, color:'#00d9ff', flex:1}}>{m.title}</Typography>
                {m.duration && <Chip label={m.duration} size="small" sx={{ml:1, background:'rgba(0,217,255,0.15)', color:'#00d9ff'}} />}
              </Box>

              <Typography color="text.secondary" sx={{mb:2, fontSize:'0.9rem', lineHeight:1.5}}>{m.description}</Typography>

              <Stack direction="row" spacing={0.5} sx={{mb:2, flexWrap:'wrap', gap:0.5}}>
                {(m.prerequisites || []).slice(0,2).map((p,i) => (
                  <Chip key={i} label={p} size="small" variant="outlined" sx={{borderColor:'rgba(255,107,157,0.5)', color:'#ff6b9d', fontSize:'0.75rem'}} />
                ))}
              </Stack>

              <Accordion sx={{mt:'auto', background:'transparent'}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color:'#00d9ff'}} />} sx={{minHeight:36, p:0, '&.Mui-expanded':{minHeight:36}}}>
                  <Typography sx={{color:'#00d9ff', fontSize:'0.9rem', fontWeight:600}}>Topics & Details</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{pt:1, pb:0}}>
                  <ul style={{margin:'0.5rem 0', paddingLeft:'1.5rem'}}>
                    {m.topics.map((t, i) => (
                      <li key={i}><Typography variant="body2">{t}</Typography></li>
                    ))}
                  </ul>
                </AccordionDetails>
              </Accordion>

              {m.activity && (
                <Typography sx={{mt:1.5, fontSize:'0.85rem', color:'#d1d5db'}}><strong style={{color:'#10b981'}}>Activity:</strong> {m.activity}</Typography>
              )}

              <Box sx={{display:'flex', justifyContent:'flex-end', mt:2, gap:1}}>
                <Button variant="outlined" size="small" onClick={() => setSelected(m)} sx={{textTransform:'none', borderColor:'rgba(0,217,255,0.5)', color:'#00d9ff', '&:hover':{borderColor:'#00d9ff', background:'rgba(0,217,255,0.1)'}}}>View details</Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Dialog open={Boolean(selected)} onClose={() => setSelected(null)} maxWidth="md" fullWidth
        PaperProps={{sx:{background:'linear-gradient(135deg, rgba(26,31,58,0.95) 0%, rgba(10,14,39,0.9) 100%)', border:'1px solid rgba(0,217,255,0.2)'}}}
      >
        {selected && (
          <>
            <DialogTitle sx={{background:'linear-gradient(90deg, rgba(0,217,255,0.1), transparent)', borderBottom:'1px solid rgba(0,217,255,0.2)', py:2}}>
              <Typography variant="h6" sx={{fontWeight:700}}>
                {selected.title}
                <Typography component="span" variant="caption" sx={{ml:1, color:'#00d9ff'}}>
                  {selected.duration}
                </Typography>
              </Typography>
            </DialogTitle>
            <DialogContent dividers sx={{background:'transparent'}}>
              <Box sx={{my:2}}>
                <Typography variant="subtitle1" sx={{color:'#00d9ff', fontWeight:700, mb:1}}>Description</Typography>
                <Typography color="text.secondary">{selected.description}</Typography>
              </Box>

              {selected.objectives && (
                <Box sx={{my:2}}>
                  <Typography variant="subtitle1" sx={{color:'#10b981', fontWeight:700, mb:1}}>Learning Objectives</Typography>
                  <ul style={{paddingLeft:'1.5rem'}}>
                    {selected.objectives.map((o,i) => <li key={i}><Typography variant="body2">{o}</Typography></li>)}
                  </ul>
                </Box>
              )}

              {selected.outcomes && (
                <Box sx={{my:2}}>
                  <Typography variant="subtitle1" sx={{color:'#f59e0b', fontWeight:700, mb:1}}>Expected Outcomes</Typography>
                  <ul style={{paddingLeft:'1.5rem'}}>
                    {selected.outcomes.map((o,i) => <li key={i}><Typography variant="body2">{o}</Typography></li>)}
                  </ul>
                </Box>
              )}

              {selected.prerequisites && (
                <Box sx={{my:2}}>
                  <Typography variant="subtitle1" sx={{color:'#ff6b9d', fontWeight:700, mb:1}}>Prerequisites</Typography>
                  <Stack direction="row" spacing={1} sx={{mt:1, flexWrap:'wrap', gap:1}}>
                    {selected.prerequisites.map((p,i) => <Chip key={i} label={p} sx={{background:'rgba(255,107,157,0.15)', color:'#ff6b9d'}} />)}
                  </Stack>
                </Box>
              )}

              {selected.topics && (
                <Box sx={{my:2}}>
                  <Typography variant="subtitle1" sx={{color:'#00d9ff', fontWeight:700, mb:1}}>Topics Covered</Typography>
                  <ul style={{paddingLeft:'1.5rem'}}>
                    {selected.topics.map((t,i) => <li key={i}><Typography variant="body2">{t}</Typography></li>)}
                  </ul>
                </Box>
              )}

              {selected.resources && (
                <Box sx={{my:2}}>
                  <Typography variant="subtitle1" sx={{color:'#10b981', fontWeight:700, mb:1}}>Resources</Typography>
                  <ul style={{paddingLeft:'1.5rem'}}>
                    {selected.resources.map((r,i) => (
                      <li key={i}><MuiLink href={r.url} target="_blank" rel="noopener" sx={{color:'#00d9ff'}}>{r.title}</MuiLink></li>
                    ))}
                  </ul>
                </Box>
              )}
            </DialogContent>
            <DialogActions sx={{borderTop:'1px solid rgba(0,217,255,0.2)', p:2}}>
              <Button onClick={() => setSelected(null)} variant="contained" sx={{textTransform:'none'}}>Close</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  )
}
