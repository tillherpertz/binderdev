import Header from "./components/header/header.js"
import Content from "./components/content/content.js"
import Footer from "./components/footer/footer.js"
import './all.scss';

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Content></Content>
            <Footer></Footer>
        </div>
    );
}

export default App;
