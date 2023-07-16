import styled from "@emotion/styled";

const BotaoEstilizadoProximo = styled.button`
    display: flex;
    height: 40px;
    padding: 8px 16px;
    align-items: center;
    margin-top: ${props => props.theme.espacementos.l};
    border-radius: ${props => props.theme.espacementos.s};
    color : ${props => props.theme.cores.branco};
    background: ${props => props.theme.cores.primarias.b}};
`

const SetaEstilizada = styled.i`
    color: ${props => props.theme.cores.neutras.c};
    text-align: center;
    font-family: Material Icons;
    font-size: ${props => props.theme.espacementos.s};
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
`


export const BotaoProximo = () =>{
    return(<BotaoEstilizadoProximo>
        Proximo <SetaEstilizada class="material-icons">arrow_forward</SetaEstilizada>
        </BotaoEstilizadoProximo>)
}