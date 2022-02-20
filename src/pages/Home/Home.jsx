import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Chart from '../../component/Chart/Chart'
import Heading from '../../component/Heading/Heading'
import Linkmini from '../../component/Linkmini/Linkmini'
import LoginBtn from '../../component/LoginBtn/LoginBtn'
import Menu from '../../component/Menu/Menu'
import TableHome from '../../component/TableHome/TableHome'
import './Home.css'

const Home = () => {
  const [tablesData, setTablesData] = useState([])

  
  const getTablesData = async () => {
    const response = await axios.get('https://exceed.pontakorn.dev/log/')
    const temp = response.data
    setTablesData(temp)
    return temp;
  }
  
  useEffect(() => {
    const id = setInterval(async () => {
      await getTablesData()
    }, 1000);
    return () => {
      clearInterval(id)
    }
  }, [])
  
  return (
    <div>

      <section className="Home">
        <LoginBtn />
        <Heading />
        <TableHome tablesData={tablesData}/>
        <Chart tablesData={tablesData}/>
        <Linkmini />
      </section>
      <Menu />
    </div>

  )
}

export default Home