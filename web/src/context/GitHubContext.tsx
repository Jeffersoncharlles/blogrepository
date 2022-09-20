import { createContext, useContext, useEffect, useState } from "react";
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from "date-fns/locale";
import { api } from "../lib/axios";
import { ISearchIssues, Items, UserType } from './types';
import slugify from "slugify";

interface IGitHubContext {
    user: UserType
    article: I_Article[]
}
interface I_Article {
    title: string
    url: string
    date: string
    content: string
    id: number
    slug: string
}

const GitHubContext = createContext({} as IGitHubContext)


export const GitHubProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState({} as UserType)
    const [article, setArticle] = useState<I_Article[]>([])


    const getUserGitBlog = async () => {
        const { data } = await api.get('users/jeffersoncharlles')

        if (data) {

            setUser(data)
        }
    }

    const searchIssuesBlog = async () => {

    }

    const getIssuesBlog = async () => {
        const { data } = await api.get('repos/jeffersoncharlles/blogrepository/issues')
        if (data) {
            const blog = data.map((article: any) => ({
                date: formatDistanceToNow(new Date(article.created_at), { locale: ptBR, addSuffix: true }),
                title: article.title,
                url: article.html_url,
                content: article.body,
                id: article.id,
                slug: slugify(article.title, {
                    replacement: '_',
                    lower: true,
                })
            }))
            console.log(blog)

            setArticle(blog)
        }
    }

    useEffect(() => {
        getUserGitBlog()
        getIssuesBlog()
    }, [])

    return (
        <GitHubContext.Provider value={{ user, article }}>
            {children}
        </GitHubContext.Provider>
    )
}


export const useGitHub = () => {
    const context = useContext(GitHubContext)

    return context
}
