import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './components/home/Home'
import List from './components/list/List';
import Hotel from './components/hotel/Hotel';
import Login from './pages/login/Login';
function App() {
  return (
    <Routes>
        <Route exact strict path="/" element={ <Home/> } />
        <Route exact strict path="/hotels" element = {<List/>}></Route>
        <Route exact strict path="/hotels/:id" element = {<Hotel/>}></Route>
        <Route exact strict path="/login" element={ <Login/> } />
    </Routes>
  );
}

export default App;
