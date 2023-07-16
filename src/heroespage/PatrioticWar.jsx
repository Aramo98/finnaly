import { heroesData } from "./data"
import classes from './heroespage.module.scss'
import Galstyan from './Galstyan.jpg'
import Button  from "react-bootstrap/Button"
import { useState } from "react"

import {FaEye,FaTimes,FaStar} from 'react-icons/fa'
function PatrioticWar({leithenantImgTitle,generalOrdenTitle,ShoulderStrapTitle,year,OrdenTitle,seeOrdens,closeOrdens}){
    const [openOrden,setOpenOrden] = useState(true)

return(
 <>
 <div className="container d-flex justify-content-center align-items-center  flex-wrap gap-3">
    {heroesData.map((hero)=>{
        return(
            <div className='card d-flex  justify-content-center align-items-center ' id={classes.heroesBlock}>
            <div  className="card-header border-bottom-0 d-flex" id={classes.cardHeader}>
              <h4>{hero.nameAndSurname}</h4>  
              <Button className={classes.ordenBtn} onClick = {()=>setOpenOrden(!openOrden)} variant="success" >{openOrden?<span><FaEye/>{seeOrdens}</span>:<span><FaTimes/>{closeOrdens}</span>}</Button>
            </div>
            <div className='card-body ' id={classes.imgBox}>
           
                <img src={Galstyan} alt={Galstyan} className="card-img-top"  id={classes.img}/>
                <div style={openOrden?{height:"0"}:{height:"100px"}} className={classes.OrdensBlock}>
                    <div className={classes.ordensImg}>
                    <img src={hero.ordens} alt="" />
                    </div>
                    <div className="infoBlock" style={{display:"flex",justifyContent:"center",alignItems:"flex-start",flexDirection:"column"}}>
                    <h4>{OrdenTitle}</h4>
                    <p>{generalOrdenTitle}</p>
                    </div>
                  
                </div>
            </div>
            <div className="card-footer d-flex justify-content-center align-items-center flex-column">
             <p className="text-dark">1902-1942{year}</p>
            <div className="text-dark d-flex justify-content-center align-items-center gap-4"><FaStar />{ShoulderStrapTitle}.: <div className = {classes.ShoulderStrap}> <img src={hero.MilitaryRank} title = {leithenantImgTitle}  alt={hero.MilitaryRank} /> </div> </div>
            </div>
           
        
        </div>
        )
    })}
 </div>
 </>
)
}

export default PatrioticWar