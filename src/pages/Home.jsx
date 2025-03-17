import '../styles/Home.css';
import { homeSection } from '../data/HomeSection';
import { coursesSection } from '../data/CoursesSection';
import { tutorsSection } from '../data/TutorsSection';
import { partnersSection, partnersList } from '../data/PartnersSction';
import { contactSection } from '../data/ContactSection';
import {Fade} from 'react-awesome-reveal'
import parse from 'html-react-parser'

import Cute from '../asset/cute.gif'

// component
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Mentor from '../components/Mentor';
import Partners from '../components/Partners';
import Contact from '../components/Contact';
import Desain from '../components/Desain';
import Partner from '../components/Partner';
import ScrollToTop from '../components/ScrollToTop';

function Home() {
  return (
    <>
      <Navbar />
      
      {/* home */}
      
      <div className='wrapper'>
        <section id="home">

          <img src={homeSection.image} alt="Coding" />
          <div className="kolom">
            {homeSection.content} {/* Directly render the JSX content */}
          </div>
        </section>
       

        {/* online course */}
        <div id="course">
        <div class="header-container">
        <h1>Online <br />Course</h1>
        <img src={Cute} alt="Cute" class="cute-image" />
        
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
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Home;