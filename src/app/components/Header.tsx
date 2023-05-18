import { useState, useEffect } from "react"
import axios from 'axios';
import Link from 'next/link';

export default function header() {

  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      setIsAuth(true);
    }
  }, [isAuth]);

  const logout = () => {

    const token = localStorage.getItem('token');
    axios.post(`http://127.0.0.1:8000/api/logout/?token=${token}`)
    .then(function (response) {
      localStorage.removeItem('token');
      setIsAuth(false)
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      // always executed
    }); 
}



  return (
    <header className="border-b-white-500 flex h-16 flex-row items-center justify-between border-b-2 bg-white px-5 py-2 rounded-lg">
      <h3 className='text-violet-700 font-semibold'>Votar Batallas de Freestyle</h3>
      <nav>
        <ul className="flex gap-5">
          <li>Home</li>
          <li>Fixtures</li>
          <li>News</li>
        </ul>
      </nav>
      <div className="login-logout">
        {isAuth ? <button onClick={logout}>Logout</button> : <Link href="/login"><button>Login</button></Link>}
      </div>
    </header>
  )
}
