import { Link } from "react-router";
import ClientComponent from "./ClientCompnent";
import Button from "@/components/shared/ui/Button";
import React, { useState } from "react";
import useThrottle from "~/hooks/useThrottle";
import useDebounce from "~/hooks/useDebounce";

export default function ServerComponent() {
    return (
        <ClientComponent
            component1={<Component1 />}
            component2={<Component2 />}
        />
    )

}

function Component1() {
    return (
        <>
        <Button 
            className="bg-blue-500 text-white p-2 rounded-md" 
            onClick={(e) => {console.log(e)}}
        >
            <Link to="/">Back To Home</Link>
        </Button>
        <p>
            Component1
        </p>
    
        </>
    );
}

function Component2() {
    const [text, setText] = useState('put text here');
    const [query, setQuery] = useState('');

    const handleTextAreaChange = useThrottle((val: string) => {
        setText(val);
        console.log(val);
    }, 800);

    function handleInputChange(e) {
        setQuery(e.target.value);
        handleSearch(e.target.value)
    }

    const handleSearch = React.useCallback(useDebounce((text) => {
        console.log('text search', text);
    }, 800), [])



    const getTextAsync = async () => {
        console.log('test')
        let timeouted = setTimeout(() => {
            return 'hello astro calling';
        }, 3000);
        console.log(timeouted)
        console.log('type=',typeof (timeouted))
        clearTimeout(timeouted);

        return new Promise((resolve) => {
            resolve(timeouted);

            console.log(timeouted);
            setText('Done text');
        })
    }

    return (
        <div className="bg-blue container flex gap-5">
            <span>component2 server</span>
            <textarea value={text} onChange={(e) => handleTextAreaChange(e.target.value)} />
                <input type="text" value={query} onChange={handleInputChange} />
            <Button onClick={() => getTextAsync()}>Calling</Button>
        </div>
    )
        
}