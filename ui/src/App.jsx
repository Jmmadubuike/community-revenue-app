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
const EventDues = React.lazy(() => import("./pages/admin/dashboard/event-dues"))
const AdminUserPage = React.lazy(() => import("./pages/admin/dashboard/usermanagment"))
const UserLoginPage = React.lazy(() => import("./pages/users/auth/login") )
const UserDashboardHome = React.lazy(() => import("./pages/users/dashboard/home") )
const UserPaymentPage = React.lazy(() => import("./pages/users/dashboard/paymentPage"))
const IDNLoginPage = React.lazy(() => import("./pages/users/auth/idn"))


function App() {

  return (
    <Router>
     <Toaster />

      <Routes>
        
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/user/login" element={<UserLoginPage />} />
        <Route path="/user/idn" element={<IDNLoginPage />} />


        <Route path="/new-user" element={<NewUserForm />} />

        <Route path="/admin/dashboard" element={<AdminDashboardHome />} />
        <Route path="/admin/dashboard" element={<AdminDashboardHome />} />
        <Route path="/admin/dashboard/financial-management" element={<FinancialManagement />} />
        <Route path="/admin/dashboard/event-dues" element={<EventDues />} />
        <Route path="/admin/dashboard/users" element={<AdminUserPage />} />



        <Route path="/user/dashboard" element={<UserDashboardHome />} />
        <Route path="/user/dashboard/payments" element={<UserPaymentPage />} />






      </Routes>
    </Router>
  )
}

export default App
