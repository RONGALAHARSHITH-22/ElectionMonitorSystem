import React from 'react'

export default function Nav({ onNavigate }) {
  return (
    <nav>
      <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('dashboard') }}>Dashboard</a>
      <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('report') }}>Report Issue</a>
      <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('results') }}>Transparency Hub</a>
      <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('verify') }}>Voter Verification</a>
      <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('track') }}>Track Complaints</a>
    </nav>
  )
}
