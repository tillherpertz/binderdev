import React from "react";

function Content() {
    return (
        <div className="content-wrap">
            <h1 className="hero-headline">Henlo World.</h1>
            <p className="hero-paragraph">Find personal notes and encounters disguised as a blog
                or a weird showcase of dev or design projects.</p>
            <div className="button-wrap">
                <a href=""><button>the blog.</button></a>
                <a href=""><button>the portfolio.</button></a>
            </div>
        </div>
    );
}

export default Content