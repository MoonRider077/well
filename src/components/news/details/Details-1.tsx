import React from 'react'
import Header from '../../home/header/Header'
import Details from './Details'
import Footer from '../../home/footer/Footer'
import bigNewsBanner1 from '../../../assets/images/bigNewsBanner1.jpg'

const DetailsFirst: React.FC = () => {
  return (
    <>
    <Header />
    <Details picture={bigNewsBanner1} />
    <Footer />
    </>
  )
}

export default DetailsFirst