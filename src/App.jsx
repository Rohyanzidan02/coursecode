import './App.css'
// import components dari pages
import Home from './pages/Home'


// memanggil route dom
import  {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (

    // membuat enyambung ke path lain
    <BrowserRouter>
    <Routes>
     
      < Route path='/' element={<Home />} />


    </Routes>
    </BrowserRouter>
    
  )
}

export default App