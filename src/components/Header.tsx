import React, { useState } from 'react';

const Header: React.FC = () => {
  const [showWisemenModal, setShowWisemenModal] = useState(false);
  const [showHumorModal, setShowHumorModal] = useState(false);
  
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const wisemenQuotes = [
    { speaker: "Richard Hammond", quote: "I went on the internet and I found this. It's a Dacia Sandero. Great news!" },
    { speaker: "Jeremy Clarkson", quote: "How hard can it be? (famous last words before everything goes wrong)" },
    { speaker: "James May", quote: "Oh cock. I've done it again. I've set something on fire." },
    { speaker: "Richard Hammond", quote: "I've had a bit of a moment. The car is upside down. Again." },
    { speaker: "Jeremy Clarkson", quote: "Some say he was born in a test tube, and that his breath smells of magnesium. All we know is, he's called the Stig." },
    { speaker: "James May", quote: "I'm just going to have a look at the... OH GOOD LORD IT'S ON FIRE." },
    { speaker: "Richard Hammond", quote: "HAMMOND! YOU IDIOT! YOU'VE CRASHED IT INTO A CARAVAN!" },
    { speaker: "Jeremy Clarkson", quote: "Tonight on Top Gear: I drive a car that costs more than your house, James wears something ridiculous, and Hammond crashes into something." },
    { speaker: "James May", quote: "I've got a feeling that's going to end badly. And it did. Spectacularly." },
    { speaker: "Richard Hammond", quote: "I'm not saying it's slow, but the number 47 bus overtook me. Twice." },
    { speaker: "Jeremy Clarkson", quote: "Speed has never killed anyone. Suddenly becoming stationary, that's what gets you." },
    { speaker: "James May", quote: "Right. Well. That didn't work. Back to the drawing board then." }
  ];

  return (
    <header className="border-b-4 border-black pb-3 sm:pb-4 relative w-full overflow-x-hidden">
      {/* Top row with wisemen link - stacked on mobile */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-0 text-xs mb-2 sm:mb-1">
        <span className="text-gray-500 font-mono text-xxs sm:text-xs">EST. 1873 (APPROXIMATELY)</span>
        <button 
          onClick={() => setShowWisemenModal(true)}
          className="border border-black px-2 py-0.5 hover:bg-gray-100 text-xxs sm:text-xs font-mono w-fit"
        >
          THE THREE WISE BLOKES
        </button>
      </div>
      
      {/* Main Header - responsive text size */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif tracking-tight text-center break-words">
        THE DAILY NOISE
      </h1>
      
      {/* Second row - stacked on mobile */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm mt-2 text-gray-600 gap-1 sm:gap-0">
        <span className="order-2 sm:order-1">Vol. 127 No. 43</span>
        <span className="order-1 sm:order-2 text-xxs sm:text-sm">{formattedDate}</span>
        <div className="order-3 flex items-center justify-center sm:justify-end w-full sm:w-auto mt-1 sm:mt-0">
          <button 
            onClick={() => setShowHumorModal(true)}
            className="text-xxs border border-gray-300 px-2 py-1 hover:bg-gray-100 text-gray-500 font-mono whitespace-normal text-center"
          >
            DO YOU LACK A SENSE OF HUMOR?
          </button>
        </div>
      </div>
      
      {/* Tagline with designer shade */}
      <div className="text-xs italic mt-2 text-center text-gray-600">
        "All the news that's fit to print... and some that isn't"
      </div>
      
      {/* Designer apology - NEW */}
      <div className="text-xxs text-center mt-1 text-gray-400 font-mono border-t border-gray-200 pt-1">
        <span className="opacity-70">don't worry our designer is shit with  colors 😂</span>
        <span className="block sm:inline text-xxs text-gray-300 ml-0 sm:ml-2">(it's supposed to look like this)</span>
      </div>
      
      {/* The Three Wise Blokes Modal */}
      {showWisemenModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setShowWisemenModal(false)}
        >
          <div 
            className="bg-white border-4 border-black shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b-2 border-black p-4 flex justify-between items-center">
              <h2 className="font-bold text-lg sm:text-xl font-serif">THE THREE WISE BLOKES</h2>
              <button 
                onClick={() => setShowWisemenModal(false)}
                className="text-2xl leading-none hover:text-gray-600"
              >
                ×
              </button>
            </div>
            
            <div className="p-4 sm:p-5">
              <p className="text-xs sm:text-sm italic mb-4 border-l-4 border-black pl-3">
                "Some say they know nothing about news, but everything about cars, explosions, and bad ideas. All we know is, they're called The Three Wise Blokes."
              </p>
              
              <div className="space-y-3">
                {wisemenQuotes.map((item, idx) => (
                  <div key={idx} className="border-b border-gray-200 pb-2 last:border-b-0">
                    <span className="font-bold text-xs block mb-0.5">{item.speaker}:</span>
                    <p className="text-xs sm:text-sm italic">"{item.quote}"</p>
                    <div className="text-xxs text-gray-300 text-right mt-1 select-none">
                      #{idx + 47} • classic moment
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 pt-2 border-t border-gray-200 text-xxs text-gray-400 text-right">
                <span>On that bombshell, it's time to end. Goodnight.</span>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Do You Lack a Sense of Humor? Modal */}
      {showHumorModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setShowHumorModal(false)}
        >
          <div 
            className="bg-white border-4 border-black shadow-xl max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="border-b-2 border-black p-4 flex justify-between items-center">
              <h3 className="font-bold text-lg font-serif">WELL...</h3>
              <button 
                onClick={() => setShowHumorModal(false)}
                className="text-2xl leading-none hover:text-gray-600"
              >
                ×
              </button>
            </div>
            
            <div className="p-6 text-center">
              <p className="text-2xl font-bold mb-2">FUCK OFF THEN!</p>
              <p className="text-sm text-gray-600 italic">(you clearly won't get it)</p>
              
              <div className="mt-4 pt-3 border-t border-gray-200 text-xxs text-gray-400">
                <span>this newspaper is not for you • (It's not even a newspaper) • goodbye!</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;