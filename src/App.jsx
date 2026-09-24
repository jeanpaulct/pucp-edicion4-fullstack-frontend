import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h1>PUCP Despliegue en Vivo 🚀</h1>
      <div style={{ padding: '20px', border: '1px solid #ccc', display: 'inline-block', borderRadius: '8px' }}>
        <h2>Clicks: {count}</h2>
        <button 
          onClick={() => setCount(count + 1)}
          style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        >
          ¡Suma en 1!
        </button>
      </div>
    </div>
  )
}

export default App