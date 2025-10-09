import React, { useState } from 'react';

function VoterVerification() {
  const [voterId, setVoterId] = useState('');
  const [verifyMsg, setVerifyMsg] = useState('');

  const verifyVoter = () => {
    const id = voterId.trim();
    if (!id) {
      setVerifyMsg('Please enter a Voter ID.');
      return;
    }

    if (id.length >= 4) {
      setVerifyMsg(`Voter ID ${id} verified.`);
    } else {
      setVerifyMsg(`Voter ID ${id} not found.`);
    }
  };

  return (
    <section id="verify" className="card hidden">
      <h2>Voter Verification</h2>
      <label htmlFor="voterId">Enter Voter ID:</label>
      <input
        type="text"
        id="voterId"
        placeholder="Enter your ID"
        value={voterId}
        onChange={(e) => setVoterId(e.target.value)}
      />
      <button type="button" onClick={verifyVoter}>
        Verify
      </button>
      <p id="verifyMsg">{verifyMsg}</p>
    </section>
  );
}

export default VoterVerification;
