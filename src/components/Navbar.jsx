import { useState } from 'react';
import '../styles/Navbar.css';
import { FaBars } from "react-icons/fa6";
import { AiOutlineCloseSquare } from "react-icons/ai";
import icon from '../asset/logo.png';
import { HashLink } from 'react-router-hash-link';

function Navbar() {
    // Mengatur status tampilan menu navbar
    const [statusTampil, setStatusTampil] = useState('');

    // Fungsi untuk menampilkan atau menyembunyikan menu
    function tampilMenu() {
        setStatusTampil(statusTampil === '' ? 'tampil' : '');
    }

    return (
        <nav>
            <div className="wrapper">
                <div className="logo">
                    <HashLink to="#home" smooth>
                        <img src={icon} alt="Logo" />
                    </HashLink>
                </div>
                <button onClick={tampilMenu}>
                    {/* Bergantian icon nav */}
                    {statusTampil === '' ? <FaBars /> : <AiOutlineCloseSquare />}
                </button>
                <div className={`menu ${statusTampil}`} onClick={tampilMenu}>
                    <ul>
                        <li><HashLink to="#course" smooth>Course</HashLink></li>
                        <li><HashLink to="#tutors" smooth>Pemateri</HashLink></li>
                        <li><HashLink to="#partners" smooth>Partners</HashLink></li>
                        <li><HashLink to="#contact" smooth>Contact</HashLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;