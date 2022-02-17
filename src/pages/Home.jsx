import React from 'react'
import Chart from '../component/Chart'
import Heading from '../component/Heading'
import Linkmini from '../component/Linkmini'
import Menu from '../component/Menu/Menu'
import TableHome from '../component/TableHome'
import './Home.css'

const Home = () => {
  return (
    <div>
      <section className="Home">
        <Heading />
        <TableHome />
        <Chart />
        <Linkmini />
      </section>
      <Menu />
    </div>

  )
}

export default Home