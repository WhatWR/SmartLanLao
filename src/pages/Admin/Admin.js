import classes from './Admin.module.css'
import TablesBody from '../../component/TablesBody/TablesBody'
import OrderList from '../../component/OrderList/OrderList'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const DUMMY_DATA = [
  {
    table_number: 1,
    is_calling: false,
    cust_order: ['Menu 1', 'Menu 2', 'Menu 3'],
  },
  {
    table_number: 2,
    is_calling: false,
    cust_order: ['Menu 4', 'Menu 5'],
  },
  {
    table_number: 3,
    is_calling: true,
    cust_order: ['Menu 6', 'Menu 7', 'Menu 8', 'Menu 9'],
  },
  {
    table_number: 4,
    is_calling: false,
    cust_order: ['Menu 10', 'Menu 11'],
  },
  {
    table_number: 5,
    is_calling: false,
    cust_order: ['Menu 12', 'Menu 13', 'Menu 14'],
  },
]

async function getTablesData() {
  const res = await axios.get('https://exceed.pontakorn.dev/table')
  // console.log(res)
  return res.data
}

function Admin() {
  const [tablesData, setTablesData] = useState([])
  const navigate = useNavigate()

  const getTablesData = () => {
    return axios.get('https://exceed.pontakorn.dev/table').then((response) => {
      setTablesData(response.data)
      // console.log(response.data)
    })
  }

  // getTablesData()
  const adminLogout = () => {
    return navigate('/login')
  }
  const cilckBtn = (table_number) => {
    setTablesData((prev) => {
      return prev.map((tableData) => {
        return tableData.table_number === table_number
          ? { ...tableData, is_calling: false }
          : tableData
      })
    })
  }

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     getTablesData().then((data) => {
  //       setTablesData(data)
  //     })
  //   }, 5000);
  //   return () => {
  //     clearInterval(id)
  //   }
  // }, [])

  useEffect(() => {
    getTablesData()
    },[])
  console.log(tablesData)

  return (
    <div className={classes.App}>
      <div className={classes.topBody}>
        <header className={classes.header}>
          <div className={classes.logo}>
            <h1 className={classes.appTitle}>SMART RANLAO</h1>
          </div>
          <div className={classes.logout}>
            <button className={classes.btn} onClick={adminLogout}>
              Logout
            </button>
          </div>
        </header>
        <div>
          <TablesBody tablesInfo={tablesData} cilckBtn={cilckBtn} />
        </div>
      </div>
      <div className={classes.bottomBody}>
        {/* <OrderList ordersInfo={tablesData}/> */}
      </div>
    </div>
  )
}

export default Admin
