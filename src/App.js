import './App.css';
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Launches from './pages/launches';
import Details from './pages/Details';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const match = useRouteMatch();
  console.log('---Our url---');
  console.log(match.url);

  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="jumbotron">

        <Switch>
        <Route exact path={`${match.url}launch/:launchId`}>

              <Details />
          </Route>
          <Route exact path={match.url}>
              <Launches />
          </Route>
        </Switch>
        </div>

      </div>
      <Footer />

    </div>
  );
}

export default App;
