"use client"

import {useState} from "react"

type ClientComponentProps = {
    component1: React.ReactNode,
    component2: React.ReactNode,
}

export default function ClientComponent({component1, component2}: ClientComponentProps) {
    const [component] = useState<"1" | "2">("1");
    console.log(component);
    console.log(typeof component);
    return (
        <>
        {component1 ?? component1}
        {component2 ?? component2}
        </>
    )
}