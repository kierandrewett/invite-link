import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  
  const urlCode = new URL(window.location.href).searchParams.get("code");
  
  return (
    <main>
      <script>window.location.href = 'https://discord.gg/{urlCode}'</script>
    </main>
  );
}

export default App;
