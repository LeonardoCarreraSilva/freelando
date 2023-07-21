import styled from "@emotion/styled"

const componentes = {
    h1: 'h1',
    body: 'p',
    legenda: 'p'
}

const estilos ={
    h1: `
        font-weight: 600;
        fons-size: 40px;
        line-height: 49px;
    `,
    h2: `
        font-weight: 400;
        line-height: normal;
        font-size: 16px;
    `,
    h3:`
        font-weight: 400;
        line-height: normal;
        font-size: 16px;
    `,
    body: `
        font-weight: 400;
        fons-size: 20px;
        line-height: 24px;
    `,
    body1:`
        font-weight: 400;
        fons-size: 16px;
        line-height: normal;
    `,
    body1Bold:`
        font-weight: 700;
        fons-size: 16px;
        line-height: normal;
    `,
    body2:`
        font-weight: 400;
        fons-size: 16px;
        line-height: normal;
    `,
    body2Bold:`
        font-weight: 700;
        fons-size: 16px;
        line-height: normal;
    `,
    subtitle1:`
        font-weight: 400;
        fons-size: 14px;
        line-height: normal;
    `,
    subtitle2:`
        font-weight: 400;
        fons-size: 14px;
        line-height: normal;
        text-decoration-line: underline;
    `,
    legenda: `
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
    `,
}

export const Tipografia = ({ variante, componente, children }) => {
    const tag = componentes[componente]
    const ComponenteUtilizado = styled[tag] `${estilos[variante]}`
    return (<ComponenteUtilizado>{children}</ComponenteUtilizado>)
}