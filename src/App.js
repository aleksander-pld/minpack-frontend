import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Pages
import Main from './pages/main'
import Artist_2 from './pages/artist_2';
import Upload from './pages/upload';
import Submittingnft from './pages/submittingnft';
import Admindash from './pages/admindash';
import Gallery from './pages/gallery';
import Offer from './pages/offer';
import Thanks from './pages/thanks'
import Infulencerdah from './pages/infulencerdah';
import Share from './pages/share';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Main}/>
          <Route path='/artist' component={Artist_2}/>
          <Route path='/upload' component={Upload}/>
          <Route path='/submitnft' component={Submittingnft}/>
          <Route path='/admindashboard' component={Admindash}/>
          <Route path='/gallery' component={Gallery}/>
          <Route path='/offer/:id' component={Offer}/>
          <Route path='/influencer' component={Infulencerdah}/>
          <Route path='/Share/:id' component={Share}/>
          <Route path='/thanks' component={Thanks}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
