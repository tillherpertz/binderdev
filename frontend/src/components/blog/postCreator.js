import React from "react";
import { Link } from "react-router-dom";

import { useInView } from 'react-intersection-observer';;


function PostCreator({ blogpost }) {
    const { ref, inView } = useInView();

    return (
        <>
            <div ref={ref} key={blogpost.id} className={`post-listing ${inView ? 'animate-show' : ''}`}>
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
        </>
    )
}

export default PostCreator