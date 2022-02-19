import React from 'react'
import classes from './Table.module.css'

const Table = (props) => {
  return (
    <div className={classes.tableBody} onClick={props.onClick}>
      <div className={`${props.isCall ? classes.tableCall : classes.tableNotCall}`}></div>
      <h2 className={classes.tableTitle}>Table {props.tableId}</h2>
    </div>
  )
}

export default Table