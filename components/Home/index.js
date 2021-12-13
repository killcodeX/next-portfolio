import React from 'react';
import { AiOutlineThunderbolt } from 'react-icons/ai'

export default function HomeSection() {
    return (
        <section style={{height:'700px'}} className='section py-5 hero-wrap' id='home-section'>
            <div className='overlay'></div>
            <div className='container'>
                <div className='row no-gutters slider-text js-fullheight justify-content-center align-items-center'>
                    <div className='col-md-6 col-sm-12'>col 1</div>
                    <div className='col-md-6 col-sm-12'>col 2</div>
                </div>
            </div>
            <div className='mouse'>
                <div className='mouse-icon'>
                    <div className='mouse-wheel'>
                        <span>
                        <AiOutlineThunderbolt/>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}
