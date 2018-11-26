import React, { Component } from 'react';
import Invoice from '../../_assets/images/ar-content.png';
import Money from '../../_assets/images/money-bullet.png';
import Wallet from '../../_assets/images/wallet-bullet.png';
import Handshake from '../../_assets/images/handshake-bullet.png';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
                        </div>
                    </div>

                </div>
                <div className='about-footer-container'>

                </div>
            </div>
        );
    }
}

export default About;