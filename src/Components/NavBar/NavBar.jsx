import React from "react";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";

function NavBar({ openMenu, setIsOpen }) {
    return (
        <nav className="nav-bar">
            <span className="logo">
                Skillex <span className="text-green-500">.</span>
            </span>
            <CgMenuRightAlt
                className="toogle-menu"
                onClick={() => setIsOpen(true)}
            />
            <div
                className={`menu ${
                    openMenu ? "left-0 right-0" : "-left-full lg:left-0"
                }`}
            >
                <CgClose
                    className="toogle-menu close"
                    onClick={() => setIsOpen(false)}
                />
                <ul className="nav-menu">
                    <li className="nav-item">
                        <a className="nav-link active" href="/">
                            Find passion
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            Categories
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            Skills
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            Customer
                        </a>
                    </li>
                </ul>
                <div>
                    <button className="btn">Login</button>
                    <button className="btn btn-primary">Free Trial</button>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
