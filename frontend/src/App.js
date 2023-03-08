import Home from "./components/home/home.js"
import Blog from "./components/blog/blog.js";
import Post from "./components/bpost/bpost.js"
import Portfolio from "./components/portfolio/portfolio.js";
import PortfolioPost from "./components/ppost/ppost.js";
import About from "./components/about/about.js"

import BLOGPOST_QUERY from "./queries/blog_single_query.js";

import { Routes, Route, NavLink, Switch } from 'react-router-dom'
import './all.scss';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Home />}>
                </Route>
                <Route path='/portfolio' element={<Portfolio />}>
                </Route>
                <Route path='/blog' element={<Blog />}>
                </Route>
                <Route path='/about' element={<About />}>
                </Route>
                <Route path="/blog/:slug" element={<Post />} exact />
                <Route path="/portfolio/:slug" element={<PortfolioPost />} exact />
            </Routes>
        </div>
    );
}

export default App;
