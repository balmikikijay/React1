import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Search from './components/Search'
import Content from './components/Content'
import Data from './components/Data'

const Show = () => {
  return (
    <>
      <Header />,
      <Search />,
      <Content />,
      <Data />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Show />)
