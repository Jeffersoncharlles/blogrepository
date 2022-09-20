import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../lib/axios";
import { ISearchIssues, Items, UserType } from './types';

interface IGitHubContext {
    user: UserType
    searchIssues: ISearchIssues
    issuesBlog: Items[]
}

const GitHubContext = createContext({} as IGitHubContext)


export const GitHubProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState({} as UserType)
    const [searchIssues, setSearchIssues] = useState({} as ISearchIssues)
    const [issuesBlog, setIssuesBlog] = useState<Items[]>([])


    const getUserGitBlog = async () => {
        const { data } = await api.get('users/jeffersoncharlles')

        if (data) {

            setUser(data)
        }
    }

    const searchIssuesBlog = async (q = '', username = 'jeffersoncharlles', repo = 'blogrepository') => {
        const { data } = await api.get(`search/issues?q=${q}%20repo:${username}/${repo}`)
        console.log(data)
        if (data) {
            setSearchIssues(data)
            if (data.items) {
                setIssuesBlog(data.items)
            }
        }
    }

    useEffect(() => {
        getUserGitBlog()
    }, [])

    useEffect(() => {
        searchIssuesBlog()
    }, [])

    return (
        <GitHubContext.Provider value={{ user, searchIssues, issuesBlog }}>
            {children}
        </GitHubContext.Provider>
    )
}


export const useGitHub = () => {
    const context = useContext(GitHubContext)

    return context
}
