import '../styles/Home.css';
import { homeSection } from '../data/HomeSection';
import { coursesSection } from '../data/CoursesSection';
import { tutorsSection } from '../data/TutorsSection';
import {Fade} from 'react-awesome-reveal'
import parse from 'html-react-parser'

import Cute from '../asset/cute.gif'

// component
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Mentor from '../components/Mentor';
import Contact from '../components/Contact';
import Desain from '../components/Desain';
import Partner from '../components/Partner';
import ScrollToTop from '../components/ScrollToTop';
import IconNavbar from '../icon/Iconnavbar';

function Home() {
  return (
    <>
    <Navbar />
    <Fade direction='' delay={200} triggerOnce={true} cascade={true}>
      
      </Fade>
      
      {/* home */}
      
      <div className='wrapper'>
        <section id="home">
        <Fade direction='' delay={200} triggerOnce={true} cascade={true}>
          <img src={homeSection.image} alt="Coding" />
          <div className="kolom">
            {homeSection.content} {/* Directly render the JSX content */}
          </div>
          </Fade>
        </section>
       

        {/* online course */}
        <div id="course">
        <div className="header-container">
        <h1>Online <br />Course</h1>
        <img src={Cute} alt="Cute" className="cute-image" />
        </div>
          <section id="courses">
          <Fade direction='up' delay={200} triggerOnce={true} cascade={true}>
            <div className="kolom">
            {parse(coursesSection.content)} {/* Assuming this is also JSX */}
            </div>
              <img src={coursesSection.image} alt="Courses" />
              </Fade>
          </section>
          
          </div>
          
        {/* online course 2 */}
        <Desain />

        {/* tutors */}
        <section id="tutors">
        <Fade direction='up' delay={200} triggerOnce={true} cascade={true}>
          <div className="tengah">
            <div className="kolom">
              {parse (tutorsSection.content)} {/* Assuming this is also JSX */}
            </div>
            <Mentor />
          </div>
          </Fade>
        </section>

        {/* partners */}
        < Partner/>
        {/* <Contact contactSection={contactSection} /> */}
      </div>
      <IconNavbar/>
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Home;