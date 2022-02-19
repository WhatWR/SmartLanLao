import classes from './Admin.module.css'
import TablesBody from '../../component/TablesBody/TablesBody';
import OrderList from '../../component/OrderList/OrderList'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';




const DUMMY_DATA = [
  {
      "table_number": 1,
      "is_calling": false,
      "cust_order":  ['Menu 1', 'Menu 2', 'Menu 3']
  },
  {
      "table_number": 2,
      "is_calling": false,
      "cust_order":  ['Menu 4', 'Menu 5']
  },
  {
      "table_number": 3,
      "is_calling": true,
      "cust_order":  ['Menu 6', 'Menu 7', 'Menu 8', 'Menu 9']
  },
  {
      "table_number": 4,
      "is_calling": false,
      "cust_order":  ['Menu 10', 'Menu 11']
  },
  {
      "table_number": 5,
      "is_calling": false,
      "cust_order":  ['Menu 12', 'Menu 13', 'Menu 14']
  }
]
function Admin() {
  
  const [tablesData, setTablesData] = useState([])
  const navigate = useNavigate()

  // const getTablesData = () => {
  //   axios.get('https://ecourse.cpe.ku.ac.th/exceed09/api/table/')
  //   .then((response) => {
  //     setTablesData(response.data)
  //     // console.log(response.data)
  //   })
  // }

  // getTablesData()
  const adminLogout = () => {
    return navigate('/login')
  }

  return (
    <div className={classes.App}>
      <div className={classes.topBody}>
        <header className={classes.header}>
          <div className={classes.logo}>
            <h1 className={classes.appTitle}>SMART RANLAO</h1>
          </div>
          <div className={classes.logout}>
            <button className={classes.btn} onClick={adminLogout}>Logout</button>
          </div>
        </header>
        <div>
          <TablesBody tablesInfo={DUMMY_DATA}/>
        </div>  
      </div>
      <div className={classes.bottomBody}>
        <OrderList ordersInfo={DUMMY_DATA}/>
      </div>
    </div>
    
  );
}

export default Admin;
