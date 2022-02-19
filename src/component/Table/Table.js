import React from 'react'
import classes from './Table.css'
import beer from './image/beer-bottle.png'
import table from './image/restaurant (1).png'

const Table = (props) => {
  return (
    <div className='' onClick={props.onClick}>
      <div className='all'>
      {props.isCall ? (<img className='table-img' src={beer}></img>): (<img className = 'table-img'src ={table}></img>)}
      </div>
      {/* <div className={`${props.isCall ? classes.tableCall : classes.tableNotCall}`}></div> */}
      <h2 className='title-admin'>Table {props.tableId}</h2>
    </div>
  )
}

export default Table