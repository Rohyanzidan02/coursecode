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
                <HashLink to = "#home"><img src= {icon} /></HashLink>
            </div>
            <button onClick={tampilMenu}>
    {/* bergantian icon nav */}

                {
                    statusTampil ==''? (<FaBars />) : (<AiOutlineCloseSquare />)
                }
                
            </button>
        <div className={ `menu ${statusTampil}`} onClick={tampilMenu}>
                <ul>
                    <li><HashLink to="#course">Course</HashLink></li>
                    <li>< HashLink to="#tutors">Pemateri </HashLink></li>
                    <li>< HashLink to="#partners">partners </HashLink></li>
                </ul>
            </div>
        </div>

    </nav>

    
  )
}

export default Navbar