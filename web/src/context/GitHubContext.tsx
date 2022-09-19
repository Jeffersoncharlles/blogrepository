import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../lib/axios";
import { UserType } from "./types";



const GitHubContext = createContext({})


export const GitHubProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState({} as UserType)


    const getUserGitBlog = async () => {
        const { data } = await api.get('users/jeffersoncharlles')

        if (data) {
            setUser(data)
        }
    }

    useEffect(() => {

    }, [])

    return (
        <GitHubContext.Provider value={{}}>
            {children}
        </GitHubContext.Provider>
    )
}


export const useGitHub = () => {
    const context = useContext(GitHubContext)

    return context
}
