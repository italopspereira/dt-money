import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import LogoImage from '../../assets/Logo.svg'
export function Header() {
  return (
    <div>
      <HeaderContainer>
        <HeaderContent>
          <img src={LogoImage} alt="" />
          <NewTransactionButton>Nova Transação</NewTransactionButton>
        </HeaderContent>
      </HeaderContainer>
    </div>
  )
}
