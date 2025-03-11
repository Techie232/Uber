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
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
import CaptainLogout from './pages/CaptainLogout'

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
            <Route
               path='/captain-home'
               element={
                  <CaptainProtectWrapper>
                     <CaptainHome />
                  </CaptainProtectWrapper>
               }
            />
            <Route
               path='/captain-logout'
               element={
                  <CaptainProtectWrapper>
                     <CaptainLogout />
                  </CaptainProtectWrapper>
               }
            />
         </Routes>

      </div >
   )
}

export default App