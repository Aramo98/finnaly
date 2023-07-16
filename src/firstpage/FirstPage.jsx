import classes from "../firstpage/firstpage.module.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import SlideImage1 from '../villimage/Beniamin_29.jpg'
import SlideImage2 from '../villimage/Beniamin_13.jpg'
import SlideImage3 from '../villimage/Beniamin_19.jpg';
import LegendImage from '../villimage/Beniamin_32.jpg'
import {Helmet} from 'react-helmet'
import LegendBlock from "./legendBlock/LegendBlock";
import InfoBlock from "./infoblock/InfoBlock";

function FirstPage({surface,ASL,population,titleOne,switchLight,captionOne,captionOneParagraph,captionTwo,captionTwoParagraph,captionThree,captionThreeParagraph,legendText,openText,closeText}){
return(
    <>
    <Helmet>
      <title>{titleOne}</title>
      <meta charSet="UTF-8" />

    </Helmet>
    <div className={classes.container}>
    <div className={classes.overlay}></div>
    <Carousel  className={classes.carousel}>

      <Carousel.Item className={classes.carouselItem}>
        <img
          className="d-block "
          src={SlideImage1}
          alt="First slide"
          style={{objectPosition:"center 23%"}}
        />
        <Carousel.Caption className={classes.caption}>
        <h2>{captionOne}</h2>
          <p>{captionOneParagraph}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={classes.carouselItem}>
        <img
          className="d-block "
          src={SlideImage2}
          alt="Second slide"
          style={{objectPosition:"center 23%"}}
        />

        <Carousel.Caption className={classes.caption}>
        <h2>{captionTwo}</h2>
          <p>{captionTwoParagraph}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={classes.carouselItem}>
        <img
          className="d-block"
          src={SlideImage3}
          alt="Third slide"
        />

        <Carousel.Caption className={classes.caption}>
        <h2>{captionThree}</h2>
          <p>{captionThreeParagraph}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <LegendBlock image= {LegendImage} text = {legendText} openBtn = {openText } closeBtn={closeText}/>
          
          <InfoBlock surface={surface} asl = {ASL} peoples = {population}  lightDarkTheme = {switchLight}/>
    </>

)
}

export default FirstPage