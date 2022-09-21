import { HomeContainer, ArticleContainer, SectionContainer } from './styles'

import { Card } from "../../components/Card";
import { Profile } from '../../components/Profile';
import { useGitHub } from '../../context/GitHubContext';
import { Link } from 'react-router-dom';
import { ChangeEvent, useEffect, useState } from 'react';


export const Home = () => {
    const { article } = useGitHub()
    const [filterInArticles, setFilterInArticles] = useState(article)

    const handleFilterArticles = (e: ChangeEvent<HTMLInputElement>) => {

        if (e.target.value) {
            setFilterInArticles(state => [...article.filter(item => item.title.includes(e.target.value))])
        } else {
            setFilterInArticles(article)
        }

    }

    useEffect(() => {
        setFilterInArticles(article)
    }, [article])

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
                    <input
                        type='search'
                        placeholder='Buscar conteúdo'
                        onChange={handleFilterArticles}
                    />
                </div>
                <ArticleContainer>
                    {filterInArticles && filterInArticles.map((item) => (
                        <Link key={item.id} to={`/post/${item.slug}`}>
                            <Card data={item} />
                        </Link>
                    ))}

                </ArticleContainer>
            </SectionContainer>

        </HomeContainer>
    );
}
