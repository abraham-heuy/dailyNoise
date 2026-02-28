import React, { useState } from 'react';

// Brief explanation for the uninitiated (aka morons)
const horoscopeExplanation = "Horoscopes are what people read when they want the universe to tell them what to do instead of making decisions themselves. Based on the position of stars that died millions of years ago. Makes perfect sense. Each sign corresponds to when you were born. The predictions are vague enough to apply to anyone. That's the trick. You're welcome.";

const signs = [
  "ARIES (Mar 21 - Apr 19): The ram. Impulsive, aggressive, starts things but never finishes them. The crackhead energy of the zodiac.",
  "TAURUS (Apr 20 - May 20): The bull. Stubborn, loves food, will die on any hill regardless of how stupid. Will argue about anything.",
  "GEMINI (May 21 - Jun 20): The twins. Two personalities. Neither are likable. Will text you first then ghost you for 67 days.",
  "CANCER (Jun 21 - Jul 22): The crab. Emotional, cries at commercials, holds grudges for 67 years. Will bring up something you said in 1998.",
  "LEO (Jul 23 - Aug 22): The lion. Main character energy. Thinks everything is about them. It usually isn't. Takes 67 selfies a day.",
  "VIRGO (Aug 23 - Sep 22): The virgin. Perfectionist, will correct your grammar, has 67 different opinions on how you load the dishwasher.",
  "LIBRA (Sep 23 - Oct 22): The scales. Indecisive. Will take 67 minutes to decide what to eat. Then change their mind.",
  "SCORPIO (Oct 23 - Nov 21): The scorpion. Intense, mysterious, will find out your secrets. Has 67 tabs open of your social media.",
  "SAGITTARIUS (Nov 22 - Dec 21): The archer. Blunt, will tell you your outfit is ugly, then buy you a drink. Has 67 unfinished projects.",
  "CAPRICORN (Dec 22 - Jan 19): The goat. Ambitious, will work 67 hours a week and judge you for not doing the same. Has no hobbies.",
  "AQUARIUS (Jan 20 - Feb 18): The water bearer. Weird, thinks they're smarter than everyone, probably correct. Has 67 conspiracy theories.",
  "PISCES (Feb 19 - Mar 20): The fish. Lives in fantasy land, cries at everything, will ghost you to read a book. Has 67 imaginary friends."
];

const horoscopes = [
  "Today you will encounter a small inconvenience that will ruin your entire mood. A coffee will be spilled. A bus will be missed. The universe is laughing at you specifically. Your lucky numbers are 6 and 7 but they won't help. The stranger in the hat is just a stranger in a hat. Leave them alone.",
  "The weather forecast contains the answers you seek but you won't understand them because you failed meteorology. The high temperature minus the low temperature equals 67. This means nothing. Stop looking for patterns in weather data. It's just weather.",
  "Someone from your past will message you today. It will be awkward. You will pretend to be busy. You are not busy. You're reading horoscopes. The mysterious stain on your carpet is from 2003. It's not coming out. Accept this.",
  "The classified ads section contains a message for you but you won't find it because you don't read newspapers like a normal person. A used bicycle priced at 67 dollars is not a sign. It's just an old bike. The tires are probably flat.",
  "Your spirit animal is the pigeon. They eat garbage and no one likes them. But they survive. Be more pigeon. The squirrel outside your window is not watching you. It's just a squirrel. They forget things immediately. Unlike you. You remember every embarrassing moment since 1987.",
  "Today a Family Guy episode will air and you will watch it instead of doing something productive. The cutaway scene contains wisdom but you'll miss it because you're on your phone. Put the phone down. No wait, you're on your phone now. This is hopeless.",
  "The toaster in your kitchen is not sending signals. It's a toaster. It makes toast. That's its only purpose. You've watched too many conspiracy videos. Go outside. Touch grass. The grass is green. It's not coded. It's just grass.",
  "Today you will argue with someone online about something you know nothing about. You will spend 67 minutes typing responses. You will not change anyone's mind. You will feel empty. This is your life now. Welcome.",
  "The library book you returned in 1987 is not a clue. It's just a book. The person who checked it out after you probably lost it. There is no basement full of files. There's just dust and regret. Like your soul.",
  "The haunted mansion is not haunted. It's just old and has bad wiring. The cat adoption requirement is because the owner has 67 cats and needs help. This is not a metaphor. It's just too many cats.",
  "Today you will hear a noise in your house at 3:67 AM. That's not a real time. You made that up. Go back to sleep. The noise was the refrigerator. Refrigerators are loud. They are not communicating with toasters. That would be stupid.",
  "The number 67 will appear today. It will mean nothing. You will try to connect it to something else. You will fail. The universe does not send secret messages through numbers. If it did, it would use better numbers. Like 42. That one at least has meaning."
];

const Horoscopes: React.FC = () => {
  const [selectedSign, setSelectedSign] = useState(0);
  const [showPrediction, setShowPrediction] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  return (
    <div className="border-2 border-black p-3 bg-white">
      <h2 className="section-title flex justify-between items-center">
        <span>HOROSCOPES</span>
        <button 
          onClick={() => setShowExplanation(!showExplanation)}
          className="text-xxs bg-gray-200 px-2 py-1 border border-black hover:bg-gray-300"
        >
          {showExplanation ? 'HIDE INFO' : 'WHAT IS THIS?'}
        </button>
      </h2>
      
      {showExplanation && (
        <div className="mb-3 p-2 bg-gray-100 border border-black text-xs italic">
          <p>{horoscopeExplanation}</p>
        </div>
      )}
      
      <div className="flex flex-col sm:flex-row gap-2 items-start">
        <select 
          value={selectedSign}
          onChange={(e) => setSelectedSign(Number(e.target.value))}
          className="w-full border border-black p-1 text-sm bg-white font-mono"
        >
          {signs.map((sign, idx) => (
            <option key={idx} value={idx}>{sign}</option>
          ))}
        </select>
        
        <button 
          onClick={() => setShowPrediction(!showPrediction)}
          className="w-full sm:w-auto bg-black text-white px-3 py-1 text-sm border border-black hover:bg-gray-800 whitespace-nowrap"
        >
          {showPrediction ? "HIDE" : "READ TODAY"}
        </button>
      </div>
      
      {showPrediction && (
        <div className="mt-3 p-4 bg-gray-50 border-2 border-black">
          <p className="text-sm italic font-serif leading-relaxed">
            "{horoscopes[selectedSign]}"
          </p>
          
          <div className="mt-3 grid grid-cols-2 gap-2 text-xxs border-t border-gray-300 pt-2">
            <div>
              <span className="font-bold block text-gray-600">LUCKY NUMBERS:</span>
              <span className="font-mono">{67 - selectedSign}, {67 + selectedSign}, 67 (none are actually lucky)</span>
            </div>
            <div>
              <span className="font-bold block text-gray-600">MOOD:</span>
              <span>Questioning why you're here</span>
            </div>
            <div className="col-span-2 mt-1">
              <span className="font-bold block text-gray-600">COMPATIBILITY:</span>
              <span>Your sofa and a bag of chips. It's the only relationship that lasts.</span>
            </div>
          </div>
          
          {/* Hidden message - barely visible */}
          <div className="text-xxs text-gray-200 text-right mt-2 select-none">
            <span>#{selectedSign + 1} • {horoscopes[selectedSign].length} chars • trust nothing • 67 reasons why</span>
          </div>
        </div>
      )}
      
      <div className="mt-2 text-xxs text-gray-400 border-t border-gray-200 pt-1 flex justify-between">
        <span>* Horoscopes are 67% made up, 33% wishful thinking, 100% useless</span>
        <span className="opacity-30 hover:opacity-100">read at your own risk</span>
      </div>
    </div>
  );
};

export default Horoscopes;