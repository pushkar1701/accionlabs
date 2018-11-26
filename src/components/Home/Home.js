import React, { Component } from 'react';
import Header from '../Shared/Header';
import Form from '../Shared/Form';
import Logo from '../../_assets/images/hero.png';
const headerLinks = [{
    name: 'Payables'
}, {
    name: 'Receivables'
}, {
    name: 'By Role'
}, {
    name: 'Integartions'
}, {
    name: 'About Us'
}, {
    name: 'Login'
}];

class Home extends Component {
    render() {
        return (
            <div className='home-container'>
                <Header linkData={headerLinks}/>
                <div className='home-content'>
                    <div className='home-services-form-container'>
                        <div className='info'>
                            <div className='services-info'>
                                Automated Payment solutions for your business needs today & tomorrow.
                            </div>
                            <div className='company-info'>
                                Routable helps business automate and scale their payment using a secure invoice
                                and bill payment platform.
                            </div>
                            <Form />
                        </div>
                    </div>
                    <div className='home-services-img-container'>
                        <img src={Logo} alt='Hero'/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;