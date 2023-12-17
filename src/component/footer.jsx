import React from 'react'
import { Link } from 'react-router-dom'
import leetcode from '../asset/leetcode.svg'

function Footer() {
  return (
    <div className='bg-teal-700  align-baseline text-center justify-center '>
     
      <div className=' flex  space-x-7  py-5 px-5  bg-teal-700  mx-5 my-5 justify-center'>
        <Link className="hover:scale-150 ease-out  duration-200" to="https://twitter.com/DeveshK80099670"><i class="fa-brands fa-square-x-twitter fa-2xl"></i></Link>
        <Link className="hover:scale-150 ease-out  duration-200" to="https://www.linkedin.com/in/devesh-k-48517421a/"><i class="fa-brands fa-linkedin fa-2xl"></i></Link>
        <Link className="hover:scale-150 ease-out  duration-200" to="https://twitter.com/DeveshK80099670"><i class="fa-brands fa-hackerrank fa-2xl"></i></Link>
        <Link className="hover:scale-150 ease-out  duration-200" to="https://twitter.com/DeveshK80099670"><i class="fa-brands fa-github fa-2xl"></i></Link>
        {/* <Link className="hover:scale-150 ease-out  duration-200" to="https://leetcode.com/devesh_kumar_kushwaha/">
          <img src={leetcode} alt="leetcode" className="w-7 h-7" />
        </Link> */}
      </div>
      Copyright (c) 2023 - 24  | Devesh Kumar * All rights reserved.
    </div>
  )
}

export default Footer