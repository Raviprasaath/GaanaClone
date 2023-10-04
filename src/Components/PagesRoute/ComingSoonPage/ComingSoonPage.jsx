
import { useEffect } from "react";
import image from "../../../assets/coming-soon-page.png"

function ComingSoonPage () {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', 
        });
      };
    
      useEffect(()=> {
        scrollToTop();
      }, [])
    return (
        <>
            <div className="comming-soon-page">
                <div className="coming-soon-image">
                    <img src={image} alt="" />
                    
                    <div className="content">
                        Coming Soon
                    </div>
                </div>

            </div>
        </>
    )
}

export default ComingSoonPage;