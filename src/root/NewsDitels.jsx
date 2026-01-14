import React, { useEffect, useState } from 'react';
import HomeLaout from '../componet/HomeLaout';
import RightNav from '../pages/RightNav';
import { useLoaderData, useParams } from 'react-router';
import DitelsCard from '../componet/DitelsCard';

const NewsDitels = () => {
    const{ id }= useParams();
    const data = useLoaderData();
    const [singleDitels , setSingleDitels] = useState({});
                 useEffect(() => {
                 if (data.length > 0 && id) {
                   const findDitels = data.find((singleNews) => singleNews.id === id );
                   setSingleDitels(findDitels);
                 }
               }, [data, id]);
    
    return (
        <div>
             <header className='py-6'>
                <HomeLaout></HomeLaout>
             </header>
             <main className='mx-auto w-11/12  '>
                <h1 className='text-3xl font-bold text-primary text-start my-2'>   <span className='text-secondary '> </span>Dragon News </h1>
              <div className="flex gap-5">
                  <section className=' w-9/12 '>
                  <DitelsCard singleDitels ={singleDitels}></DitelsCard>
                  </section>
                <aside className='w-3/12'>
                    <RightNav></RightNav>
                </aside>
              </div>
             </main>
        </div>
    );
};

export default NewsDitels;