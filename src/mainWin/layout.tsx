import { Outlet } from "react-router-dom"
import "../global.css"

export default function Layout() {
    return (
        <div className="">
            <p>Hello!</p>
            <main>
                <Outlet />
            </main>
        </div>
    )
}