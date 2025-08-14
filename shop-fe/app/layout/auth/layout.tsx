import {Outlet} from "react-router"
import TopBanner from "@/components/common/TopBanner"
import Nav from "@/components/common/Nav"

export default function AuthLayout() {
    return (
        <>
        <div className="flex flex-col items-center justify-center h-screen">
            <Nav />
            <TopBanner />
            <h1 className="text-2xl font-bold">Auth Layout</h1>
            <div className="w-full">
            <Outlet />
            </div>
        </div>
        </>
    )
}