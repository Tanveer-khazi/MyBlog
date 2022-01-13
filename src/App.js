
import './App.css';
import {Box} from '@material-ui/core'

import Header from './components/Header'
import Home from './components/home/Home';
import DetailView from './components/Posts/DetailView';

import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Box style={{marginTop:64}}>
        <Switch>
          <Route exact path='/' component= {Home} />
          <Route exact path='/details' component={DetailView}/>
        </Switch>
      </Box>
    </BrowserRouter>
  );
}

export default App;

