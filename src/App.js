import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './routes';
import PrivateRoute from './components/PrivateRoute';

function App() {

  const user = useSelector((state) => JSON.parse(state.auth.user));

  return (
    <div className='bg-dark min-vh-100'>
      <ToastContainer position='top-right' />
      <Router>
        <Header />
        <Routes>
          {
            routes.map(route => (
              <Route
                path={route.path}
                element={
                  (route.auth && !user) ?
                    <PrivateRoute>
                      <route.element />
                    </PrivateRoute>
                    :
                    <route.element />
                }
              />
            ))}
        </Routes>
      </Router>

      {/* 
      <button onClick={handleAddBlog}>Added</button>

      <hr/>

      <div dangerouslySetInnerHTML={{__html: text}}></div> */}
    </div>
  );
}

export default App;
