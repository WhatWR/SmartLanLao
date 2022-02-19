import React from 'react'
import Order from '../Order/Order'
import classes from './OrderList.module.css'

const OrderList = (props) => {
  return (
    <div className={classes.orderList}>
      {props.ordersInfo.map((table) => (
          <Order
            tableId={table.table_number}
            custOrders={table.cust_order}
          />
      ))}
    </div>
  )
}

export default OrderList