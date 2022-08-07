import './App.css';
import React, { Suspense } from 'react'
import { Routes, Route } from "react-router-dom";
import { ProtectedRouter, PublicRouter } from 'routers'
const NotFound = React.lazy(() => import('pages/NotFound'));
const Home = React.lazy(() => import('pages/home'));
const Profile = React.lazy(() => import('pages/profile'));
const Login = React.lazy(() => import('components/login'));
const Cartpage = React.lazy(() => import('pages/cartpage'));
const PurchasedHistory = React.lazy(() => import('pages/history'));


function App() {
  return (
      <Suspense fallback={<div className='loader-wapper'><div className="lds-facebook"><div></div><div></div><div></div></div></div>}>
        <Routes>
          <Route element={<PublicRouter />}>
            <Route path="/" element={<Login />} />
          </Route>
          <Route element={<ProtectedRouter />}>
            <Route path="/home" element={<Home />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/cart" element={<Cartpage />} />
            <Route path="/product/purchase/history" element={<PurchasedHistory />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

  );
}

export default App;
