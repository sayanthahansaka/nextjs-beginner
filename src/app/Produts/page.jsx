import React from 'react'
import Link from 'next/link'

const page = ({params}) => {

  const vegis = [
    {
      id:1,
      veginame: "Brocoli"
    },
    {
      id:2,
      veginame: "Spinach"
    },
    {
      id:3,
      veginame: "Pumpkin"
    },
    {
      id:4,
      veginame: "Beans"
    }
  ]

  return (
    <div>
      <h1>Vegis Products</h1>
      <ul>
        {vegis.map((vegi) => (
          <li key={vegi.id}>
            <Link href={`/Produts/vegis/${vegi.veginame}`}>
              {vegi.veginame}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default page
