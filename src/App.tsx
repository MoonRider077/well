import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import NewsPage from "./pages/NewsPage"
import TermsPage from "./pages/TermsPage"
import DetailsFirst from "./components/news/details/Details-1"
import DetailsSecond from "./components/news/details/Details-2"
import DetailsThird from "./components/news/details/Details-3"
import ErrorPage from "./pages/ErrorPage"
import OrderPage from "./pages/OrderPage"
import { Provider } from "react-redux"
import store from "./redux/store"

function App () {

  return (
    <>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path='/home' element={<HomePage />}></Route>
          <Route path='/about' element={<AboutPage />}></Route>
          <Route path='/contact' element={<ContactPage />}></Route>
          <Route path='/news' element={<NewsPage />}></Route>
          <Route path='/news/details/1' element={<DetailsFirst />}></Route>
          <Route path='/news/details/2' element={<DetailsSecond />}></Route>
          <Route path='/news/details/3' element={<DetailsThird />}></Route>
          <Route path='/terms' element={<TermsPage />}></Route>
          <Route path='/address' element={<OrderPage />}></Route>
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
    </Provider>
    </>
  )
}

export default App
