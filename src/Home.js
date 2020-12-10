import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img 
                    className='home__image'
                    src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
                    alt='Product'
                />

                <div className='home__row'>
                    <Product
                        title='A Promised Land'
                        price={45.00}
                        rating={4}
                        img='https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL.jpg'
                    />
                    <Product
                        title='Dylan-Buckeye Large Frame Leaning Floor Mirror, Full Length Wood Finished Frame Rectangle Oversized Dressing Mirror (65"X24"-White)'
                        img='https://images-na.ssl-images-amazon.com/images/I/61SqVQ2EBCL._AC_SL1081_.jpg'
                        price={150}
                        rating={5}
                    />
                </div>
                <div className='home__row'>
                    <Product
                        title='Skull & Co. GripCase: A Dockable Protective Case with Replaceable Grips [to fit All Hands Sizes] for Nintendo Switch [No Carrying Case]- Pokemon Edition'
                        img='https://images-na.ssl-images-amazon.com/images/I/61jblMeP1mL._AC_SL1400_.jpg'
                        price={19.99}
                        rating={4}
                    />
                    <Product
                        title='AmazonBasics Beginner Full-Size Acoustic Guitar with Strings, Picks, Tuner, Strap, and Case - 41-Inch, Spruce and Basswood'
                        img='https://images-na.ssl-images-amazon.com/images/I/71vrKE2t16L._AC_SL1500_.jpg'
                        price={120.50}
                        rating={4}
                    />
                    <Product
                        title='GVM RGB Video Light with Stand, 50W Full Power Output CRI97+ APP Control 3200K-5600K LED Continuous Video Light kit for YouTube Photography Lighting Wedding'
                        img='https://images-na.ssl-images-amazon.com/images/I/71KgQI8zoaL._AC_SL1500_.jpg'
                        price={169.99}
                        rating={3}
                    />
                    <Product
                        title='DualSense Wireless Controller'
                        img='https://images-na.ssl-images-amazon.com/images/I/71y%2BUGuJl5L._SL1500_.jpg'
                        price={69.99}
                        rating={5}
                    />

                </div>
                <div className='home__row'>
                <Product
                        title='Bose Noise Cancelling Wireless Bluetooth Headphones 700, with Alexa Voice Control, Arctic White'
                        img='https://images-na.ssl-images-amazon.com/images/I/61mq3DocJ1L._AC_SL1500_.jpg'
                        price={340}
                        rating={4}
                    />
                <Product
                        title='Nintendo Switch™ w/ Neon Blue & Neon Red Joy-Con™ + Mario Kart™ 8 Deluxe (Full Game Download) + 3 Month Nintendo Switch Online...'
                        img='https://images-na.ssl-images-amazon.com/images/I/81j0j3yvQVL._SL1500_.jpg'
                        price={439.99}
                        rating={5}
                    />
                <Product
                        title='VIZIO SB3651-F6 36" 5.1 Home Theater Sound Bar System, Black
                        '
                        img='https://images-na.ssl-images-amazon.com/images/I/71jFzI%2B2mHL._AC_SL1500_.jpg'
                        price={199}
                        rating={4}
                    />
                </div>
                
            </div>
            
        </div>
    )
}

export default Home
