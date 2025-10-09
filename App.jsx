import React, { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Dashboard from './components/Dashboard'
import ReportIssue from './components/ReportIssue'
import TransparencyHub from './components/TransparencyHub'
import TrackComplaints from './components/TrackComplaints'
import Notification from './components/Notification'
import VoterVerification from './voterverfication.jsx'

function App() {
  const [section, setSection] = useState('dashboard')
  const [complaints, setComplaints] = useState(() => JSON.parse(localStorage.getItem('complaints')) || [])
  const [notification, setNotification] = useState('')

  useEffect(() => {
    localStorage.setItem('complaints', JSON.stringify(complaints))
  }, [complaints])

  function handleNavigate(id) {
    setSection(id)
  }

  function handleSubmitComplaint({ role, issueType, details }) {
    const id = 'CMP' + Math.floor(Math.random() * 10000)
    const complaint = { id, role, issueType, details, status: 'Pending' }
    setComplaints(prev => [...prev, complaint])
    setNotification(`Complaint submitted! ID: ${id}`)
    setSection('dashboard')
    setTimeout(() => setNotification(''), 2000)
  }

  return (
    <div>
      <Header />
      <Nav onNavigate={handleNavigate} />

      <main>
        <div style={{ padding: 20 }}>
          {section === 'dashboard' && <Dashboard />}
          {section === 'report' && <ReportIssue onSubmit={handleSubmitComplaint} />}
          {section === 'results' && <TransparencyHub />}
          {section === 'verify' && <VoterVerification />}
          {section === 'track' && <TrackComplaints complaints={complaints} />}
        </div>
      </main>

      <Notification message={notification} />
    </div>
  )
}

export default App
