import { FaStar,FaEye,FaTimes } from "react-icons/fa"
import classes from './heroespage.module.scss'
import  {useState} from 'react'
import { useTranslation } from "react-i18next";
import Button from 'react-bootstrap/Button'
import Galstyan from './Galstyan.jpg'
import Samvel from './Սամվել_Անդրանիկի_Խաչատրյան.jpg';
import Hakob from './Hakob2.jpg';
import redStar from './4.jpg'
import Ariutyun from './Արության մեդալ.jpg'
import MartakanTsarayutyun from './Medal-1.jpg'
 function HeroesItem({ heroOneName,
  heroTwoName,
  heroThreeName,
  heroOneSurname,
  heroTwoSurname,
  heroThreeSurname,
  ShoulderStrapTitle,
  seeOrdens,
  closeOrdens,  
  heroSpecialistOne,
  heroSpecialistTwo,
heroSpecialistThree,
NameOfOrdenOne,
NameOfOrdenTwo,
OrdenTitle,
  year}){
const[openOrdenOne,setOpenOrdenOne] = useState(true)
const[openOrdenTwo,setOpenOrdenTwo] = useState(true)
const[openOrdenThree,setOpenOrdenThree] = useState(true)
 return(
   <>
       <div  className='card d-flex justify-content-center align-items-center ' id={classes.heroesBlock}>
            <div  className="card-header border-bottom-0 d-flex" id={classes.cardHeader}>
              <h4>{heroOneName} {heroOneSurname}</h4>  
              <Button className={classes.ordenBtn} onClick = {()=>setOpenOrdenOne(!openOrdenOne)} variant="success" >{openOrdenOne?<span><FaEye/> {seeOrdens}</span>:<span><FaTimes/> {closeOrdens}</span>}</Button>
            </div>
            <div className='card-body ' id={classes.imgBox}>
           
                <img src={Samvel} alt={Samvel} className="card-img-top"  id={classes.img}/>
                <div style={openOrdenOne?{height:"0"}:{height:"100px"}} className={classes.OrdensBlock}>
                    <div className={classes.ordensImg}>
                    <img src={Ariutyun} alt="" />
                    </div>
                    <div className="infoBlock" style={{display:"flex",justifyContent:"center",alignItems:"flex-start",flexDirection:"column"}}>
                    <h4>{OrdenTitle}</h4>
                    <p>{NameOfOrdenTwo}</p>
                    </div>
                  
                </div>
            </div>
            <div className="card-footer d-flex justify-content-center align-items-center flex-column">
             <p className="text-dark">2002-2020 {year}</p>
            <div className="text-dark d-flex justify-content-center align-items-center gap-4"><FaStar />{ShoulderStrapTitle}.: {heroSpecialistOne} </div>
            </div>
           
        
        </div>
        <div  className='card d-flex justify-content-center align-items-center ' id={classes.heroesBlock}>
            <div  className="card-header border-bottom-0 d-flex" id={classes.cardHeader}>
              <h4>{heroTwoName} {heroTwoSurname}</h4>  
              <Button className={classes.ordenBtn} onClick = {()=>setOpenOrdenTwo(!openOrdenTwo)} variant="success" >{openOrdenTwo?<span><FaEye/> {seeOrdens}</span>:<span><FaTimes/> {closeOrdens}</span>}</Button>
            </div>
            <div className='card-body ' id={classes.imgBox}>
           
                <img src={Hakob} alt={Hakob} className="card-img-top"  id={classes.img}/>
                <div style={openOrdenTwo?{height:"0"}:{height:"100px"}} className={classes.OrdensBlock}>
                    <div className={classes.ordensImg}>
                    <img src={MartakanTsarayutyun} alt="" />
                    </div>
                    <div className="infoBlock" style={{display:"flex",justifyContent:"center",alignItems:"flex-start",flexDirection:"column"}}>
                    <h4>{OrdenTitle}</h4>
                    <p>{NameOfOrdenOne}</p>
                    </div>
                  
                </div>
            </div>
            <div className="card-footer d-flex justify-content-center align-items-center flex-column">
             <p className="text-dark">1998-2020 {year}</p>
            <div className="text-dark d-flex justify-content-center align-items-center gap-4"><FaStar />{ShoulderStrapTitle}.: {heroSpecialistTwo} </div>
            </div>
           
        
        </div>
        <div  className='card d-flex justify-content-center align-items-center ' id={classes.heroesBlock}>
            <div  className="card-header border-bottom-0 d-flex" id={classes.cardHeader}>
              <h4>{heroThreeName} {heroThreeSurname}</h4>  
              <Button className={classes.ordenBtn} onClick = {()=>setOpenOrdenThree(!openOrdenThree)} variant="success" >{openOrdenThree?<span><FaEye/> {seeOrdens}</span>:<span><FaTimes/> {closeOrdens}</span>}</Button>
            </div>
            <div className='card-body ' id={classes.imgBox}>
           
                <img src={Galstyan} alt={Galstyan} className="card-img-top"  id={classes.img}/>
                <div style={openOrdenThree?{height:"0"}:{height:"100px"}} className={classes.OrdensBlock}>
                    <div className={classes.ordensImg}>
                    <img src={MartakanTsarayutyun} alt="" />
                    </div>
                    <div className="infoBlock" style={{display:"flex",justifyContent:"center",alignItems:"flex-start",flexDirection:"column"}}>
                    <h4>{OrdenTitle}</h4>
                    <p>{NameOfOrdenOne}</p>
                    </div>
                  
                </div>
            </div>
            <div className="card-footer d-flex justify-content-center align-items-center flex-column">
             <p className="text-dark">1963-1994 {year}</p>
            <div className="text-dark d-flex justify-content-center align-items-center gap-4"><FaStar />{ShoulderStrapTitle}.: {heroSpecialistThree} </div>
            </div>
           
        
        </div>
   </> 
 )
}

export default HeroesItem