import { HomeContainer, ArticleContainer, SectionContainer } from './styles'

import { Card } from "../../components/Card";
import { Profile } from '../../components/Profile';
import { useGitHub } from '../../context/GitHubContext';
import { Link } from 'react-router-dom';


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
                            <Link key={item.id} to={`/post/${item.slug}`}>
                                <Card data={item} />
                            </Link>
                        ))}
                    </ArticleContainer>
                )}
            </SectionContainer>

        </HomeContainer>
    );
}
