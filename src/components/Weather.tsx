import React, { useState } from 'react';

const Weather: React.FC = () => {
  const [showMarineModal, setShowMarineModal] = useState(false);
  const [showTidesModal, setShowTidesModal] = useState(false);
  const [hoveredForecast, setHoveredForecast] = useState<number | null>(null);
  
  const weatherData = {
    current: {
      temp: "72°F (feels like 72°F because facts don't care about your feelings)",
      condition: "Partly cloudy with a 40% chance of toaster rain and 60% chance of fry cook memories",
      wind: "5 mph from the direction of confusion, gusting to 'oh no'",
      humidity: "69% (nice), also 47% chance of sarcasm",
      pressure: "29.92 inHg (or as SpongeBob calls it, 'ready for departure')",
      uvIndex: "Medium, but your existential dread is off the charts"
    },
    forecast: [
      { day: "MON", high: "68°F", low: "52°F", condition: "Mostly normal, brief period of panic around 3pm", details: "The panic is expected to subside by 3:47pm, replaced by mild confusion and possibly nachos." },
      { day: "TUE", high: "71°F", low: "54°F", condition: "Increasing absurdity, afternoon squirrels, evening crabby patties", details: "Squirrels are organized. They know what you did. The crabby patties are a distraction." },
      { day: "WED", high: "47°F", low: "39°F", condition: "Unusually specific temperture, chance of dinosaurs: 60%", details: "Velociraptors prefer this temperature. They also prefer you not knowing they're watching." },
      { day: "THU", high: "63°F", low: "51°F", condition: "Periods of rain, followed by periods of more rain, then lizards", details: "The lizards are informants. Do not make eye contact with the geckos." },
      { day: "FRI", high: "77°F", low: "61°F", condition: "Clearing skies, invading Denmark, hiding the secret formula", details: "Denmark invasion postponed. The secret formula is under the floorboards at the Krusty Krab." },
      { day: "SAT", high: "74°F", low: "58°F", condition: "Chance of meatballs, low pressure system from Bikini Bottom", details: "Meatballs are code for packages. Low pressure means high alert. Bikini Bottom is always watching." },
      { day: "SUN", high: "69°F", low: "53°F", condition: "Nice. Also Patrick is hosting a barbecue, you're not invited", details: "Patrick's barbecue is a front. The real meeting is at the jellyfish fields at 4:47pm." }
    ],
    alerts: [
      "Gale warning for anyone named Gale (sorry Gale)",
      "Flood watch in basement apartments, also in pineapple under the sea",
      "Heat advisory for people who still think 72°F is 'hot'",
      "Squidward watch: He's definitely annoyed about something"
    ],
    tides: [
      { time: "3:47 AM", height: "4.7 ft", note: "low tide (suspicious, also Patrick is asleep)", secret: "DROP SITE ACCESSIBLE. CODE LEAF." },
      { time: "10:23 AM", height: "8.2 ft", note: "high tide (Mr. Krabs counting money)", secret: "MONEY COUNTING IS COVER. REAL EXCHANGE AT 10:47." },
      { time: "4:47 PM", height: "4.7 ft", note: "low tide (again with the 47, SpongeBob at work)", secret: "SPONGEBOB IS OFFLINE. SAFE WINDOW. USE COAT." },
      { time: "11:15 PM", height: "8.5 ft", note: "high tide (Sandy doing experiments)", secret: "SANDY'S DOME IS SAFE HOUSE. PASSWORD: CHALK." },
      { time: "4:20 AM", height: "5.1 ft", note: "low tide (the fish are suspiciously quiet)", secret: "FISH ARE AGENTS. DO NOT TRUST THE ANGELFISH." }
    ],
    marine: [
      { text: "Small craft advisory for vessels named 'Serendipity' or 'The Jellyspinner'", secret: "SERENDIPITY IS FRIENDLY. APPROACH WITH COAST GUARD COLORS." },
      { text: "Large craft advisory for vessels that are lying about their tonnage", secret: "THE LYING VESSELS ARE ENEMY. TONNAGE 47 = FRIENDLY." },
      { text: "All craft advisory for vessels that don't know what they're doing (most of us, including the Flying Dutchman)", secret: "FLYING DUTCHMAN IS CONTACT. SAY 'GREGORY' FOR PASSWORD." },
      { text: "Jellyfishing conditions: Optimal, bring net and existential crisis", secret: "JELLYFISH NETS CONTAIN MICROFILM. CHECK THE HANDLES." },
      { text: "Kelp forest forecast: Green and wavy, as always", secret: "KELP FOREST AT 47° MARK. PACKAGE IN THIRD CLUMP." }
    ],
    astronomical: {
      sunrise: "6:47 AM (sun was late, traffic)",
      sunset: "7:47 PM (sun has commitments later)",
      moonPhase: "Waxing gibbous, which sounds made up but isn't",
      visibility: "10 miles, unless you're Squidward looking at his future"
    }
  };

  // Hidden clues - misspellings and misprints
  const misprints = [
    "Temperture",
    "occuring",
    "recieve",
    "definately",
    "seperate",
    "calender"
  ];

  return (
    <div className="border-2 border-black p-3 bg-white">
      <h2 className="section-title flex justify-between items-center">
        <span>WEATHER & TIDES</span>
        <div className="flex gap-1">
          <button 
            onClick={() => setShowTidesModal(true)}
            className="text-xxs bg-gray-200 px-2 py-1 border border-black hover:bg-gray-300"
          >
            TIDES
          </button>
          <button 
            onClick={() => setShowMarineModal(true)}
            className="text-xxs bg-gray-200 px-2 py-1 border border-black hover:bg-gray-300"
          >
            MARINE
          </button>
        </div>
      </h2>
      
      {/* Current Weather */}
      <div className="border border-black p-2 mb-3 bg-gray-50">
        <div className="grid grid-cols-2 gap-1 text-xs">
          <span className="font-bold">Temperature:</span>
          <span>{weatherData.current.temp}</span>
          
          <span className="font-bold">Condition:</span>
          <span className="italic">{weatherData.current.condition}</span>
          
          <span className="font-bold">Wind:</span>
          <span>{weatherData.current.wind}</span>
          
          <span className="font-bold">Humidity:</span>
          <span>{weatherData.current.humidity}</span>
          
          <span className="font-bold">Pressure:</span>
          <span>{weatherData.current.pressure}</span>
          
          <span className="font-bold">UV Index:</span>
          <span>{weatherData.current.uvIndex}</span>
        </div>
      </div>
      
      {/* 7-Day Forecast with Hover */}
      <div className="mb-3">
        <h3 className="font-bold text-xs border-b border-black mb-1">7-DAY FORECAST (hover for details)</h3>
        <div className="space-y-1 relative">
          {weatherData.forecast.map((day, idx) => (
            <div 
              key={idx} 
              className="grid grid-cols-4 gap-1 text-xxs border-b border-gray-200 pb-1 relative"
              onMouseEnter={() => setHoveredForecast(idx)}
              onMouseLeave={() => setHoveredForecast(null)}
            >
              <span className="font-bold">{day.day}</span>
              <span>{day.high}/{day.low}</span>
              <span className="col-span-2 italic truncate">{day.condition}</span>
              
              {/* Hidden tooltip on hover */}
              {hoveredForecast === idx && (
                <div className="absolute z-10 top-full left-0 mt-1 p-2 bg-black text-white text-xxs border border-white min-w-[200px] shadow-lg">
                  {day.details}
                  <div className="absolute -top-1 left-4 w-2 h-2 bg-black transform rotate-45 border-t border-l border-white"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Alerts - Hidden in plain sight */}
      <div className="mb-3 border-l-4 border-red-600 pl-2 bg-red-50">
        <h3 className="font-bold text-xs">ACTIVE ALERTS:</h3>
        <div className="text-xxs space-y-0.5">
          {weatherData.alerts.map((alert, idx) => (
            <p key={idx}>• {alert}</p>
          ))}
        </div>
        {/* Hidden misspelling clue */}
        <p className="text-xxs text-gray-300 select-none mt-1">
          {misprints.join(' • ')}
        </p>
      </div>
      
      {/* Astronomical Data */}
      <div className="border-t border-black pt-2 mt-2">
        <h3 className="font-bold text-xs mb-1">SUN & MOON (they're fine, thanks for asking)</h3>
        <div className="grid grid-cols-2 gap-1 text-xxs">
          <span>Sunrise:</span>
          <span>{weatherData.astronomical.sunrise}</span>
          <span>Sunset:</span>
          <span>{weatherData.astronomical.sunset}</span>
          <span>Moon Phase:</span>
          <span>{weatherData.astronomical.moonPhase}</span>
          <span>Visibility:</span>
          <span>{weatherData.astronomical.visibility}</span>
        </div>
      </div>
      
      {/* Secret Messages Section */}
      <div className="mt-3 border-t border-gray-300 pt-2 text-xxs text-gray-400">
        <div className="grid grid-cols-2 gap-1">
          <span className="opacity-30 hover:opacity-100 transition-opacity">
            Marine Band: 47.2 MHz
          </span>
          <span className="opacity-30 hover:opacity-100 transition-opacity text-right">
            Channel: 47
          </span>
          <span className="opacity-30 hover:opacity-100 transition-opacity">
            Pressure dropping: 0.47 inHg
          </span>
          <span className="opacity-30 hover:opacity-100 transition-opacity text-right">
            Dew point: 47°F
          </span>
        </div>
        
        {/* SpongeBob reference - barely visible */}
        <p className="text-gray-200 select-none text-center mt-1">
          The secret formula is stored in the patty
        </p>
        
        {/* Another hidden clue */}
        <div className="flex justify-between text-gray-200 select-none">
          <span>RIp</span>
          <span>tIde</span>
          <span>cuRrEnt</span>
          <span>waVes</span>
          <span>oceAn</span>
          <span>fisH</span>
        </div>
        
        {/* Actual data that agents notice */}
        <div className="text-gray-600 mt-1 font-mono text-center">
          <span>47.3829°N • 122.3847°W • ALT: 47M</span>
        </div>
      </div>
      
      {/* Footer note */}
      <p className="text-xxs text-gray-400 mt-2 border-t border-gray-200 pt-1">
        * Weather data provided by the Institute of Making Stuff Up. Forecast confidence: 47%
      </p>
      
      {/* Tides Modal */}
      {showTidesModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setShowTidesModal(false)}
        >
          <div 
            className="bg-white border-4 border-black shadow-xl max-w-lg w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b-2 border-black p-4 flex justify-between items-center">
              <h3 className="font-bold text-lg font-serif">TIDE TABLE</h3>
              <button 
                onClick={() => setShowTidesModal(false)}
                className="text-2xl leading-none hover:text-gray-600"
              >
                ×
              </button>
            </div>
            
            <div className="p-5">
              <p className="text-xs italic mb-4">Bikini Bottom Standard Time • All heights approximate (like your chances)</p>
              
              <div className="space-y-4">
                {weatherData.tides.map((tide, idx) => (
                  <div key={idx} className="border border-black p-3">
                    <div className="grid grid-cols-3 gap-2 text-sm border-b border-gray-200 pb-2 mb-2">
                      <span className="font-mono font-bold">{tide.time}</span>
                      <span>{tide.height}</span>
                      <span className="italic">{tide.note}</span>
                    </div>
                    
                    {/* Secret message - barely visible */}
                    <p className="text-xxs text-gray-200 select-none">
                      {tide.secret}
                    </p>
                    
                    {/* Hidden pattern */}
                    <div className="text-xxs text-gray-300 text-right mt-1 opacity-30 hover:opacity-100">
                      {tide.time.includes('47') && '⏰ SIGNAL DETECTED'}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Hidden calculation */}
              <p className="text-xxs text-gray-300 text-right mt-4 select-none">
                3:47 + 10:23 + 4:47 + 11:15 + 4:20 = 34:92 (they know)
              </p>
            </div>
          </div>
        </div>
      )}
      
      {/* Marine Modal */}
      {showMarineModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setShowMarineModal(false)}
        >
          <div 
            className="bg-white border-4 border-black shadow-xl max-w-lg w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b-2 border-black p-4 flex justify-between items-center">
              <h3 className="font-bold text-lg font-serif">MARINE FORECAST</h3>
              <button 
                onClick={() => setShowMarineModal(false)}
                className="text-2xl leading-none hover:text-gray-600"
              >
                ×
              </button>
            </div>
            
            <div className="p-5">
              <p className="text-xs italic mb-4">For vessels of all sizes and levels of existential dread</p>
              
              <div className="space-y-4">
                {weatherData.marine.map((item, idx) => (
                  <div key={idx} className="border border-black p-3">
                    <p className="text-sm italic">{item.text}</p>
                    
                    {/* Secret message - barely visible */}
                    <p className="text-xxs text-gray-200 select-none mt-2">
                      {item.secret}
                    </p>
                    
                    {/* Hidden indicator */}
                    <div className="text-xxs text-gray-300 text-right mt-1 opacity-30 hover:opacity-100">
                      {idx === 2 && '🚢 CONTACT PRIORITY'}
                      {idx === 4 && '🌿 GRID REF: 47'}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Additional marine data */}
              <div className="mt-4 border-t border-gray-300 pt-3">
                <p className="text-xxs text-gray-600">Water Temperature: 47°F (refreshingly suspicious)</p>
                <p className="text-xxs text-gray-600">Wave Height: 4.7 ft (consistent)</p>
                <p className="text-xxs text-gray-600">Salinity: 47 ppm (not how salinity works but okay)</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;