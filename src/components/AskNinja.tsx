import React, { useState } from 'react';

const questions = [
  {
    question: "i saw a guy in black pajamas at the grocery store is he a ninja???",
    answer: "The ninja says: First of all, they're not PAJAMAS they're TACTICAL GARMENTS. Second, mind your own business or next time you'll find a shuriken in your avocado. Also check dairy section for milk that expired 47 days ago. It's a sign.",
    expert: "Master of Hissy Fits"
  },
  {
    question: "can ninjas fly? asking for a friend who jumped off a garage",
    answer: "The ninja says: We can't fly. Your friend is an idiot. Now he's in the hospital with 47 broken bones and a story he'll tell forever. Hope it was worth it, Chad. The answer was NO.",
    expert: "Grumpy Shadow"
  },
  {
    question: "wat wepon shoud i uze for home defense? a sword or nunchuks?",
    answer: "The ninja says: Use a PHONE to call 911 like a normal person. We're ninjas not miracle workers. And spellcheck before you embarrass yourself again. NUNCHUKS. NUNCHUKS. NUNCHUKS. I'm angry now.",
    expert: "Annoyed Blade"
  },
  {
    question: "my cat keeps staring at the wall. should i be worried or is it just a cat?",
    answer: "The ninja says: It's NEVER just a cat. That wall has secrets. Put your ear to it at 4:47am. You'll hear whispers. Or termites. Either way, record it and send to the usual address. Also your cat is definitely an informant.",
    expert: "Whisper in Shadows"
  },
  {
    question: "if a tree falls in a forest and no one is around does it make a sound?",
    answer: "The ninja says: I don't know I wasn't there. Stop asking philosophical questions. Ask me about throwing stars or how to disappear. The answer is YES it makes a sound and also 47 squirrels now know you're thinking about trees.",
    expert: "Impatient Wind"
  },
  {
    question: "how do i become a ninja? do i need to go to ninja school?",
    answer: "The ninja says: NINJA SCHOOL? What is this, Hogwarts? You don't apply. You're chosen. And you haven't been chosen. Check your spam folder maybe. Also stop asking. The answer will find you when you least expect it (probably never).",
    expert: "Gatekeeper of Annoyance"
  },
  {
    question: "is it ok to wear black socks with sandals? asking for a mission",
    answer: "The ninja says: ABSOLUTELY NOT. This is not a mission it's a crime against fashion. Real ninjas wear tabi boots. Black socks with sandals is how they identify tourists. You've been compromised. Abort fashion. ABORT.",
    expert: "Style Assassin"
  },
  {
    question: "my neighbur is acting suspishus. he waters plants at weird times. thoughts?",
    answer: "The ninja says: SUSPISHUS? Is that a word? It's not a word. And yes your neighbor is obviously a spy. The plants are receivers. Count the water droplets. 47 drops = message. Start taking notes. Or mind your business. Either way stop bothering me.",
    expert: "Cryptic Grump"
  },
  {
    question: "found a usb stick in the parking lot. wat do?",
    answer: "The ninja says: DO NOT PLUG IT IN. Are you insane? That's how they get you. The files are probably labeled 'free stuff' or 'payroll' or 'definitely not a virus.exe'. Burn it. Then burn the computer. Then move to a new country. Too much? Probably not.",
    expert: "Paranoid Shuriken"
  },
  {
    question: "can ninjas beat pirates in a fight? my friend says pirates are cooler",
    answer: "The ninja says: Your friend is wrong and also probably has a neck beard. Pirates smell like seaweed and have poor dental hygiene. Ninjas are silent, deadly, and smell like honor. 47 ninjas could defeat 47 pirates in 47 seconds. Tell your friend I said he's uncultured.",
    expert: "The Historian of Wrong"
  },
  {
    question: "how many licks to get to the center of a tootsie pop?",
    answer: "The ninja says: 47. The answer is always 47. Also the tootsie pop is a metaphor for the human soul and the center is enlightenment. Or diabetes. One of those. Now leave me alone I'm meditating (watching Netflix).",
    expert: "Deep Thinker"
  }
];

const AskNinja: React.FC = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  return (
    <div className="border-2 border-black p-3 bg-gray-100">
      <h2 className="section-title flex justify-between items-center">
        <span>ASK A NINJA</span>
        <span className="text-xxs bg-black text-white px-1">ANSWERS NOT GUARANTEED</span>
      </h2>
      
      <p className="text-xxs text-gray-500 italic mb-3">
        * Ninjas are busy. They might be upset. Questions may be met with hostility.
      </p>
      
      <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
        {questions.map((q, idx) => (
          <div 
            key={idx} 
            className="border border-gray-300 p-2 cursor-pointer hover:border-black transition-colors bg-white"
            onClick={() => setSelectedQuestion(selectedQuestion === idx ? null : idx)}
          >
            <div className="flex justify-between items-start">
              <p className="text-xs font-mono">
                <span className="text-gray-400 mr-1">Q{idx + 47}:</span> 
                {q.question}
              </p>
              <span className="text-xxs text-gray-400 ml-2">
                {selectedQuestion === idx ? '▲' : '▼'}
              </span>
            </div>
            
            {selectedQuestion === idx && (
              <div className="mt-2 pt-2 border-t border-gray-200 text-xs">
                <p className="italic text-gray-700 bg-gray-50 p-2">
                  "{q.answer}"
                </p>
                <div className="flex justify-between items-center mt-1 text-xxs">
                  <span className="text-gray-400">— {q.expert}</span>
                  <span className="text-gray-300 opacity-50 hover:opacity-100 transition-opacity">
                    ninja#{47 + idx}
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Hidden clues */}
      <div className="mt-3 border-t border-gray-300 pt-2 text-xxs text-gray-300 flex justify-between">
        <span className="opacity-30 hover:opacity-100">47 ways to disappear</span>
        <span className="opacity-30 hover:opacity-100">shuriken etiquette</span>
        <span className="opacity-30 hover:opacity-100">black pajamas club</span>
      </div>
      
      {/* Footer */}
      <div className="mt-2 text-xxs text-gray-400 text-right">
        <span>Send questions to: ninja@dailynoise.local • Responses may include sarcasm</span>
      </div>
    </div>
  );
};

export default AskNinja;