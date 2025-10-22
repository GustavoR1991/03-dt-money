import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

// @ts-ignore: SVG module declaration missing
import logoImg from '../../assets/logo.svg';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="Logo" />
        <NewTransactionButton>Nova Transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>

  )
}
