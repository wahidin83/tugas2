import React from 'react'

const Biodata = () => {
  return (
    <div>
      <h2>Form Registrasi</h2>
      <form>
        <fieldset>
          <legend>Biodata</legend>
          <table>
            <tr>
              <td>Nama</td>
              <td>:</td>
              <td>
                <input type='text'></input>
              </td>
            </tr>

            <tr>
              <td>Nim</td>
              <td>:</td>
              <td>
                <input type='text'></input>
              </td>
            </tr>

            <tr>
              <td>Tanggal Lahir</td>
              <td>:</td>
              <td>
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                  <option>13</option>
                  <option>14</option>
                  <option>15</option>
                  <option>16</option>
                  <option>17</option>
                  <option>18</option>
                  <option>19</option>
                  <option>20</option>
                  <option>21</option>
                  <option>22</option>
                  <option>23</option>
                  <option>24</option>
                  <option>25</option>
                  <option>26</option>
                  <option>27</option>
                  <option>28</option>
                  <option>29</option>
                  <option>30</option>
                  <option>31</option>
                </select>
                <select>
                  <option>Januari</option>
                  <option>Februari</option>
                  <option>Maret</option>
                  <option>April</option>
                  <option>Mei</option>
                  <option>Juni</option>
                  <option>Juli</option>
                  <option>Agustus</option>
                  <option>September</option>
                  <option>Oktober</option>
                  <option>November</option>
                  <option>Desember</option>
                </select>
                <select>
                  <option>1990</option>
                  <option>1989</option>
                  <option>1988</option>
                  <option>1987</option>
                  <option>1986</option>
                </select>
              </td>
            </tr>

            <tr>
              <td>Alamat</td>
              <td>:</td>
              <td>
                <textarea rows='7' cols='45'></textarea>
              </td>
            </tr>

            <tr>
              <td>Jenis Kelamin</td>
              <td>:</td>
              <td>
                <input type='radio' id='age1' name='JK' value='L'></input>
                Laki-laki
                <input type='radio' id='age2' name='JK' value='P'></input>
                Perempuan
              </td>
            </tr>
          </table>
        </fieldset>
      </form>
    </div>
  )
}

export default Biodata
