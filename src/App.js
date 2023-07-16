import { Col, Container, Row } from "react-grid-system";
import { CampoTexto } from "./componentes/CampoTexto/CampoTexto";
import { Card } from "./componentes/Card/Card";
import { Estilos } from "./componentes/EstilosGlobais/Estilo";
import { ProvedorTema } from "./componentes/ProvedorTema/ProvedorTema";
import { Tipografia } from "./componentes/Tipografia/Tipografia";
import { BotaoProximo } from "./componentes/Botaoes/BotaoProximo";
import { BotaoAnterior } from "./componentes/Botaoes/BotaoAnterior";

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <Container>
        <Row justify="center">
          <Col lg={6}>
            <Card>
              <Tipografia variante="h1" componente="h1">
                Freelando
              </Tipografia>
              <Tipografia variante="body" componente="body">
                Crie seu perfil gratuitamente para começar a trabalhar com os
                melhores freelancers. Em seguida, você poderá dar mais detalhes
                sobre suas demandas e sobre sua forma de trabalho.
              </Tipografia>
              <CampoTexto titulo="Nome Completo" />
              <Row>
                <Col lg={3}>
                  <BotaoAnterior />
                </Col>
                <Col lg={6}></Col>
                <Col lg={3}>
                  <BotaoProximo />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </ProvedorTema>
  );
}

export default App;
