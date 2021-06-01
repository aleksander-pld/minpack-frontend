import Main from './pages/main'
import Approvee from './pages/approvee'
import Artist_2 ,{ userContext }from './pages/artist_2';
import Createnft_4, { createnft_4 } from './pages/createnft_4';
import Submittingnft from './pages/submittingnft';
import Admindash from './pages/admindash';
import Gallery from './pages/gallery';
import Nftname from './pages/nftname';
import Thanks from './pages/thanks'
import Infulencerdah from './pages/infulencerdah';
import Nftname2 from './pages/nftname2';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import React,{useContext} from 'react';
function App() {

  return (
    <div className="App">
     
     <Router>
      <Switch>
       <Route path='/' exact component={Main}></Route>
       <Route path='/artist' component={Artist_2}></Route>
       <Route path='/approve' component={Approvee}></Route>
       <Route path='/createnft' component={Createnft_4}></Route>
       <Route path='/submitnft' component={Submittingnft}></Route>
       <Route path='/admindashboard' component={Admindash}></Route>
       <Route path='/gallery' component={Gallery}></Route>
       <Route path='/nftname' component={Nftname}></Route>
       <Route path='/influencer' component={Infulencerdah}></Route>
       <Route path='/nftname2' exact component={Nftname2}></Route>
       <Route path='/nftname2/:shareid' component={Nftname2}></Route>
       <Route path='/thanks' component={Thanks}></Route>
      </Switch>
     </Router>
    </div>
  );
}

export default App;
