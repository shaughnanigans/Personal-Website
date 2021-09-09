import { graphql } from 'gatsby';
import Seo from "../components/Seo/Seo"
import React, {useEffect, useState} from 'react';
import './index.scss';
import Layout from '../Layout';
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import Fade from 'react-reveal/Fade';
import { RiMailLine, RiLinkedinBoxLine } from 'react-icons/ri';
import {IoIosArrowForward} from "react-icons/io";
import PropTypes from "prop-types"

const aboutMe = [
    {excerpt: "I am a plant mom", emoji: "🌱", ariaLabel: "seedling"}, 
    {excerpt: "I am a baker", emoji: "🍰", ariaLabel: "shortcake"}, 
    {excerpt: "I am a traveler", emoji: "✈️", ariaLabel: "airplane taking off"}, 
    {excerpt: "I am a creator", emoji: "🖌️", ariaLabel:"paintbrush"}, 
    {excerpt: "I am a pun-lover", emoji: "🤣", ariaLabel: "rolling on the floor laughing"}, 
    {excerpt: "I am a lifetime student", emoji:"👩‍🎓", ariaLabel: "woman graduating"},
    {excerpt: "I am an environmentalist", emoji: "💚", ariaLabel: "green heart"},
    {excerpt: "I am always asking why?", emoji: "💭", ariaLabel: "thinking face emoji"},
    {excerpt: "I am a coffee drinker", emoji: "☕", ariaLabel: "coffee emoji"},
    {excerpt: "I like to take photos with my Canon camera", emoji: "📸", ariaLabel: "camera with flash emoji"}
]

const Homepage  = ({data}) => {
    const [randomAboutMe, setRandomAboutMe] = useState(aboutMe[0]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const current = setInterval(
            () => setIndex((i) => (i + 1) % aboutMe.length),
            5000
          );
          setRandomAboutMe(aboutMe[index]);
          return () => clearInterval(current);
    }, [index])

    return (
        <>
            <Layout>
                <Seo title="Lexi Shaughnessy" />
                <Fade>
                    <section className="homepage__section">
                        <div className="wrapper intro">
                            <h1>Hi there! <span role="img" aria-label="Hand Waving emoji">👋</span> I'm Lexi...</h1>
                            <p className="about-me">{randomAboutMe.excerpt} <span role="img" aria-label={`${randomAboutMe.ariaLabel} emoji`}>{randomAboutMe.emoji}</span></p>
                            <p>I am currently working as a front-end web developer at a digital marketing agency in Calgary, AB.</p>
                        </div>
                    </section>
                    <section className="portfolio__section" id="projects">
                        <div className="wrapper portfolio">
                            <h2>Portfolio</h2>
                            <p style={{paddingBottom:'40px'}}>I have experience with data entry, webpage building, website accessibility, SEO, and maintaining modules on sites post-launch to ensure everything is up to date and more secure. Please feel free to check out my most recent projects...</p>
                            <div className="row">
                                {data.allMarkdownRemark.edges.map(({ node }) => (
                                    <div className="row-card default" key={node.id}>
                                        <div className="row-image col">
                                            <GatsbyImage image={getImage(node.frontmatter.thumbnail)} alt={node.frontmatter.thumbnailAlt} />
                                        </div>
                                        <div className="row-copy col">
                                            <div className="content">
                                                <h3>{node.frontmatter.title}</h3>
                                                <p><strong>Tech Used:</strong> <span>{node.frontmatter.languagesUsed}</span></p>
                                                <p className="status">{node.frontmatter.projectStatus}</p>
                                                <div className="copy">
                                                    {<div dangerouslySetInnerHTML={{ __html: node.html}}/>}
                                                    { node.frontmatter.liveSiteURL ? <a className="btn primary" href={node.frontmatter.liveSiteURL} target="_blank" rel="noreferrer">live site <IoIosArrowForward /></a> : null }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                    <section className="contact__section" id="contact">
                        <div className="wrapper intro">
                            <h2 style={{paddingBottom:'40px'}}>Get In Touch</h2>
                            <div className="social-icons">
                                <div className="social-icons__email">
                                    <a href="mailto:lexishaughnessy@gmail.com">
                                        <RiMailLine />
                                        <span>Email</span>
                                    </a>
                                </div>
                                <div className="social-icons__linkedin">
                                    <a href="https://www.linkedin.com/in/lexishaughnessy" target="_blank" rel="noreferrer">
                                        <RiLinkedinBoxLine />
                                        <span>Linkedin</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <div className="name"><IoIosArrowBack />/lexi shaughnessy<IoIosArrowForward /></div> */}
                    </section>
                </Fade>
            </Layout>
        </>
    )
}

export default Homepage

export const query = graphql`
query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            liveSiteURL
            date
            languagesUsed
            projectStatus
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
            thumbnailAlt
          }
          html
        }
      }
    }
  }
`

Homepage.propTypes = {
    data: PropTypes.object
}