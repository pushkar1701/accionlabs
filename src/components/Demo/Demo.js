import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Money from '../../_assets/images/money-bullet.png';
import Wallet from '../../_assets/images/wallet-bullet.png';
import Handshake from '../../_assets/images/handshake-bullet.png';
import Form from '../Shared/Form';

const demoInfoListData = [{
    text: 'We\'ll connect quickly to learn about your process'
}, {
    text: 'We\'ll walk you through the warren platform'
}, {
    text: 'Together, we\'ll build a plan that\'s best for you'
}]

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

class Demo extends Component {
    render() {
        return (
            <div className='demo-container'>
                <div className='demo-request-container'>
                    <div className='demo-request-list-container'>
                        <div className='demo-request-title'>
                            Ready to request a demo?
                        </div>
                        <div className='demo-request-list'>
                            {
                                demoInfoListData.map((item, idx) => {
                                    return <List>
                                        <ListItem>
                                            <ListItemText className='about-info-list-item'>
                                                {item.text}
                                            </ListItemText>
                                        </ListItem>
                                    </List>
                                })
                            }
                        </div>
                    </div>
                    <Form />
                </div>
            </div>
        );
    }
}

export default Demo;