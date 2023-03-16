import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import './fontawesome/css/fontawesome.css';
import './fontawesome/css/all.css';
import './css/style.css';
import LoginForm from './LoginForm';
import ChatView from  './ChatView';

const App = () => {
  return (
    <div className="appContainer">
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LoginForm/>}></Route>
          <Route path="/chat" element={<ChatView/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
