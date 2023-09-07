import svg1 from '../../assets/subscribe-page-1.svg'
import svg2 from '../../assets/subscribe-page-2.svg'
import svg3 from '../../assets/subscribe-page-3.svg'
import svg4 from '../../assets/subscribe-page-4.svg'
import svg5 from '../../assets/subscribe-page-5.svg'

function SubscriptionPage () {
    return (
        <>
            <div className="subscription-page">
                <div className="subscribe-card">
                    <p>Get <span className="text-highlight"> Gaana Plus </span> to listen ad-free, offline, high quality music & much more!</p>
                    <div className='svg-container'>
                        <img src={svg1} alt="svg1" />
                        <img src={svg2} alt="svg2" />
                        <img src={svg3} alt="svg3" />
                        <img src={svg4} alt="svg4" />
                        <img src={svg5} alt="svg5" />
                    </div>
                    <div className='package-container'>
                        
                    </div>

                </div>
            </div>
        </>
    )
}

export default SubscriptionPage;