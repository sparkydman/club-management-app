import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './features/navbar';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
