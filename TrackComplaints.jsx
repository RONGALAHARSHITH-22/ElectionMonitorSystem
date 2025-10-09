import React, { useState } from 'react'

export default function TrackComplaints({ complaints }) {
  const [trackId, setTrackId] = useState('')
  const [trackMsg, setTrackMsg] = useState('')

  function trackComplaint() {
    const id = trackId.trim()
    const complaint = complaints.find(c => c.id === id)
    if (complaint) {
      setTrackMsg(`Status: ${complaint.status} | Role: ${complaint.role} | Type: ${complaint.issueType}`)
    } else {
      setTrackMsg('Complaint ID not found or voter ID not working properly.')
    }
  }

  return (
    <section id="track" className="card hidden">
      <h2>Track Your Complaint</h2>
      <label htmlFor="trackId">Enter Complaint ID:</label>
      <input type="text" id="trackId" placeholder="Complaint ID" value={trackId} onChange={e => setTrackId(e.target.value)} />
      <button type="button" onClick={trackComplaint}>Track</button>
      <div id="trackMsg">{trackMsg}</div>
      <div className="complaints-list" id="trackComplaints">
        {complaints.map(c => (
          <div key={c.id} className="complaint-item">
            <strong>ID: {c.id} | Role: {c.role} | Type: {c.issueType} | Status: {c.status}</strong>
            <p>{c.details}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
