import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// route pages
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import User from './pages/User';
// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Alert from './components/Alert';
// context providers
import { GithubProvider } from './context/github/GithubContext'
import { AlertProvider } from './context/alert/AlertContext';


function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />

            <main className='container mx-auto px-3 pb-12'>
              <Alert />
              <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path="/about"><About /></Route>
                <Route path="/user/:username"><User /></Route>
                <Route path="/notfound"><NotFound /></Route>
                <Route path="/*"><NotFound /></Route>
              </Switch>
            </main>

            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
