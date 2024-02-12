"use client"
import React, { useEffect, useState } from 'react';
import { getCatData } from '@/utils/api';
const Card = ()=>{
    const [catData, setCatData] = useState([]);
//  fetch data from the API
    useEffect(()=>{
        const fetchData = async ()=>{
            const data = await getCatData();
            if(data){
                setCatData(data);
            }
        }
        fetchData();
    },[])
    // rendering card component 
    return(
        <>  
            <div className="flex flex-wrap justify-center">
                
                    
                {catData.map((item, index) => (
                    <div
                    key={index}
                    className={`w-full h-72 p-2 m-2 flex rounded-lg 
                    cursor-pointer
                    border-0
                    group
                    transition duration-300 ease-in-out transform hover:border-amber-300
                    ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}
                    >
                        <div className={`flex items-center justify-center h-full w-1/2 bg-cover
                        ${index % 2 === 0 ? 'rounded-tr-lg rounded-br-lg': 'rounded-tl-lg rounded-bl-lg'}
                        overflow-hidden`}
                        >
                            <img
                                src={item["url"]}
                                alt={item["url"][0]["name"]}
                                className={`h-full w-full 
                                group-hover:scale-125
                                transition duration-200 ease-in-out transform
                                ${index % 2 === 0 ? 'rounded-tr-lg rounded-br-lg': 'rounded-tl-lg rounded-bl-lg'}
                                `}
                            />
                        </div>
                        <div className={`relative flex flex-col items-start justify-center w-full overflow-hidden
                        
                        bg-white ${index % 2 === 0 ?'rounded-tl-lg rounded-bl-lg':'rounded-tr-lg rounded-br-lg'} font-meow
                        `}>
                            <div className="absolute -bottom-0 w-full h-full 
                            bg-amber-300 mix-blend-multiply filter blur-md"></div>
                                <h2 className="m-6 text-gray-600 text-2xl font-semibold capitalize">{item["breeds"][0]["name"]}</h2>
                                <p className="m-6 text-gray-600">{item["breeds"][0]["description"]}</p>
                            
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Card;