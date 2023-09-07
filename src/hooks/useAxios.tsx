import axios from 'axios';
import { useState } from 'react';

export interface UserData {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    site_admin: boolean
    name: string
    company: string
    blog: string
    location: string
    email: string
    hireable: any
    bio: string
    twitter_username: any
    public_repos: number
    public_gists: number
    following: number
    followers: number
    created_at: string
    updated_at: string
}

const githubAccessToken = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;

const useAxios = (username: string) => {
    const [data, setData] = useState<UserData | null>();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [errorStatus, setErrorStatus] = useState<number | null>(null);

    const getUserData = async () => {
        setData(null);
        setIsLoading(true);
        setError(null);
        setErrorMsg(null);
        setErrorStatus(null);

        try {
            const response = await axios.get<UserData>(`https://api.github.com/users/${username}`, {
                headers: {
                    'Authorization': `Bearer ${githubAccessToken}`,
                },
            })
            setData(response.data)
        } catch (error: any) {
            setErrorStatus(error.response?.status)
            setErrorMsg(error.response?.data?.message)
            setError(error.response?.data)
        } finally {
            setIsLoading(false);
        }
    }    

    return { data, isLoading, error, errorMsg, errorStatus, getUserData };
};

export default useAxios;
