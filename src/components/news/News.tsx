import React from 'react'
import Header from '../home/header/Header'
import NewsContent from './NewsContent'
import Footer from '../home/footer/Footer'

const News: React.FC = () => {
  return (
    <>
        <Header />
        <NewsContent />
        <Footer />
    </>
  )
}

export default News