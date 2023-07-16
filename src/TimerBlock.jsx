import { FaClock } from "react-icons/fa"
import { useState,useEffect } from "react";
import styled from './timerblock.module.scss';

function TimerBlock({sunday,monday,tuesday,wednesday,thursday,friday,saturday,
    jan,feb,mar,apr,may,june,july,aug,sep,oct,nov,dec}){
   
const [hour,setHour] =  useState();
const [minute,setMinute] =  useState();
const [second,setSecond] =  useState();
const [weekDays,setWeekDays] = useState([sunday,monday,tuesday,wednesday,thursday,friday,saturday])
const [month,setMonth] = useState([jan,feb,mar,apr,may,june,july,aug,sep,oct,nov,dec])
 useEffect(()=>{
    setInterval(()=>{
    const time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let day = weekDays[time.getDay()]
    let mnth = month[time.getMonth()]
   setHour(h);
   setMinute(m);
   setSecond(s)
   setWeekDays(day)
   setMonth(mnth)
    },1000)
 },[])
return(
<>
<div className={styled.timerBlock}>
<p>
<FaClock />   {hour}:{minute<=9 ? "0" + minute:minute}
    :{second<=9?"0"+ second:second} 
   </p> 
    <p> {weekDays} ,{month},{new Date().getDate()}</p>
    </div>
  
</>
)
}

export default TimerBlock