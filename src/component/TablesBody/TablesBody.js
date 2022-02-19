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
            onClick={() => {
              props.cilckBtn(table.table_number)
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default TablesBody