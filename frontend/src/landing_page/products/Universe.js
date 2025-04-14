import React from 'react';

function Universe() {
    return (
        <div className="container mt-5">
            <div className="row text-center p-5">
                <h1 className='mb-4'>The Zerodha Universe</h1>
                <p>
                    Extend your trading and investment experience even further with our
                    partner platforms
                </p>

                <div className="col-md-4 p-3 mt-5">
                    <img src="media/images/zerodhaFundhouse.png" alt="Zerodha Fund House" className="img-fluid" />
                    <p className="small text-muted">
                        Our asset management venture<br />
                        that is creating simple and transparent index<br />
                        funds to help you save for your goals.
                    </p>
                </div>
                <div className="col-md-4 p-3 mt-5">
                    <img src="media/images/sensibullLogo.svg" alt="Sensibull Logo" className="img-fluid" />
                    <p className="small text-muted">
                        Options trading platform that lets you<br />
                        create strategies, analyze positions, and examine<br />
                        data points like open interest, FII/DII, and more.
                    </p>
                </div>
                <div className="col-md-4 p-3 mt-5">
                    <img src="media/images/tijoriLogo.svg" alt="tijori Logo" className="img-fluid" />
                    <p className="small text-muted">
                        Investment research platform<br />
                        that offers detailed insights on stocks,<br />
                        sectors, supply chains, and more.
                    </p>
                </div>
                <div className="col-md-4 p-3 mt-5">
                    <img src="media/images/streakLogo.png" alt="streakLogo" className="img-fluid" />
                    <p className="small text-muted">
                        Systematic trading platform<br />
                        that allows you to create and backtest<br />
                        strategies without coding.
                    </p>
                </div>
                <div className="col-md-4 p-3 mt-5">
                    <img src="media/images/smallcaseLogo.png" alt="Smallcase Logo" className="img-fluid" />
                    <p className="small text-muted">
                        Thematic investing platform<br />
                        that helps you invest in diversified<br />
                        baskets of stocks on ETFs.
                    </p>
                </div>
                <div className="col-md-4 p-3 mt-5">
                    <img src="media/images/dittoLogo.png" alt="ditto Logo" className="img-fluid" />
                    <p className="small text-muted">
                        Personalized advice on life<br />
                        and health insurance. No spam<br />
                        and no mis-selling.
                    </p>
                </div>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:'20%', margin:'0 auto'}}>Sign Up for Free</button>
            </div>
        </div>
    );
}

export default Universe;