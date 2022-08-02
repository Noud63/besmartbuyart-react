import React from 'react'
import './home.css'

const Home = () => {
    return (
        <>
            <div className="homePage">
                <div className="textFrame">
                    <div className="frame"><img src="img/frame3.png" alt="frame" className="pictureFrame" /></div>
                    <div className="text">
                        <span>One of the main benefits of art as an investment is that it is non-correlated with other asset types.<br />
                         The art market doesn't care, for example, if there's a stock market crash.<br />
                         Rather, it trades in its own world based on supply and demand.</span><br />
                        <div className="source">(source: https://www.gobankingrates.com)</div>
                    </div>
                </div>
            </div>

            <div className="homePage2">
                <div className="textFrame">
                    <div className="frame"><img src="img/frame5.png" alt="frame" className="pictureFrame" /></div>
                    <div className="text2">
                        <span>One of the main <br />benefits of art as<br />  an investment is that <br />it is non-correlated <br />with other asset types.<br />
                         The art market <br />doesn't care,for  <br />example,if there's a  <br />stock market crash.<br />
                         Rather, it trades<br /> in its own world <br />based on supply <br />and demand.</span><br />
                        <div className="source">(source: https://www.gobankingrates.com)</div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home
