import React from 'react'
import { Link } from 'react-router-dom'
import leetcode from '../asset/leetcode.svg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
  return (
    <div className=''>
      <nav className=' hidden md:flex flex-col space-y-7  py-5 px-5  bg-teal-700 bg-opacity-70  w-20 rounded-xl  align-middle mx-5 my-5'>
        <Link className="hover:scale-150 ease-out  duration-200"to="https://twitter.com/DeveshK80099670"><i class="fa-brands fa-square-x-twitter fa-2xl"></i></Link>
        <Link className="hover:scale-150 ease-out  duration-200" to="https://www.linkedin.com/in/devesh-k-48517421a/"><i class="fa-brands fa-linkedin fa-2xl"></i></Link>
        <Link className="hover:scale-150 ease-out  duration-200" to="https://twitter.com/DeveshK80099670"><i class="fa-brands fa-hackerrank fa-2xl"></i></Link>
        <Link className="hover:scale-150 ease-out  duration-200" to="https://twitter.com/DeveshK80099670"><i class="fa-brands fa-github fa-2xl"></i></Link>
        <Link className="hover:scale-150 ease-out  duration-200" to="https://leetcode.com/devesh_kumar_kushwaha/">
            <img src={leetcode} alt="leetcode" className="w-7 h-7" />
        </Link>
      </nav>
    </div>
  )
}

export default Sidebar