import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import './App.css'
import '@fontsource-variable/montserrat';
import {Toaster} from "react-hot-toast"
import NewUserForm from './pages/users/auth/createAccount';
import AdminDashboardHome from './pages/admin/dashboard/home';

const AdminLoginPage  = React.lazy(() => import("./pages/admin/auth/login"))

function App() {

  return (
    <Router>
     <Toaster />

      <Routes>
        
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/new-user" element={<NewUserForm />} />

        <Route path="/admin/dashboard" element={<AdminDashboardHome />} />



      </Routes>
    </Router>
  )
}

export default App
