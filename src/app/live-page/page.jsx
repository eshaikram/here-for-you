"use client"
import Bannar from '@/components/editpage/banner'
import React from 'react'
import "./livePage.css"
import ProfileSection from '@/components/editpage/ProfileSection'
import NavigationTabs from '@/components/editpage/NavigationTabs'
import StoryEditor from '@/components/editpage/StoryEditor'
import FavoritesSection from '@/components/editpage/FavoritesSection'
import Timeline from '@/components/editpage/Timeline'
import Gallery from '@/components/editpage/Gallery'
import MemoryWall from '@/components/editpage/MemoryWall'
import MadeSection from '@/components/editpage/MadeSection'
export default function Live() {
  return (
    <div>
      <Bannar showButtons={false} />
      <ProfileSection/>
      <NavigationTabs/>
      <StoryEditor showEditor={false} />
      <FavoritesSection showInputs={false} />
      <Timeline showTimeline={false}/>
          <Gallery showGallery={false}/>
              <MemoryWall showToggle = {false } />
                  <MadeSection showMade={false}/> 
              
          
      
      
      

      


    </div>
  )
}
