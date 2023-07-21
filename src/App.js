import { Col, Container, Row } from "react-grid-system";
import { Botao } from "./componentes/Botaoes/Botao";
import { CampoTexto } from "./componentes/CampoTexto/CampoTexto";
import { Card } from "./componentes/Card/Card";
import { Estilos } from "./componentes/EstilosGlobais/Estilo";
import { ProvedorTema } from "./componentes/ProvedorTema/ProvedorTema";
import { Tipografia } from "./componentes/Tipografia/Tipografia";
import { Cabecalho } from "./componentes/Cabecalho/Cabecalho";
import { FreelandoLogo } from "./componentes/Icones/FreelandoLogo";
import { Link } from "./componentes/Link/Link";
import { Rodape } from "./componentes/Rodape/Rodape";
import { ListaInline } from "./componentes/Lista/ListaInline";
import { ItemListaInline } from "./componentes/Lista/ItemListaInline";
import { IconeTwitter } from "./componentes/Icones/IconeTwitter";
import { IconeWhatsApp } from "./componentes/Icones/IconeWhatsApp";
import { IconeInstagram } from "./componentes/Icones/IconeInstagram";
import { IconeTwitch } from "./componentes/Icones/IconeTwitch";

function App() {
  return (
    <ProvedorTema>
      <Estilos />

      <Cabecalho>
        <Container>
          <Row align="center">
            <Col>
              <FreelandoLogo />
            </Col>
            <Col style={{ textAlign: "right" }}>
              <Link href="#">Entrar</Link>
            </Col>
          </Row>
        </Container>
      </Cabecalho>
      <Container style={{ marginTop: "80px" }}>
        <Row justify="center" align="center">
          <Col lg={8} md={8} sm={12}>
            <Card>
              <Tipografia variante="h1" componente="h1">
                Freelando
              </Tipografia>
              <Tipografia variante="body" componente="body">
                Crie seu perfil gratuitamente para começar a trabalhar com os
                melhores freelancers. Em seguida, você poderá dar mais detalhes
                sobre suas demandas e sobre sua forma de trabalho.
              </Tipografia>
              <Row>
                <Col>
                  <CampoTexto titulo="Nome Completo" />
                </Col>
              </Row>
              <Row>
                <Col lg={4} md={4} sm={4}>
                  <CampoTexto titulo="Estado" />
                </Col>
                <Col lg={8} md={8} sm={8}>
                  <CampoTexto titulo="Cidade" />
                </Col>
              </Row>

              <Row>
                <Col>
                  <CampoTexto titulo="E-mail" />
                </Col>
              </Row>

              <Row>
                <Col lg={6} md={6} sm={6}>
                  <CampoTexto titulo="Senha" />
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <CampoTexto titulo="Repita a Senha" />
                </Col>
              </Row>

              <Row>
                <Col lg={6} md={6} sm={6}>
                  <Botao variante="Secundaria">Anterior</Botao>
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <div style={{ textAlign: "right" }}>
                    <Botao>Proximo</Botao>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>

      <Rodape>
        <Container>
          <Row align="center">
            <Col>
              <FreelandoLogo height={40} width={176} />
              <Tipografia variante="legenda" componente="legenda">
                Desenvolvido por Alura. Projeto fictício sem fins comerciais.
              </Tipografia>
              <Col style={{ textAlign: "right" }}>
                <Tipografia variante="legenda" componente="legenda">
                  Acesse nossas redes:
                </Tipografia>
                <ListaInline>
                  <ItemListaInline>
                    <a href="/" aria-label="Link para o WhatsApp">
                      <IconeWhatsApp />
                    </a>
                  </ItemListaInline>
                  <ItemListaInline>
                    <a href="/" aria-label="Link para a Twitch">
                      <IconeTwitch />
                    </a>
                  </ItemListaInline>
                  <ItemListaInline>
                    <a href="/" aria-label="Link para a Instagram">
                      <IconeInstagram />
                    </a>
                  </ItemListaInline>
                  <ItemListaInline>
                    <a href="/" aria-label="Link para a Twitter">
                      <IconeTwitter />
                    </a>
                  </ItemListaInline>
                </ListaInline>
              </Col>
            </Col>
          </Row>
        </Container>
      </Rodape>
    </ProvedorTema>
  );
}

export default App;
