import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Show data (same as before)
const showsCatalog = [
  {
    id: 'top-gear',
    title: 'TOP GEAR',
    year: '1977-PRESENT',
    rating: '★★★★★',
    genre: 'AUTOMOTIVE / CHAOS',
    description: 'Three middle-aged men drive fast cars, insult each other, and occasionally crash. The greatest show ever made about cars. Actually, the greatest show ever made. Period.',
    content: {
      news: [
        { title: "The Stig's identity finally leaked? No, it wasn't.", date: "2 days ago", summary: "Some say he once told a joke that made a nun pee. We just know him as The Stig." },
        { title: "Hammond crashes another car. Water is wet.", date: "5 days ago", summary: "In related news, the hamster is fine. The car is not. Again." },
        { title: "James May complains about something trivial.", date: "1 week ago", summary: "Captain Slow says 'Oh cock' after discovering his tea is 0.5 degrees too cold." }
      ],
      blogs: [
        { title: "Why the Dacia Sandero is Actually Good (No, Really)", author: "Captain Slow", excerpt: "Good news! The Dacia Sandero has been released. And it's terrible. But also brilliant. Here's why." },
        { title: "The Cool Wall: A Retrospective", author: "Jeremy Clarkson", excerpt: "A Ferrari F40 is Sub-Zero. Your car is Seriously Uncool. Deal with it." },
        { title: "Hammond's Guide to Flipping Cars", author: "The Hamster", excerpt: "Step 1: Drive fast. Step 2: Turn slightly. Step 3: Accept your fate." }
      ],
      reviews: [
        { user: "ClarksonFan47", rating: "★★★★★", text: "POWERRRR! Best show ever. The Stig is my spirit animal." },
        { user: "MayIsGod", rating: "★★★★★", text: "James May's hair alone is worth watching." },
        { user: "HamsterLover", rating: "★★★★☆", text: "Hammond crashes too much. Wait, is that a complaint?" }
      ],
      jokes: [
        "HAMMOND! YOU IDIOT!",
        "How hard can it be?",
        "Some say...",
        "On that terrible disappointment, it's time to end.",
        "I went on the internet and I found this.",
        "Good news! The Dacia Sandero is delayed.",
        "Oh cock.",
        "Tonight... I drive a car that costs more than your house. James wears a slightly different shirt. And Richard Hammond crashes into a caravan."
      ]
    }
  },
  {
    id: 'family-guy',
    title: 'FAMILY GUY',
    year: '1999-PRESENT',
    rating: '★★★★☆',
    genre: 'ANIMATED / CUTAWAYS',
    description: "A fat man, his red-headed wife, a talking dog, an evil baby, and a horny weirdo. It's like watching your family. If your family was completely insane.",
    content: {
      news: [
        { title: "Peter fights chicken again. Town in ruins.", date: "3 days ago", summary: "Another epic battle leaves local grocery store demolished. Chicken's whereabouts unknown." },
        { title: "Stewie builds machine to rule world. Again.", date: "1 week ago", summary: "Victory was almost his. Then Lois unplugged it." },
        { title: "Brian writes another failed novel.", date: "2 weeks ago", summary: "This one is about a dog who is also a writer. Very meta. Very ignored." }
      ],
      blogs: [
        { title: "Why Cutaways Are the Best Part", author: "Peter Griffin", excerpt: "Hehehehe. Remember that time I was a pirate? Or a cowboy? Or a spy? Comedy gold." },
        { title: "Stewie's Guide to World Domination", author: "Stewie Griffin", excerpt: "Step 1: Cookie. Step 2: Portal. Step 3: Victory is mine." },
        { title: "Quagmire's Dating Advice", author: "Glenn Quagmire", excerpt: "Giggity giggity goo. Also, please don't follow my advice." }
      ],
      reviews: [
        { user: "StewieFan", rating: "★★★★★", text: "Victory is mine! Best baby ever. The toaster episode is genius." },
        { user: "BrianHater", rating: "★★★☆☆", text: "The dog is pretentious. But Peter makes up for it." },
        { user: "Quagmire69", rating: "★★★★☆", text: "Giggity. Need more Quagmire episodes. All right!" }
      ],
      jokes: [
        "Hehehehehe.",
        "Victory is mine!",
        "Giggity giggity goo.",
        "No no no no no.",
        "You're cut off, fatass!",
        "Freakin' sweet!",
        "Who else but Quagmire?",
        "You have the right to remain silent. I suggest you use it."
      ]
    }
  },
  {
    id: 'south-park',
    title: 'SOUTH PARK',
    year: '1997-PRESENT',
    rating: '★★★★★',
    genre: 'SATIRE / CARTOON CHAOS',
    description: "Four boys in a Colorado mountain town destroy everything they touch. Twenty-five seasons later, nothing has changed. Including the animation.",
    content: {
      news: [
        { title: "Cartman grounded again. Plans revenge.", date: "4 days ago", summary: "Kyle's mom is a bitch. This is known." },
        { title: "Kenny dies. Again. Nobody surprised.", date: "1 week ago", summary: "Oh my god, they killed Kenny! You bastards!" },
        { title: "Member berries return? Member Chewbacca?", date: "2 weeks ago", summary: "I member. Member? I member." }
      ],
      blogs: [
        { title: "The Underpants Gnomes Business Plan", author: "Gnome CEO", excerpt: "Phase 1: Collect underpants. Phase 2: ?. Phase 3: Profit. It's foolproof." },
        { title: "Tegridy Farms: A Retrospective", author: "Randy Marsh", excerpt: "I thought this was America! Tegridy. Tegridy. Tegridy." },
        { title: "How to Annoy Cartman in 47 Ways", author: "Kyle Broflovski", excerpt: "Screw you guys, I'm going home. Wait, no, stay. Here's how." }
      ],
      reviews: [
        { user: "CartmanStan", rating: "★★★★★", text: "Respect my authoritah! Best show ever." },
        { user: "KyleFan", rating: "★★★★★", text: "What would Brian Boitano do? He'd watch this show." },
        { user: "ButtersLover", rating: "★★★★☆", text: "Oh hamburgers, this show is good." }
      ],
      jokes: [
        "Screw you guys, I'm going home.",
        "wat ferr!",
        "Respect my authoritah!",
        "Oh my god, they killed Kenny!",
        "You bastards!",
        "I member!",
        "Tegridy.",
        "Shut up, fatass!",
        "Lazy and should be killed!"
      ]
    }
  },
  {
    id: 'rick-morty',
    title: 'RICK & MORTY',
    year: '2013-PRESENT',
    rating: '★★★★★',
    genre: 'SCI-FI / NIHILISTIC',
    description: "A drunk genius drags his nervous grandson through interdimensional chaos. Also, there's a talking pickle. Because reasons.",
    content: {
      news: [
        { title: "Rick invents new portal gun. Loses it.", date: "3 days ago", summary: "Standard Tuesday for the smartest man in the multiverse." },
        { title: "Morty demands respect. Gets ignored.", date: "1 week ago", summary: "Aw jeez. This happens every time." },
        { title: "Pickle Rick returns? Please no.", date: "2 weeks ago", summary: "I'm PICKLE RIIIIICK! The world is not ready." }
      ],
      blogs: [
        { title: "The Szechuan Sauce Manifesto", author: "Rick Sanchez", excerpt: "9 seasons. 97 years. I WANT SZECHUAN SAUCE, MORTY!" },
        { title: "Why Jerry is The Worst (Or Best?)", author: "Beth Smith", excerpt: "He's simple. He's terrible. He's my husband. I've made terrible choices." },
        { title: "How to Build a Microverse Battery", author: "Rick Sanchez", excerpt: "Step 1: Don't. It's unethical. Step 2: Do it anyway because SCIENCE!" }
      ],
      reviews: [
        { user: "PickleRickFan", rating: "★★★★★", text: "I'm PICKLE RIIIIICK! Funniest episode ever." },
        { user: "JerryHater", rating: "★★★★★", text: "Jerry is the worst. Perfect writing." },
        { user: "MortyStan", rating: "★★★★☆", text: "Aw jeez, this review is making me nervous." }
      ],
      jokes: [
        "Wubba lubba dub dub!",
        "I'm Pickle Riiiiick!",
        "You son of a bitch, I'm in.",
        "Get Schwifty.",
        "Existence is pain, Jerry.",
        "I have no daughter! I have a science experiment!",
        "Aw jeez.",
        "Szechuan sauce, Morty! NINE SEASONS!"
      ]
    }
  },
  {
    id: 'spongebob',
    title: 'SPONGEBOB SQUAREPANTS',
    year: '1999-PRESENT',
    rating: '★★★★★',
    genre: 'GOOFY / UNDERWATER',
    description: "A sponge who lives in a pineapple under the sea. He works at a burger joint and annoys his squid neighbor. It's for kids. But you're watching it too.",
    content: {
      news: [
        { title: "Krusty Krab robbed. Again. Formula safe.", date: "5 days ago", summary: "Plankton's latest scheme foiled by a spatula and optimism." },
        { title: "Squidward attempts art. Fails miserably.", date: "1 week ago", summary: "His clarinet playing is still considered a weapon in three cities." },
        { title: "Patrick's rock wins award for 'Best Rock'", date: "2 weeks ago", summary: "Is mayonnaise an instrument? No, Patrick. No it is not." }
      ],
      blogs: [
        { title: "Why Sandy is the Only Sane Resident", author: "Sandy Cheeks", excerpt: "I tell you hwat, these sea creatures are bonkers." },
        { title: "The Secret Formula: A Theory", author: "Karen Plankton", excerpt: "I've analyzed 47,000 iterations. It's probably love. Or mayonnaise." },
        { title: "How to Annoy Squidward in 47 Steps", author: "SpongeBob SquarePants", excerpt: "Step 1: Be happy. Step 2: Be louder. Step 3: Smile more. He hates that." }
      ],
      reviews: [
        { user: "KrabbyPatty", rating: "★★★★★", text: "The secret formula must be protected at all costs." },
        { user: "SquidwardFan", rating: "★★★☆☆", text: "Annoying sponge ruins my peace. But the art episode was good." },
        { user: "PatrickStarfish", rating: "★★★★★", text: "Is mayonnaise an instrument? Wait, what was the question?" }
      ],
      jokes: [
        "Is mayonnaise an instrument?",
        "I'm ready, I'm ready, I'm ready!",
        "My leg!",
        "The inner machinations of my mind are an enigma.",
        "Firmly grasp it!",
        "Finland!",
        "We serve food here, sir.",
        "At night."
      ]
    }
  },
  {
    id: 'simpsons',
    title: 'THE SIMPSONS',
    year: '1989-PRESENT',
    rating: '★★★★★',
    genre: 'ANIMATED / FAMILY',
    description: "Yellow family. Donuts. Homer says 'D'oh!' It's been on for 35 years. You know what it is. You've seen it. You've quoted it. Don't pretend otherwise.",
    content: {
      news: [
        { title: "Homer eats 47 donuts. Doctors concerned.", date: "2 days ago", summary: "His liver is crying. His heart is crying. He wants more donuts." },
        { title: "Bart's prank fails. Consequences happen.", date: "5 days ago", summary: "Eat my shorts! Wait, no. The shorts are fine. Bart is not." },
        { title: "Ned Flanders says 'Okilly dokilly.'", date: "1 week ago", summary: "His mustache is still hideous. But his heart is pure. Diddly." }
      ],
      blogs: [
        { title: "Why Marge Deserves Better", author: "Marge Simpson", excerpt: "I love my family. I do. But sometimes... Mmm, Homer." },
        { title: "The Simpsons Predicted Everything", author: "Professor Frink", excerpt: "Glayvin! They predicted the future 47 times. Glayvin!" },
        { title: "How to Survive Springfield", author: "Moe Szyslak", excerpt: "Step 1: Don't visit. Step 2: If you visit, don't drink the beer. Step 3: Why are you here?" }
      ],
      reviews: [
        { user: "HomerFan", rating: "★★★★★", text: "D'oh! Best cartoon ever. The donut episode changed my life." },
        { user: "BurnsFan", rating: "★★★★☆", text: "Excellent. Smithers, release the reviews." },
        { user: "FlandersFan", rating: "★★★★★", text: "Okilly dokilly. It's a darn good show!" }
      ],
      jokes: [
        "D'oh!",
        "Eat my shorts!",
        "Excellent. Smithers, release the hounds.",
        "Okilly dokilly!",
        "Ha ha!",
        "I'm so smart. S-M-R-T.",
        "Don't have a cow, man.",
        "Woohoo!"
      ]
    }
  }
];

const ShowsReviews: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedShowId, setSelectedShowId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'news' | 'blogs' | 'reviews' | 'jokes'>('news');
  const [filterCategory, setFilterCategory] = useState('ALL');

  const filteredShows = showsCatalog.filter(show => {
    const matchesSearch = show.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'ALL' || show.genre.includes(filterCategory);
    return matchesSearch && matchesCategory;
  });

  const categories = ['ALL', 'AUTOMOTIVE', 'ANIMATED', 'SATIRE', 'SCI-FI', 'GOOFY'];
  const selectedShow = showsCatalog.find(s => s.id === selectedShowId);

  return (
    <div className="min-h-screen bg-white p-3 sm:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header - same as newspaper */}
        <div className="border-b-4 border-black pb-4 mb-6">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl sm:text-5xl font-bold font-serif tracking-tight">
              SHOWS & MEDIA
            </h1>
            <button 
              onClick={() => navigate('/')}
              className="border-2 border-black px-3 py-1 text-xs hover:bg-gray-100 font-mono"
            >
              HOME
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2 italic">
            * 47 channels. Nothing but static. Plus these shows.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <input
            type="text"
            placeholder="Search shows..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 border-2 border-black p-2 text-sm font-mono"
          />
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="border-2 border-black p-2 text-sm bg-white font-mono"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* HTML Links - list of show titles as inline links */}
        <div className="border-y-2 border-black py-3 mb-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-mono">
          {filteredShows.map((show) => (
            <button
              key={show.id}
              onClick={() => {
                setSelectedShowId(show.id);
                setActiveTab('news');
              }}
              className={`hover:underline cursor-pointer ${
                selectedShowId === show.id ? 'bg-black text-white px-2 py-0.5' : ''
              }`}
            >
              {show.title}
            </button>
          ))}
          {filteredShows.length === 0 && (
            <span className="text-gray-400 italic">Confirm if you know how to spell cause nothing exists with those words!</span>
          )}
        </div>

        {/* TOGGLED CONTENT - shown only when a show is selected */}
        {selectedShow && (
          <div className="border-2 border-black bg-white">
            {/* Show header */}
            <div className="border-b-2 border-black p-4 bg-gray-50">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <div>
                  <h2 className="font-bold text-xl font-serif">{selectedShow.title}</h2>
                  <p className="text-xxs text-gray-500 font-mono">{selectedShow.year} • {selectedShow.genre}</p>
                </div>
                <div className="flex gap-2">
                  <span className="text-xs bg-black text-white px-2 py-0.5">{selectedShow.rating}</span>
                </div>
              </div>
              <p className="text-xs italic mt-2 border-l-4 border-black pl-2">{selectedShow.description}</p>
            </div>

            {/* Tabs */}
            <div className="border-b border-black flex flex-wrap">
              {(['news', 'blogs', 'reviews', 'jokes'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-xs font-bold uppercase ${activeTab === tab ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab content pane */}
            <div className="p-5 max-h-[60vh] overflow-y-auto">
              {activeTab === 'news' && (
                <div className="space-y-4">
                  {selectedShow.content.news.map((item, idx) => (
                    <div key={idx} className="border-b border-gray-200 pb-3 last:border-b-0">
                      <div className="flex justify-between items-start flex-wrap gap-2">
                        <h3 className="font-bold text-sm">{item.title}</h3>
                        <span className="text-xxs text-gray-400 whitespace-nowrap">{item.date}</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">{item.summary}</p>
                      <div className="text-xxs text-gray-300 text-right mt-1">#{idx + 47}</div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'blogs' && (
                <div className="space-y-4">
                  {selectedShow.content.blogs.map((item, idx) => (
                    <div key={idx} className="border-l-2 border-black pl-3 pb-2 mb-3 last:mb-0">
                      <h3 className="font-bold text-sm">{item.title}</h3>
                      <p className="text-xxs text-gray-500 font-mono">by {item.author}</p>
                      <p className="text-xs text-gray-700 mt-1 italic">{item.excerpt}</p>
                      <div className="text-xxs text-gray-300 text-right mt-2">READ MORE →</div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-4">
                  {selectedShow.content.reviews.map((item, idx) => (
                    <div key={idx} className="border border-gray-200 p-3 bg-gray-50">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-xs">{item.user}</span>
                        <span className="text-xxs font-mono">{item.rating}</span>
                      </div>
                      <p className="text-xs italic mt-1">"{item.text}"</p>
                      <div className="text-xxs text-gray-400 text-right mt-2">↓ comment</div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'jokes' && (
                <div className="bg-gray-900 text-white p-4">
                  <p className="text-xxs text-gray-400 mb-2 italic">* classic lines. you're welcome.</p>
                  <ul className="space-y-2">
                    {selectedShow.content.jokes.map((joke, idx) => (
                      <li key={idx} className="border-b border-gray-700 pb-1">
                        <p className="text-sm font-mono">"{joke}"</p>
                        <div className="text-xxs text-gray-500 text-right">#{idx + 47}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Footer numbers */}
            <div className="border-t-2 border-black p-3 text-xxs text-gray-400 flex justify-between">
              <span>PAGE #{showsCatalog.indexOf(selectedShow) + 47}</span>
              <span className="opacity-30 hover:opacity-100">VOL. 47 • NO. {showsCatalog.indexOf(selectedShow) + 1}</span>
            </div>
          </div>
        )}

        {/* No show selected message */}
        {!selectedShow && filteredShows.length > 0 && (
          <div className="border-2 border-dashed border-gray-300 p-8 text-center text-gray-500 italic">
            * click on a title to see something, are you blind or something!.
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowsReviews;