import React from 'react';
import { useNavigate } from 'react-router-dom';

interface NavBarProps {
  scrollToSection?: (sectionId: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ scrollToSection }) => {
  const navigate = useNavigate();

  const sections = [
    { name: 'BREAKING', id: 'breaking-news', category: 'news', type: 'scroll' },
    { name: 'WEATHER', id: 'weather-section', category: 'weather', type: 'scroll' },
    { name: 'CLASSIFIEDS', id: 'classifieds-section', category: 'classifieds', type: 'scroll' },
    { name: 'REVIEWS', id: 'reviews-section', category: 'reviews', type: 'scroll' },
    { name: 'SCRIPTS', id: 'familyguy-section', category: 'familyguy', type: 'scroll' },
    { name: 'SHOWS', id: 'shows', category: 'shows', type: 'route', path: '/shows-reviews' },
    { name: 'REAL ESTATE', id: 'realestate-section', category: 'realestate', type: 'scroll' },
    { name: 'CONSPIRACY', id: 'conspiracy-section', category: 'conspiracy', type: 'scroll' },
    { name: 'HOROSCOPES', id: 'horoscopes-section', category: 'horoscopes', type: 'scroll' },
    { name: 'LOST & FOUND', id: 'lostandfound-section', category: 'lostandfound', type: 'scroll' },
    { name: 'ASK NINJA', id: 'askninja-section', category: 'askninja', type: 'scroll' },
    { name: 'NO SERVICE', id: 'noservice-section', category: 'noservice', type: 'scroll' },
    { name: 'ARCHIVE', id: 'gallery-section', category: 'gallery', type: 'scroll' },
    { name: 'POETRY', id: 'poetry-section', category: 'poetry', type: 'scroll' }
  ];

  const handleClick = (section: typeof sections[0]) => {
    if (section.type === 'route' && section.path) {
      navigate(section.path);
    } else if (scrollToSection) {
      scrollToSection(section.id);
    } else {
      const element = document.getElementById(section.id);
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
              onClick={() => handleClick(section)}
              className={`hover:underline cursor-pointer whitespace-nowrap px-1 py-0.5 hover:bg-gray-100 transition-colors ${
                section.name === 'SHOWS' ? 'text-red-600 border-b-2 border-red-600' : ''
              }`}
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