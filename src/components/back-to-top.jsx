// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ChevronUp from './../img/chevron-up.png'

const BackToTop = () => {

    function ScrollToTop(){
        document.body.animate({scrollTop : 0},1500, 'easeInOutExpo');
        return false;
    }

    window.addEventListener('scroll', ()=>{
        if(window.pageYOffset > 100){
            document.querySelector('.back-to-top').classList.remove("fadeOut");
            document.querySelector('.back-to-top').style.display = "block";
            document.querySelector('.back-to-top').classList.add("fadeIn");
        }else {
            document.querySelector('.back-to-top').classList.remove("fadeIn");
            document.querySelector('.back-to-top').classList.add("fadeOut");
        }
    });

    return (
        <>
            
          <a href="#" className="back-to-top animated" onClick={ScrollToTop}>  
            <img src={ChevronUp} alt="arrow up" className='img-fluid mt-2 w-50' style={{filter:"invert"}}/>
          </a>;
        </>
    );
}

export default BackToTop;