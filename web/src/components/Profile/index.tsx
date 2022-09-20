import { useGitHub } from '../../context/GitHubContext';
import {
    ProfileContainer,
    ContentCardProfile,
    HeaderContainer,
    FooterContainer,
} from './styles';

export const Profile = () => {
    const { user } = useGitHub()

    return (
        <ProfileContainer>
            <picture>
                <img src={user?.avatar_url} />
            </picture>
            <ContentCardProfile>
                <HeaderContainer>
                    <h1>{user?.name}</h1>
                    <button >
                        GitHub
                    </button>
                </HeaderContainer>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque amet architecto itaque et dolorum doloribus omnis autem dignissimos. Laborum ipsa magni maxime cum repellendus nihil recusandae iure, sint incidunt eveniet.</p>
                <FooterContainer>
                    <span>{user?.login}</span>
                    <span>{user?.company}</span>
                    <span>{user?.followers} seguidores</span>
                </FooterContainer>

            </ContentCardProfile>
        </ProfileContainer>
    );
}
