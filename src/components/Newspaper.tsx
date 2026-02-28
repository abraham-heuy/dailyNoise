import React, { useRef } from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import BreakingNews from "./BreakingNews";
import Footer from "./Footer";
import DisneyReviews from "./Reviews";
import FamilyGuyScripts from "./Scripts";
import RealEstate from "./Estate";
import Weather from "./Weather";
import PoetryCorner from "./Poetry";
import Classifieds from "./Classifieds";
import ConspiracyCorner from "./conspiracyCorner";
import Horoscopes from "./Horoscopes";
import LostAndFound from "./LostAndFound";
import AskNinja from "./AskNinja";
import ImageGallery from "./ImageGallery";
import NoService from "./responses";

const Newspaper: React.FC = () => {
  // Create refs for each section
  const breakingRef = useRef<HTMLDivElement>(null);
  const weatherRef = useRef<HTMLDivElement>(null);
  const classifiedsRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const familyguyRef = useRef<HTMLDivElement>(null);
  const realestateRef = useRef<HTMLDivElement>(null);
  const conspiracyRef = useRef<HTMLDivElement>(null);
  const horoscopesRef = useRef<HTMLDivElement>(null);
  const lostandfoundRef = useRef<HTMLDivElement>(null);
  const askninjaRef = useRef<HTMLDivElement>(null);
  const noserviceRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const poetryRef = useRef<HTMLDivElement>(null);

  // Scroll function to be passed to NavBar
  const scrollToSection = (sectionId: string) => {
    const refMap: any = {
      'breaking-news': breakingRef,
      'weather-section': weatherRef,
      'classifieds-section': classifiedsRef,
      'reviews-section': reviewsRef,
      'familyguy-section': familyguyRef,
      'realestate-section': realestateRef,
      'conspiracy-section': conspiracyRef,
      'horoscopes-section': horoscopesRef,
      'lostandfound-section': lostandfoundRef,
      'askninja-section': askninjaRef,
      'noservice-section': noserviceRef,
      'gallery-section': galleryRef,
      'poetry-section': poetryRef
    };

    const ref = refMap[sectionId];
    if (ref?.current) {
      ref.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-2 sm:p-4 bg-white shadow-lg overflow-x-hidden">
      <Header />
      <NavBar scrollToSection={scrollToSection} />

      {/* Mobile: 1 column, Desktop: 3 columns - YOUR ORIGINAL LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-6">
        {/* Left Column - Main content */}
        <div className="md:col-span-2 space-y-4 md:space-y-6">
          <div id="breaking-news" ref={breakingRef}>
            <BreakingNews />
          </div>
          
          <div id="conspiracy-section" ref={conspiracyRef}>
            <ConspiracyCorner />
          </div>
          
          <div id="reviews-section" ref={reviewsRef}>
            <DisneyReviews />
          </div>
          
          <div id="familyguy-section" ref={familyguyRef}>
            <FamilyGuyScripts />
          </div>
          
          <div id="horoscopes-section" ref={horoscopesRef}>
            <Horoscopes />
          </div>
          
          <div id="lostandfound-section" ref={lostandfoundRef}>
            <LostAndFound />
          </div>
          
          <div id="askninja-section" ref={askninjaRef}>
            <AskNinja />
          </div>
          
          <div id="noservice-section" ref={noserviceRef}>
            <NoService />
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="md:col-span-1 space-y-4 md:space-y-6">
          <div id="weather-section" ref={weatherRef}>
            <Weather />
          </div>
          
          <div id="classifieds-section" ref={classifiedsRef}>
            <Classifieds />
          </div>
          
          <div id="gallery-section" ref={galleryRef}>
            <ImageGallery />
          </div>
          
          <div id="realestate-section" ref={realestateRef}>
            <RealEstate />
          </div>
          
          <div id="poetry-section" ref={poetryRef}>
            <PoetryCorner />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Newspaper;