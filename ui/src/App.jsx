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
const HomePages = React.lazy(() => import("./pages/home"))
const UnauthorizedPage = React.lazy(()=> import("./pages/unautorized"))
const AboutPage = React.lazy(()=> import("./pages/about"))
const ProjetcPage = React.lazy(()=> import("./pages/project"))
const ContactPage = React.lazy(()=> import("./pages/contact"))
const GallaryPage = React.lazy(()=> import("./pages/gallary"))
const ExecutivePage = React.lazy(()=> import("./pages/executive"))
const PresidentGeneralsPage = React.lazy(() => import("./pages/president-generals"))
const PastLeadersPage = React.lazy(() => import("./pages/past-leaders"))






function App() {

  return (
    <Router>
      <div className='overflow-x-hidden'>
     <Toaster />

      <Routes>
      <Route path="/" element={<HomePages />} />
        
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
        <Route path="/unautorized" element={<UnauthorizedPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project" element={<ProjetcPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallary" element={<GallaryPage />} />
        <Route path="/executive" element={<ExecutivePage />} />
        <Route path="/president-generals" element={<PresidentGeneralsPage />} />
        <Route path="/past-leaders" element={<PastLeadersPage />} />











      </Routes>
      </div>
    </Router>
  )
}

export default App
