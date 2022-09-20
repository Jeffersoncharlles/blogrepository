import { HomeContainer, ArticleContainer, SectionContainer } from './styles'

import { Card } from "../../components/Card";
import { Profile } from '../../components/Profile';
import { useGitHub } from '../../context/GitHubContext';


export const Home = () => {
    const { article } = useGitHub()

    return (
        <HomeContainer>
            <div>
                <Profile />
            </div>

            <SectionContainer>
                <div>
                    <div>
                        <strong>Publicações</strong>
                        <span>{article.length} publicações</span>
                    </div>
                    <input type='search' placeholder='Buscar conteúdo' />
                </div>

                {article && (
                    <ArticleContainer>
                        {article.map((item) => (
                            <a key={item.id} href={`/post/${item.slug}`}>
                                <Card data={item} />
                            </a>
                        ))}
                    </ArticleContainer>
                )}
            </SectionContainer>

        </HomeContainer>
    );
}
