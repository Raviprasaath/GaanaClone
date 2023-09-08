
import { BiCircle } from 'react-icons/bi'
import { AiFillCheckCircle, AiOutlineArrowRight } from 'react-icons/ai'

import svg1 from '../../../assets/subscribe-page-1.svg'
import svg2 from '../../../assets/subscribe-page-2.svg'
import svg3 from '../../../assets/subscribe-page-3.svg'
import svg4 from '../../../assets/subscribe-page-4.svg'
import svg5 from '../../../assets/subscribe-page-5.svg'
import { useState } from 'react'
import Footer from '../../Footer/Footer'
import SubscrptionPageFooter from './SubscrptionPageFooter'

function SubscriptionPage () {
    const [paySelector, setPaySelector] = useState(false);
    
    const handleClick = (packageId) => {
        setPaySelector(packageId);        
    }

    return (
        <>
            <div className="subscription-page">
                <div className="subscribe-card">
                    <p className='subscribe-intro'>Get <span className="text-highlight"> Gaana Plus </span> to listen ad-free, offline, high quality music & much more!</p>
                    <div className='svg-container'>
                        <img src={svg1} alt="svg1" />
                        <img src={svg2} alt="svg2" />
                        <img src={svg3} alt="svg3" />
                        <img src={svg4} alt="svg4" />
                        <img src={svg5} alt="svg5" />
                    </div>
                    <div className='package-container'>
                        <div className="checkbox">
                            <div onClick={ () => handleClick(1) } className={paySelector===1 ? "activePay list" : "list"}>
                                <div className='section-1'>
                                    1 Month Gaana Plus
                                </div>
                                <div className='section-2'>
                                    ₹ 99
                                <BiCircle className='empty-mark'/>
                                <AiFillCheckCircle className='activated'/>
                                </div>
                            </div>
                            <div onClick={ () => handleClick(2) }  className={paySelector===2 ? "activePay list" : "list"}>
                                <div className='section-1'>
                                    6 Months GaanaPlus
                                </div>
                                <div className='section-2'>
                                    ₹ 249
                                <BiCircle className='empty-mark'/>
                                <AiFillCheckCircle className='activated'/>
                                </div>
                            </div>
                            <div onClick={ () => handleClick(3) }  className={paySelector===3 ? "activePay list" : "list"}>
                                <div className='section-1'>
                                    1 Year GaanaPlus
                                </div>
                                <div className='section-2'>
                                    ₹ 299
                                <BiCircle className='empty-mark'/>
                                <AiFillCheckCircle className='activated'/>
                                </div>
                            </div>
                            <div onClick={ () => handleClick(4) }  className={paySelector===4 ? "activePay list" : "list"}>
                                <div className='section-1'>
                                1 Month Gaana Plus Trial
                                <p className='extras'>Renews at ₹ 299/year after trial expiry</p>
                                </div>
                                <div className='section-2'>
                                    ₹ 1
                                <BiCircle className='empty-mark'/>
                                <AiFillCheckCircle className='activated'/>
                                </div>
                            </div>

                        </div>
                    </div>
                    <button className='subscribe-btn'>
                        <p className='subs-btn login-option'>
                            Login to Subscribe <AiOutlineArrowRight className='arrow-option'/>
                        </p> 
                        <p className='subs-btn payment-option'>
                            Continue Payment <AiOutlineArrowRight className='arrow-option'/>
                        </p>
                    </button>
                    <div className='faq-query'>
                        cancel anytime! Check FAQ'S for more info.
                    </div>

                </div>
            </div>
            <SubscrptionPageFooter />
        </>
    )
}

export default SubscriptionPage;