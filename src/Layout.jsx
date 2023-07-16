import { useState,useEffect } from "react";
import {Link,Outlet} from 'react-router-dom'
import classes from "./app.module.scss";
import  FlagImage1 from './otherImage/armFlag.jpg'
import  FlagImage2 from './otherImage/russianFlag.png'
import  FlagImage3 from './otherImage/gb.png'
import TimerBlock from './TimerBlock'
import Footer from "./footerPart/Footer";
import { FaTimes, FaBars,FaMoon,FaSun,FaArrowUp,FaHome,FaStar,FaNewspaper,FaPhotoVideo } from "react-icons/fa";
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
function Layout(){
    const [toggle, setToggle] = useState(false);
    const [switchLight,setSwitchLight] = useState(false);
 

    const {t, i18n} = useTranslation()
    const changeLanguage = (language)=>{
      i18n.changeLanguage(language);
      localStorage.setItem("lang", language)
    }
 
  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem("switch light")) 
    if (data !== false) setSwitchLight(JSON.parse(data))  
  },[])
  
  useEffect(()=>{
    localStorage.setItem("switch light",JSON.stringify(switchLight))
    },[switchLight]);

    useEffect(()=>{
       AOS.init({duration: 1000})
    },[])
return(
    <>
    <body>
    <div className={classes.ToggleButton} onClick={() => setToggle(!toggle)}>
        {toggle ? <FaTimes /> : <FaBars />}
      </div>
      <div  className={switchLight ? classes.navBlockDark : classes.navBlockLight}  style={toggle?{left:"0%"}:{left:"-100%"}}>
      <button className={classes.switchButton} style={switchLight?{backgroundColor:"blue",color:"yellow"}:{backgroundColor:"yellow",color:"black"}} onClick={()=>setSwitchLight(!switchLight)}>{switchLight?<FaMoon/>:<FaSun />}</button>
      <div style={switchLight?{color:"white"}:{color:"black"}} className={classes.clock}>  
<TimerBlock 
sunday = {t("sunday")}
monday = {t("monday")}
tuesday = {t("tuesday")}
wednesday = {t("wednesday")}
thursday = {t("thursday")}
friday  = {t("friday")}
saturday = {t("saturday")}

jan ={t("jan")}
feb ={t("feb")}
mar ={t("mar")}
apr ={t("apr")}
may ={t("may")}
june ={t("june")}
july ={t("july")}
aug ={t("aug")}
sep ={t("sep")}
oct ={t("oct")}
nov ={t("nov")}
dec ={t("dec")}
/>

      </div>
        <div className={classes.buttonGroup} >
          <div className={classes.buuttonBlock}>
            <button onClick={()=>changeLanguage("am")}><img src={FlagImage1}  alt="" /></button>
            <span style={switchLight?{color:"white"}:{color:"black"}}>ՀԱՅ</span>
            </div>
          <div className={classes.buuttonBlock}>
            <button onClick={()=>changeLanguage("ru")}><img src={FlagImage2}  alt="" /></button>
            <span style={switchLight?{color:"white"}:{color:"black"}}>РУС</span>
            </div>
          <div className={classes.buuttonBlock}>
            <button onClick={()=>changeLanguage("en")}><img src={FlagImage3}  alt="" /></button>
            <span style={switchLight?{color:"white"}:{color:"black"}}>ENG</span>
            </div>
        
        </div>

        <Link className={classes.link}  to="/"><FaHome/> {t("homePage")}</Link>
        <Link className={classes.link} to="/heroespage"><FaStar/> {t("wallHero")}</Link>
        <Link className={classes.link} to="/newspage"><FaNewspaper/> {t("news")}</Link>
        <Link className={classes.link} to="/gallerypage"><FaPhotoVideo/> {t("gallery")}</Link>

    </div>
    <div className={classes.generalBlock} style={switchLight?{backgroundColor:"black",color:"white"}:{backgroundColor:"white",color:"black"}}>
      <div data-aos="fade-up" className={classes.scrolledBtn}><a href="#"><FaArrowUp /></a></div>
   <Outlet/>
    </div>

    <Footer 
    footerTextOne = {t("footerTextOne")} 
    footerTextTwo = {t("footerTextTwo")} 
    footerTextThree = {t("footerTextThree")} 
    SocialHeader = {t("SocialHeader")}
    switchLight = {switchLight}/>
    </body>
   
    </>
)
}

export default Layout