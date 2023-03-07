import React from "react";
import Query from "../Query/query";
import Header from '../header/header';
import Post from '../bpost/bpost.js';
import Footer from '../footer/footer';
import BLOG_COLLECTION_QUERY from "../../queries/blog_collection_query";

import { Link } from "react-router-dom";

function Blog() {
    return (
        <div>
            <Header></Header>
            <div className="content-wrap is-blog">
                <h1 className="hero-headline">Blog.</h1>
                <Query query={BLOG_COLLECTION_QUERY} id={null}>
                    {({ data: { blogposts } }) => {
                        return (
                            <div className="post-wrapper">
                                {blogposts.data.map((blogpost) => {
                                    return (
                                        <div className="post-listing">
                                            <div className="post-contents">
                                                <div className="post-image-wrap">
                                                    <Link to={blogpost.attributes.Slug}>
                                                        <img width="349" height="233" src={process.env.REACT_APP_BACKEND_URL + blogpost.attributes.Image.data.attributes.url} alt="" />
                                                    </Link>
                                                </div>
                                                <div className="post-info-wrap">
                                                    <div className="post-desc">
                                                        <h2>{blogpost.attributes.Title}</h2>
                                                        <p>{blogpost.attributes.Description}</p>
                                                    </div>
                                                    <div className="post-link">
                                                        <Link to={blogpost.attributes.Slug}>
                                                            <button>read more.</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="post-spacer"></hr>
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    }}
                </Query >
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Blog