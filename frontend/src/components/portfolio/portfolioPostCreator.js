import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useInView } from 'react-intersection-observer';;


function PortfolioPostCreator({ portfolio }) {

    const [hasBeenInView, setHasBeenInView] = useState(false);

    const { ref, inView } = useInView({
        skip: hasBeenInView,
    });

    // Update hasBeenInView to skip element
    if (inView && !hasBeenInView) {
        setHasBeenInView(true);
    }

    return (
        <>
            <div ref={ref} key={portfolio.id} className={`post-listing ${inView ? 'animate-show' : ''}`}>
                <div className="post-contents">
                    <div className="post-image-wrap">
                        <Link to={portfolio.attributes.Slug}>
                            <img width="349" height="233" src={process.env.REACT_APP_BACKEND_URL + portfolio.attributes.Image.data.attributes.url} alt="" />
                        </Link>
                    </div>
                    <div className="post-info-wrap">
                        <div className="post-desc">
                            <h2>{portfolio.attributes.Title}</h2>
                            <p>{portfolio.attributes.Description}</p>
                        </div>
                        <div className="post-link">
                            <Link to={portfolio.attributes.Slug}>
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

export default PortfolioPostCreator