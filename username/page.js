import React from 'react'

const username = ({params}) => {
  return (
    <div className='text'>
      {params.username}
    </div>
  )
}

export default username
