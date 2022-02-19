import classes from './Admin.module.css'
import TablesBody from '../../component/TablesBody/TablesBody'
import OrderList from '../../component/OrderList/OrderList'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

async function getTablesData() {
  const res = await axios.get('https://exceed.pontakorn.dev/table')
  // console.log(res)
  return res.data
}

function Admin() {
  const [tablesData, setTablesData] = useState([])
  const navigate = useNavigate()

  const getToken = () => {
    return localStorage.getItem('token')
  }

  const getTablesData = async () => {
    return axios.get('https://exceed.pontakorn.dev/table/').then((response) => {
      setTablesData(response.data)
      // console.log(response.data)
    })
  }

  // getTablesData()
  const adminLogout = () => {
    return navigate('/login')
  }
  const cilckBtn = (table_number) => {
    // setTablesData((prev) => {
    //   return prev.map((tableData) => {
    //     return tableData.table_number === table_number
    //       ? { ...tableData, is_calling: false }
    //       : tableData
    //   })
    // })
    axios.post(`https://exceed.pontakorn.dev/complete/${table_number}`
        , null, { 
            headers: { 'Authorization': `Token ${getToken()}`}
    }).then((res) => {
      tablesData[table_number].is_calling = true
    }) 
  }

  useEffect(() => {
    const id = setInterval(async () => {
      await getTablesData()
    }, 1000);
    return () => {
      clearInterval(id)
    }
  }, [])

  // useEffect(() => {
  //   getTablesData()
  //   },[])
  // console.log(tablesData)

  return (
    <div className='app-admin'>
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
      {/* <div className={classes.bottomBody}>
        <OrderList ordersInfo={tablesData}/>
      </div> */}
    </div>
  )
}

export default Admin
