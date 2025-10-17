import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ParallaxCard from './ParallaxCard';
import './ParallaxCard.css'; // Make sure to import the CSS

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#e9ecef' }}>
      <ParallaxCard
        title="Dynamic Feature"
        content="Experience the smooth, interactive 3D tilt and subtle parallax shift in real-time. This elevates any UI."
      />
    </div>
  );
}

export default App;