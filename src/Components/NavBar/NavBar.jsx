import React from "react";

function NavBar() {
    return (
        <nav className="nav-bar">
            <span className="logo">Skillex <span className="text-green-500">.</span></span>
            <div className="menu">
                <ul className="nav-menu">
                    <li className="nav-item">
                        <a className="nav-link active" href="/">Find passion</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Categories</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Customer</a>
                    </li>
                </ul>
                <div className="">
                    <button className="btn">Login</button>
                    <button className="btn btn-primary">Free Trial</button>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
