import { PostContainer, ArticleContainer, CardContainer, Links, InfoContainer } from './styles'
import { FaGithub, FaCalendarDay, FaComment, FaExternalLinkAlt } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { Markdown } from "../../components/Markdown";
import { useGitHub } from '../../context/GitHubContext';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';



export const Post = () => {
    const { getOneArticle, user } = useGitHub()
    const { slug } = useParams()
    const article = getOneArticle(String(slug))

    return (
        <PostContainer>
            <CardContainer>
                <Links>
                    <Link to="/">
                        voltar
                    </Link>
                    <a target="_blank" href={article.url}>
                        ver no github
                        <FaExternalLinkAlt />
                    </a>
                </Links>
                <h1>{article?.title}</h1>
                <InfoContainer>
                    <span><FaGithub />{user.login}</span>
                    <span><FaCalendarDay /> {article.date}</span>
                    <span><FaComment />5 comentários</span>

                </InfoContainer>
            </CardContainer>

            <ArticleContainer>
                <Markdown markdown={article?.content} />
                {/* <ReactMarkdown children={article.content} /> */}
            </ArticleContainer>
        </PostContainer>
    );
}
