import React from 'react';
// @ts-ignore
import HeroBanner from '../../Assets/Images/hero-banner.png'
import './HomeSections.scss'

const HeroSection = () => {
    return (
        <section className={'hero-section'}>
            <div className={'container hero-wrapper'}>
                <div className={'hero-section-banner'} style={{background: `url(${HeroBanner})`}}>
                    <div className={'hero-section-banner-content'} >
                        <h1 className={'hero-section-banner-content-title'}>
                            It’s Time To
                            Explore The World
                        </h1>
                        <button className={'hero-section-banner-content-button'}>
                            Plan Your Trip
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;