import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";

function Nav() {
    const {pathname} = useLocation();
    const links = [
        {to: "/Kanbas/Account/home", label: "Home"},
        {to: "/Kanbas/Account/search", label: "Search"},
        {to: "/Kanbas/Account/signin", label: "Signin"},
        {to: "/Kanbas/Account/signup", label: "Signup"},
        {to: "/Kanbas/Account/account", label: "Account"},
        {to: "/Kanbas/Account/admin", label: "Admin"},
        {to: "/Kanbas/Account/courses", label: "Courses"},
        {to: "/Kanbas/Account/users", label: "Users"},
    ];
    const active = (path) => (pathname.includes(path) ? "active" : "");
    return (
        <div className="list-group">
            {links.map((link) => (
                <Link
                    key={link.to}
                    to={link.to}
                    className={`list-group-item ${active(link.to)}`}
                >
                    {link.label}
                </Link>
            ))}
        </div>
    );
}

export default Nav;