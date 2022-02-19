import React, { useEffect, useState } from 'react'
import './TableHome.css'
import ConVerTime from '../../service/ConVertTime'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    ChakraProvider,
} from '@chakra-ui/react'
import axios from 'axios'

const TableHome = () => {
    const [tablesData, setTablesData] = useState([])

    const getTablesData = async () => {
        const response = await axios.get('https://exceed.pontakorn.dev/log/')
        const temp = response.data
        setTablesData(temp)
        return temp;
    }
    useEffect(() => {
        getTablesData();
    }, [])


    return (
        <ChakraProvider>
            <div className="table-home">
                <Table variant='simple' size='lg'>
                    <TableCaption>Imperial to metric conversion factors</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Time</Th>
                            <Th>People</Th>

                        </Tr>
                    </Thead>
                    <Tbody>
                        {tablesData.map((data) =>{
                            return <Tr> 
                                <Td>{data.amount !==0?data.log_time: ''}</Td>
                                <Td>{data.amount !==0? data.amount: ''}</Td>
                                </Tr>
                        })}
                    </Tbody>
                </Table>
            </div>
        </ChakraProvider>
    )
}

export default TableHome