import { NavLink } from 'react-router-dom'
import styles from './styles.module.css';
import { BsBriefcaseFill } from "react-icons/bs";

function Navbar() {
  return (
    <nav className={styles.navMenu} id="sidebar">
      
      <NavLink className={styles.navLink} end  to="/"  ><BsBriefcaseFill  size={28} color='black'/></NavLink>
      <NavLink className={styles.navLink} end  to="/"  >Home</NavLink>
      <NavLink className={styles.navLink} end to="/dicas">Dicas</NavLink>
    </nav>
  )
}
{/* <Link to={'/'} className='nav-link ' >Home</Link> */}
export default Navbar
