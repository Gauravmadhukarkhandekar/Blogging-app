import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import APP_PROVIDER from "../store/provider";
import HomePage  from "../views/Homepage";
import PostDetails from "../views/PostDetails";
import PostsPage from '../views/PostsPage'
import './style.css'


const App = () => {
  return(
    <APP_PROVIDER>
      <Router>
        <Routes>
          <Route exact path = '/users/:userId/posts/:postId' element = {<PostDetails />} />
          <Route exact path = '/users/:userId/posts' element = {<PostsPage />} />
          <Route exact path = '/' element = {<HomePage />} />
        </Routes>
      </Router>
    </APP_PROVIDER>
  );
}

export default App;
