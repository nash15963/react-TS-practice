import React, { FC, useEffect, useState } from 'react'


const Count:FC = () => {
    let temp:number = 0 ;  
    console.log(temp);  //每次重新渲染這段都會重新log出來
    const [time, setTime] = useState<number>(0)

    const handleClick =():void=>{
        setTime((prev)=>prev+1)
    }

    useEffect(()=>{
        console.log('Mount');
        return ()=>{
            console.log('Unmount')
        }
    },[time])

  return (
    <div>
        <p>i click {time} times</p>
        <button onClick={handleClick}>click</button>
    </div>
  )
}

export default Count