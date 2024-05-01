import styles from "./styles.module.css";
import infodesnecessaria from "../../assets/infodesnecessaria.png";

export function Dicas() {
  return (
    <div className={styles.dicasContainer}>
      <div className="d-flex flex-column align-items-center ">
        <h5 className="card-title">Por que um Bom Currículo é Importante?</h5>
        <p className="card-text">
          Um currículo bem elaborado é a sua primeira oportunidade de causar uma
          boa impressão em um potencial empregador. Ele funciona como um resumo
          das suas habilidades, experiências e realizações profissionais,
          permitindo que os recrutadores entendam rapidamente o que você tem a
          oferecer. Um currículo bem feito pode abrir portas e aumentar suas
          chances de conseguir uma entrevista para o emprego dos seus sonhos.
        </p>

        <div className="card-body">
          <h5 className="card-title">
            Dicas e Boas Práticas para um Currículo Efetivo
          </h5>
          <div></div>
          <div className="row ">
          <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={infodesnecessaria}
            className="img-fluid rounded-start"
            alt="..."
            style={{ maxWidth: '80%', maxHeight: '80%', borderRadius: '50%' }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Seja Conciso e Objetivo</h5>
            <p className="card-text">
              Evite informações desnecessárias e foque no que é
              relevante para a posição desejada.
            </p>
          </div>
        </div>
      </div>
    </div>

            <div className="col-md-4">
              <div className="card mb-3 h-100">
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 text-muted">
                    2. Destaque suas Realizações
                  </h6>
                  <p className="card-text">
                    Em vez de apenas listar suas responsabilidades, destaque
                    conquistas e resultados tangíveis.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3 h-100">
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 text-muted">
                    3. Formate com Clareza
                  </h6>
                  <p className="card-text">
                    Use uma formatação limpa e organizada, com seções claras e
                    uma estrutura fácil de seguir.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="card mb-3 h-100">
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 text-muted">
                    4. Revise e Atualize Regularmente
                  </h6>
                  <p className="card-text">
                    Revise seu currículo regularmente para garantir que todas as
                    informações estejam atualizadas e livres de erros.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3 h-100">
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 text-muted">
                    5. Personalize para Cada Aplicação
                  </h6>
                  <p className="card-text">
                    Adapte seu currículo para cada vaga, destacando experiências
                    e habilidades relevantes.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3 h-100">
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 text-muted">
                    6. Inclua Palavras-Chave
                  </h6>
                  <p className="card-text">
                    Use palavras-chave relevantes para a área e a posição para
                    aumentar a visibilidade do seu currículo em sistemas de
                    rastreamento de candidatos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dicas;
