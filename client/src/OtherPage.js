import React from 'react'
import { Link } from 'react-router-dom'

function otherPage() {
  return (
    <div>
      I'm some other page!
      <Link to="/">Go back home</Link>
    </div>
  )
}

export default otherPage