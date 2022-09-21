import { useParams } from "react-router-dom";
import { Markdown } from "../../components/Markdown";
import { useGitHub } from '../../context/GitHubContext';



export const Post = () => {
    const { getOneArticle } = useGitHub()
    const { slug } = useParams()
    const article = getOneArticle(String(slug))

    return (
        <main>

            <Markdown markdown={article?.content} />
        </main>
    );
}
