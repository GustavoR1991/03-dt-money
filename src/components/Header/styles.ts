import styled from "styled-components";


export const HeaderContainer = styled.header`
 background: ${props => props.theme["gray-900"]};
 padding: 2.5rem 0 7.5rem;

`
export const HeaderContent = styled.div`
  width: 100%; //se for menor que 1120px então ocupa 100%
  max-width: 1120px; //se for maior que 1120px então ocupa 1120px
  margin: 0 auto; //centraliza horizontalmente
  padding: 0 1.5rem; //espaçamento lateral

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NewTransactionButton = styled.button` 
  height: 50px;
  border: 0;
  background: ${props => props.theme["green-500"]};
  color: ${props => props.theme.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme["green-700"]};
    transition: background-color 0.2s;
  }

`