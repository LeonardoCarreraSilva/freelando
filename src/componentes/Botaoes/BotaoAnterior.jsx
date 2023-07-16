import styled from "@emotion/styled";

const BotaoEstilizadoAnterior = styled.button`
    display: flex;
    height: 40px;
    padding: 8px 16px;
    align-items: center;
    margin-top: ${props => props.theme.espacementos.l};
    border-radius: ${props => props.theme.espacementos.s};
    border: 2px solid ${props => props.theme.cores.primarias.b};
    gap: 8px;
    color : ${props => props.theme.cores.primarias.b};
    background: ${props => props.theme.cores.branco}};

`
const SetaEstilizada = styled.i`
    color: ${props => props.theme.cores.primarias.b}};
    text-align: center;
    font-family: Material Icons;
    font-size: ${props => props.theme.espacementos.s};
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
`


export const BotaoAnterior = () =>{
    return(<BotaoEstilizadoAnterior>
        <SetaEstilizada class="material-icons">arrow_back</SetaEstilizada> Anterior
        </BotaoEstilizadoAnterior>)
}