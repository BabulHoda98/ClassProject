import React, { useMemo } from 'react'
import { columnDef } from './columns'
import dataJson from '../table.json'
import { useReactTable } from 'tanstack/react-table'

function Main8() {

    let finalTableData = useMemo(() => dataJson, [])
    let finalColumnData = useMemo(() => columnDef, [])

    const tableInstance = useReactTable({
        columns: finalColumnData,
        data: finalTableData
    })

    return (
        <div>
            <table>
                <thead>
                    {
                        console.log(tableInstance.getHeaderGroups())
                    }
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    )
}
export default Main8
