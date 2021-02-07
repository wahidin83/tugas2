import React from 'react'

const UserAccount = () => {
  return (
    <div>
      <form>
        <fieldset>
          <legend>User Account</legend>
          <table>
            <tr>
              <td>Username</td>
              <td>:</td>
              <td>
                <input type='text'></input>
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>:</td>
              <td>
                <input type='text'></input>
              </td>
            </tr>
            <tr>
              <td>Password</td>
              <td>:</td>
              <td>
                <input type='password'></input>
              </td>
            </tr>
            <tr>
              <td>Ulangi Password</td>
              <td>:</td>
              <td>
                <input type='Password'></input>
              </td>
            </tr>
          </table>
        </fieldset>
      </form>
    </div>
  )
}

export default UserAccount
