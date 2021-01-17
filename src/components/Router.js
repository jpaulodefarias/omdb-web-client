import {
  BrowserRouter,
  Switch,
  Route,
  NavLink as Link,
} from 'react-router-dom';

import { Nav, Navbar } from 'react-bootstrap';

import Home from './Home';
import Favorites from './Favorites';
import Movie from './Movie';

const Router = () => (
  <BrowserRouter>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>MovieDb</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link exact to="/" className="nav-link">Home</Link>
          <Link to="/favorites" className="nav-link">Favorites</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Switch>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="/movie/:id">
          <Movie />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
  </BrowserRouter>
);

export default Router;
