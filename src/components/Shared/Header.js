import React from 'react';
import logo from '../../_assets/images/logo-white.svg';

const Header = (props) => {
    return (
        <div className='header-container'>
            <div className='header-logo'>
                <a href="foo" className='logo'>
                    <img src={logo} alt='Company Logo here'></img>
                </a>
            </div>
            <div className='header-elements'>
                {
                    props.linkData.map((item) => {
                        return <a href='foo' className='header-links'>
                                    {item.name}
                                </a>
                    })
                }
            </div>
        </div>
    );
};

export default Header;

// import React, { Component } from 'react';

// class Header extends Component {
//     render() {
//         return (
//             <div className='header-container'>
//                 <div className='header-logo'>
//                     <a href='#' className='logo'>
//                         <img src={logo}></img>
//                     </a>
//                 </div>
//                 <div className='header-elements'>
//                     Elements here
//                 </div>
//             </div>
//         );
//     }
// }

// export default Header;