import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './styles.module.css';
import objetivo from '../../assets/objetivo.jpg';
import realizacao from '../../assets/realizacao.png';
import formatacao from '../../assets/formatacao.png';
import revisao from '../../assets/revisao.jpg';
import personalize from '../../assets/personalize.avif';
import chave from '../../assets/chave.jpg';

export function Dicas() {
  const [introRef, introInView] = useInView({ triggerOnce: true });
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });
  const [ref4, inView4] = useInView({ triggerOnce: true });
  const [ref5, inView5] = useInView({ triggerOnce: true });
  const [ref6, inView6] = useInView({ triggerOnce: true });

  return (
    <div className={styles.dicasContainer}>
      <div ref={introRef} className={`${styles.intro} ${introInView ? styles.fadeIn : ''}`}>
        <h2>Por que um Bom Currículo é Importante?</h2>
        <p>
          Um currículo bem elaborado é a sua primeira oportunidade de causar uma
          boa impressão em um potencial empregador. Ele funciona como um resumo
          das suas habilidades, experiências e realizações profissionais,
          permitindo que os recrutadores entendam rapidamente o que você tem a
          oferecer. Um currículo bem feito pode abrir portas e aumentar suas
          chances de conseguir uma entrevista para o emprego dos seus sonhos.
        </p>
      </div>

      <section ref={ref1} className={`${styles.section} ${inView1 ? styles.fadeIn : ''}`}>
        <img src={objetivo} alt="Informação Desnecessária" />
        <div className={styles['section-content']}>
          <h6>Seja Conciso e Objetivo</h6>
          <p>
            Evite informações desnecessárias e foque no que é relevante para a posição desejada.
            Limite seu currículo a uma ou duas páginas, destacando suas experiências mais recentes e relevantes.
            Isso ajuda os recrutadores a encontrar rapidamente a informação que procuram.
          </p>
        </div>
      </section>

      <section ref={ref2} className={`${styles.section} ${styles.reverse} ${inView2 ? styles.fadeIn : ''}`}>
        <img src={realizacao} alt="Realizações" />
        <div className={styles['section-content']}>
          <h6>Destaque suas Realizações</h6>
          <p>
            Em vez de apenas listar suas responsabilidades, destaque conquistas e resultados tangíveis.
            Use números e métricas para demonstrar seu impacto, como "aumentei as vendas em 20%" ou "reduzi os custos em 15%".
          </p>
        </div>
      </section>

      <section ref={ref3} className={`${styles.section} ${inView3 ? styles.fadeIn : ''}`}>
        <img src={formatacao} alt="Formatação Clara" />
        <div className={styles['section-content']}>
          <h6>Formate com Clareza</h6>
          <p>
            Use uma formatação limpa e organizada, com seções claras e uma estrutura fácil de seguir.
            Utilize bullet points, cabeçalhos e espaçamento adequado para melhorar a legibilidade.
          </p>
        </div>
      </section>

      <section ref={ref4} className={`${styles.section} ${styles.reverse} ${inView4 ? styles.fadeIn : ''}`}>
        <img src={revisao} alt="Revisão Regular" />
        <div className={styles['section-content']}>
          <h6>Revise e Atualize Regularmente</h6>
          <p>
            Revise seu currículo regularmente para garantir que todas as informações estejam atualizadas e livres de erros.
            Peça para alguém revisar seu currículo, pois um par de olhos frescos pode encontrar erros que você não percebeu.
          </p>
        </div>
      </section>

      <section ref={ref5} className={`${styles.section} ${inView5 ? styles.fadeIn : ''}`}>
        <img src={personalize} alt="Personalização" />
        <div className={styles['section-content']}>
          <h6>Personalize para Cada Aplicação</h6>
          <p>
            Adapte seu currículo para cada vaga, destacando experiências e habilidades relevantes.
            Leia atentamente a descrição do trabalho e ajuste seu currículo para refletir os requisitos e competências solicitados.
          </p>
        </div>
      </section>

      <section ref={ref6} className={`${styles.section} ${styles.reverse} ${inView6 ? styles.fadeIn : ''}`}>
        <img src={chave} alt="Palavras-Chave" />
        <div className={styles['section-content']}>
          <h6>Inclua Palavras-Chave</h6>
          <p>
            Use palavras-chave relevantes para a área e a posição para aumentar a visibilidade do seu currículo em sistemas de rastreamento de candidatos (ATS).
            Isso pode incluir habilidades técnicas, qualificações e termos específicos do setor.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Dicas;
