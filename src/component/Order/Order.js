import React from 'react'
import classes from './Order.module.css'
const Order = (props) => {

  console.log(props.custOrders)

  return (
    <div className={classes.orderCard}>
      <h1 className={classes.title}>Table : {props.tableId}</h1>
      {props.custOrders.map((order) => (
        <ul className={classes.order}>{order}</ul>
      ))}
    </div>
  )
}

export default Order