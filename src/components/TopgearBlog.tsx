import React, { useState } from 'react';

// --- Blog Post Data - Pure Top Gear Humor ---
const blogPosts = [
  {
    id: "dacia-sandero",
    title: "GOOD NEWS! The Dacia Sandero is... Actually Quite Good?",
    excerpt: "James May's favorite budget car finally gets the respect it deserves. Well, sort of.",
    fullContent: `"Good news!" says James May. "The new Dacia Sandero has been released!" And you know what? After years of mocking it, we actually drove one. It's terrible. The seats are made of disappointment and the engine sounds like a lawnmower having an existential crisis. But it's only 7 grand. SEVEN GRAND. You can't even buy a decent bicycle for that. So yes, good news indeed.`,
    author: "Captain Slow",
    date: "2 days ago",
    category: "Budget Heroes",
    codeword: "sandero"
  },
  {
    id: "hamster-crash",
    title: "Hammond, You Blithering Idiot: A Tribute to Rollovers",
    excerpt: "From jet cars to reliant robins, Richard Hammond's special relationship with gravity.",
    fullContent: `"HAMMOND! YOU IDIOT!" - Jeremy Clarkson, 2002-2015 (and probably still). Let's be honest, if Hammond didn't crash something, was it even a good episode? The man flipped a jet car at 300mph and walked away. Then he flipped a Reliant Robin just by thinking about turning a corner. Some say his center of gravity is actually located somewhere in the next county. James May once said Hammond could crash a car that was parked. He's not wrong.`,
    author: "Jeremy's Diary",
    date: "5 days ago",
    category: "Crashes",
    codeword: "hamster"
  },
  {
    id: "ambition-vs-reality",
    title: "Ambition vs Reality: The Amphibious Car Chronicles",
    excerpt: "We built a car that floats. Sort of. For about 47 seconds.",
    fullContent: `"How hard can it be?" Famous last words. We decided to build a car that could cross the English Channel. I used an old Toyota pickup. Hammond used a sailboat with wheels. James May built something that looked like a garden shed with a propeller. Hammond's sank immediately. Mine made it 47 feet before the engine gave up. James's actually worked for a bit, then he got seasick and started philosophizing about carburetors. The coast guard was not amused.`,
    author: "Clarkson's Ghost",
    date: "1 week ago",
    category: "Classic Chaos",
    codeword: "channel"
  },
  {
    id: "cool-wall-returns",
    title: "The Cool Wall: Where Dreams Go to Die",
    excerpt: "A Ferrari F40? Sub-Zero. The car you actually drive? Seriously Uncool. Here's why.",
    fullContent: `The rules were simple. And also completely made up. A car could be Sub-Zero one week and Uncool the next because the presenter who liked it wasn't there to defend it. A Ford Mustang? Cool if it's loud. Uncool if it's from after 1973. A Prius? Uncool even if you're saving the planet. A Reliant Robin? Uncool? No. That thing achieved comedy perfection. It belongs in its own category: "James May's Nightmare."`,
    author: "The Stig's Cousin",
    date: "2 weeks ago",
    category: "Car Culture",
    codeword: "coolwall"
  },
  {
    id: "ricer-racer",
    title: "The Time We Made a Car Out of Vegetables",
    excerpt: "Yes, a carrot-powered racer. No, it didn't work. Yes, it exploded.",
    fullContent: `In a desperate attempt to prove that 'green' cars were rubbish, we built a car powered entirely by vegetables. Hammond called it the "Carrot and Stick" - because he's an idiot. James May calculated the exact fuel-to-vegetable ratio using a napkin and a slide rule. I just wanted to see it explode. And explode it did. Right in the studio. The smell of burnt cabbage lingered for 47 weeks. Top Gear. Saving the environment? Absolutely not.`,
    author: "Organic Jeremy",
    date: "3 weeks ago",
    category: "Silly Ideas",
    codeword: "carrot"
  },
  {
    id: "stig-secret",
    title: "Some Say He Once Told a Joke That Made a Nun Pee...",
    excerpt: "The Stig's identity remains unknown. But here's what we *do* know...",
    fullContent: `"Some say he was born in a test tube, and that his left foot is actually a retired F1 driver. All we know is, he's called The Stig." We've tried everything to catch him. Microphones in his helmet. GPS trackers in his suit. Nothing works. He's faster than physics should allow. He never speaks. Never eats. Never blinks. One time we left a single pea on his seat. He drove around it. The man is NOT NORMAL.`,
    author: "The White Suit",
    date: "1 month ago",
    category: "Stig Files",
    codeword: "stig"
  },
  {
    id: "james-tools",
    title: "James May and His Unnecessarily Perfect Tool Collection",
    excerpt: "A deep dive into Captain Slow's obsession with organization and cheese.",
    fullContent: `James May has a hammer. But not just any hammer. It's a 1963 Swedish precision hammer that he's never actually used. He keeps it in a felt-lined box. Next to his 47 other hammers. I once borrowed one of his screwdrivers. He asked for it back after 3 minutes. "It's out of alignment now," he said. IT WAS A SCREWDRIVER. Meanwhile, Hammond keeps his tools in a cardboard box. He once fixed a car with a spoon and determination.`,
    author: "The Tool Police",
    date: "1 month ago",
    category: "James Being James",
    codeword: "cheese"
  },
  {
    id: "oliver-story",
    title: "Hammond and Oliver: A Love Story in Botswana",
    excerpt: "The car Hammond fell in love with. Yes, a car. A 1963 Opel Kadett.",
    fullContent: `"You cannot love a car," they said. Richard Hammond disagreed. In the middle of Botswana, surrounded by elephants and despair, Hammond found Oliver. An Opel Kadett that had no right to still be running. It leaked oil. It leaked water. It leaked hope. Hammond babied that car across the desert like it was his firstborn child. When Oliver broke down, Hammond actually GOT OUT and PUSHED. I've never seen him so loyal to anything that wasn't a Labrador.`,
    author: "The Hamster's Heart",
    date: "2 months ago",
    category: "The Adventures",
    codeword: "opel"
  }
];

// --- Component ---
const TopGearBlog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);
  const [secretInput, setSecretInput] = useState("");
  const [secretMessage, setSecretMessage] = useState<string | null>(null);
  const [showSecretBox, setShowSecretBox] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Handle the hidden activation code (still there for network, but jokes are clean)
  const handleCodeSubmit = () => {
    if (!selectedPost) return;
    if (!secretInput.trim()) {
      setErrorMsg("Enter something, you plum.");
      return;
    }

    if (secretInput.trim().toLowerCase() === selectedPost.codeword) {
      setSecretMessage(`OPERATION: ${selectedPost.id.toUpperCase()}. The package is behind the glovebox of the white Ford Sierra. Code phrase: "Hammond is upside down again."`);
      setErrorMsg("");
      setShowSecretBox(false);
    } else {
      setErrorMsg("Wrong. Nice try, Stig's cousin.");
      setSecretMessage(null);
    }
  };

  return (
    <div className="border-2 border-black bg-white w-full overflow-hidden">
      {/* Header */}
      <div className="border-b-2 border-black bg-gray-900 text-white p-3">
        <h2 className="text-xl font-bold font-mono tracking-tight">THE OLD LADY'S RACING BLOG</h2>
        <p className="text-xxs text-gray-400 mt-1">* Opinions are our own. And also Jeremy's. Mostly Jeremy's.</p>
      </div>

      {/* Blog Grid */}
      <div className="p-3 space-y-4 max-h-[600px] overflow-y-auto">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            onClick={() => {
              setSelectedPost(post);
              setSecretMessage(null);
              setSecretInput("");
              setErrorMsg("");
              setShowSecretBox(false);
            }}
            className="border border-black p-3 cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xxs font-mono text-gray-500 bg-gray-100 px-1">
                  {post.category}
                </span>
                <h3 className="font-bold text-md font-serif mt-1">{post.title}</h3>
              </div>
              <span className="text-xxs text-gray-400 whitespace-nowrap ml-2">{post.date}</span>
            </div>
            <p className="text-xs text-gray-600 mt-1 line-clamp-2">{post.excerpt}</p>
            <div className="text-xxs text-gray-400 text-right mt-1">by {post.author} →</div>
          </div>
        ))}
      </div>

      <div className="border-t border-black p-2 text-xxs text-center text-gray-400 bg-gray-50">
        * May contain traces of nuts, oil, and editorials.
      </div>

      {/* READER MODAL (Article View) */}
      {selectedPost && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="bg-white border-4 border-black shadow-xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b-2 border-black p-4">
              <div className="flex justify-between items-center">
                <h2 className="font-bold text-xl font-serif pr-4">{selectedPost.title}</h2>
                <button onClick={() => setSelectedPost(null)} className="text-2xl hover:text-gray-600">×</button>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-xxs font-mono">by {selectedPost.author}</span>
                <span className="text-xxs text-gray-500">{selectedPost.date} • {selectedPost.category}</span>
              </div>
            </div>

            {/* Article Content */}
            <div className="p-5">
              <p className="text-sm leading-relaxed font-serif whitespace-pre-line">
                {selectedPost.fullContent}
              </p>

              {/* Classic Top Gear Sign-off */}
              <div className="mt-4 p-2 bg-gray-100 border-l-4 border-red-600 text-xxs italic">
                "And on that terrible disappointment... it's time to end."
              </div>

              {/* AGENT TOOLS (Hidden in plain sight - still needed for network but jokes are clean) */}
              <div className="mt-6 border-t border-gray-300 pt-3">
                {!secretMessage ? (
                  <div className="text-right">
                    <button
                      onClick={() => setShowSecretBox(!showSecretBox)}
                      className="text-xxs text-gray-400 underline hover:text-black"
                    >
                      [ I Went On The Internet And Found This... ]
                    </button>

                    {showSecretBox && (
                      <div className="mt-2 flex gap-2">
                        <input
                          type="text"
                          value={secretInput}
                          onChange={(e) => setSecretInput(e.target.value)}
                          placeholder="Enter the code phrase..."
                          className="flex-1 border border-black p-1 text-xxs font-mono"
                          autoFocus
                        />
                        <button
                          onClick={handleCodeSubmit}
                          className="bg-black text-white px-2 py-1 text-xxs"
                        >
                          Decode
                        </button>
                      </div>
                    )}
                    {errorMsg && <p className="text-red-600 text-xxs mt-1">{errorMsg}</p>}
                  </div>
                ) : (
                  <div className="mt-2 p-3 bg-black text-green-400 font-mono text-sm border border-green-600">
                    <p className="font-bold"> DECODED:</p>
                    <p className="mt-1">{secretMessage}</p>
                    <p className="text-xxs text-gray-500 mt-2 text-right">*** OVER AND OUT ***</p>
                  </div>
                )}
              </div>

              {/* Hidden Metadata */}
              <div className="text-xxs text-gray-200 select-none text-right mt-3">
                #{blogPosts.indexOf(selectedPost) + 47} • TG-XYZ-{selectedPost.id}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopGearBlog;