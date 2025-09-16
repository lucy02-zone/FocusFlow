import { useState } from 'react';

function BlockerSettings({ onSave }) {
  const [blockedSites, setBlockedSites] = useState('');

  const handleSave = () => {
    const sites = blockedSites.split(',').map(site => site.trim());
    onSave(sites);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter sites (comma separated)"
        value={blockedSites}
        onChange={(e) => setBlockedSites(e.target.value)}
      />
      <button onClick={handleSave}>Save Block List</button>
    </div>
  );
}

export default BlockerSettings;
