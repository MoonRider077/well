import React from 'react'
import Header from '../../home/header/Header'
import Details from './Details'
import Footer from '../../home/footer/Footer'
import bigNewsBanner3 from '../../../assets/images/bigNewsBanner3.jpg'

const DetailsThird: React.FC = () => {
  return (
    <>
    <Header />
    <Details picture={bigNewsBanner3} />
    <Footer />
    </>
  )
}

export default DetailsThird