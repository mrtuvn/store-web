'use client'
import {useState, useRef} from 'react'
import { useQuery } from '@tanstack/react-query'

const API_URL = 'https://jsonplaceholder.typicode.com/posts'


type Post = {
    id: number;
    title: string;
}

export default function FetchByTanStackQueryComponent() {
    const {data, isLoading, error} = useQuery({
        queryKey: ['posts'],
        queryFn: () => fetch(API_URL).then((res) => res.json())
    })

    const test = useRef({})
    test.current = JSON.stringify(data);
    console.log(test.current);

    if (error) {
        return <div>Error fetching posts</div>
    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <>
        {data?.length > 0 && (
            <div>
                <h1>Posts</h1>
                <ul>
                    {data.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            </div>
        )}
        </>
    )

}