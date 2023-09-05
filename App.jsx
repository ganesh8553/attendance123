import React from 'react'
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import '/node_modules/primeflex/primeflex.css';
import Login from './Components/Login';
import "./app.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Teachers from './Components/Teachers';
import Student from './Components/Student';
import Admin from './Components/Admin/Admin';
import Reports from './Components/Reports';
import StudentOnly from './Components/StudentOnly';

const App = () => {
  return (
    <div>
       <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/teacher' element={<Teachers />} />
            <Route path='/reports' element={<Reports />} />
            <Route path='/student' element={<Student />} />
            <Route path='/studentOnly' element={<StudentOnly />} />


        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App