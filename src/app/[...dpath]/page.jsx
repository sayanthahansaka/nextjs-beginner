import React from 'react'

const page = ({params}) => {
    // console.log(params);
  return (
    <div>
      <h1>Catch all routes</h1>
      <hr /><br />
      <ul>
        {params.dpath.map((item) =>{
            return (
                <li>{item}</li>
            )
        })}
      </ul>
    </div>
  )
}

export default page
