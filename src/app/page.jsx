'use client'

import { useState } from "react";

export default function Home() {

  const [inpuvalue, setvalue] = useState("")

  const hadleClickMe = (yo) => {
    alert(yo);
  }

  const hadaleChenge = (e) => {
    setvalue(e.target.value);
  }

  return (
    <>
      <h3>all Handline Events</h3>

      <input type="text" onChange={hadaleChenge} />

      <button onClick={() => hadleClickMe("yumm yumm")}>Click Me</button>
     <hr />
      <br />
      <h2>Input Valu Her : {inpuvalue}</h2>
      {
        inpuvalue == "saya" &&  <div>
        <h1>Yooow yoooooow</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, consequuntur? Voluptatibus deserunt ipsum laborum,
           facere ea ad quo. Accusantium, obcaecati nam? Eos illo numquam harum doloribus quaerat alias incidunt fuga.</p>
      </div>
      }
    </>
  );
}
