import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import CatalogPage from './pages/Catalog/Catalog'
import CardPage from './pages/CardPage/CardPage'
import UsersPage from './pages/UsersPage/UsersPage'
import CreatePage from './pages/CreatePage/CreatePage'
import BasketPage from './pages/BasketPage/BasketPage'
import {Routes,Route} from 'react-router-dom'
import Start from './pages/Start/Start'
import { useState } from 'react'

function App() {

  const [basket,setBasket] = useState([])

  return(
    <>
      <Header basket={basket}/>
      <Routes>
        <Route path="/" element = {<Start />} />
        <Route path="/catalog" element = {<CatalogPage addToBasket={setBasket} basket={basket}/>} />
        <Route path="/catalog/:id" element = {<CardPage />} />
        <Route path="/users" element = {<UsersPage />} />
        <Route path="/create" element = {<CreatePage />} />
        <Route path="/basket" element = {<BasketPage basket={basket}/>} />
        <Route path="/basket/:id" element = {<CardPage basket={basket}/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
