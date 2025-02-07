import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import './App.css'
// Supports weights 100-900
import '@fontsource-variable/montserrat';
import {Toaster} from "react-hot-toast"

const AdminLoginPage  = React.lazy(() => import("./pages/admin/auth/login"))

function App() {

  return (
    <Router>
     <Toaster />

      <Routes>
        
        <Route path="/admin/login" element={<AdminLoginPage />} />


      </Routes>
    </Router>
  )
}

export default App
