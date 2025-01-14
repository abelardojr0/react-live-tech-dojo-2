import { Card } from "../../components/Card";
import { SpanCard, SubtituloCard, SubtituloPagina } from "../../globalStyle";
import { barbeiros_falsos } from "../../mocks/barbeiros";
import { servicos_falsos } from "../../mocks/servicos";
import { HomeStyledSection } from "./style";

export const Home = () => {
  return (
    <>
      <SubtituloPagina>Barbeiros</SubtituloPagina>
      <HomeStyledSection>
        {barbeiros_falsos &&
          barbeiros_falsos.map((element) => (
            <Card>
              <SubtituloCard>
                Nome: <SpanCard>{element.nome}</SpanCard>
              </SubtituloCard>
              <SubtituloCard>
                CPF: <SpanCard>{element.cpf}</SpanCard>
              </SubtituloCard>
              <SubtituloCard>
                Telefone: <SpanCard>{element.telefone}</SpanCard>
              </SubtituloCard>
            </Card>
          ))}
      </HomeStyledSection>

      <h2>Serviços</h2>
      <section>
        {servicos_falsos &&
          servicos_falsos.map((element) => (
            <div>
              <h3>
                Nome: <span>{element.nome}</span>
              </h3>
              <p>
                Descrição: <span>{element.descricao}</span>
              </p>
              <p>
                Valor: R$<span>{element.valor}</span>
              </p>
              <p>
                Percentual: <span>{element.percentual_barbeiro} %</span>
              </p>
            </div>
          ))}
      </section>
    </>
  );
};
