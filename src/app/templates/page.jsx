"use client"
import React from 'react'
import "./temp.css"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Main from '@/components/globals/my-main/main'
export default function Page() {
  const router = useRouter()
  const designpage =()=>{
    router.push("/login")
  }
  return (
    <div className='tempalte'>
             <div className="container">
                  
                   <Main
                     title="Our Designs" 
                     description="Our Beautiful Designs" 
                   />
                   
                  
                 </div>
            <div className='modern'>
                <h2>Modern & Elegant Memorial Websites Design</h2>
                <p>Choose a theme for your Memorial website and start customizing it... You can change this anytime later.</p>
                <hr className='divide'/>
              </div>

              <div className='design'>
              <Image src="/images/template.png" width={700} height={400}/>
              <button className="design-button" onClick={designpage}>Use This Design</button>
              </div>
    </div>
  )
}
