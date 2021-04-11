import * as React from "react"
import { Link } from 'gatsby';
import Layout from "../Layout";
import Seo from "../components/Seo/Seo";
import "./404.scss";

const PageNotFound = () => (
  <Layout>
      <Seo title="Page Not Found | Lexi Shaughnessy" />
      <div className="wrapper error">
        <h1>Page not Found <span role="img" aria-label="sobbing face emoji">😭</span></h1>
        <p>This page does not exist. Head back to the <Link to="/">homepage</Link>.</p>
      </div>
  </Layout>
)

export default PageNotFound