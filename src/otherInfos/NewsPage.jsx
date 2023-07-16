import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Helmet from 'react-helmet';
import  Carousel  from 'react-bootstrap/Carousel';

import Routine_imageOne from '../otherImage/2023-06-16_22-09-08-591.jpg'
import Routine_imageTwo from '../otherImage/2023-06-16_22-09-08-776.jpg'
import Routine_imageThree from '../otherImage/2023-06-16_22-09-09-269.jpg'
import Routine_imageFour from '../otherImage/2023-06-16_22-09-09-432.jpg'
import Routine_imageFive from '../otherImage/2023-06-16_22-15-26-438.jpg'
import Routine_imageSix from '../otherImage/2023-06-16_22-15-26-679.jpg'
function NewsPage({
  titleThree,
  newsParagraphOne,
  newsParagraphTwo,
  seeOnVideo,
  titleTabOne,
  titleTabTwo,
  yearForInfoOne,
  yearForInfoTwo
}) {


return(
    <>
    <Helmet>
    <title>{titleThree}</title>
      <meta charSet="UTF-8" />
     <meta name="author" content="Aram Margaryan"/>
    </Helmet>
    <div className="container p-3">
        <h2 className='text-center mb-5'>{titleThree}</h2>
    <Tabs 
     defaultActiveKey="problems"
      id='uncontrolled-tab-example'
      className='mb-3 justify-content-center tabBTn'>
      
        <Tab  eventKey="problems" title={titleTabOne}>
             <div className="newsBlock">
            <div className="row g-5">
       <div className="col-sm-12 col-md-12 col-lg-6 d-lg-block d-sm-block justify-content-center align-items-center">
         <div className="contentBlock">{newsParagraphOne} <br />
         <a href="https://www.youtube.com/watch?v=y0C9coZj93w&t=537s">{seeOnVideo}</a>
         <span className='text-dark'> {yearForInfoOne}</span>
         </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 d-lg-block d-sm-block justify-content-center align-items-center">
         <div className="contentBlock">
          {newsParagraphTwo} <br />
          <a href="https://www.youtube.com/watch?v=e9N-jy4Rq5Q&t=159s">{seeOnVideo}</a>
          <span className='text-dark'>{yearForInfoTwo}</span>
          </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 d-lg-block d-sm-block justify-content-center align-items-center">
         <div className="contentBlock">
         {newsParagraphTwo} <br />
          <a href="https://www.youtube.com/watch?v=e9N-jy4Rq5Q&t=159s">{seeOnVideo}</a>
          <span className='text-dark'>{yearForInfoTwo}</span>
          </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 d-lg-block d-sm-block justify-content-center align-items-center">
         <div className="contentBlock">
         {newsParagraphTwo} <br />
          <a href="https://www.youtube.com/watch?v=e9N-jy4Rq5Q&t=159s">{seeOnVideo}</a>
          <span className='text-dark'>{yearForInfoTwo}</span>
          </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 d-lg-block d-sm-block justify-content-center align-items-center">
         <div className="contentBlock">
         {newsParagraphTwo} <br />
          <a href="https://www.youtube.com/watch?v=e9N-jy4Rq5Q&t=159s">{seeOnVideo}</a>
          <span className='text-dark'>{yearForInfoTwo}</span>
          </div>
            </div>
              <div className="col-sm-12 col-md-12 col-lg-6 d-lg-block d-sm-block justify-content-center align-items-center">
         <div className="contentBlock">
         {newsParagraphTwo}<br />
          <a href="https://www.youtube.com/watch?v=e9N-jy4Rq5Q&t=159s">{seeOnVideo}</a>
          <span className='text-dark'>{yearForInfoTwo}</span>
          </div>
            </div>
            </div>
          </div>
        </Tab>
        <Tab  eventKey="village-routine" title={titleTabTwo}>
        <div className="row g-5 d-flex justify-content-center align-items-center"  >
       <div className="col-sm-12 col-md-12 col-lg-6  d-flex justify-content-center align-items-center">
        <Carousel fade className=' d-flex justify-content-center align-items-center'>
          <Carousel.Item>
            <img src={Routine_imageOne} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Routine_imageTwo} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Routine_imageThree} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Routine_imageFour} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Routine_imageFive} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Routine_imageSix} alt="" />
          </Carousel.Item>
        </Carousel>
            </div>
            </div>
        </Tab>
    
    </Tabs>
    </div>
    </>
)

}

export default NewsPage