import React from 'react'

const page = ({params}) => {
  return (
    <div>
      <h1>Meat Item {params.id} Review {params.rwid}</h1>
    </div>
  )
}

export default page
