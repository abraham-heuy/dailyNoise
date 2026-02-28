import React, { useState } from 'react';

const theories = [
  {
    title: "CARTMAN'S DAD IS STILL A MYSTERY",
    author: "Investigative Kyle",
    content: "They teased it for years. They showed us who it wasn't. But did they ever actually confirm? The Denver Broncos jacket, the cryptic clues, the whole 'Cartman's mom is also his dad' reveal felt rushed. I'm telling you, there's a deeper cut. The real father is someone we've seen all along. Probably Chef. That's why they killed him off.",
    evidence: "• Chef knew too much • The authorities visited Kenny's house suspiciously often • 47 episodes of foreshadowing",
    rating: "FOUR TINFOIL HATS (would freeze a whole town again)"
  },
  {
    title: "MR. BURNS ISN'T OLD, HE'S A LIZARD PERSON",
    author: "Smithers_47",
    content: "A man that age cannot move that slowly and still be alive. The yellow skin? The glowing red eyes when angry? The complete lack of empathy? Textbook reptilian. The Simpsons have been warning us for decades. 'Who Shot Mr. Burns?' was actually 'Who Discovered Mr. Burns is a Lizard?' but they changed it at the last minute.",
    evidence: "• Never seen eating normal food • The power plant is a front for geothermal egg incubation • Has 47 known aliases • Smithers is clearly a hybrid",
    rating: "FIVE TINFOIL HATS (release the Simpsons files)"
  },
  {
    title: "KENNY DOESN'T DIE, HE TRAVELS THROUGH DIMENSIONS",
    author: "Mysterion_Truth",
    content: "Think about it. Every time Kenny 'dies', he's back the next episode with no explanation. The hood hides his face because it's not always the same Kenny. The Mysterion episodes basically confirmed he has powers. The deaths are just dimensional jumps. The real Kenny is a multiversal constant, like a cockroach but with better parka game.",
    evidence: "• Always comes back • The city knows something • 47 deaths? More like 47 relocations • The poor family is a front",
    rating: "FOUR TINFOIL HATS (oh my god they killed Kenny's continuity)"
  },
  {
    title: "STEWIE IS ACTUALLY A TIME TRAVELER FROM THE FUTURE",
    author: "Future Brian",
    content: "The talking is a cover. The inventions are too advanced. He knows things no baby should know. The 'Cool Whip' incident alone proves he's not from this timeline. He's here to prevent something. Or cause something. Either way, the British accent is a lie. He's from future America where everyone sounds like that after the accent wars.",
    evidence: "• Built a working time machine at 1 • References future events • Lois is clearly not his real mother • 47 references to things that haven't happened yet",
    rating: "FIVE TINFOIL HATS (victory is his, whatever that means)"
  },
  {
    title: "SOUTH PARK IS A SOCIAL EXPERIMENT",
    author: "Professor Chaos",
    content: "A small town in Colorado where nothing changes except everything changes. The same characters for 25+ years. Celebrity appearances that are clearly simulations. The government is testing how much absurdity a population can absorb before they normalize it. We are the control group. They're watching our reactions right now.",
    evidence: "• Time moves weirdly • Seasons last exactly as long as needed • Member berries were a warning • 47 seasons and counting • They predicted everything",
    rating: "FOUR TINFOIL HATS (screw you guys, I'm going home... to my bunker)"
  },
  {
    title: "PETER GRIFFIN IS ACTUALLY BRIAN'S WRITING PROJECT",
    author: "Quagmire's Diary",
    content: "Brian is a writer. He's struggling. So he creates Peter, this larger-than-life idiot who does whatever Brian wishes he could do. Lois is the woman Brian can't get. Stewie is his ambition. The dog is himself. The whole show is Brian's novel, and we're reading it in real time. That's why Brian always seems the most self-aware. He's literally writing himself into his own story.",
    evidence: "• Brian has a typewriter • Peter never learns anything • The cutaways are Brian's daydreams • 47 episodes where Brian 'helps' Peter • Meta episodes break the fourth wall because Brian is confused",
    rating: "FOUR TINFOIL HATS (hehehehe... or am I?)"
  },
  {
    title: "CLEVELAND LEFT BECAUSE HE FOUND OUT",
    author: "Bear Witness",
    content: "Cleveland didn't just move for a spin-off. He found something. The Brown family history. A secret about Quahog. The move to Stoolbend was an escape. Watch the crossover episodes carefully. He avoids certain topics. He won't look Peter in the eye. Cleveland knows what's really going on, and he got out while he could. We should follow his lead.",
    evidence: "• Left suddenly • Never really came back • The spin-off was a cover • 47 clues in the theme song alone • Donna knows more than she says",
    rating: "THREE TINFOIL HATS (it's been a while, but not long enough)"
  },
  {
    title: "RANDY MARSH IS THE MOST DANGEROUS MAN IN AMERICA",
    author: "Lorde's Secret",
    content: "A geologist who becomes a rave promoter, a weed farmer, a bathtub wine entrepreneur, and a Lorde impersonator. No one has that many successful careers unless they're a government asset. Randy is testing the limits of American capitalism. Every new scheme is a psy-op. 'Tegridy' is code. The farm is a front. He's destabilizing the economy one ridiculous venture at a time.",
    evidence: "• Survived Lorde exposure • Started a pandemic • Sold weed to Canadians • 47 side businesses • Sharon hasn't left him, meaning she's in on it",
    rating: "FIVE TINFOIL HATS (I thought this was America!)"
  }
];

const ConspiracyCorner: React.FC = () => {
  const [selectedTheory, setSelectedTheory] = useState(0);

  return (
    <div className="border-2 border-black p-3 bg-white">
      <h2 className="section-title flex justify-between items-center">
        <span>CONSPIRACY CORNER</span>
        <select 
          value={selectedTheory}
          onChange={(e) => setSelectedTheory(Number(e.target.value))}
          className="text-xs border border-black p-1 bg-white font-mono"
        >
          {theories.map((theory, idx) => (
            <option key={idx} value={idx}>{theory.title}</option>
          ))}
        </select>
      </h2>
      
      <div className="mt-2 border border-black p-3 bg-gray-50">
        <div className="flex justify-between items-center border-b border-gray-300 pb-1 mb-2">
          <h3 className="font-bold text-sm font-serif">{theories[selectedTheory].title}</h3>
          <span className="text-xxs text-gray-500">by {theories[selectedTheory].author}</span>
        </div>
        
        <p className="text-sm italic leading-relaxed">
          {theories[selectedTheory].content}
        </p>
        
        <div className="mt-3 text-xs border-l-2 border-black pl-2 py-1">
          <span className="font-bold text-xxs uppercase">supporting evidence:</span>
          <ul className="list-disc list-inside mt-1 space-y-0.5">
            {theories[selectedTheory].evidence.split('•').filter(e => e.trim()).map((item, idx) => (
              <li key={idx} className="text-xxs text-gray-700 ml-1">{item.trim()}</li>
            ))}
          </ul>
        </div>
        
        <div className="flex justify-between items-center mt-2 text-xxs border-t border-gray-200 pt-1">
          <span className="font-mono">{theories[selectedTheory].rating}</span>
          <span className="text-gray-400">
            {theories[selectedTheory].content.length} chars • {theories[selectedTheory].content.split(' ').length} words • #{47 + selectedTheory}
          </span>
        </div>
        
        {/* Hidden message - barely visible */}
        <div className="text-xxs text-gray-200 text-right mt-1 select-none">
          {selectedTheory === 0 && 'respect my authoritah'}
          {selectedTheory === 1 && 'excellent smithers'}
          {selectedTheory === 2 && 'mysterion lives'}
          {selectedTheory === 3 && 'victory is mine'}
          {selectedTheory === 4 && 'screw you guys'}
          {selectedTheory === 5 && 'hehehehe'}
          {selectedTheory === 6 && 'oh thats just Cleveland'}
          {selectedTheory === 7 && 'tegridy farms'}
        </div>
      </div>
      
      <div className="mt-2 text-xxs text-gray-400 border-t border-gray-200 pt-1 text-right">
        <span className="opacity-30 hover:opacity-100">the government doesn't want you to read these • 47 reasons why</span>
      </div>
      
      <div className="mt-1 text-xxs text-gray-300 italic text-center">
        * The Daily Noise is not responsible for what you now know
      </div>
    </div>
  );
};

export default ConspiracyCorner;