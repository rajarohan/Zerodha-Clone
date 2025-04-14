import React from 'react';

function Pricing() {
    return (
        <div className='container mb-5'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
                    <p>
                        We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                    </p>
                    <a href="https://zerodha.com/" style={{ textDecoration: "none" }}>
                        See pricing{" "}
                        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>
                <div className='col-2'></div>
                <div className='col-4'>
                    <div className='row text-center'>
                        <div className='col-6 p-3 border'>
                            <h1 className='mb-3'><img src="media/images/pricingEquity.svg" alt='pricingEquity'/></h1>
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className='col-6 p-3 border'>
                            <h1 className='mb-3'><img src='media/images/intradayTrades.svg' alt='intradayTrades'/></h1>
                            <p>Intraday and F&0</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing

