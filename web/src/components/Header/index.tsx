import LogoSvg from '../../assets/Logo.svg'
import { HeaderContainer } from './styles'

export const Header = () => {

    return (
        <HeaderContainer>
            <img src={LogoSvg} alt="Github blog logo e uma seta direita e um traco" />
        </HeaderContainer>
    );
}
