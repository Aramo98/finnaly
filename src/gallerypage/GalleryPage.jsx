import Container  from "react-bootstrap/Container";
import SecondContainer from  'react-bootstrap/Container';
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from './galllerypage.module.scss';
import AOS from 'aos'
import 'aos/dist/aos.css'

function GalleryPage ({
  galleryContentHeaderOne,
  galleryContentHeaderTwo,
  galleryContentHeaderThree,
  galleryContentHeaderFour,
  galleryContentHeaderFive,
  galleryContentHeaderSix,
  galleryContentHeaderSeven,
  galleryContentHeaderEight,
  galleryContentHeaderNine,
  galleryContentHeaderTen,

  galleryContentParagraphOne,
  galleryContentParagraphTwo,
  galleryContentParagraphThree,
  galleryContentParagraphFour,
  galleryContentParagraphFive,
  galleryContentParagraphSix,
  galleryContentParagraphSeven,
  galleryContentParagraphEight,
  galleryContentParagrapNine,

  
  galleryPlaceOne,
  galleryPlaceTwo,
  galleryPlaceThree,
  galleryPlaceFour,
  galleryPlaceFive,
  galleryPlaceSix,
  galleryPlaceSeven,
  galleryPlaceEight,
  galleryPlaceNine,
  titleFour}){
  AOS.init({duration:3000})
return (
    <>
      <Helmet>
      <title>{titleFour}</title>
      <meta charSet="UTF-8" />
     <meta name="author" content="Aram Margaryan"/>
    </Helmet>
    <Container className="w-100 h-100  d-flex justify-content-center align-items-center flex-column gap-5">
        <div className="header text-center">
            <h2>{titleFour}</h2>
        </div>
       <SecondContainer className={classes.GalleryBlock}>

          <div data-aos ="fade-left" className={classes.imageBlock1}></div>
          <div  data-aos ="fade-right" className={classes.contentBlock}>
            <h2>{galleryContentHeaderOne}</h2>
            <span>{galleryContentParagraphOne} </span> <br />
            <p>{  galleryPlaceOne}</p>
            </div>


          <div  data-aos ="fade-left" className={classes.imageBlock2}></div>
          <div data-aos ="fade-right" className={classes.contentBlock}>
          <h2>{galleryContentHeaderTwo}</h2>
            <span>{galleryContentParagraphTwo} </span> <br />
            <p>{  galleryPlaceTwo}</p>
          </div>


          <div  data-aos ="fade-left" className={classes.imageBlock3}></div>
          <div data-aos ="fade-right" className={classes.contentBlock}>
          <h2>{galleryContentHeaderThree}</h2>
            <span>{galleryContentParagraphThree} </span> <br />
            <p>{  galleryPlaceThree}</p>
          </div>


        <div   data-aos ="fade-left" className={classes.imageBlock4}></div>
          <div  data-aos ="fade-right" className={classes.contentBlock}>
          <h2>{galleryContentHeaderFour}</h2>
            <span>{galleryContentParagraphFour} </span> <br />
            <p>{  galleryPlaceFour}</p>
          </div>
         


          <div  data-aos ="fade-left" className={classes.imageBlock5}></div>
          <div data-aos ="fade-right" className={classes.contentBlock}>
          <h2>{galleryContentHeaderFive}</h2>
            <span>{galleryContentParagraphFive} .</span> <br />
            <p>{  galleryPlaceFive}</p>
          </div>

    
        <div  data-aos ="fade-left"  className={classes.imageBlock6}></div>
          <div data-aos ="fade-right"  className={classes.contentBlock}>
          <h2>{galleryContentHeaderSix}</h2>
            <span>{galleryContentParagraphSix} </span> <br />
            <p>{  galleryPlaceSix}</p>
          </div>


          <div  data-aos ="fade-left"  className={classes.imageBlock7}></div>
          <div data-aos ="fade-right"  className={classes.contentBlock}>
          <h2>{galleryContentHeaderSeven}</h2>
            <span>{galleryContentParagraphSeven}</span> <br />
            <p>{  galleryPlaceSeven}</p>
          </div>


          <div  data-aos ="fade-left" className={classes.imageBlock8}></div>
          <div data-aos ="fade-right" className={classes.contentBlock}>
          <h2>{galleryContentHeaderSeven}</h2>
            <span>{galleryContentParagraphSeven} </span> <br />
            <p>{  galleryPlaceEight}</p>
          </div>

  
          <div  data-aos ="fade-left" className={classes.imageBlock9}></div>
          <div data-aos ="fade-right" className={classes.contentBlock}>
          <h2>{galleryContentHeaderEight}</h2>
            <span>{galleryContentParagraphEight} </span> <br />
            <p>{galleryPlaceNine}</p>
          </div>
  

        <div   data-aos ="fade-left" className={classes.imageBlock10}></div>
          <div data-aos ="fade-right"  className={classes.contentBlock}>
          <h2>{galleryContentHeaderNine}</h2>
          <span>{galleryContentParagrapNine} </span> <br />
            <p>{galleryPlaceNine}</p>
          </div>

    
          <div  data-aos ="fade-down" className={classes.imageBlock11}></div>
          <div data-aos ="fade-up" className={classes.contentBlock}>
          <h2>{galleryContentHeaderTen}</h2>
          </div>

   
       </SecondContainer>
    </Container>
    </>
)
}

export default GalleryPage