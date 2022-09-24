import Home from "./components/home/home.js"
import Blog from "./components/blog/blog.js";
import Portfolio from "./components/portfolio/portfolio.js";
import About from "./components/about/about.js"
import { Routes, Route, NavLink, Switch } from 'react-router-dom'
import './all.scss';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Home />}>
                </Route>
                <Route path='/blog' element={<Blog />}>
                </Route>
                <Route path='/portfolio' element={<Portfolio />}>
                </Route>
                <Route path='/about' element={<About />}>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
