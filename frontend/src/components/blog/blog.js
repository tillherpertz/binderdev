import React from "react";
import Query from "../Query/query";
import Header from '../header/header'
import Footer from '../footer/footer'
import BLOG_QUERY from "../../queries/blog_query";

function Blog() {
    return (
        <div>
            <Header></Header>
            <div className="content-wrap is-blog">
                <h1 className="hero-headline">Blog.</h1>
                <Query query={BLOG_QUERY} id={null}>
                    {({ data: { blogposts } }) => {
                        return (
                            <div className="blogpost-wrapper">
                                {blogposts.data.map((blogpost) => {
                                    return (
                                        <div className="blogpost-listing">
                                            <div>
                                                <img src={process.env.REACT_APP_BACKEND_URL + blogpost.attributes.Image.data.attributes.url} />
                                            </div>
                                            <div className="blog-desc">
                                                <h2>{blogpost.attributes.Title}</h2>
                                                <p>{blogpost.attributes.Description}</p>
                                                <button>read more.</button>
                                            </div>
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