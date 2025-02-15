"use client";
import "./design.css";
import Bannar from "@/components/editpage/banner";
import ProfileSection from "@/components/editpage/ProfileSection";
import NavigationTabs from "@/components/editpage/NavigationTabs";
import StoryEditor from "@/components/editpage/StoryEditor";
import FavoritesSection from "@/components/editpage/FavoritesSection";
import Timeline from "@/components/editpage/Timeline";
import FamilyTree from "@/components/editpage/FamilyTree";
import MemoryWall from "@/components/editpage/MemoryWall";
import VideoSection from "@/components/editpage/VideoSection";
import MadeSection from "@/components/editpage/MadeSection";
import Gallery from "@/components/editpage/Gallery";

export default function Page() {
   return <div>

<Bannar showButtons={true} />
    <ProfileSection/>
    <NavigationTabs/>
    <StoryEditor showEditor={true} />
    <FavoritesSection showInputs={true} />
    <Timeline showTimeline={true}/>
    <Gallery showGallery={true}/>
    <FamilyTree/>
    <MemoryWall showToggle = {true } />
    <VideoSection/>
    <MadeSection showMade={true}/> 
   </div>

}