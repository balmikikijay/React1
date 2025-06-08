import { useState } from 'react'

const head = () => {
  const [btnlogin, setloginbtn] = useState('Login')
  return (
    <div className="headH">
      {/* <img src="" /> */}
      <div>
        <h1>Balmiki</h1>
      </div>

      <div className="navSec">
        <ul className="ull">
          <li>Home</li>
          <li>Comtact</li>
          <li>About</li>
          <button
            className="login"
            onClick={() => {
              btnlogin === 'Logout'
                ? setloginbtn('Login')
                : setloginbtn('Logout')
            }}
          >
            {btnlogin}
          </button>
        </ul>
      </div>
    </div>
  )
}

export default head
