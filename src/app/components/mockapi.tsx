'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

interface user{
    name:string,
    price:number,
    image:string,
    description:string,
    id:string
}

const Mockapi = () => {
    const [home,sethome]=useState<user[]>([]);
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response = await fetch("https://677cec264496848554c8351a.mockapi.io/api/v1/home");
                const data = await response.json()
                sethome(data)
            }catch(error){
                console.log("product not fetch",error)
            }
            
        };fetchData()
    },[])
    console.log(home)
    
  return (
    <div className='grid grid-cols-3'>{home.map((acc)=>(
     <div key={acc.id} className='hover:opacity-20 text-center shadow-md '>
        <h1 className='text-2xl font-bold'>{acc.name}</h1>
        <div className='flex items-center justify-center'>
        <Image src={acc.image} alt='accessories' height={200} width={200}/>
        </div>
        
        <p>${acc.price}</p>
        <p>{acc.description}</p>
     </div>
  ))}</div>
  )
}

export default Mockapi