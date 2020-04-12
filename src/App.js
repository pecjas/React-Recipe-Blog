import React from 'react';
import './bootstrap.css';
import {Switch,Route} from 'react-router-dom';
import Home from './components/Home';
import Recipes from './components/Recipes';
import Sidebar from './components/Sidebar';
import Manage from './components/Manage';
import Login from './components/Login';
import Contact from './components/Contact';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        default: "Default App string"
    }
}

  setRecipeState(id) {
    this.setState({recipe_id: id})
  }

  render() {
    return (
      <React.Fragment>
      <div className="d-flex">
        <Sidebar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/recipes" render={(props) => <Recipes {...props} setRecipe={() =>this.setRecipeState} />} />
            <Route path="/login" component={Login} />
            <Route path="/contact" component={Contact} />
            <Route path="/manage" render={(props) => <Manage {...props} />} />
          </Switch>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default App;