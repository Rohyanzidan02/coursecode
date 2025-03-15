import { useState } from 'react';
import '../styles/Navbar.css'

import { FaBars } from "react-icons/fa6";
import { AiOutlineCloseSquare } from "react-icons/ai";

import icon from '../asset/logo.png'

// import react hash link
import {HashLink} from 'react-router-hash-link';
import { Link } from 'react-router-dom';



function Navbar() {
    
    // mengatur responsif menu navbar
    const [statusTampil, setStatusTampil] = useState('')

// memberikan printah function
    function tampilMenu(){
        if(statusTampil == '') {
            setStatusTampil('tampil')
        }
        else 
        setStatusTampil('')
    }
    
    
  return (
    <nav>
        <div className="wrapper">
            <div className="logo">
                <HashLink to = "/"><img src= {icon} /></HashLink>
            </div>
            <button onClick={tampilMenu}>
    {/* bergantian icon nav */}

                {
                    statusTampil ==''? (<FaBars />) : (<AiOutlineCloseSquare />)
                }
                
            </button>
        <div className={ `menu ${statusTampil}`} onClick={tampilMenu}>
                <ul>
                    <li><HashLink to="">Course</HashLink></li>
                    <li>< HashLink to="">about </HashLink></li>
                    <li><Link to="">free</Link></li>
                    <li><Link to=""></Link></li>
                </ul>
            </div>
        </div>

    </nav>

    
  )
}

export default Navbar