import { format } from 'date-fns';
import React from 'react';

const HomeLaout = () => {
    return (
        <div className=' text-center justify-center items-center flex flex-col space-y-3' >
              <img src="./../../public/logo.png" alt="" />
              <h3 className='text-lg font-medium  text-accent  '>Journalism Without Fear or Favour</h3>
              <h3 className='text-lg font-medium  text-accent' > {format(new Date(), " hh:mm:ss EEEE , MMMM dd, yyyy")} </h3>
        </div>
    );
};

export default HomeLaout;