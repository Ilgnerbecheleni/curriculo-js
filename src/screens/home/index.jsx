import Banner from '../../components/banner';
import image from '../../assets/logo.png'
import styles from './styles.module.css';
import Button from '../../components/button';

function Home() {
  return (
    <main className={styles.principal}>
     <Banner image={image}/>
    <section className={styles.info}>
    <h1> Fast</h1>
      <p>
         " Destaque-se em qualquer processo de seleção com nossa plataforma intuitiva de geração de currículos. Com nossa ferramenta fácil de usar, você pode criar currículos profissionais e visualmente impressionantes em questão de minutos. "
        </p>
        <Button texto='Faça o seu currículo'/>
    </section>
    </main>
  ) 
}

export default Home
