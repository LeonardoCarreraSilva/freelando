import styled from "@emotion/styled"

const LabelEstilizada = styled.label`
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

const InputEstilizado = styled.input`
display: block;
width: 100%;
box-sizing: border-box;
margin-top: ${props => props.theme.espacementos.xs};
margin-bottom: ${props => props.theme.espacementos.s};

border-radius: ${props => props.theme.espacementos.s};
border: 1px solid;
border-color: ${props => props.theme.cores.neutras.a};
background: ${props => props.theme.cores.branco};
height: 40px;

font-weight: 400;
font-size: 14px;
font-height: 17px;
`



export const CampoTexto = ({titulo}) =>{
    return(<LabelEstilizada>
        {titulo}
        <InputEstilizado />
    </LabelEstilizada>)
}