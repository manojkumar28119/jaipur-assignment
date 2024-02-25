import {Route, Routes,BrowserRouter} from 'react-router-dom'
import './App.css';
import SignUpForm from "./components/SignUpForm"
import Home  from './components/Home'

const App = () => (
  <BrowserRouter>
   <Routes>
    <Route path="/signup" element={<SignUpForm/>} />
    <Route path = "/" element = {<Home/>} />
   </Routes>
   </BrowserRouter>
)

export default App;
