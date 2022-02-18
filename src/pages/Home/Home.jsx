import React from 'react'
import Chart from '../../component/Chart/Chart'
import Heading from '../../component/Heading/Heading'
import Linkmini from '../../component/Linkmini/Linkmini'
import Menu from '../../component/Menu/Menu'
import TableHome from '../../component/TableHome/TableHome'
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