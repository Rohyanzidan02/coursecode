
import { motion } from 'framer-motion';
import {Fade} from 'react-awesome-reveal'
// Import images
import p1 from '../asset/partner/p1.png';
import p2 from '../asset/partner/p2.png';
import '../styles/Partners.css'

const Partner = () => {
  // Define partners as an array of image sources
  const partners = [p1, p2, p1, p2, p1, p2, p1, p2, p1, p2, p1, p2, p1, p2];

  // Create a long array for infinite scrolling
  const infinitePartners = [...partners, ...partners, ...partners];

  return (
    <section id="partners">
      <div className="tengah">
        <div className="kolom">
          <Fade direction='up' delay={0} triggerOnce={true} cascade={true}>
          <h2>PARTNER</h2>
          <p>Course Code bekerja sama dengan beberapa brand untuk membuat kuliatas course yang lebih baik</p>
          </Fade>
        </div>

        <div className="partner-list">
          <motion.div
            className="scroll-container"
            animate={{ x: ['0%', '-100%'] }} // Move from 0% to -100%
            transition={{ duration: 20, ease: 'linear', repeat: Infinity }} // Continuous scrolling
            style={{ display: 'flex' }} // Ensure items are in a row
          >
            {infinitePartners.map((partner, index) => (
              <div className="kartu-partner" key={index}>
                <img src={partner} alt={`Partner ${index + 1}`} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Partner;