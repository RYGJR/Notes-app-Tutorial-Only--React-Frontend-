import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NotesList from './components/NotesList';
import NotFound from './components/NotFound';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';

function App() {
  return (
      <BrowserRouter>
       <div>
         <Navbar />
       <div>
          <Switch>
          
            <Route exact path = "/" component={NotesList}/>
            <Route exact path = "*" component={NotFound}/>
          </Switch>
        </div>
       </div>
      </BrowserRouter>
  );
}

export default App;
