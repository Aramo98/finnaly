import classes from '../footerPart/footerpart.module.scss';
import { FaRegCopyright,FaInstagram,FaFacebook,FaTwitter } from 'react-icons/fa';
import "bootstrap/dist/css/bootstrap.min.css";
function Footer ({SocialHeader,switchLight,footerTextOne,footerTextTwo,footerTextThree}){
return(
    <footer style={switchLight?{backgroundColor:"black",color:"white"}:{backgroundColor:"white",color:"black"}} className='d-sm-block d-md-block d-xl-flex justify-xl-between align-items-sm-center align-items-md-center align-items-lg-center'>
        <div className={classes.FooterMutual}>
            <div className={classes.mapBlock}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12101.358001869585!2d43.840566369775395!3d40.68851999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406a082c19662761%3A0xe7c4c6d439ae1a96!2z0JHQtdC90LDQuNC80LjQvQ!5e0!3m2!1sru!2sam!4v1686598309497!5m2!1sru!2sam"   allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className={classes.sclBlock}>
              <h3 className='text-center'>{SocialHeader}</h3>
              <div className={classes.socials}>
                <ul>
                    <li><a href="https://www.facebook.com/profile.php?id=100064777644137" className={classes.facebook}><FaFacebook /> <span>FaceBook</span></a></li>
                    <li><a href="https://www.facebook.com/profile.php?id=100064777644137" className={classes.instagram}><FaInstagram />  <span>Instagram</span></a></li>
                    <li><a href="https://www.facebook.com/profile.php?id=100064777644137" className={classes.twitter}><FaTwitter />    <span>Twitter</span></a></li>
                </ul>
              </div>
            </div>
        </div>
        <div className='d-flex justify-content-center align-items-center gap-5' id={classes.lastFooter}>
            <span className='text-center'><FaRegCopyright /> {footerTextOne}</span>
            <span className='text-center'>{footerTextTwo}</span>
            <span className='text-center'>{footerTextThree}</span>
        </div>
    </footer>
)
}

export default Footer