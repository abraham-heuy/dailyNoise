import React from 'react';

interface NavBarProps {
  scrollToSection?: (sectionId: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ scrollToSection }) => {
  const sections = [
    { name: 'BREAKING', id: 'breaking-news', category: 'news' },
    { name: 'WEATHER', id: 'weather-section', category: 'weather' },
    { name: 'CLASSIFIEDS', id: 'classifieds-section', category: 'classifieds' },
    { name: 'REVIEWS', id: 'reviews-section', category: 'reviews' },
    { name: 'SCRIPTS', id: 'familyguy-section', category: 'familyguy' },
    { name: 'REAL ESTATE', id: 'realestate-section', category: 'realestate' },
    { name: 'CONSPIRACY', id: 'conspiracy-section', category: 'conspiracy' },
    { name: 'HOROSCOPES', id: 'horoscopes-section', category: 'horoscopes' },
    { name: 'LOST & FOUND', id: 'lostandfound-section', category: 'lostandfound' },
    { name: 'ASK NINJA', id: 'askninja-section', category: 'askninja' },
    { name: 'NO SERVICE', id: 'noservice-section', category: 'noservice' },
    { name: 'ARCHIVE', id: 'gallery-section', category: 'gallery' },
    { name: 'POETRY', id: 'poetry-section', category: 'poetry' }
  ];

  const handleClick = (sectionId: string) => {
    if (scrollToSection) {
      scrollToSection(sectionId);
    } else {
      // Fallback to direct element scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="border-y-2 border-black py-2 my-4 bg-white">
      <div className="overflow-x-auto">
        <ul className="flex flex-nowrap md:flex-wrap md:justify-between gap-4 md:gap-0 text-xs md:text-sm font-bold font-mono px-1">
          {sections.map((section) => (
            <li 
              key={section.id}
              onClick={() => handleClick(section.id)}
              className="hover:underline cursor-pointer whitespace-nowrap px-1 py-0.5 hover:bg-gray-100 transition-colors"
            >
              {section.name}
            </li>
          ))}
        </ul>
      </div>
      
      {/* Hidden pattern - barely visible */}
      <div className="text-xxs text-gray-200 text-right select-none mt-0.5">
        <span>follow the signals • 67 channels • nothing else</span>
      </div>
    </nav>
  );
};

export default NavBar;