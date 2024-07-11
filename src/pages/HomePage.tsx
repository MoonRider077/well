import Header from '../components/home/header/Header' 
import Carousel from '../components/home/carousel/Carousel'
import Product from '../components/home/product/Product'
import FAQ from '../components/home/accordion/FAQ'
import News from '../components/home/news/News'
import Footer from '../components/home/footer/Footer'
import MenuMobile from '../components/home/menu/MenuMobile'

export default function HomePage() {
  return (
    <>
      <Header />
      <Carousel />
      <Product />
      <FAQ />
      <News />
      <Footer />
      <MenuMobile />
    </>
  )
}
