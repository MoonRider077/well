import React from 'react'
import Header from '../../home/header/Header'
import Details from './Details'
import Footer from '../../home/footer/Footer'
import bigNewsBanner2 from '../../../assets/images/bigNewsBanner2.jpg'

const DetailsSecond: React.FC = () => {
  return (
    <>
    <Header />
    <Details picture={bigNewsBanner2} />
    <Footer />
    </>
  )
}

export default DetailsSecond;