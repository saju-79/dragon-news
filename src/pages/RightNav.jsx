import React from 'react';
import Login from './Login';
import FindLogin from './FindLogin';
import Zone from '../componet/Zone';
 

const RightNav = () => {
    return (
        <div>
           <Login></Login>
           <FindLogin></FindLogin>
           <Zone></Zone>
        </div>
    );
};

export default RightNav;