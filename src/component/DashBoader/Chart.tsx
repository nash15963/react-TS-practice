import React, { ChangeEvent, FC, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';



const Chart:FC = () => {
    // 製作一個 時間軸固定（x bar )，分數會改變的五個分數軸
    const [first, setfirst] = useState<number>(0)
    const [second, setSecond] = useState<number>(1)
    const [third, setThird] = useState<number>(2)
    const [forth, setForth] = useState<number>(3)
    const [fifth, setFifth] = useState<number>(4)

    const PointHandler =(event:ChangeEvent<HTMLInputElement>):void=>{
        if(event.target.name==='pointOne' ){
            setfirst(Number(event.target.value))
        }
        else if(event.target.name==='pointTwo' ){
            setSecond(Number(event.target.value))
        }
        else if(event.target.name==='pointThree' ){
            setThird(Number(event.target.value))
        }
        else if(event.target.name==='pointFour' ){
            setForth(Number(event.target.value))
        }
        else if(event.target.name==='pointFive' ){
            setFifth(Number(event.target.value))
        }

    }

    ChartJS.register(ArcElement, Tooltip, Legend);
    const data = {
    labels: ['pointOne', 'pointTwo', 'pointThree', 'pointFour', 'pointFive'],
    datasets: [
      {
        label: '# of Votes',
        data: [first, second, third, forth, fifth],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 0.5,
      },
    ],
  };


  return (
    <div>

        <div>
        <div><input type="number" name='pointOne' value={first} onChange={PointHandler}/><span>point 1</span></div>
        <div><input type="number" name='pointTwo' value={second} onChange={PointHandler}/><span>point 2</span></div>
        <div><input type="number" name='pointThree' value={third} onChange={PointHandler}/><span>point 3</span></div>
        <div><input type="number" name='pointFour' value={forth} onChange={PointHandler}/><span>point 4</span></div>
        <div><input type="number" name='pointFive' value={fifth} onChange={PointHandler}/><span>point 5</span></div>
        </div>
    <div className='pieChart'><Doughnut data={data} /></div>

    </div>
  )
}

export default Chart

