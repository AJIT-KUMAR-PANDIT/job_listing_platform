import './App.css';
import Register from './Pages/Register/Register';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <>
      <Register />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          {/* <Route path="/login" element={<Login/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
