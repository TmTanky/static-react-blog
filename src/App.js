import React from 'react'
import { BrowserRouter, Switch , Route} from 'react-router-dom'

// Components
import Header from './components/header/header'
import Footer from './components/footer/footer'

// Pages
import MainPage from './pages/main/mainpage'
import AboutPage from './pages/about/aboutpage'
import ContactPage from './pages/contact/contactpage'
import ArticleById from './pages/aritcleById/articleId'
import AllArticles from './pages/allarticles/allarticles'

// ErrorPage
import ErrorPage from './pages/errorpage/error'

// CSS
import './app.css'

const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Switch>
      <Route exact path='/' component={MainPage}/>
      <Route exact path='/aboutus' component={AboutPage}/>
      <Route exact path='/contact' component={ContactPage}/>
      <Route exact path='/article/:id' component={ArticleById}/>
      <Route exact path='/allarticles' component={AllArticles}/>
      <Route exact path="*" component={ErrorPage}/>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
