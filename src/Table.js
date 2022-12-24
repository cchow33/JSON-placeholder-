import React from 'react'
// import Row from './Row'

const Table = ({ items }) => {
  return (
    <div className="table-container">
      <table>
        <tbody>
          {items.map(item => (
            // <Row key={item.id} item={item} />
            <tr>
            {Object.entries(item).map(([key, value]) => {
              return (
                <td>
                  {JSON.stringify(value)}      
                </td>
                )
              })}
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table