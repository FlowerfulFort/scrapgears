import React, { useMemo, useEffect, useState } from 'react';
import { useTable } from 'react-table';
import UsageMeter from './UsageMeter';

const genTest = () => [
    {
        name: 'test1',
        cpu: Math.round(Math.random() * 100),
        mem: Math.round(Math.random() * 100),
    },
    {
        name: 'test2',
        cpu: Math.round(Math.random() * 100),
        mem: Math.round(Math.random() * 100),
    },
];
const ServTable = (props) => {
    const [phase, setPhase] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setPhase((prev) => prev + 1);
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);
    const testData = genTest();
    const cols = useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'CPU_usage',
                accessor: 'cpu',
                minWidth: 300,
                Cell: (props) => (
                    <UsageMeter value={props.value} color={'#9CB4CC'} />
                ),
            },
            {
                Header: 'MEM_usage',
                accessor: 'mem',
                minWidth: 300,
                Cell: (props) => (
                    <UsageMeter value={props.value} color={'#C689C6'} />
                ),
            },
        ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns: cols, data: testData });

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th
                                {...column.getHeaderProps({
                                    style: { minWidth: column.minWidth },
                                })}
                            >
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return (
                                    <td {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
    // 데이터는 나중에 props으로 가져올것임..
};
export default ServTable;
