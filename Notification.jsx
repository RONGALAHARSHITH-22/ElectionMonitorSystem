import React from 'react'

export default function Notification({ message }) {
  if (!message) return null
  return (
    <div className="notification" id="notification" style={{ display: 'block' }}>
      {message}
    </div>
  )
}
