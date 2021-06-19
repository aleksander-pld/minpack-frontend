import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Pages
import Main from './pages/main'
import Select from './pages/select';
import Upload from './pages/upload';
import Submittingnft from './pages/submittingnft';
import Artist from './pages/artist';
import Gallery from './pages/gallery';
import Offer from './pages/offer';
import Thanks from './pages/thanks'
import Influencer from './pages/influencer';
import Share from './pages/share';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Main}/>
          <Route path='/select' component={Select}/>
          <Route path='/upload' component={Upload}/>
          <Route path='/submitnft' component={Submittingnft}/>
          <Route path='/artist' component={Artist}/>
          <Route path='/gallery' component={Gallery}/>
          <Route path='/offer/:id' component={Offer}/>
          <Route path='/influencer' component={Influencer}/>
          <Route path='/Share/:id' component={Share}/>
          <Route path='/thanks' component={Thanks}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
