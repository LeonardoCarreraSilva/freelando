import styled from "@emotion/styled"

/*esse theme vendo do objeto ProvedorTema.jsx*/
const DivEstilizada = styled.div`
padding: ${props => props.theme.espacementos.l};
background: ${props => props.theme.cores.secundarias.a};
border: 1px solid;
border-color: ${props => props.theme.cores.primarias.a};
border-radius: ${props => props.theme.espacementos.s};
`


export const Card = ({ children }) =>{
    return (<DivEstilizada>
        {children}
    </DivEstilizada>)
}