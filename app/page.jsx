
import styles from './page.module.css';
import BottaoEuQuero from "./componets/bottaoEuQuero/BottaoEuQuero.jsx";

const Page = () => {
  return (
    <>
    <div className={styles.inicialHome}>
      <p className={styles.inicialHomeTitle}>VOCÊ SONHA, EM TRANSFORMAR OLHARES, REALÇAR A BELEZA NATURAL E DESTACAR A EXPRESSÃO DOS OLHOS?</p>
      <p className={styles.inicialHomeSubtitle}>Se sim, nosso Curso de Lash Designer é a chave para desbloquear seu potencial e ingressar no mundo fascinante da beleza.</p>
      <div className={styles.inicialHomeLista}>
        <p className={styles.listaTitle}><b>O que você aprenderá:</b></p>
        <p className={styles.listaPrincipalText}>Técnicas Avançadas de Aplicação de Cílios:</p>
        <p className={styles.listaSegundText}>Explore métodos inovadores para uma aplicação perfeita.</p>
        <p className={styles.listaSegundText}>Aprenda a trabalhar com diferentes estilos e extensões.</p>
        <p className={styles.listaPrincipalText}>Design Personalizado para Cada Cliente:</p>
        <p className={styles.listaSegundText}>Domine a arte de criar looks personalizados que realcem a beleza única de cada pessoa.</p>
        <p className={styles.listaSegundText}>Desenvolva habilidades de consulta para compreender as preferências individuais.</p>
        <p className={styles.listaPrincipalText}>Cuidados e Manutenção dos Cílios:</p>
        <p className={styles.listaSegundText}>Saiba como orientar seus clientes sobre os cuidados necessários para manter cílios saudáveis.</p>
        <p className={styles.listaSegundText}>Aprenda técnicas de manutenção para garantir resultados duradouros.</p>
      </div>
    </div>
    <div>
      <BottaoEuQuero />
    </div>
    </>
  );
};

export default Page;