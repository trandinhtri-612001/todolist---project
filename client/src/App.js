
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Auth from './components/veiw/Auth';
import AuthContextProvider from './contexts/AuthContext';
import Home from './components/Home/Home'
import ProtectedRoute from './components/routing/Protectedrouter';
import Above from './components/Home/Above';
import PostContextProvider from './contexts/PostContext';
import Profile from './components/auth/Profile';
import Updateuser from './components/auth/Updateuser';
function App() {
  return (
    <>
    <AuthContextProvider>
      <PostContextProvider>
          <Router>
             <Switch>
               <Route exact path= '/' component={Landing}/>
                     <Route exact path= '/login' render={props => <Auth {...props} authRoute='login'/>}/>
                   <Route exact path='/register' render={props => <Auth {...props} authRoute='register' />} />
                 < ProtectedRoute exact path='/home' component={Home} />
              <ProtectedRoute exact path='/above' component={Above} />
              <ProtectedRoute exact path='/update' component={Profile} />
              <ProtectedRoute exact path = '/updateuser' component={Updateuser} />
                </Switch>

    </Router>
    </PostContextProvider>
      </AuthContextProvider>
      </>
   
  );
}

export default App;
