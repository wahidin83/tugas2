import React from 'react'

const Resolusi = () => {
  return (
    <div>
      <form>
        <fieldset>
          <legend>Resolusi Tahun Ini</legend>
          <table>
            <tr>
              <td width='100'></td>
              <td>
                <tr>
                  <td>
                    <input type='checkbox' name='html' value='html'></input>{' '}
                    Menguasai HTML
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type='checkbox' name='html' value='html'></input>{' '}
                    Paham CSS
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type='checkbox' name='html' value='html'></input>{' '}
                    Mastering PHP
                  </td>
                </tr>
              </td>
            </tr>
          </table>
        </fieldset>
      </form>
    </div>
  )
}

export default Resolusi
