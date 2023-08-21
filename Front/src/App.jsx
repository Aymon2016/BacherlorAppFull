import Homepage from "./page/Homepage/Homepage"
import './app.css'
import Layout from "./page/Layout"
import { Route, Routes } from 'react-router-dom';
import MillPage from "./page/Millpage/MillPage";
import MemberPage from "./page/Memberpage/memberpage";
import NoticePage from "./page/Noticepage/NoticePage";
import SingleNoticeShow from "./page/Noticepage/SingleNoticeShow";
import AddData from "./page/DataAddPage/index";
import Login from "./page/loginPage/login";
import Signup from "./page/loginPage/signup";
import "bootstrap/dist/css/bootstrap.min.css"

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setToken } from './redux/reducer/authSlice';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Notice from "./page/DataAddPage/noticePage";
import Mills from "./page/DataAddPage/MillPage";
import Products from "./page/DataAddPage/ProductPage";
import Users from "./page/DataAddPage/RegisterPage";
import jwtDecode from "jwt-decode";

function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [admin, setAdmin] = useState('')

  const URL = import.meta.env.VITE_backendurl

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    if (token) {
      const { role } = jwtDecode(token);
      setAdmin(role)

      // Call your API to verify the token's validity
      axios.get(`${URL}/api/v1/users/authenticate`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token,

        }
      }).then((response) => {
        if (response.status === 200) {
          dispatch(setToken(token));
          localStorage.setItem('userToken', token);

        }
      })
        .catch((error) => {
          localStorage.removeItem('userToken');
          navigate('/login');
        });
    } else {
      navigate('/login')
    }

  });


  return (

    <Layout>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/millpage" element={<MillPage />} />
        <Route path="/memberpage" element={<MemberPage />} />
        <Route path="/noticepage" element={<NoticePage />} />
        <Route path="/singlenotice" element={<SingleNoticeShow />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* /// for admin page */}
        {admin === 'admin' ? (
          <>
            <Route path="/data" element={<AddData />} />
            <Route path="/addnotice" element={<Notice />} />
            <Route path="/addmill" element={<Mills />} />
            <Route path="/addproducts" element={<Products />} />
            <Route path="/addusers" element={<Users />} />
          </>
        ) : ''
        }

      </Routes>
    </Layout>

  )
}

export default App
