import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import {Route,Routes} from 'react-router-dom'
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Store from "./pages/Store"
import Cart from "./pages/Cart"
import Myaccount from "./pages/myAccount"


const App = () => {
  return (
    <div>
      <Navbar/>
     <Routes>
     <Route exact path="/" element={<Login/>}/>
     <Route exact path="/Signup" element={<Signup/>}/>
     <Route exact path="/Store" element={<Store/>}/>
     <Route exact path="/Cart" element={<Cart/>}/>
     <Route exact path="/Myaccount" element={<Myaccount/>}/>
     
     </Routes>
      <Footer/>
    </div>
  )
}

export default App