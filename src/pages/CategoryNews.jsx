 
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from './NewsCard';
 

const CategoryNews = () => {
    const {id}= useParams();
    
    const categoriPromisNews = useLoaderData()
   
     const [news , setNews] = useState([])
     useEffect(()=>{
           if (id == "0") {
             setNews(categoriPromisNews)
             return
           }
           else if(id == "1"){
            const currentNews = categoriPromisNews.filter((b)=> b.others.is_today_pick == true)
            setNews(currentNews)
           }else{
               const filtenNews = categoriPromisNews.filter((n)=> n.category_id  == id)
               setNews(filtenNews)
           }
       
     } ,[categoriPromisNews ,id])

     
    
    return (
        <div className=' space-y-4'>
            {
                news.map(n=><NewsCard key={n.id} news={n} />)
            }
        </div>
    );
};

export default CategoryNews;