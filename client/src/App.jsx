import { Fragment, useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Base from './components/layout/Base'
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { useSelector } from "react-redux";
import axios from 'axios';
import './App.css'

// axios.defaults.withCredentials = true;  // Allow cookies to be sent with requests

function App() {
  const [count, setCount] = useState(0)
  const { data, status, error, isAuthenticated } = useSelector(state => state.user);

  return (
    <Fragment>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={
          <ProtectedRoute Component={Base} /> 
        } />
      </Routes>
    </Fragment>
  )
}

export default App
