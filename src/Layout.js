import React from "react";
import Navigation from './components/Navigation/Navigation';
import "./layout.scss";

const Layout = ({ children }) => {
    return (
        <>
            <section className="layout__section">
                <Navigation/>
                <div className="layout__container">{children}</div>
            </section>
        </>
    )
}

export default Layout