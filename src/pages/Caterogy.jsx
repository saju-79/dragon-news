 
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';
 

const Caterogy = () => {
      const[datas , setData] = useState([]);
         useEffect(()=>{
            fetch('/public/categories.json').then(res => res.json())
            .then(data =>{
                setData(data)
            }).catch(er=> console.log(er))
         },[])
         
         
   
    return (
         <div>
            <h2 className='font-semibold text-lg text-primary px-10 py-6 bg-neutral rounded-sm '>All Caterogy</h2>
           <div className="p-6 flex flex-col  w-full "> 
            {
            datas.map(d => (
                <NavLink
                to={`/caterogy/${d.id}`}
                key={d.id}
                className='mt-6 px-10  text-info w-full font-semibold  hover:bg-neutral  py-6 p-4 rounded-sm  text-xl '
                >{d.name}</NavLink>
            ))
            }
           </div>
        </div>
     
    );
};

export default Caterogy;





 