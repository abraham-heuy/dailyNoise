import React, { useState } from 'react';

const listings = [
  {
    id: 'haunted-mansion',
    price: "$3.50",
    beds: "∞",
    baths: "??",
    desc: "Haunted mansion, comes with free ghosts. Must adopt cat.",
    location: "Spooky Lane, just past the cemetery",
    details: [
      "Ghosts include: Colonel Mustard (library), Lady Lavender (ballroom), and a very sad butler in the pantry.",
      "Cat is orange, answers to 'Mittens' or 'Your Highness'. Comes with tiny throne.",
      "Property has 47 rooms but only 12 are visible. Others appear at midnight.",
      "Previous owners left suddenly. No one knows why. Probably fine.",
      "Basement contains portal to what might be New Jersey. Buyer beware."
    ],
    specs: {
      lotSize: "1.3 acres (plus ghost dimensions)",
      yearBuilt: "1647 (or 1847, records are hazy)",
      heating: "Radiators AND cold spots (free AC)",
      parking: "Carriage house, also ghost horses",
      hoa: "None, ghosts don't organize"
    },
    contact: "Call Madame Leota at 555-0199. Seances by appointment."
  },
  {
    id: 'cardboard-box',
    price: "FREE",
    beds: "1",
    baths: "0",
    desc: "Cardboard box, great starter home. Some assembly required.",
    location: "Alley behind 47th Street, next to dumpster",
    details: [
      "Original owner was a cat named Mr. Whiskers. He's upgraded to a slightly better box.",
      "Interior features: corrugated walls, natural lighting (holes), ventilation included.",
      "Neighborhood is up-and-coming. Many raccoons. Very social.",
      "Box is technically biodegradable. So is your investment. Perfect.",
      "Previous occupant left behind a single Cheeto. Treasure it."
    ],
    specs: {
      lotSize: "0 square feet (it's a box)",
      yearBuilt: "Last Tuesday",
      heating: "Body heat only. Or matches (not recommended).",
      parking: "The street. Good luck.",
      hoa: "No, but a squirrel might ask for nuts"
    },
    contact: "Ask for 'Box King' behind the laundromat. He knows."
  },
  {
    id: 'cozy-submarine',
    price: "$47,000",
    beds: "2",
    baths: "1",
    desc: "Cozy submarine, perfect for underwater living. Bring own air.",
    location: "Mooring buoy #47, just past the pier",
    details: [
      "Former military vessel. Decommissioned because 'it kept surfacing near Cuba'.",
      "Periscope works great for watching neighbors. They're fish. They don't mind.",
      "Comes with 47 canned meals from 1987. 'Pork with mystery sauce'. Experiment.",
      "Sonar system picks up interesting conversations from passing ships. Not creepy at all.",
      "Has a tiny garden growing on the hull. Sustainable living!"
    ],
    specs: {
      lotSize: "47 feet long, 12 feet wide (all water around it)",
      yearBuilt: "1947 (lots of history)",
      heating: "Nuclear reactor? Probably not. Space heater.",
      parking: "Ocean. Unlimited ocean parking.",
      hoa: "No, but the Navy might visit"
    },
    contact: "Submariner Sam at the docks. Bring sea legs."
  },
  {
    id: 'normal-house',
    price: "$1,000,000",
    beds: "3",
    baths: "2",
    desc: "Normal house, nothing weird here. Please ignore the 47th parallel coordinates.",
    location: "123 Maple Street (exactly where you'd expect)",
    details: [
      "House is completely normal. Walls are walls. Doors are doors. Everything is fine.",
      "Basement contains a small door. Leads to a slightly smaller basement. Probably normal.",
      "Previous owners were 'cartographers'. They left many maps with X marks. Decoration only.",
      "Backyard has a sundial that always points north. Also normal. Sundials do that.",
      "Neighbors are friendly. They wave. Sometimes they wave at exactly 4:47pm. Coincidence."
    ],
    specs: {
      lotSize: "0.47 acres (specific)",
      yearBuilt: "1947 (popular year apparently)",
      heating: "Furnace. Makes normal furnace sounds. Probably.",
      parking: "2-car garage. Sometimes the cars move on their own. Fine.",
      hoa: "$47/month. Very specific."
    },
    contact: "Real estate agent: 'Normal Norm'. He's definitely normal. Probably."
  },
  {
    id: 'treehouse-express',
    price: "$47",
    beds: "1 (plus squirrels)",
    baths: "0 (leaves)",
    desc: "Treehouse in oak tree. Comes with resident squirrel who 'knows things'.",
    location: "Oak Tree #47, Central Park",
    details: [
      "Squirrel is named Agent Fluffernutter. He's very serious about security.",
      "Treehouse has a tiny periscope for 'surveillance' (bird watching, probably).",
      "Leaves change color at suspiciously regular intervals. Signal? Probably not.",
      "Previous tenant was a pigeon. Pigeon left coded messages in twigs. We haven't decoded them.",
      "Rope ladder retracts at night. Or when the squirrel feels like it."
    ],
    specs: {
      lotSize: "47 square feet (tree crown)",
      yearBuilt: "Built by kids in 1987. They're adults now. They want it back.",
      heating: "None. Squirrel fur is warm. Cuddle the squirrel.",
      parking: "Branches. Many branches.",
      hoa: "Squirrel demands nuts. This is non-negotiable."
    },
    contact: "Climb up and knock. The squirrel will decide."
  },
  {
    id: 'underwater-dome',
    price: "47,000 shells (local currency)",
    beds: "1 (wet)",
    baths: "47 (it's underwater)",
    desc: "Glass dome under the sea. Great views, occasional passing whale.",
    location: "Bikini Bottom coordinates: 47°N 122°W (approximate)",
    details: [
      "Inspired by a certain sponge. No, not that one. The other one.",
      "Dome has 47 windows. Each offers view of different sea creature. Some stare back.",
      "Cooking facilities include a grill that only cooks crabby patties. Strange.",
      "Neighbors include a starfish who's 'not very bright' and a squid who's 'very annoyed'.",
      "Mail delivered by pelican. Sometimes wet. Always late."
    ],
    specs: {
      lotSize: "47 square meters (underwater)",
      yearBuilt: "1999 (cartoon logic)",
      heating: "Geothermal vents. Also existential warmth.",
      parking: "Ocean current parking. First come first serve.",
      hoa: "Yes. Mr. Krabs manages it. Fees are high."
    },
    contact: "Send message in a bottle to coordinates. Allow 47 days for reply."
  }
];

const RealEstate: React.FC = () => {
  const [selectedListing, setSelectedListing] = useState<typeof listings[0] | null>(null);

  return (
    <div className="border-2 border-black p-3 bg-white">
      <h2 className="section-title flex justify-between items-center">
        <span>REAL ESTATE</span>
        <span className="text-xxs bg-black text-white px-1">UNIQUE OPPORTUNITIES</span>
      </h2>
      
      <p className="text-xxs text-gray-500 italic mb-2">
        * All properties sold as-is, as-was, as-maybe. No refunds.
      </p>
      
      {/* Listings Grid */}
      <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
        {listings.map((listing, idx) => (
          <div 
            key={idx} 
            className="border border-gray-300 p-3 cursor-pointer hover:border-black hover:bg-gray-50 transition-colors bg-white"
            onClick={() => setSelectedListing(listing)}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-sm uppercase tracking-tight">
                {listing.desc.split(',')[0]}
              </h3>
              <span className="text-sm font-mono bg-gray-100 px-2 border border-gray-400">
                {listing.price}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-2 text-xs mb-2">
              <div>
                <span className="text-gray-500">Beds:</span> {listing.beds}
              </div>
              <div>
                <span className="text-gray-500">Baths:</span> {listing.baths}
              </div>
              <div className="col-span-2 text-xxs text-gray-500 italic truncate">
                Loc: {listing.location}
              </div>
            </div>
            
            <p className="text-xs text-gray-700 line-clamp-2 border-t border-gray-200 pt-2">
              {listing.desc}
            </p>
            
            {/* Hidden marker */}
            <div className="text-xxs text-gray-200 text-right mt-1 select-none">
              #{idx + 47} • {listing.price.includes('47') ? 'prime' : 'standard'}
            </div>
          </div>
        ))}
      </div>
      
      {/* Footer */}
      <div className="mt-3 border-t border-gray-300 pt-2 text-xxs text-gray-400 flex justify-between">
        <span>47 listings available • 47 under contract</span>
        <span className="opacity-30 hover:opacity-100">MLS# 47-47-47</span>
      </div>
      
      {/* Listing Modal */}
      {selectedListing && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedListing(null)}
        >
          <div 
            className="bg-white border-4 border-black shadow-xl max-w-lg w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b-2 border-black p-4 flex justify-between items-start">
              <div>
                <span className="text-xxs bg-black text-white px-2 py-0.5 tracking-wider">
                  MLS#{selectedListing.id.split('-').pop()?.toUpperCase()}-47
                </span>
                <h3 className="font-bold text-lg font-serif mt-1">{selectedListing.desc.split(',')[0]}</h3>
              </div>
              <button 
                onClick={() => setSelectedListing(null)}
                className="text-2xl leading-none hover:text-gray-600 ml-4"
              >
                ×
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-5">
              {/* Price and Location */}
              <div className="grid grid-cols-2 gap-2 mb-4 text-sm border-b border-black pb-3">
                <div>
                  <span className="font-bold block text-xxs text-gray-500">PRICE</span>
                  <span className="text-xl font-mono">{selectedListing.price}</span>
                </div>
                <div>
                  <span className="font-bold block text-xxs text-gray-500">LOCATION</span>
                  <span className="italic text-sm">{selectedListing.location}</span>
                </div>
              </div>
              
              {/* Quick Specs */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="border border-gray-300 p-2 text-center">
                  <span className="font-bold text-xs">BEDS</span>
                  <p className="text-lg font-mono">{selectedListing.beds}</p>
                </div>
                <div className="border border-gray-300 p-2 text-center">
                  <span className="font-bold text-xs">BATHS</span>
                  <p className="text-lg font-mono">{selectedListing.baths}</p>
                </div>
                <div className="border border-gray-300 p-2 text-center">
                  <span className="font-bold text-xs">LOT</span>
                  <p className="text-lg font-mono">{selectedListing.specs.lotSize.split(' ')[0]}</p>
                </div>
              </div>
              
              {/* Description */}
              <div className="mb-4">
                <h4 className="font-bold text-sm border-b border-gray-300 pb-1 mb-2">DESCRIPTION</h4>
                <p className="text-sm italic bg-gray-50 p-3 border border-gray-200">
                  "{selectedListing.desc}"
                </p>
              </div>
              
              {/* Details */}
              <div className="mb-4">
                <h4 className="font-bold text-sm border-b border-gray-300 pb-1 mb-2">PROPERTY DETAILS</h4>
                <ul className="space-y-2">
                  {selectedListing.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="text-gray-400 mr-2">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Specifications */}
              <div className="mb-4">
                <h4 className="font-bold text-sm border-b border-gray-300 pb-1 mb-2">SPECIFICATIONS</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <span className="text-gray-500">Lot Size:</span>
                  <span>{selectedListing.specs.lotSize}</span>
                  <span className="text-gray-500">Year Built:</span>
                  <span>{selectedListing.specs.yearBuilt}</span>
                  <span className="text-gray-500">Heating:</span>
                  <span>{selectedListing.specs.heating}</span>
                  <span className="text-gray-500">Parking:</span>
                  <span>{selectedListing.specs.parking}</span>
                  <span className="text-gray-500">HOA:</span>
                  <span>{selectedListing.specs.hoa}</span>
                </div>
              </div>
              
              {/* Contact */}
              <div className="border-l-4 border-black pl-3 py-2 bg-gray-50">
                <h4 className="font-bold text-xs mb-1">CONTACT</h4>
                <p className="text-sm italic">{selectedListing.contact}</p>
              </div>
              
              {/* Hidden agent message */}
              <div className="mt-4 text-xxs text-gray-200 select-none text-right">
                {selectedListing.id === 'haunted-mansion' && 'ghost frequency: 47MHz'}
                {selectedListing.id === 'cardboard-box' && 'box contains microfilm'}
                {selectedListing.id === 'cozy-submarine' && 'periscope code: 47'}
                {selectedListing.id === 'normal-house' && 'basement door code: 4747'}
                {selectedListing.id === 'treehouse-express' && 'squirrel is handler'}
                {selectedListing.id === 'underwater-dome' && 'crabby patty recipe inside'}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RealEstate;