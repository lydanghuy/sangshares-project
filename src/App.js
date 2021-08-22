import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import BlogPosts from "./Pages/Blog/BlogPosts/BlogPosts";
import Gallery from "./Pages/Gallery/Gallery";
import Home from "./Pages/Home/Home";
import Header from './components/Layout/Header/Header'



function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact={true}>
          <Home/>
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/post/1">
           <BlogPosts/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
