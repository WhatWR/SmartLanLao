import React from 'react'
import Table from '../Table/Table'
import classes from './TablesBody.module.css'

const TablesBody = (props) => {
  console.log(props.tablesInfo)
  return (
    <div className={classes.body}>
      <div className={classes.title}>Tables</div>
      <div className={classes.tables}>
        {props.tablesInfo.map((table) => (
          <Table 
            tableId={table.table_number}
            isCall={table.is_calling}
          />
        ))}
        {/* <Table tableId='1'/>
        <Table tableId='2'/>
        <Table tableId='3'/>
        <Table tableId='4'/>
        <Table tableId='5'/> */}
      </div>
    </div>
  )
}

export default TablesBody