import * as React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

function SEO({title}) {
    return(
    <StaticQuery
        query={graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        keywords
                    }
                }
            }
      `}
        render={data => (
            <Helmet encodeSpecialCharacters={true} defer={false} defaultTitle={data.site.siteMetadata.title}>
                <html lang="en" />
                <title>{title}</title>
                <link href="https://fonts.googleapis.com/css2?family=Jost:wght@700&amp;family=Montserrat:wght@700&amp;family=Source+Sans+Pro:wght@400;700&amp;display=swap" rel="stylesheet" />
                <meta name="description" content={data.site.siteMetadata.description} />
                <meta name="keywords" content={data.site.siteMetadata.keywords} />
            </Helmet>
        )}
      />
    )
}

export default SEO;

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}