import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes , Route} from "react-router-dom"
import FirstPage from "./firstpage/FirstPage";
import HeroesPage from "./heroespage/HerosPage";
import GalleryPage from "./gallerypage/GalleryPage"
import NewsPage from "./otherInfos/NewsPage"
import Layout from "./Layout";
import { useTranslation } from "react-i18next";



function App() {
const {t} = useTranslation()

  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Layout />}>
            <Route  index element={<FirstPage  
            captionOne={t("captionOne")}
            captionOneParagraph={t("captionOneParagraph")}
            captionTwo={t("captionTwo")}
            captionTwoParagraph={t("captionTwoParagraph")}
            captionThree={t("captionThree")}
            captionThreeParagraph={t("captionThreeParagraph")}
            legendText = {t("legendText")}
            openText = {t("openText")}
            closeText = {t("closeText")}
            titleOne ={t("titleOne")}
            surface = {t("surface")}
            ASL = {t("ASL")}
            population = {t("Population")}
            />} />
            <Route path = "heroespage" element={<HeroesPage  
             titleTwo = {t("titleTwo")}
           
             ShoulderStrapTitle = {t("ShoulderStrap")}
             OrdenTitle = {t("ordenTitle")}
             seeOrdens = {t("seeOrdens")}
             closeOrdens = {t("closeOrdens")}
           year = {t("year")}
           heroOneName =  {t("heroOneName")}
           heroTwoName = {t("heroTwoName")}
           heroThreeName = {t("heroThreeName")}

           heroOneSurname = {t("heroOneSurname")}
           heroTwoSurname = {t("heroTwoSurname")}
           heroThreeSurname = {t("heroThreeSurname")}

           heroSpecialistOne = {t("heroSpecialistOne")}
           heroSpecialistTwo = {t("heroSpecialistTwo")}
           heroSpecialistThree = {t("heroSpecialistThree")}

           NameOfOrdenOne = {t("NameOfOrdenOne")}
           NameOfOrdenTwo = {t("NameOfOrdenTwo")}

           generalNameAndSurname = {t("generalNameAndSurname")}
           generalOrdenTitleOne = {t("generalOrdenTitleOne")}
           generalOrdenTitleTwo = {t("generalOrdenTitleTwo")}
           generalImgTitle = {t("generalImgTitle")}
           TabTitleOne = {t("TabTitleOne")}
           TabTitleTwo = {t("TabTitleTwo")}
           leithenantImgTitle = {t("leithenantImgTitle")}
           
            />}  />
            <Route path = "newspage" element={<NewsPage 
             titleThree = {t("titleThree")}
             newsParagraphOne = {t("newsParagraphOne")}
             newsParagraphTwo = {t("newsParagraphTwo")}
             seeOnVideo = {t("seeOnVideo")}
             titleTabOne = {t("titleTabOne")}
             titleTabTwo = {t("titleTabTwo")}
             yearForInfoOne = {t("yearForInfoOne")}
             yearForInfoTwo = {t("yearForInfoTwo")}

            />} />
            <Route path = "gallerypage" element={<GalleryPage 
            titleFour = {t("titleFour")}
            galleryContentHeaderOne = {t("galleryContentHeaderOne")}
            galleryContentHeaderTwo= {t("galleryContentHeaderTwo")}
            galleryContentHeaderThree = {t("galleryContentHeaderThree")}
            galleryContentHeaderFour = {t("galleryContentHeaderFour")}
            galleryContentHeaderFive = {t("galleryContentHeaderFive")}
            galleryContentHeaderSix = {t("galleryContentHeaderSix")}
            galleryContentHeaderSeven = {t("galleryContentHeaderSeven")}
            galleryContentHeaderEight = {t("galleryContentHeaderEight")}
            galleryContentHeaderNine = {t("galleryContentHeaderNine")}
            galleryContentHeaderTen = {t("galleryContentHeaderTen")}

            galleryContentParagraphOne = {t("galleryContentParagraphOne")}
            galleryContentParagraphTwo = {t("galleryContentParagraphTwo")}
            galleryContentParagraphThree = {t("galleryContentParagraphThree")}
            galleryContentParagraphFour = {t("galleryContentParagraphFour")}
            galleryContentParagraphFive = {t("galleryContentParagraphFive")}
            galleryContentParagraphSix = {t("galleryContentParagraphSix")}
            galleryContentParagraphSeven = {t("galleryContentParagraphSeven")}
            galleryContentParagraphEight = {t("galleryContentParagraphEight")}
            galleryContentParagrapNine = {t("galleryContentParagrapNine")}
            
            galleryPlaceOne = {t("galleryPlaceOne")}
            galleryPlaceTwo = {t("galleryPlaceTwo")}
            galleryPlaceThree = {t("galleryPlaceThree")}
            galleryPlaceFour = {t("galleryPlaceFour")}
            galleryPlaceFive = {t("galleryPlaceFive")}
            galleryPlaceSix = {t("galleryPlaceSix")}
            galleryPlaceSeven = {t("galleryPlaceSeven")}
            galleryPlaceEight = {t("galleryPlaceEight")}
            galleryPlaceNine = {t("galleryPlaceNine")}
           

            />} 
             />

         </Route>
          </Routes>
    
    </BrowserRouter>
        
  );
}

export default App;
