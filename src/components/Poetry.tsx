import React, { useState } from 'react';

const poems = [
  {
    title: "ODE TO MY TOASTER",
    author: "Brenda S., age 47",
    lines: [
      "Oh toaster, my toaster, so shiny and bright",
      "You turn my bread brown in the middle of night",
      "Your cord is so short, your plug is so near",
      "Why do I need you when I have no fear?",
      "(of burnt toast, that is)",
    ],
    style: "romantic"
  },
  {
    title: "THE SOCK THAT WANDERED",
    author: "Lost Sock Society",
    lines: [
      "I left the dryer with my mate",
      "But now I face a lonely fate",
      "Where did he go? Was it the cat?",
      "Or did he just get tired of that?",
      "Now I'm unmatched, a single sock",
      "Living in a shoebox with a rock",
    ],
    style: "tragic"
  },
  {
    title: "HAIKU FOR A TUESDAY",
    author: "Desk Chair Poet",
    lines: [
      "Tuesday again, yes",
      "Coffee cold, meeting at three",
      "Why am I like this",
    ],
    style: "haiku"
  },
  {
    title: "THE SPY NEXT DOOR",
    author: "Anonymous (obviously)",
    lines: [
      "He waters plants that aren't there",
      "His mailman has a certain stare",
      "His cat wears tiny listening gear",
      "And yet... I feel he's sincere",
      "(Meet at the park, 4:47)",
    ],
    style: "suspicious"
  },
  {
    title: "LIMERICK FOR A LAUNDROMAT",
    author: "Coin Op. Enthusiast",
    lines: [
      "A woman who lived in a shoe",
      "Found a quarter, didn't know what to do",
      "She put it in the dryer",
      "Which made the heat higher",
      "Now her socks are a strange shade of blue",
    ],
    style: "limerick"
  }
];

const PoetryCorner: React.FC = () => {
  const [selectedPoem, setSelectedPoem] = useState(0);
  const [showAnalysis, setShowAnalysis] = useState(false);

  return (
    <div className="border-2 border-black p-3 bg-yellow-50 bg-opacity-30">
      <h2 className="section-title flex justify-between items-center">
        <span>📜 POETRY CORNER</span>
        <select 
          value={selectedPoem}
          onChange={(e) => setSelectedPoem(Number(e.target.value))}
          className="text-xs border border-black p-1 bg-white"
        >
          {poems.map((poem, idx) => (
            <option key={idx} value={idx}>{poem.title}</option>
          ))}
        </select>
      </h2>
      
      <div className="font-serif">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold italic">{poems[selectedPoem].title}</h3>
          <span className="text-xs text-gray-600">by {poems[selectedPoem].author}</span>
        </div>
        
        <div className="space-y-1 pl-2 border-l-4 border-gray-400">
          {poems[selectedPoem].lines.map((line, idx) => (
            <p key={idx} className="text-sm italic">
              {line}
            </p>
          ))}
        </div>
        
        {/* Literary Analysis Button (hides clues) */}
        <div className="mt-3 text-right">
          <button 
            onClick={() => setShowAnalysis(!showAnalysis)}
            className="text-xxs bg-gray-200 px-2 py-1 border border-black hover:bg-gray-300"
          >
            {showAnalysis ? "HIDE ANALYSIS" : "LITERARY ANALYSIS"}
          </button>
        </div>
        
        {showAnalysis && (
          <div className="mt-2 p-2 bg-white border border-gray-300 text-xs">
            <p className="font-bold">Critical Reception:</p>
            <p className="italic text-gray-700">
              {selectedPoem === 0 && "A masterwork of kitchen appliance romanticism. The meter is questionable, much like the toaster's timing."}
              {selectedPoem === 1 && "A haunting exploration of loss and lint. Critics call it 'relatable' and 'slightly damp'."}
              {selectedPoem === 2 && "Brevity is the soul of wit, and also of this haiku. The reference to 3pm meetings has been called 'too real'."}
              {selectedPoem === 3 && "This poem has been flagged for review by the Department of Poetry. The reference to 4:47 is purely coincidental."}
              {selectedPoem === 4 && "A traditional limerick about modern laundry struggles. The shoe reference is metaphorical. Probably."}
            </p>
            {/* Hidden pattern - syllable count might encode something */}
            <p className="text-xxs text-gray-400 mt-1 font-mono text-right">
              {poems[selectedPoem].lines.map(l => l.length).join('-')}
            </p>
          </div>
        )}
      </div>
      
      {/* Submission Call */}
      <div className="mt-3 text-xxs text-gray-500 border-t border-gray-300 pt-2">
        <span>Submit your original poetry to: poems@dailynoise.local</span>
        <span className="block italic">(No refunds, no regrets, no rhyming dictionary)</span>
      </div>
    </div>
  );
};

export default PoetryCorner;