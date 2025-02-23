import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import './App.css'
import '@fontsource-variable/montserrat';
import {Toaster} from "react-hot-toast"
import NewUserForm from './pages/users/auth/createAccount';
import AdminDashboardHome from './pages/admin/dashboard/home';
import "antd/dist/reset.css"; 
import '@fontsource-variable/inter';
const AdminLoginPage  = React.lazy(() => import("./pages/admin/auth/login"))
const FinancialManagement = React.lazy(() => import("./pages/admin/dashboard/financial_management"))

function App() {

  return (
    <Router>
     <Toaster />

      <Routes>
        
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/new-user" element={<NewUserForm />} />

        <Route path="/admin/dashboard" element={<AdminDashboardHome />} />
        <Route path="/admin/dashboard" element={<AdminDashboardHome />} />
        <Route path="/admin/dashboard/financial-management" element={<FinancialManagement />} />



      </Routes>
    </Router>
  )
}

export default App
