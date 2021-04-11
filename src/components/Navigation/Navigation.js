import React from "react";
import "./navigation.scss";
import { Link } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {IoIosCode, IoIosArrowForward, IoIosArrowBack} from "react-icons/io";

const Navigation = () => {	
    return(
        <>
            <section className="nav__section">
                <nav className="menu">
                    <Link to="/" className="menu__link-first name"><IoIosArrowBack />lexi shaughnessy<IoIosArrowForward /></Link>
                    <ul>
                        <li><AnchorLink href="#projects" className="menu__link">projects</AnchorLink></li><span className="separator"><IoIosCode /></span>
                        <li><AnchorLink href="#contact" className="menu__link">contact</AnchorLink></li>
                    </ul>
                </nav>
            </section>
        </>
    )
}

export default Navigation