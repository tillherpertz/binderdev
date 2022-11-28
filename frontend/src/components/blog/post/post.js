import React from "react";
import Query from "../../Query/query";
import Header from '../../header/header'
import Footer from '../../footer/footer'
import BLOG_QUERY from "../../../queries/blog_query";

function Post() {
    return (
        <div>
            <Header></Header>
            <div className="content-wrap is-blog">
                <h1 className="hero-headline">Blogpost.</h1>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Post