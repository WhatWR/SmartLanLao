import React from 'react'
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

const TableHome = () => {
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
                        <Td>16:30-17:30</Td>
                        <Td>10</Td>

                    </Tr>
                    <Tr>
                        <Td>17:30-18:30</Td>
                        <Td>20</Td>

                    </Tr>
                    <Tr>
                        <Td>18:30-19:30</Td>
                        <Td>30</Td>

                    </Tr>
                    <Tr>
                        <Td>19:30-20:30</Td>
                        <Td>40</Td>

                    </Tr>
                    <Tr>
                        <Td>20:30-21:30</Td>
                        <Td>50</Td>

                    </Tr>
                    <Tr>
                        <Td>21:30-22:30</Td>
                        <Td>60</Td>

                    </Tr>
                    <Tr>
                        <Td>22:30-23:30</Td>
                        <Td>70</Td>

                    </Tr>
                </Tbody>
            </Table>
        </div>
        </ChakraProvider>
    )
}

export default TableHome