import React from 'react'
import { Link } from 'react-router-dom'

export default function User() {
  return (
    <Link to="/profile/1" className="font-medium capitalize flex items-center cursor-pointer"><img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=40&h=40&q=60" alt="jay" className="rounded-full mr-3" />
      <span>jay sean</span>
    </Link>
  )
}
