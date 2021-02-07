import React from 'react'

const Kendaraan = props => {
  return (
    <div>
      <h2>Kendaraan : {props.jenis}</h2>
      <table>
        <tr>
          <td>
            {props.jenis} {props.merk1}
          </td>
        </tr>
        <tr>
          <td>
            {props.jenis} {props.merk2}
          </td>
        </tr>
        <tr>
          <td>
            {props.jenis} {props.merk3}
          </td>
        </tr>
      </table>
    </div>
  )
}

export default Kendaraan
