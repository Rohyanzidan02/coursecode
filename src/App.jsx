import './App.css'
// import components dari pages
import Home from './pages/Home'
import Loading from './pages/Loading'


// memanggil route dom
import  {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (

    // membuat enyambung ke path lain
    <BrowserRouter>
    <Routes>
     
      < Route path='/home' element={<Home />} />
      < Route path='/' element={<Loading/>} />


    </Routes>
    </BrowserRouter>
    
  )
}

export default App