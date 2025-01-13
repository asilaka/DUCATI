import React from 'react'
import Header from './components/Header/Header'
import './App.css'
import Product from './components/Product/Product'
import { useAppContext } from './context'


const App = () => {

  const {isCard1,isCard2, toggleOpen1, toggleOpen2} = useAppContext()
  return (
    <>
    {isCard1 ? ( <Product image={'/red.png'} price={'109.990,00'} oldPrice={'129,990,00'}/>) : null}
    {isCard2 ? ( <Product image={'/black.png'} price={'89.990,00'} oldPrice={'109,990,00'}/>) : null}
     
      <Header />
    </>
  )
}

export default App