import './App.css';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import JobFinder from './Pages/JobFinder/JobFinder';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/jobs" element={<JobFinder/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
