import './App.css';
import React, { Suspense } from 'react'
import { Routes, Route } from "react-router-dom";
import { ProtectedRouter, PublicRouter } from 'routers'
const NotFound = React.lazy(() => import('pages/NotFound'));
const Home = React.lazy(() => import('pages/home'));
const Profile = React.lazy(() => import('pages/profile'));
const Login = React.lazy(() => import('components/login'));
const Cartpage = React.lazy(() => import('pages/cartpage'));


function App() {
  return (
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<PublicRouter />}>
            <Route path="/" element={<Login />} />
          </Route>
          <Route element={<ProtectedRouter />}>
            <Route path="/home" element={<Home />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/cart" element={<Cartpage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

  );
}

export default App;
