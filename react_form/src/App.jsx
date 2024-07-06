import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Məlumatlar from './components/məlumatlar'
import Form from './components/form'

function App() {

  const [form, setForm] = useState({ ad: "", şəhər: "", təvəllüd: "", rəng: "", address: "" })

  const handleCange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    console.log(form)
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form form={form} handleCange={handleCange} />}> </Route>
        <Route path="/məlumatlar" element={<Məlumatlar props={form} />}> </Route>
      </Routes>
    </div>
  )
}

export default App