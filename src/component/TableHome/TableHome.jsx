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
                <Table variant='striped' size='lg' colorScheme='gray'>
                    <Thead>
                        <Tr>
                            <Th>Time</Th>
                            <Th>People</Th>

                        </Tr>
                    </Thead>
                    <Tbody>
                        {tablesData.map((data) =>{
                            return <Tr className="table-list"> 
                                <Td>{data.log_time}</Td>
                                <Td>{data.amount}</Td>
                                </Tr>
                        }).reverse()}
                    </Tbody>
                </Table>
            </div>
        </ChakraProvider>
    )
}

export default TableHome