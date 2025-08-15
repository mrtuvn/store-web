import { Outlet } from "react-router";
import Nav from "@/components/common/Nav";

export default function Common () {
    return (
        <>
        <div className="main">
        <Nav />
        <Outlet />

        </div>
        </>
    )
}