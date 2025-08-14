import { Outlet } from "react-router";
import Nav from "@/components/common/Nav";

export default function Common () {
    return (
        <>
        <div className="flex flex-col items-center justify-center h-screen">
        <Nav />
        <Outlet />

        </div>
        </>
    )
}