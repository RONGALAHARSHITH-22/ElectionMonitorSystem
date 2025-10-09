import React, { useState } from 'react'

export default function ReportIssue({ onSubmit }) {
  const [role, setRole] = useState('')
  const [issueType, setIssueType] = useState('')
  const [details, setDetails] = useState('')

  function submit(e) {
    e.preventDefault()
    if (!role || !issueType || !details) return
    onSubmit({ role, issueType, details })
    setRole('')
    setIssueType('')
    setDetails('')
  }

  return (
    <section id="report" className="card hidden">
      <h2>Report an Election Issue</h2>
      <form id="issueForm" onSubmit={submit}>
        <label htmlFor="role">Your Role:</label>
        <select id="role" required value={role} onChange={e => setRole(e.target.value)}>
          <option value="">Select</option>
          <option>Citizen/Voter</option>
          <option>Observer</option>
          <option>Election Official</option>
        </select>

        <label htmlFor="issueType">Issue Type:</label>
        <select id="issueType" required value={issueType} onChange={e => setIssueType(e.target.value)}>
          <option value="">Select</option>
          <option>Fraud or Malpractice</option>
          <option>Misinformation / Fake News</option>
          <option>Lack of Transparency</option>
          <option>Duplicate/Invalid Voters</option>
          <option>Other</option>
        </select>

        <label htmlFor="details">Details:</label>
        <textarea id="details" rows="4" required value={details} onChange={e => setDetails(e.target.value)}></textarea>

        <button type="submit">Submit Complaint</button>
      </form>
    </section>
  )
}
