import React from 'react';
import ReactDOM from 'react-dom/client';
import Signin from './components/Signin';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Signin/>}></Route>
    <Route path='/app' element={<App/>}></Route>
    </Routes>
    </BrowserRouter>
    </React.StrictMode>
    ,document.getElementById('root')
);

