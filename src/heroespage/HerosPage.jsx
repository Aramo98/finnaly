import {Helmet} from 'react-helmet';
import ArtsakhHeroesItem from './ArtshakhHeroesItem';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import classes from './heroespage.module.scss';
import { useState } from 'react';

import GeneralMajor from './generalMayor.jpg'
import  Button  from 'react-bootstrap/Button';
import Galstyan from './Galstyan.jpg';
import {FaEye, FaTimes, FaStar } from "react-icons/fa";
import redFlag from './Order_of_Red_Banner.png'
import LeninOrden from './Order_of_Lenin_badge_with_ribbon.png'
import PatrioticWar from './PatrioticWar';

function HeroesPage({year,
  seeOrdens,
  closeOrdens,
  OrdenTitle,
  ShoulderStrapTitle,
  titleTwo,
  switchLight,
  heroOneName,
  heroTwoName,
  heroThreeName,
  heroOneSurname,
  heroTwoSurname,
  heroThreeSurname,
  heroSpecialistOne,
  heroSpecialistTwo,
  heroSpecialistThree,
  NameOfOrdenOne,
  NameOfOrdenTwo,
  generalNameAndSurname,
  generalOrdenTitleOne,
  generalOrdenTitleTwo,
  generalImgTitle,
  TabTitleOne,
  TabTitleTwo,
  leithenantImgTitle
}){
const [openOrden,setOpenOrden] = useState(true)
return (
    <>
    <Helmet>
      <title>{titleTwo}</title>
      <meta charSet="UTF-8" />
     <meta name="author" content="Aram Margaryan"/>
    </Helmet>
   <div className='container-fluid' id={classes.heroesBlock}>
   <div className={classes.topBlock}>
   <div className='card d-flex justify-content-center align-items-center ' id={classes.heroesBlock}>
    <div  className="card-header border-bottom-0 d-flex" id={classes.cardHeader}>
      <h4>{generalNameAndSurname}</h4>  
      <Button className={classes.ordenBtn} onClick = {()=>setOpenOrden(!openOrden)} variant="success" >{openOrden?<span><FaEye/> {seeOrdens}</span>:<span><FaTimes/> {closeOrdens}</span>}</Button>
    </div>
    <div className='card-body ' id={classes.imgBox}>
   
        <img src={Galstyan} alt={Galstyan} className="card-img-top"  id={classes.img}/>
        <div style={openOrden?{height:"0"}:{height:"310px"}} className={classes.OrdensBlock}>
         <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
         <div className={classes.ordensImgOne}>
            <img src={redFlag} alt="" />
            </div>
            <div className="infoBlock" style={{display:"flex",justifyContent:"center",alignItems:"flex-start",flexDirection:"column"}}>
            <h4>{generalOrdenTitleOne}</h4>
            </div> 
            <div className={classes.ordensImgTwo}>
            <img src={LeninOrden} alt="" />
            </div>
            <div className="infoBlock" style={{display:"flex",justifyContent:"center",alignItems:"flex-start",flexDirection:"column"}}>
            <h4>{generalOrdenTitleTwo}</h4>
           
            </div>
         </div>
        </div>
        
    </div>
    <div className="card-footer d-flex justify-content-center align-items-center flex-column">
     <p className="text-dark">1902-1942{year}</p>
    <div className="text-dark d-flex justify-content-center align-items-center gap-4"><FaStar />{ShoulderStrapTitle}.: <div className = {classes.ShoulderStrap}> <img src={GeneralMajor} title={generalImgTitle} alt={GeneralMajor} /> </div> </div>
    </div>
   

</div>
   </div>
   <div className='d-flex justify-content-center align-items-center flex-lg-column'>      
      <Tabs defaultActiveKey = "Հայրենական Պատերազմի Մասնակիցներ" id="uncontrolled-tab-example"className=" mb-3" >
      <Tab eventKey="Հայրենական Պատերազմի Մասնակիցներ" title={TabTitleOne}>
        <div className="container d-flex justify-content-center align-items-center gap-4">
        <PatrioticWar 
        seeOrdens = {seeOrdens} 
        leithenantImgTitle = {leithenantImgTitle}
  closeOrdens = {closeOrdens} 
  OrdenTitle = {OrdenTitle}
   generalOrdenTitle = {generalOrdenTitleOne} 
   ShoulderStrapTitle = {ShoulderStrapTitle} 
   year = {year} />
        </div>
      </Tab>
      <Tab className='d-flex' eventKey="Արցախյան պատերազմի մասնակիցներ(Առաջին,Երկրորդ)" title={TabTitleTwo}>
         <div className="container d-flex justify-content-center align-items-center gap-4">
       <ArtsakhHeroesItem 
         year = {year} 
         heroOneName = {heroOneName}
         heroTwoName = {heroTwoName}
         heroThreeName = {heroThreeName}
         heroOneSurname = {heroOneSurname}
         heroTwoSurname = {  heroTwoSurname}
         heroThreeSurname = {heroThreeSurname}
         heroSpecialistOne = {heroSpecialistOne}
         heroSpecialistTwo = {heroSpecialistTwo}
         heroSpecialistThree = {heroSpecialistThree}
         NameOfOrdenOne = {NameOfOrdenOne}
         NameOfOrdenTwo = {NameOfOrdenTwo}
         ShoulderStrapTitle = {ShoulderStrapTitle}
         OrdenTitle = {OrdenTitle}
         seeOrdens = {seeOrdens} 
         closeOrdens = {closeOrdens}
         />
        </div>
      </Tab>
     
    </Tabs>
   
   </div>

   </div>
    </>
)
}

export default HeroesPage