import React, { useEffect } from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import AdminPage from './Components/AdminPage';
import Login from './Components/Login';
import LoginPage from './Components/LoginPage';
import StrucureAndDetails from './Components/StrucureAndDetails';
import GetQuote from './Components/GetQuote';
import FilldetailsPage from './Components/FilldetailsPage';
import PaymentPage from './Components/PaymentComponent/PaymentPage';
import {gapi} from 'gapi-script';
import Profile from './Components/Profile';
import { ToastContainer } from 'react-toastify';
import PaymentSuccessPage from './Components/PaymentComponent/PaymentSuccess';
import AdminHomePage from './Components/Admin/AdminHome';
import CustomerManagementPage from './Components/Admin/CustomerManagement';
import PolicyManagementPage from './Components/Admin/PolicyManagement';
import AdminPaymentsPage from './Components/Admin/AdminPayments';
import AdminClaimsPage from './Components/Admin/AdminClaims';
import AdminNotificationsPage from './Components/Admin/AdminNotifications';
import AdminLoginCredentials from './Components/Admin/AdminLoginCredentials';
import PremiumAccess from './Components/Admin/AdminPremium';
import 'react-toastify/dist/ReactToastify.css';
import ContextMain from './Components/UseContext/ContextMain';

const clientId = "246541673533-e90kj0pumgndrmt51j27v853d3pkon00.apps.googleusercontent.com";

function App() {


  useEffect(() => {
    function start() {
    gapi.client.init({
    clientid: clientId,
    scope: ""
    })
  };
   
    gapi.load('client:auth2', start);
});


  return (
    <div >
      <Router>
        <ContextMain>
        <div>
          <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route exact path="/login" element={<LoginPage/>}/>
            <Route exact path="/property" element={<StrucureAndDetails/>}/>
            <Route path="/admin" element={<AdminPage/>}/>
            <Route path="/getQuote" element={<GetQuote/>}/>
            <Route path="/fill" element={<FilldetailsPage/>}/>
            <Route path="/payment" element={<PaymentPage/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/paymentsuccess" element={<PaymentSuccessPage/>}/>
            <Route path="/adminhome" element={<AdminHomePage/>}/>
            <Route path="/admincustomer" element={<CustomerManagementPage/>}/>
            <Route path="/adminpolicy" element={<PolicyManagementPage/>}/>
            <Route path="/adminpayments" element={<AdminPaymentsPage/>}/>
            <Route path="/adminclaims" element={<AdminClaimsPage/>}/>
            <Route path="/adminnotifications" element={<AdminNotificationsPage/>}/>
            <Route path="/adminlogin" element={<AdminLoginCredentials/>}/>
            <Route path="/adminpremium" element={<PremiumAccess/>}/>
          </Routes>
        </div>
        </ContextMain>
      </Router>
    <ToastContainer autoClose={5000}/>
    </div>
  )
}

export default App

