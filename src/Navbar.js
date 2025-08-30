import {Link, useMatch, useResolvedPath} from "react-router-dom"

export default function Navbar() {
    return (
        <nav className = "nav">
            <Link to = "/" className = "navTitle"> Home </Link>
            <ul>
                <CustomLink to = "/About">About</CustomLink>
                <CustomLink to = "/Experience">Experience</CustomLink>
                <CustomLink to = "/Projects">Projects</CustomLink>
                <CustomLink to = "/Beyond">Beyond</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path : useResolvedPathPath.path, end : true})
    return (
        <li className = {isActive ? "active" : ""}>
                <Link to = {to} {...props}>{children}</Link>
        </li>
    )
}