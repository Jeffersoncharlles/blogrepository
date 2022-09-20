import { HomeContainer, ArticleContainer, SectionContainer } from './styles'

import { Card } from "../../components/Card";
import { Profile } from '../../components/Profile';
import { useGitHub } from '../../context/GitHubContext';


export const Home = () => {
    const { issuesBlog } = useGitHub()

    return (
        <HomeContainer>
            <div>
                <Profile />
            </div>

            <SectionContainer>
                <div>
                    <div>
                        <strong>Publicações</strong>
                        <span>6 publicações</span>
                    </div>
                    <input type='search' placeholder='Buscar conteúdo' />
                </div>

                <ArticleContainer>
                    {issuesBlog.map((item) => (
                        <Card key={item.id} data={item} />
                    ))}
                </ArticleContainer>
            </SectionContainer>

        </HomeContainer>
    );
}
