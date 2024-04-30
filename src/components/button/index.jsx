import { Link } from 'react-router-dom';
import styles from './styles.module.css';



function Button({texto}) {
  return (
    <>
    <Link to={'/curriculo'} className={styles.botao}>
        {texto}
    </Link>

    </>
  )
}

export default Button
