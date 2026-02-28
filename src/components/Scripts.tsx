import React, { useState } from 'react';

// Full conversation scenes - like mini scripts
const scenes = [
  {
    id: 'peter-ostrich',
    title: 'The Ostrich Express',
    envKey: 'VITE_FAMILYGUY_PETER_OSTRICH',
    lines: [
      { character: "PETER", text: "Hey Lois, remember that time I used an ostrich to get to work?" },
      { character: "LOIS", text: "Peter, that's ridiculous. Ostriches can't be ridden to work." },
      { character: "PETER", text: "No no, it was great. They had an express lane and everything." },
      { character: "LOIS", text: "An express lane for ostriches?" },
      { character: "PETER", text: "Yeah! Right through the savannah. Beat the traffic every time." },
      { character: "LOIS", text: "You've never been to a savannah." },
      { character: "PETER", text: "Hehehehe. The ostrich didn't seem to mind." }
    ]
  },
  {
    id: 'brian-blindlady',
    title: 'Brian and the Blind Lady',
    envKey: 'VITE_FAMILYGUY_BRIAN_BLIND',
    lines: [
      { character: "BRIAN", text: "So I'm at this bar, right? And this beautiful woman starts talking to me." },
      { character: "PETER", text: "Was it Lois? Don't talk to Lois at bars." },
      { character: "BRIAN", text: "No Peter, it wasn't Lois. She was amazing. Great conversation, really connected." },
      { character: "PETER", text: "So what happened?" },
      { character: "BRIAN", text: "Turns out she was blind. She thought I was a guy named Kevin." },
      { character: "PETER", text: "Hehehehe. Did you go with it?" },
      { character: "BRIAN", text: "For three months Peter. Three months I was Kevin. I learned to like different foods." }
    ]
  },
  {
    id: 'stewie-cookie',
    title: 'Cookie Dimension',
    envKey: 'VITE_FAMILYGUY_STEWIE_COOKIE',
    lines: [
      { character: "STEWIE", text: "Mother, I require a cookie for my trans-dimensional portal." },
      { character: "LOIS", text: "Stewie, it's breakfast time. Have some oatmeal." },
      { character: "STEWIE", text: "Oatmeal? Woman, I'm trying to access the cookie dimension. It requires a key." },
      { character: "LOIS", text: "The cookie dimension?" },
      { character: "STEWIE", text: "Yes. A realm where cookies rule and milk flows like wine. But the portal guard demands a tribute." },
      { character: "LOIS", text: "So you want a cookie to give to a portal guard?" },
      { character: "STEWIE", text: "Don't be absurd. I AM the portal guard. I want the cookie." }
    ]
  },
  {
    id: 'chris-treehouse',
    title: 'Treehouse Confidential',
    envKey: 'VITE_FAMILYGUY_CHRIS_TREEHOUSE',
    lines: [
      { character: "CHRIS", text: "Dad, can I borrow your power tools? I'm building a treehouse." },
      { character: "PETER", text: "A treehouse? Chris, that's adorable. What's next, a secret club?" },
      { character: "CHRIS", text: "Actually yeah. Me and the guys are starting a club. No girls allowed." },
      { character: "PETER", text: "Hehehehe. Just like the CIA, but with more snacks." },
      { character: "CHRIS", text: "We have a code word and everything. It's 'pineapple'." },
      { character: "PETER", text: "Chris, you can't just tell me the code word. That's not how secrets work." },
      { character: "CHRIS", text: "But you're my dad." },
      { character: "PETER", text: "Yeah, but what if I was a spy from the treehouse council?" }
    ]
  },
  {
    id: 'quagmire-giggity',
    title: "Quagmire's Invention",
    envKey: 'VITE_FAMILYGUY_QUAGMIRE',
    lines: [
      { character: "QUAGMIRE", text: "Alright, check this out. I invented a new word." },
      { character: "PETER", text: "You can't just invent words, Quagmire." },
      { character: "QUAGMIRE", text: "Giggity. Already did. This one's for when something's so good you can't describe it." },
      { character: "JOE", text: "So like 'amazing' or 'incredible'?" },
      { character: "QUAGMIRE", text: "No no, bigger. Like if you saw a talking dog riding a unicycle while juggling fish." },
      { character: "BRIAN", text: "I feel like we're getting specific." },
      { character: "QUAGMIRE", text: "That's a giggity moment, my friends. Giggity giggity goo." }
    ]
  },
  {
    id: 'joe-robin',
    title: "Joe's Robin",
    envKey: 'VITE_FAMILYGUY_JOE_ROBIN',
    lines: [
      { character: "JOE", text: "You guys, I found a baby robin in my yard. Think it fell from its nest." },
      { character: "PETER", text: "A robin? Like the Batman sidekick?" },
      { character: "JOE", text: "No Peter, an actual bird." },
      { character: "QUAGMIRE", text: "Is it wearing little tights? Giggity." },
      { character: "JOE", text: "I'm trying to nurse it back to health. Named him Gregory." },
      { character: "PETER", text: "Gregory the robin. He needs a partner. Maybe a sparrow named Bartholomew." },
      { character: "BRIAN", text: "Why are you like this?" },
      { character: "PETER", text: "Because Bartholomew Sparrow has a ring to it." }
    ]
  }
];

const FamilyGuyScripts: React.FC = () => {
  const [selectedScene, setSelectedScene] = useState(scenes[0].id);
  const [liked, setLiked] = useState<{[key: string]: boolean}>({});
  const [modalOpen, setModalOpen] = useState<string | null>(null);
  const [answer, setAnswer] = useState('');
  const [attempts, setAttempts] = useState<{[key: string]: number}>({});
  const [error, setError] = useState('');
  const [vibrate, setVibrate] = useState(false);
  const [hiddenScripts, setHiddenScripts] = useState<string[]>([]);

  const currentScene = scenes.find(s => s.id === selectedScene)!;

  const getAnswerFromEnv = (envKey: string): string => {
    return import.meta.env[envKey] || '';
  };

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (!liked[id] && !hiddenScripts.includes(id)) {
      setLiked(prev => ({ ...prev, [id]: true }));
      setModalOpen(id);
      setAnswer('');
      setError('');
    }
  };

  const handleSubmit = () => {
    if (!modalOpen) return;
    
    if (!answer.trim()) {
      setError('Enter something dude.');
      setVibrate(true);
      setTimeout(() => setVibrate(false), 500);
      return;
    }
    
    const currentAttempts = (attempts[modalOpen] || 0) + 1;
    
    // Find the scene to get its envKey
    const scene = scenes.find(s => s.id === modalOpen);
    if (!scene) return;
    
    const correctAnswer = getAnswerFromEnv(scene.envKey);
    
    if (answer.toLowerCase().trim() === correctAnswer) {
      // Correct - remove script
      setHiddenScripts(prev => [...prev, modalOpen]);
      setModalOpen(null);
      setAnswer('');
      setError('');
    } else {
      setAttempts(prev => ({ ...prev, [modalOpen]: currentAttempts }));
      
      if (currentAttempts >= 2) {
        setHiddenScripts(prev => [...prev, modalOpen]);
        setModalOpen(null);
        setAnswer('');
        setError('');
      } else {
        setError('Try again dude, you can be smarter than that.');
        setVibrate(true);
        setTimeout(() => setVibrate(false), 500);
      }
    }
  };

  return (
    <div className="border-2 border-black p-3 bg-white">
      {/* Header with dropdown */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
        <h2 className="section-title mb-0">CRAZY PETE</h2>
        <select
          value={selectedScene}
          onChange={(e) => setSelectedScene(e.target.value)}
          className="border border-black px-2 py-1 text-sm bg-white font-mono"
        >
          {scenes.map(scene => (
            <option key={scene.id} value={scene.id}>
              {scene.title}
            </option>
          ))}
        </select>
      </div>
      
      {/* Current scene - full conversation */}
      {!hiddenScripts.includes(currentScene.id) ? (
        <div className="border-2 border-black p-4 bg-white">
          {/* Scene header */}
          <div className="flex justify-between items-start mb-3 border-b border-black pb-2">
            <span className="text-xs font-mono">CUTAWAY SCENE • SEASON UNKNOWN</span>
            <button 
              onClick={(e) => handleLike(currentScene.id, e)}
              className={`text-2xl leading-none transition-colors duration-200 focus:outline-none ${
                liked[currentScene.id] ? 'text-red-600' : 'text-gray-300 hover:text-gray-500'
              }`}
              disabled={liked[currentScene.id]}
            >
              ♡
            </button>
          </div>
          
          {/* Conversation lines */}
          <div className="space-y-3 font-mono text-sm">
            {currentScene.lines.map((line, idx) => (
              <div key={idx} className="flex items-start">
                <span className="font-bold min-w-[80px]">{line.character}:</span>
                <span className="ml-2">{line.text}</span>
              </div>
            ))}
          </div>
          
          {/* Hidden clue - barely visible */}
          <div className="text-xxs text-gray-100 select-none mt-2 text-right">
            {currentScene.id === 'peter-ostrich' && 'express'}
            {currentScene.id === 'brian-blindlady' && 'kevin'}
            {currentScene.id === 'stewie-cookie' && 'portal'}
            {currentScene.id === 'chris-treehouse' && 'pineapple'}
            {currentScene.id === 'quagmire-giggity' && 'giggity'}
            {currentScene.id === 'joe-robin' && 'gregory'}
          </div>
        </div>
      ) : (
        <div className="border-2 border-black p-8 bg-gray-50 text-center text-gray-400 italic">
          [scene no longer available]
        </div>
      )}
      
      {/* Footer */}
      <div className="text-xxs text-gray-400 mt-3 border-t border-gray-300 pt-2">
        * Classic cutaway scenes from seasons 4-9. Like to share your thoughts.
      </div>
      
      {/* Modal */}
      {modalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setModalOpen(null)}
        >
          <div 
            className={`bg-white border-4 border-black shadow-xl max-w-md w-full p-5 transition-transform ${
              vibrate ? 'animate-shake' : ''
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-bold text-lg border-b border-black pb-2 mb-3 font-serif">
              LEAVE A COMMENT
            </h3>
            
            <p className="text-xs mb-4 text-gray-600">
              What did you think of this scene?
            </p>
            
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="your thoughts..."
              className="w-full border-2 border-black p-3 mb-3 text-sm font-mono h-24 resize-none"
              autoFocus
            />
            
            {error && (
              <p className="text-red-600 text-xs mb-3 italic">
                {error}
              </p>
            )}
            
            <div className="flex gap-2">
              <button
                onClick={handleSubmit}
                className="flex-1 bg-black text-white py-2 border border-black hover:bg-gray-800 text-sm"
              >
                POST COMMENT
              </button>
              <button
                onClick={() => setModalOpen(null)}
                className="flex-1 bg-white text-black py-2 border border-black hover:bg-gray-100 text-sm"
              >
                CANCEL
              </button>
            </div>
            
            <p className="text-xxs text-gray-400 mt-3 text-center">
              {attempts[modalOpen] ? `Attempts: ${attempts[modalOpen]}/2` : ' '}
            </p>
          </div>
        </div>
      )}
      
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-5px); }
          40% { transform: translateX(5px); }
          60% { transform: translateX(-3px); }
          80% { transform: translateX(3px); }
        }
        .animate-shake {
          animation: shake 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default FamilyGuyScripts;