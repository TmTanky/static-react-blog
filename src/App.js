import React from 'react'
import { BrowserRouter, Switch , Route} from 'react-router-dom'

// Components
import Header from './components/header/header'

// Pages
import MainPage from './pages/main/mainpage'
import AboutPage from './pages/about/aboutpage'
import ContactPage from './pages/contact/contactpage'

const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Switch>
      <Route exact path='/' component={MainPage}/>
      <Route exact path='/aboutus' component={AboutPage}/>
      <Route exact path='/contact' component={ContactPage}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
