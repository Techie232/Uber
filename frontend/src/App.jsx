import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import { UserDataContext } from './context/UserContext'
import Home from './pages/Home'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import UserLogout from './pages/UserLogout'

const App = () => {

   return (
      <div className=''>

         <Routes>
            <Route path='/' element={<Start />} />
            <Route path='/home' element={
               <UserProtectedWrapper>
                  <Home />
               </UserProtectedWrapper>
            } />
            <Route path='/login' element={<UserLogin />} />
            <Route path='/signup' element={<UserSignup />} />
            <Route path='/captain-login' element={<CaptainLogin />} />
            <Route path='/captain-signup' element={<CaptainSignup />} />
            <Route
               path='/logout'
               element={
                  <UserProtectedWrapper>
                     <UserLogout />
                  </UserProtectedWrapper>
               }
            />
         </Routes>

      </div >
   )
}

export default App