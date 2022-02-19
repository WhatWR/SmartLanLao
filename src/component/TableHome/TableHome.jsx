import React, { useEffect, useState } from 'react'
import './TableHome.css'
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
    const getTablesData = () => {
        axios.get('https://exceed.pontakorn.dev/count/')
            .then((response) => {
                setTablesData(response.data)
                
            })
    }
    useEffect (() => {
        getTablesData()
        console.log(tablesData.length);
    },[])

    
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
                        <Tr>
                            <Td>18:00-19:00</Td>
                            <Td>{tablesData.amount}</Td>

                        </Tr>
                        <Tr>
                            <Td>19:00-20:00</Td>
                            <Td>20</Td>

                        </Tr>
                        <Tr>
                            <Td>20:00-21:00</Td>
                            <Td>30</Td>

                        </Tr>
                        <Tr>
                            <Td>21:00-22:00</Td>
                            <Td>40</Td>

                        </Tr>
                        <Tr>
                            <Td>22:00-23:00</Td>
                            <Td>50</Td>

                        </Tr>
                        <Tr>
                            <Td>23:00-00:00</Td>
                            <Td>60</Td>

                        </Tr>
                    </Tbody>
                </Table>
            </div>
        </ChakraProvider>
    )
}

export default TableHome