import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../lib/axios";
import { UserType } from "./types";

interface IGitHubContext {
    user: UserType
}

const GitHubContext = createContext({} as IGitHubContext)


export const GitHubProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState({} as UserType)


    const getUserGitBlog = async () => {
        const { data } = await api.get('users/jeffersoncharlles')

        if (data) {
            setUser(data)
        }
    }

    const searchIssuesBlog = async (q: string, username = 'jeffersoncharlles', repo = 'blogrepository') => {
        const { data } = await api.get(`search/issues?q=${q}%20repo:${username}/${repo}`)

        if (data) {

        }
    }

    useEffect(() => {
        getUserGitBlog()
    }, [])

    return (
        <GitHubContext.Provider value={{ user }}>
            {children}
        </GitHubContext.Provider>
    )
}


export const useGitHub = () => {
    const context = useContext(GitHubContext)

    return context
}
