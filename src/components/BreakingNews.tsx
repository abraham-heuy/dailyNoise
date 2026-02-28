import React, { useState, useEffect } from 'react';

// Full news stories with expanded content
const newsStories = [
  {
    id: 'car-tree',
    headline: "LOCAL MAN FINDS CAR IN TREE, CLAIMS 'IT'S BEEN PARKING THERE FOR YEARS'",
    summary: "Authorities baffled as Jerry Mathers, 67, insists his 1998 Honda Civic has always been 20 feet up an oak tree.",
    time: "2 MIN AGO",
    codewordEnvKey: 'VITE_CODEWORDS_CAR_TREE',
    messagesEnvKey: 'VITE_MESSAGES_CAR_TREE',
    fullStory: {
      location: "Maple Avenue, near the old pickle factory",
      details: [
        "Fire department spent three hours trying to figure out how to get the car down.",
        "Mathers claims he 'just parked it there like always' and was confused by the commotion.",
        "Tree owner Mildred Henderson says the car has 'definitely not been there forever, I would have noticed.'",
        "When asked how the car got up there, Mathers suggested 'maybe it grew? Trees do that.'",
        "The car's license plate reads 'OSTRICH1'."
      ],
      witnesses: [
        "Neighbor: 'I thought it was a really boxy bird nest.'",
        "Mailman: 'I delivered mail to it once. Nice car, very leafy.'",
        "Squirrel: 'Finally, a neighbor who understands me.' (translated)"
      ],
      update: "Car has since been removed. Mathers is looking for a new parking spot 'somewhere elevated.'"
    }
  },
  {
    id: 'chinese-suit',
    headline: "MAN ARRESTED FOR SPEEDING AFTER PICKING UP SUIT AT CHINESE RESTAURANT",
    summary: "Police say the suspect, identified only as 'Dennis,' was observed leaving the Golden Dragon with a garment bag before fleeing the scene at 47 mph in a 25 zone.",
    time: "47 MIN AGO",
    codewordEnvKey: 'VITE_CODEWORDS_CHINESE_SUIT',
    messagesEnvKey: 'VITE_MESSAGES_CHINESE_SUIT',
    fullStory: {
      location: "Golden Dragon Restaurant, intersection of Main and 4th",
      details: [
        "Witnesses report Dennis was 'extremely pleased' with his suit fitting.",
        "The suit is described as 'tan, with slight sheen, possibly linen.'",
        "Dennis allegedly told the tailor 'this is gonna change everything' before departing.",
        "Speeding ticket was issued at 4:47 PM.",
        "When stopped, Dennis reportedly said 'but my suit, officer, it's finally ready.'"
      ],
      witnesses: [
        "Tailor: 'He'd been waiting three weeks for that suit. Very particular about the cuffs.'",
        "Officer Martinez: 'Never seen a man so happy to get a ticket. Kept smiling about the suit.'",
        "Waitress: 'He didn't even stay for the wontons. That's how excited he was.'"
      ],
      update: "Dennis paid the ticket same day. Reportedly 'still worth it' for the suit."
    }
  },
  {
    id: 'dinosaur-forecast',
    headline: "WEATHER FORECAST: 60% CHANCE OF DINOSAURS, METEOROLOGISTS SAY",
    summary: "'Models show a high probability of prehistoric activity between 3-5pm,' said weather anchor Patricia Jones.",
    time: "1 HR AGO",
    codewordEnvKey: 'VITE_CODEWORDS_DINOSAUR',
    messagesEnvKey: 'VITE_MESSAGES_DINOSAUR',
    fullStory: {
      location: "Channel 47 Weather Studio",
      details: [
        "The dinosaur forecast model was developed by Dr. Alan Grant, who was 'not available for comment.'",
        "Expected species include: velociraptors (40%), triceratops (15%), and 'something with long neck' (5%).",
        "Viewers are advised to carry breadcrumbs to distract smaller dinosaurs.",
        "Larger dinosaurs should be offered interpretive dance as a negotiation tactic.",
        "The weather team is 'very confident' about these numbers."
      ],
      witnesses: [
        "Meteorologist: 'I've been doing this 20 years. Never seen a model like this.'",
        "Local resident: 'I saw a pterodactyl yesterday. Or a kite. Hard to say.'",
        "Dog: 'WOOF WOOF BARK' (translated: 'can confirm, bones outside')"
      ],
      update: "No dinosaurs sighted yet. Forecast accuracy under review."
    }
  },
  {
    id: 'library-book',
    headline: "WOMAN TRIES TO RETURN LIBRARY BOOK CHECKED OUT IN 1987",
    summary: "Karen Mitchell, 52, finally returned 'The Joy of Cooking' with a note: 'Sorry for the delay. The recipes were really good.'",
    time: "3 HRS AGO",
    codewordEnvKey: 'VITE_CODEWORDS_LIBRARY',
    messagesEnvKey: 'VITE_MESSAGES_LIBRARY',
    fullStory: {
      location: "Public Library, downtown branch",
      details: [
        "Book was due on April 7, 1987. Late fee would be $4,738.50 at current rates.",
        "Librarian Mildred Wong, now 89, was the same librarian who checked it out originally.",
        "'I remember her. She said she was making a casserole for a potluck,' Wong recalls.",
        "Mitchell claims she 'kept meaning to bring it back but the casserole was a hit.'",
        "Book contains handwritten notes in margins, including what appears to be a recipe for 'something blue.'"
      ],
      witnesses: [
        "Librarian: 'We waived the fee. Honestly, we're just happy to have it back.'",
        "Karen: 'I might check it out again. There's this dip I've been thinking about.'",
        "Book: (silent, but smells faintly of 1987)"
      ],
      update: "Book has been placed in historical collection. 'The Joy of Cooking' now joins 'The Joy of Other Cooking' on the shelf."
    }
  },
  {
    id: 'bank-nachos',
    headline: "BANK ROBBER LEAVES NOTE: 'SORRY, THIS IS AWKWARD, I JUST REALLY NEEDED SOME NACHOS'",
    summary: "Suspect demanded $47 from a downtown bank, specifically asking for 'crisp bills, preferably from the 90s.'",
    time: "5 HRS AGO",
    codewordEnvKey: 'VITE_CODEWORDS_BANK',
    messagesEnvKey: 'VITE_MESSAGES_BANK',
    fullStory: {
      location: "First Federal Bank, teller window #4",
      details: [
        "Suspect described as 'hungry, possibly lactose intolerant' by witnesses.",
        "Note was written on a napkin from 'El Sombrero' restaurant across the street.",
        "Teller reports suspect was 'very polite, kept apologizing, asked about our day.'",
        "After receiving $47 in 90s-era bills, suspect purchased nachos at gas station.",
        "Receipt shows order: 'Large nachos, extra cheese, no regrets.'"
      ],
      witnesses: [
        "Teller: 'He asked if we had any uncirculated 1994 bills. Very specific.'",
        "Gas station clerk: 'He ate the nachos in the parking lot. Looked happy.'",
        "Nachos: (consumed, no comment)"
      ],
      update: "Police are looking for a man matching description, last seen 'really enjoying some nachos.'"
    }
  },
  {
    id: 'toaster-message',
    headline: "SCIENTISTS CONFIRM: TOASTER 'DING' IS SECRET MESSAGE FROM ANOTHER DIMENSION",
    summary: "Translation: 'Your bread is ready. We are watching.'",
    time: "7 HRS AGO",
    codewordEnvKey: 'VITE_CODEWORDS_TOASTER',
    messagesEnvKey: 'VITE_MESSAGES_TOASTER',
    fullStory: {
      location: "Institute of Things That Pop",
      details: [
        "Research team spent 47 months analyzing toaster 'dings' from 47 different toaster models.",
        "All toasters surveyed said essentially the same message, with regional dialect variations.",
        "European toasters reportedly say 'Your bread is prepared. We observe.'",
        "One toaster in Ohio reportedly said 'HELP' but was later found to be malfunctioning.",
        "Scientists are 'cautiously optimistic' about inter-dimensional communication."
      ],
      witnesses: [
        "Lead scientist: 'We've been trying to respond with bagels. No reply yet.'",
        "Toaster skeptic: 'This is toast madness. I refuse to believe.'",
        "Toaster: *ding* (translation: 'he'll come around')"
      ],
      update: "Grant proposal submitted for 'Bagel Response Study.' Funding pending."
    }
  }
];

// Ticker tape - absurd breaking news
const tickerTape = [
  "BREAKING: Local man's left sock declared missing, right sock 'holding up okay'",
  "BREAKING: Cat elected mayor of small town, promises free tuna for all",
  "BREAKING: Scientists discover that water is actually wet, more at 11",
  "BREAKING: Man claims he 'invented the internet,' promptly unplugs router",
  "BREAKING: The number 47 has appeared 47 times in today's newspaper, coincidence?",
  "BREAKING: Study finds that reading news may cause desire to read more news",
  "BREAKING: Man's suit ready at Chinese restaurant, causes speeding incident",
  "BREAKING: Dinosaur forecast still 60%, public asked to remain calm",
  "BREAKING: Library book from 1987 finally returned, casserole confirmed good"
];

const BreakingNews: React.FC = () => {
  const [tickerIndex, setTickerIndex] = useState(0);
  const [tickerPosition, setTickerPosition] = useState(0);
  const [selectedStory, setSelectedStory] = useState<typeof newsStories[0] | null>(null);
  const [comment, setComment] = useState('');
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [commentError, setCommentError] = useState('');
  const [secretMessage, setSecretMessage] = useState<string | null>(null);
  
  // Rotate ticker every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % tickerTape.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  
  // Ticker animation
  useEffect(() => {
    const animationInterval = setInterval(() => {
      setTickerPosition((prev) => (prev + 1) % 100);
    }, 100);
    return () => clearInterval(animationInterval);
  }, []);

  const getCodewordsFromEnv = (envKey: string): string[] => {
    const codewords = import.meta.env[envKey] || '';
    return codewords.split(',').map((word: string) => word.trim());
  };

  const getMessagesFromEnv = (envKey: string): { [key: string]: string } => {
    try {
      const messagesJson = import.meta.env[envKey] || '{}';
      return JSON.parse(messagesJson);
    } catch (e) {
      console.error('Failed to parse messages JSON', e);
      return {};
    }
  };

  const handleStoryClick = (story: typeof newsStories[0]) => {
    setSelectedStory(story);
    setShowCommentBox(false);
    setComment('');
    setCommentError('');
    setSecretMessage(null);
  };

  const handleCommentSubmit = () => {
    if (!comment.trim()) {
      setCommentError('Enter something dude.');
      return;
    }
    
    if (selectedStory) {
      // Split the comment by commas to get multiple codewords
      const userWords = comment.toLowerCase().split(',').map(word => word.trim());
      
      // Get valid codewords from env
      const validCodewords = getCodewordsFromEnv(selectedStory.codewordEnvKey);
      const messages = getMessagesFromEnv(selectedStory.messagesEnvKey);
      
      // Find any matching codewords
      const foundMessages: string[] = [];
      
      userWords.forEach(word => {
        if (validCodewords.includes(word) && messages[word]) {
          foundMessages.push(messages[word]);
        }
      });
      
      if (foundMessages.length > 0) {
        // Join multiple messages if multiple valid codewords found
        setSecretMessage(foundMessages.join('\n---\n'));
        setShowCommentBox(false);
        setComment('');
      } else {
        // If no codewords found, just clear the comment box without feedback
        setShowCommentBox(false);
        setComment('');
      }
    }
  };

  return (
    <div className="border-2 border-black mb-6 bg-white">
      {/* Breaking News Ticker */}
      <div className="bg-black text-white py-1 px-2 font-mono text-sm flex overflow-hidden">
        <span className="bg-red-600 px-1 mr-2 font-bold whitespace-nowrap">BREAKING</span>
        <div className="flex-1 overflow-hidden relative">
          <div 
            className="whitespace-nowrap absolute transition-transform duration-100 ease-linear"
            style={{ transform: `translateX(-${tickerPosition}%)` }}
          >
            {tickerTape[tickerIndex]} • {tickerTape[(tickerIndex + 1) % tickerTape.length]} • {tickerTape[(tickerIndex + 2) % tickerTape.length]} • 
          </div>
        </div>
        <span className="ml-2 text-xs opacity-75 whitespace-nowrap">LIVE</span>
      </div>
      
      {/* Main Breaking News Grid */}
      <div className="p-4">
        <h2 className="section-title text-2xl mb-4">TOP STORIES</h2>
        
        {/* Featured Story - Larger */}
        <div 
          className="border-2 border-black p-4 mb-4 cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => handleStoryClick(newsStories[0])}
        >
          <div className="flex justify-between items-start mb-2">
            <span className="bg-black text-white text-xs px-2 py-1 font-mono">EXCLUSIVE</span>
            <span className="text-xs font-mono text-red-600">{newsStories[0].time}</span>
          </div>
          <h3 className="font-bold text-2xl font-serif mb-2">{newsStories[0].headline}</h3>
          <p className="text-gray-700 font-serif text-lg">{newsStories[0].summary}</p>
          <div className="mt-2 text-xs font-mono text-gray-400 text-right">
            click to read full story →
          </div>
        </div>
        
        {/* Story Grid - 2 columns on mobile, 3 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {newsStories.slice(1).map((story) => (
            <div
              key={story.id}
              className="border border-black p-3 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => handleStoryClick(story)}
            >
              <h4 className="font-bold text-sm font-serif mb-1 line-clamp-2">
                {story.headline}
              </h4>
              <p className="text-xs text-gray-600 line-clamp-3 mb-2">
                {story.summary}
              </p>
              <div className="flex justify-between items-center text-xxs">
                <span className="font-mono text-gray-400">{story.time}</span>
                <span className="text-gray-400">→</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Hidden Pattern Section */}
        <div className="text-xs text-gray-400 mt-4 text-right opacity-30 hover:opacity-100 transition-opacity font-mono border-t border-gray-200 pt-2">
          <span>47.3829, -122.3847</span> | 
          <span className="ml-2">Page 7, Paragraph 4, Word 7</span> |
          <span className="ml-2">Signal</span>
        </div>
      </div>
      
      {/* Story Modal */}
      {selectedStory && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedStory(null)}
        >
          <div 
            className="bg-white border-4 border-black shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b-2 border-black p-4 flex justify-between items-center">
              <div>
                <span className="bg-black text-white text-xs px-2 py-1 font-mono mr-2">BREAKING</span>
                <span className="text-xs font-mono text-red-600">{selectedStory.time}</span>
              </div>
              <button 
                onClick={() => setSelectedStory(null)}
                className="text-2xl leading-none hover:text-gray-600"
              >
                ×
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-6">
              <h2 className="font-bold text-3xl font-serif mb-4">{selectedStory.headline}</h2>
              <p className="text-gray-600 italic mb-6">{selectedStory.summary}</p>
              
              <div className="mb-6">
                <h3 className="font-bold text-lg border-b border-black pb-1 mb-3 font-serif">DETAILS</h3>
                <ul className="space-y-2">
                  {selectedStory.fullStory.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span className="text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6 bg-gray-50 p-4 border border-gray-300">
                <h3 className="font-bold mb-2 font-mono text-sm">WITNESS STATEMENTS</h3>
                <div className="space-y-2">
                  {selectedStory.fullStory.witnesses.map((witness, idx) => (
                    <p key={idx} className="text-sm italic">"{witness}"</p>
                  ))}
                </div>
              </div>
              
              <div className="mb-6 border-l-4 border-gray-400 pl-3">
                <h3 className="font-bold text-xs font-mono mb-1">LATEST UPDATE</h3>
                <p className="text-sm">{selectedStory.fullStory.update}</p>
              </div>
              
              {/* Secret Message Display - appears when codewords used */}
              {secretMessage && (
                <div className="mb-6 p-4 bg-black text-white font-mono text-sm border border-white">
                  {secretMessage.split('---').map((msg, idx) => (
                    <div key={idx} className={idx > 0 ? 'mt-3 pt-3 border-t border-gray-600' : ''}>
                      <p className="whitespace-pre-wrap">{msg}</p>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Hidden clue - barely visible codewords */}
              <div className="text-xxs text-gray-100 select-none text-right mb-4">
                {selectedStory.id === 'car-tree' && 'leaf, coat, beef, chalk'}
                {selectedStory.id === 'chinese-suit' && 'leaf, coat, beef, chalk'}
                {selectedStory.id === 'dinosaur-forecast' && 'leaf, coat, beef, chalk'}
                {selectedStory.id === 'library-book' && 'leaf, coat, beef, chalk'}
                {selectedStory.id === 'bank-nachos' && 'leaf, coat, beef, chalk'}
                {selectedStory.id === 'toaster-message' && 'leaf, coat, beef, chalk'}
              </div>
              
              {/* Comment/Like Section */}
              <div className="border-t-2 border-black pt-4 mt-4">
                {!showCommentBox && !secretMessage ? (
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setShowCommentBox(true)}
                      className="text-sm border border-black px-3 py-1 hover:bg-gray-100"
                    >
                      LEAVE A COMMENT
                    </button>
                    <span className="text-gray-400 text-xs">0 comments</span>
                  </div>
                ) : showCommentBox ? (
                  <div className="space-y-3">
                    <textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="enter codewords (comma separated)..."
                      className="w-full border-2 border-black p-3 text-sm font-mono h-24"
                      autoFocus
                    />
                    {commentError && (
                      <p className="text-red-600 text-xs">{commentError}</p>
                    )}
                    <div className="flex gap-2">
                      <button
                        onClick={handleCommentSubmit}
                        className="bg-black text-white px-4 py-2 text-sm border border-black hover:bg-gray-800"
                      >
                        VERIFY
                      </button>
                      <button
                        onClick={() => {
                          setShowCommentBox(false);
                          setComment('');
                          setCommentError('');
                        }}
                        className="bg-white text-black px-4 py-2 text-sm border border-black hover:bg-gray-100"
                      >
                        CANCEL
                      </button>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BreakingNews;