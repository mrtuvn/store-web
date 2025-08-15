'use client'
import {useState, useEffect} from 'react'

const API_URL = 'https://jsonplaceholder.typicode.com/posts'


type Post = {
    id: number;
    title: string;
}

export default function FetchComponent() {

    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<boolean>(false);
    const [page, setPage] = useState(0);


    useEffect(() => {
        let ignore = false;

        async function fetchPosts() {
            setIsLoading(true);

            try {
                const response = await fetch(`${API_URL}?page=${page}`);
                const data = await response.json();
                if (ignore) return;

                setPosts(data);
            } catch {
                setError(true);
            } finally {
                setIsLoading(false);
            }
            
        }

        fetchPosts();

        return () => {
            ignore = true;
        }

    }, [page])

    if (error) {
        return <div>Error fetching posts</div>
    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <>
        {posts?.length > 0 && (
            <div>
                <h1>Posts</h1>
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            </div>
        )}
        </>
    )

}