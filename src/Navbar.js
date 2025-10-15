import {Link, useMatch, useResolvedPath, useNavigate} from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className = "nav">
            {/* <Link to = "/" className = "navTitle"> Exterior </Link> */}
            <ul>
                <CustomLink to = "/about">About</CustomLink>
                <CustomLink to = "/home">Home</CustomLink>
                <CustomLink to = "/experience">Experience</CustomLink>
                <CustomLink to = "/projects">Projects</CustomLink>
                <CustomLink to = "/beyond">Beyond</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path : resolvedPath.pathname, end : true})
    const navigate = useNavigate();

    const click = (e) => {
        if (isActive && (to === "/experience" || to === "/projects" || to === "/beyond")) {
            e.preventDefault();
            navigate("/home");
        }
    }

    return (
        <li className = {isActive ? "active" : ""}>
                <Link to = {to} onClick = {click} {...props}>{children}</Link>
        </li>
    )
}