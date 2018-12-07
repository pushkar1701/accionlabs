import React, { Component } from 'react';
import Invoice from '../../_assets/images/ar-content.png';
import Money from '../../_assets/images/money-bullet.png';
import Wallet from '../../_assets/images/wallet-bullet.png';
import Handshake from '../../_assets/images/handshake-bullet.png';
import Sync from '../../_assets/images/sync.png';
import Netsuite from '../../_assets/images/netsuite-logo.png';
import Quickbooks from '../../_assets/images/quickbooks-logo.png';
import Xero from '../../_assets/images/xero-logo.png';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

const listData = [{
    text: 'Reduce manual labor spent on invoicing your customer.',
    type: Money
}, {
    text: 'Collect faster automated remiders, and flexible payment methods.',
    type: Wallet
}, {
    text: 'Improve your customer relationship with transparency and excellent communication.',
    type: Handshake
}];

const ClientsList = [{
    companyText: 'How we work with Xero accounting.',
    logo: Xero
}, {
    companyText: 'How we work with Quickbooks online.',
    logo: Quickbooks
}, {
    companyText: 'Join Netsuite integration wait list.',
    logo: Netsuite
}]

class About extends Component {
    render() {
        return (
            <div className='about-container'>
                <div className='about-content-container'>
                    <div className='invoice-image-container'>
                        <img src={Invoice} alt='Invoice'/>
                    </div>
                    <div className='about-info-container'>
                        <div className='about-info-title'>
                            Get paid faster with AR automation.
                        </div>
                        <div className='about-info-list'>
                            {
                                listData.map((item, idx) => {
                                    return <List>
                                        <ListItem>
                                            <img className='list-icon' src={item.type} alt='List icons' />
                                            <ListItemText className='about-info-list-item'>
                                                {item.text}
                                            </ListItemText>
                                        </ListItem>
                                    </List>
                                })
                            }
                            <Button variant="contained" color="primary" className='solutions-btn'>
                                Receivables solutions
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='about-footer-container'>
                    <div className='about-footer-info'>
                        <img src={Sync} alt='Footer sync'/>
                        <div className='about-footer-info-text-container'>
                            <div className='about-footer-info-text'>
                                Don't worry about updating your ledger.
                            </div>
                            <div className='about-footer-info-subtext'>
                                Our two-way sync keeps your general ledger up-to-date and makes reconcilliation easy.
                            </div>
                        </div>
                    </div>
                    <div className='about-footer-clients'>
                            {
                                ClientsList.map((item) => {
                                    return <div className='company-details'>
                                        <img src={item.logo} alt='Company images'/>
                                        <div className='company-text'>
                                            {item.companyText}
                                        </div>
                                    </div>

                                })
                            }
                    </div>
                </div>
            </div>
        );
    }
}

export default About;