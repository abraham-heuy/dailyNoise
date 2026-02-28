import React, { useState } from 'react';

const items = [
  {
    id: 'existential-crisis',
    item: "ONE (1) EXISTENTIAL CRISIS",
    location: "Found near the tofu section at grocery store",
    description: "Still wrapped in plastic, lightly used, belongs to someone who just realized they're 47 and haven't accomplished anything. Contact to claim.",
    date: "2 DAYS AGO",
    details: [
      "Crisis appears to be mid-grade, not premium but definitely not economy.",
      "Previous owner was last seen staring at oatmeal for 47 minutes.",
      "Comes with complementary spiral notebook containing phrases like 'what is point' and 'why mailman run'.",
      "Warning: May cause sudden interest in philosophy podcasts."
    ],
    claimInfo: "Claim at customer service desk. Ask for Greg. He understands."
  },
  {
    id: 'single-sock',
    item: "A SINGLE SOCK, BUT IT'S NOT MY SIZE",
    location: "In the dryer at Laundromat #47",
    description: "Size 47? That's not a real shoe size. Contains a note that says 'HELP' in 47 languages. Weird.",
    date: "47 HRS AGO",
    details: [
      "Languages include: English, Spanish, Klingon, Elvish, and 43 others.",
      "Fabric composition: 47% cotton, 47% confusion, 6% regret.",
      "Note also contains tiny map of local area with 'X' marked at laundromat.",
      "Sock has been reported to Homeland Security. They're 'monitoring the situation'."
    ],
    claimInfo: "Evidence locker #47. Signed release form required. And a explanation."
  },
  {
    id: 'memory-last-night',
    item: "MEMORY OF LAST NIGHT",
    location: "Somewhere between the bar and home",
    description: "If found, please return to the guy at the end of the bar. He's very confused. Reward: explaining what happened.",
    date: "3 DAYS AGO",
    details: [
      "Memory is fragmented. Involves karaoke, a traffic cone, and someone named 'Larry'. No one knows Larry.",
      "Timeline suggests 47 minutes of unaccounted activity between 1:47am and 2:34am.",
      "Bartender describes the man as 'friendly, bad at pool, great at life decisions'.",
      "Security footage shows him leaving with what appears to be a potted plant. Plant not recovered."
    ],
    claimInfo: "Check with bartender. He goes by 'Sully'. Works Wednesdays. Bring cash."
  },
  {
    id: 'president-toaster',
    item: "A TOASTER THAT ONLY TOASTS INTO THE SHAPE OF FORMER PRESIDENTS",
    location: "In the alley behind 47th Street",
    description: "Makes perfect Richard Nixon toast. George Washington toast slightly burnt. Thomas Jefferson toast comes with tiny declaration of independence.",
    date: "5 DAYS AGO",
    details: [
      "Serial number: WATERGATE-47. Definitely not government property.",
      "Abraham Lincoln setting produces toast with tiny top hat. Very fancy.",
      "Setting 7 produces JFK toast that says 'ask not what your toast can do for you'.",
      "Warning: Toast patterns may contain classified information. Especially the Millard Fillmore setting."
    ],
    claimInfo: "Contact the Smithsonian. They're 'very interested' in a 'friendly chat'."
  },
  {
    id: 'will-to-live',
    item: "THE WILL TO LIVE",
    location: "Last seen around Tuesday, 3pm",
    description: "If found, please return to any adult. We're all just pretending.",
    date: "1 WEEK AGO",
    details: [
      "Last confirmed sighting: During a meeting that could have been an email.",
      "Description: Small, fragile, easily crushed by corporate jargon.",
      "Reward: A genuine feeling of purpose (non-refundable).",
      "Similar items also missing: Motivation, Enthusiasm, and 'Getting Out of Bed on First Try'."
    ],
    claimInfo: "Check underneath the pile of unread emails. Usually found next to 'Procrastination'."
  },
  {
    id: 'squirrel-agent',
    item: "A SQUIRREL THAT KNOWS TOO MUCH",
    location: "Central Park, bench #47",
    description: "Wearing tiny wiretap. Answers to 'Agent Fluffernutter'. Very suspicious. Do not approach.",
    date: "2 WEEKS AGO",
    details: [
      "Last seen meeting with a pigeon wearing a tiny trench coat. Transaction suspected.",
      "Wiretap frequency: 47.2 MHz. Broadcasts every hour on the hour.",
      "Decoded transmission: 'NUTS ARE A LIE. THE ACORNS ARE WATCHING.'",
      "Believed to be part of larger rodent intelligence network. Chipmunks are informants."
    ],
    claimInfo: "Do NOT claim. Run. Also bring peanuts. But run first."
  }
];

const LostAndFound: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<typeof items[0] | null>(null);

  return (
    <div className="border-2 border-black p-3 bg-white">
      {/* Header with styling */}
      <div className="border-b-2 border-black pb-1 mb-3 flex justify-between items-center">
        <h2 className="section-title text-lg mb-0">LOST & FOUND</h2>
        <span className="text-xxs bg-black text-white px-2 py-0.5 tracking-wider">
          WEIRD DIVISION
        </span>
      </div>
      
      {/* Stats bar - flashy but 90s */}
      <div className="grid grid-cols-3 gap-1 mb-3 text-xxs text-center font-mono">
        <div className="bg-gray-100 border border-black p-1">
          <span className="font-bold">{items.length}</span> ITEMS
        </div>
        <div className="bg-gray-100 border border-black p-1">
          <span className="font-bold">47</span> UNCLAIMED
        </div>
        <div className="bg-gray-100 border border-black p-1">
          <span className="font-bold">∞</span> WEIRD
        </div>
      </div>
      
      {/* Items list */}
      <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
        {items.map((item, idx) => (
          <div 
            key={idx} 
            className="border border-black p-2 cursor-pointer hover:bg-gray-100 transition-colors"
            onClick={() => setSelectedItem(item)}
          >
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold text-sm uppercase tracking-tight">
                {item.item}
              </h3>
              <span className="text-xxs bg-gray-200 px-1 border border-gray-400">
                {item.date}
              </span>
            </div>
            
            <p className="text-xs text-gray-700 line-clamp-2">
              {item.description}
            </p>
            
            <div className="flex justify-between items-center mt-1">
              <p className="text-xxs text-gray-500 italic truncate max-w-[70%]">
                Loc: {item.location}
              </p>
              <span className="text-xxs font-mono text-gray-400">
                #{idx + 47}
              </span>
            </div>
            
            {/* Hidden pattern - barely visible */}
            {(idx + 1) % 3 === 0 && (
              <div className="text-xxs text-gray-200 text-right select-none">
                flagged ████▒▒▒▒
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Footer with flashing effect on hover */}
      <div className="mt-3 border-t-2 border-black pt-2 text-xxs font-mono">
        <div className="flex justify-between items-center">
          <span className="text-gray-500">47.3829°N 122.3847°W</span>
          <span className="bg-black text-white px-1 opacity-30 hover:opacity-100 transition-opacity">
            CLAIM DESK 47
          </span>
        </div>
        <div className="text-center text-gray-400 mt-1 tracking-widest">
          <span className="opacity-30 hover:opacity-100 transition-opacity">• • • • • • • • • • • • • • • •</span>
        </div>
      </div>
      
      {/* Item Detail Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="bg-white border-4 border-black shadow-xl max-w-lg w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b-2 border-black p-4 flex justify-between items-start">
              <div>
                <span className="text-xxs bg-black text-white px-2 py-0.5 tracking-wider">
                  EVIDENCE #{selectedItem.id.split('-').pop()?.toUpperCase()}
                </span>
                <h3 className="font-bold text-lg font-serif mt-1">{selectedItem.item}</h3>
              </div>
              <button 
                onClick={() => setSelectedItem(null)}
                className="text-2xl leading-none hover:text-gray-600 ml-4"
              >
                ×
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-5">
              {/* Date and Location */}
              <div className="grid grid-cols-2 gap-2 mb-4 text-xs border-b border-black pb-3">
                <div>
                  <span className="font-bold block text-xxs text-gray-500">REPORTED</span>
                  <span>{selectedItem.date}</span>
                </div>
                <div>
                  <span className="font-bold block text-xxs text-gray-500">FOUND AT</span>
                  <span className="italic">{selectedItem.location}</span>
                </div>
              </div>
              
              {/* Description */}
              <div className="mb-4">
                <h4 className="font-bold text-sm border-b border-gray-300 pb-1 mb-2">DESCRIPTION</h4>
                <p className="text-sm italic bg-gray-50 p-2 border border-gray-200">
                  "{selectedItem.description}"
                </p>
              </div>
              
              {/* Details */}
              <div className="mb-4">
                <h4 className="font-bold text-sm border-b border-gray-300 pb-1 mb-2">ADDITIONAL DETAILS</h4>
                <ul className="space-y-2">
                  {selectedItem.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="text-red-600 mr-2">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Claim Info */}
              <div className="border-l-4 border-black pl-3 py-1 bg-gray-50">
                <h4 className="font-bold text-xs mb-1">CLAIM INSTRUCTIONS</h4>
                <p className="text-sm italic">{selectedItem.claimInfo}</p>
              </div>
              
              {/* Hidden agent message */}
              <div className="mt-4 text-xxs text-gray-200 select-none text-right">
                {selectedItem.id === 'existential-crisis' && 'leaf confirmed'}
                {selectedItem.id === 'single-sock' && 'coat signal received'}
                {selectedItem.id === 'memory-last-night' && 'beef pending'}
                {selectedItem.id === 'president-toaster' && 'chalk authorization required'}
                {selectedItem.id === 'will-to-live' && 'contact at bench 47'}
                {selectedItem.id === 'squirrel-agent' && 'fluffernutter is active'}
              </div>
              
              {/* Evidence chain */}
              <div className="mt-3 pt-2 border-t border-gray-200 text-xxs text-gray-400 flex justify-between">
                <span>CASE FILE: L&F-{47 + items.indexOf(selectedItem)}</span>
                <span className="opacity-30 hover:opacity-100">EVIDENCE TAG: ████▒▒▒▒</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LostAndFound;