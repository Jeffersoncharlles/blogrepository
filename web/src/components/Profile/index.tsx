import { useGitHub } from '../../context/GitHubContext';
import { FaGithub, FaBuilding, FaUserFriends, FaExternalLinkAlt } from "react-icons/fa";
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
                    <a href={user.html_url} target="_blank">
                        GitHub
                        <FaExternalLinkAlt />
                    </a>
                </HeaderContainer>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque amet architecto itaque et dolorum doloribus omnis autem dignissimos. Laborum ipsa magni maxime cum repellendus nihil recusandae iure, sint incidunt eveniet.</p>
                <FooterContainer>
                    <span><FaGithub size={18} />{user?.login}</span>
                    <span><FaBuilding size={18} /> {user?.company}</span>
                    <span><FaUserFriends size={18} /> {user?.followers} seguidores</span>
                </FooterContainer>

            </ContentCardProfile>
        </ProfileContainer>
    );
}
