import React, { useState } from 'react';

// Types
interface Comment {
  id: string;
  username: string;
  text: string;
  timestamp: string;
  isAgent?: boolean;
}

interface Ad {
  id: string;
  title: string;
  price: string;
  description: string;
  contact: string;
  category: string;
  timestamp: string;
  comments: Comment[];
  isActive: boolean;
  fullDetails?: {
    condition: string;
    dimensions?: string;
    history?: string;
    hiddenMessage?: string;
    agentCodeword?: string;
  };
}

const Classifieds: React.FC = () => {
  const [selectedAd, setSelectedAd] = useState<Ad | null>(null);
  const [showPostForm, setShowPostForm] = useState(false);
  const [newComment, setNewComment] = useState<{ [key: string]: { username: string; text: string } }>({});
  const [showCommentModal, setShowCommentModal] = useState<{adId: string, comment: Comment} | null>(null);

  // Sample ads - mix of normal and suspicious
  const [ads, setAds] = useState<Ad[]>([
    {
      id: "ad-001",
      title: "FOR SALE: Vintage sofa, excellent condition",
      price: "$150 OBO",
      description: "Brown leather sofa, minor wear, comfortable for sitting and/or contemplating life choices.",
      contact: "Call Tom at 555-0199",
      category: "FURNITURE",
      timestamp: "2 HRS AGO",
      isActive: true,
      fullDetails: {
        condition: "Vintage patina (some stains, we call them 'character marks')",
        dimensions: "7ft long, 3ft deep, fits 3 adults or 47 cats",
        history: "Previously owned by a philosophy professor who spent many hours contemplating the meaning of sofas",
        hiddenMessage: "DROP IN PARK AFTER DARK",
        agentCodeword: "leaf"
      },
      comments: [
        {
          id: "c1",
          username: "Mike_47",
          text: "Is this still available? I can come by this weekend.",
          timestamp: "1 HR AGO",
        },
        {
          id: "c2",
          username: "Tom",
          text: "Yes still available! Weekend works. Saturday around 3?",
          timestamp: "45 MIN AGO",
        }
      ]
    },
    {
      id: "ad-002",
      title: "FOR RENT: 2BR apartment, great view",
      price: "$950/mo",
      description: "Second floor, lots of light, neighbors are quiet (maybe too quiet). Includes stove that definitely doesn't spy on you.",
      contact: "Call 555-0134",
      category: "RENTALS",
      timestamp: "5 HRS AGO",
      isActive: true,
      fullDetails: {
        condition: "Well-maintained, suspiciously quiet neighbors",
        dimensions: "850 sq ft, balcony overlooks parking lot (great for surveillance)",
        history: "Previous tenant was a mime. Very quiet. No complaints. Also no words.",
        hiddenMessage: "CODE 47 AT MIDNIGHT",
        agentCodeword: "coat"
      },
      comments: []
    },
    {
      id: "ad-003",
      title: "WANTED: Looking for a used bicycle",
      price: "Budget $100-150",
      description: "Need something reliable for getting around. Color不重要 (that means 'not important' in Mandarin, for some reason).",
      contact: "Email bike@email.com",
      category: "WANTED",
      timestamp: "1 DAY AGO",
      isActive: true,
      fullDetails: {
        condition: "Any condition acceptable, preferably with two wheels (negotiable)",
        dimensions: "Standard bike size. Or unicycle. We're flexible.",
        history: "Previous bikes owned by this person have a tendency to 'disappear'",
        hiddenMessage: "MEET AT BIKE RACK STATION 47",
        agentCodeword: "beef"
      },
      comments: [
        {
          id: "c3",
          username: "Sarah_92",
          text: "I have a Schwinn for $120. Needs new tires but rides well.",
          timestamp: "20 HRS AGO",
        },
        {
          id: "c4",
          username: "BikeSeeker",
          text: "Thanks Sarah! Can you meet Thursday evening?",
          timestamp: "18 HRS AGO",
        }
      ]
    },
    {
      id: "ad-004",
      title: "FOUND: Brown dog, Maple Ave area",
      price: "FREE (just take the dog)",
      description: "Friendly, answers to 'Dog' or 'Sir Barksalot'. Comes with leash and existential dread.",
      contact: "555-0187",
      category: "LOST & FOUND",
      timestamp: "3 DAYS AGO",
      isActive: true,
      fullDetails: {
        condition: "Dog is fine. His existential dread is not your problem.",
        dimensions: "Medium. Like a loaf of bread but with legs.",
        history: "Found near the same spot where a suspicious van was parked. Probably unrelated.",
        hiddenMessage: "DOG DROPS AT PARK BENCH 47",
        agentCodeword: "chalk"
      },
      comments: []
    },
    {
      id: "ad-005",
      title: "FOR SALE: Antique desk, solid oak",
      price: "$47",
      description: "Family heirloom, must sell. Drawer contains mysterious stain and what might be a coded message from 1973. Or just coffee.",
      contact: "Call David at 555-0167",
      category: "FURNITURE",
      timestamp: "47 MIN AGO",
      isActive: true,
      fullDetails: {
        condition: "Solid oak, sturdy, one mysterious stain (possibly coffee, possibly tears)",
        dimensions: "47 inches wide, 47 inches deep, 47 inches tall (very specific)",
        history: "Belonged to a cryptographer in the 70s. He went missing. Desk stayed.",
        hiddenMessage: "STAIN CONTAINS MICROFILM",
        agentCodeword: "leaf"
      },
      comments: [
        {
          id: "c5",
          username: "CuriousBuyer",
          text: "Interested in the desk. Is the mysterious stain still there?",
          timestamp: "30 MIN AGO",
        },
        {
          id: "c6",
          username: "David",
          text: "Stain is permanent. Adds character. You interested?",
          timestamp: "15 MIN AGO",
        },
        {
          id: "c7", 
          username: "CuriousBuyer",
          text: "Yes. Can you do $40 and throw in a theory about the stain?",
          timestamp: "10 MIN AGO",
        }
      ]
    },
    {
      id: "ad-006",
      title: "SERVICES: Lawn mowing, hedge trimming",
      price: "$25/week",
      description: "Also available for: minor espionage, code breaking, translation of ancient languages. Kidding! Unless...",
      contact: "Call 555-0111",
      category: "SERVICES",
      timestamp: "2 DAYS AGO",
      isActive: true,
      fullDetails: {
        condition: "Lawn equipment included. Spy equipment extra.",
        dimensions: "Can mow up to 47 acres. Or monitor 47 targets.",
        history: "Owner claims to have 'retired from unspecified government work'",
        hiddenMessage: "MOWING PATTERN SIGNALS",
        agentCodeword: "coat"
      },
      comments: []
    }
  ]);

  const handleAddComment = (adId: string) => {
    const commentData = newComment[adId];
    if (!commentData?.username || !commentData?.text) return;

    const newCommentObj: Comment = {
      id: `c${Date.now()}`,
      username: commentData.username,
      text: commentData.text,
      timestamp: "JUST NOW",
    };

    setAds(ads.map(ad => 
      ad.id === adId 
        ? { ...ad, comments: [...ad.comments, newCommentObj] }
        : ad
    ));

    setNewComment(prev => ({ ...prev, [adId]: { username: '', text: '' } }));
  };

  const handleCommentChange = (adId: string, field: 'username' | 'text', value: string) => {
    setNewComment(prev => ({
      ...prev,
      [adId]: { ...prev[adId], [field]: value }
    }));
  };

  const categories = ["ALL", "FURNITURE", "RENTALS", "WANTED", "LOST & FOUND", "SERVICES"];
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredAds = selectedCategory === "ALL" 
    ? ads 
    : ads.filter(ad => ad.category === selectedCategory);

  return (
    <div className="border-2 border-black p-3 bg-white">
      <h2 className="section-title flex justify-between items-center">
        <span>CLASSIFIED ADS</span>
        <button 
          onClick={() => setShowPostForm(!showPostForm)}
          className="text-xs bg-white px-2 py-1 border border-black hover:bg-gray-100"
        >
          {showPostForm ? "CANCEL" : "POST AD"}
        </button>
      </h2>

      <div className="mb-3 flex flex-col sm:flex-row gap-2">
        <select 
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="text-sm border border-black p-1 bg-white w-full sm:w-auto"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <span className="text-xs text-gray-500 self-center">
          {filteredAds.length} ADS ACTIVE
        </span>
      </div>

      {showPostForm && (
        <div className="mb-4 p-3 border-2 border-black bg-gray-100">
          <h3 className="font-bold text-sm mb-2">POST NEW AD</h3>
          <div className="space-y-2">
            <input type="text" placeholder="Title" className="w-full border border-black p-1 text-sm" />
            <input type="text" placeholder="Price" className="w-full border border-black p-1 text-sm" />
            <textarea placeholder="Description" className="w-full border border-black p-1 text-sm h-20" />
            <input type="text" placeholder="Contact" className="w-full border border-black p-1 text-sm" />
            <select className="w-full border border-black p-1 text-sm">
              <option>FURNITURE</option>
              <option>RENTALS</option>
              <option>WANTED</option>
              <option>LOST & FOUND</option>
              <option>SERVICES</option>
            </select>
            <div className="flex gap-2">
              <button className="bg-black text-white px-3 py-1 text-sm border border-black hover:bg-gray-800">
                SUBMIT AD
              </button>
              <button onClick={() => setShowPostForm(false)} className="bg-white px-3 py-1 text-sm border border-black hover:bg-gray-100">
                CANCEL
              </button>
            </div>
            <p className="text-xxs text-gray-500 mt-1">
              * Ads are moderated by squirrels. Allow 3-5 business days for existential review.
            </p>
          </div>
        </div>
      )}

      {/* Ads List */}
      <div className="space-y-4 max-h-[600px] overflow-y-auto pr-1">
        {filteredAds.map((ad) => (
          <div 
            key={ad.id} 
            className="border border-black p-3 bg-white cursor-pointer hover:border-gray-600 transition-colors"
            onClick={() => setSelectedAd(ad)}
          >
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold text-sm uppercase">{ad.title}</h3>
              <span className="text-xs bg-gray-200 px-1">{ad.category}</span>
            </div>
            
            <div className="text-sm mb-2">
              <span className="font-bold">{ad.price}</span>
              <p className="text-sm mt-1 line-clamp-2">{ad.description}</p>
              <p className="text-xs text-gray-600 mt-1">{ad.contact}</p>
              <p className="text-xxs text-gray-400 mt-1">{ad.timestamp}</p>
            </div>

            <div className="flex justify-between items-center text-xxs text-gray-400 border-t border-gray-200 pt-1">
              <span>{ad.comments.length} comments</span>
              <span className="opacity-30 hover:opacity-100">ad#{ad.id.split('-')[1]}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 text-xxs text-gray-400 border-t border-gray-300 pt-2 font-mono">
        <div className="flex justify-between">
          <span>ACTIVE: {ads.filter(a => a.isActive).length}</span>
          <span>SIGNAL: 47</span>
          <span className="opacity-30 hover:opacity-100">█▒▒▒▒▒▒▒▒▒</span>
        </div>
      </div>

      {/* Ad Detail Modal */}
      {selectedAd && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedAd(null)}
        >
          <div 
            className="bg-white border-4 border-black shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b-2 border-black p-4 flex justify-between items-start">
              <div>
                <span className="text-xxs bg-black text-white px-2 py-0.5 tracking-wider">
                  {selectedAd.category} • #{selectedAd.id.split('-')[1]}
                </span>
                <h3 className="font-bold text-xl font-serif mt-1">{selectedAd.title}</h3>
              </div>
              <button onClick={() => setSelectedAd(null)} className="text-2xl leading-none hover:text-gray-600 ml-4">
                ×
              </button>
            </div>

            <div className="p-5">
              {/* Price and Contact */}
              <div className="grid grid-cols-2 gap-2 mb-4 border-b border-black pb-3">
                <div>
                  <span className="font-bold block text-xxs text-gray-500">PRICE</span>
                  <span className="text-xl font-mono">{selectedAd.price}</span>
                </div>
                <div>
                  <span className="font-bold block text-xxs text-gray-500">CONTACT</span>
                  <span className="text-sm">{selectedAd.contact}</span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-4">
                <h4 className="font-bold text-sm border-b border-gray-300 pb-1 mb-2">DESCRIPTION</h4>
                <p className="text-sm bg-gray-50 p-3 border border-gray-200">
                  {selectedAd.description}
                </p>
              </div>

              {/* Full Details */}
              {selectedAd.fullDetails && (
                <div className="mb-4">
                  <h4 className="font-bold text-sm border-b border-gray-300 pb-1 mb-2">ADDITIONAL DETAILS</h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-bold">Condition:</span> {selectedAd.fullDetails.condition}</p>
                    {selectedAd.fullDetails.dimensions && (
                      <p><span className="font-bold">Dimensions:</span> {selectedAd.fullDetails.dimensions}</p>
                    )}
                    {selectedAd.fullDetails.history && (
                      <p><span className="font-bold">History:</span> {selectedAd.fullDetails.history}</p>
                    )}
                    
                    {/* Hidden message - barely visible */}
                    <p className="text-xxs text-gray-200 select-none mt-2">
                      {selectedAd.fullDetails.hiddenMessage} • {selectedAd.fullDetails.agentCodeword}
                    </p>
                  </div>
                </div>
              )}

              {/* Comments Section */}
              <div className="mb-4">
                <h4 className="font-bold text-sm border-b border-gray-300 pb-1 mb-2">
                  COMMENTS ({selectedAd.comments.length})
                </h4>
                
                <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                  {selectedAd.comments.map((comment) => (
                    <div 
                      key={comment.id} 
                      className="border-l-2 border-gray-300 pl-2 cursor-pointer hover:border-black transition-colors"
                      onClick={() => setShowCommentModal({adId: selectedAd.id, comment})}
                    >
                      <div className="flex justify-between">
                        <span className="font-bold text-xs">{comment.username}</span>
                        <span className="text-xxs text-gray-400">{comment.timestamp}</span>
                      </div>
                      <p className="text-xs text-gray-700">{comment.text}</p>
                      
                      {/* Hidden pattern indicator */}
                      {comment.username.includes('_') && (
                        <div className="text-xxs text-gray-200 text-right select-none">
                          █ pattern █
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Add Comment Form */}
                <div className="mt-3 pt-2 border-t border-gray-200">
                  <div className="grid grid-cols-4 gap-1 text-xs">
                    <input
                      type="text"
                      placeholder="Name"
                      value={newComment[selectedAd.id]?.username || ''}
                      onChange={(e) => handleCommentChange(selectedAd.id, 'username', e.target.value)}
                      className="col-span-1 border border-gray-300 p-1 text-xxs"
                    />
                    <input
                      type="text"
                      placeholder="Comment..."
                      value={newComment[selectedAd.id]?.text || ''}
                      onChange={(e) => handleCommentChange(selectedAd.id, 'text', e.target.value)}
                      className="col-span-2 border border-gray-300 p-1 text-xxs"
                    />
                    <button
                      onClick={() => handleAddComment(selectedAd.id)}
                      className="col-span-1 bg-black text-white text-xxs px-1 py-1 border border-black hover:bg-gray-800"
                    >
                      POST
                    </button>
                  </div>
                </div>
              </div>

              {/* Agent Markers */}
              <div className="text-xxs text-gray-200 text-right select-none">
                {selectedAd.price.includes('47') && 'signal: price • '}
                {selectedAd.id === 'ad-005' && 'desk stain active • '}
                {selectedAd.category === 'SERVICES' && 'services flagged • '}
                verification #{47}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Comment Detail Modal */}
      {showCommentModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-[60] p-4"
          onClick={() => setShowCommentModal(null)}
        >
          <div 
            className="bg-white border-4 border-black shadow-xl max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="border-b-2 border-black p-4 flex justify-between items-center">
              <h3 className="font-bold text-lg font-serif">COMMENT DETAILS</h3>
              <button onClick={() => setShowCommentModal(null)} className="text-2xl leading-none hover:text-gray-600">
                ×
              </button>
            </div>

            <div className="p-5">
              <div className="mb-3">
                <span className="text-xxs bg-gray-200 px-1 py-0.5">USER</span>
                <p className="font-bold text-lg mt-1">{showCommentModal.comment.username}</p>
              </div>

              <div className="mb-4">
                <span className="text-xxs bg-gray-200 px-1 py-0.5">POSTED</span>
                <p className="text-sm mt-1">{showCommentModal.comment.timestamp}</p>
              </div>

              <div className="mb-4 border-l-4 border-black pl-3 py-1 bg-gray-50">
                <p className="text-base italic">"{showCommentModal.comment.text}"</p>
              </div>

              {/* Hidden message in comment */}
              <div className="text-xxs text-gray-200 select-none text-right">
                {showCommentModal.comment.username === 'Mike_47' && 'handler: active • '}
                {showCommentModal.comment.username === 'Sarah_92' && 'asset: sarah • '}
                {showCommentModal.comment.username === 'CuriousBuyer' && 'surveillance: buyer • '}
                {showCommentModal.comment.username.includes('_') && 'agent confirmed • '}
                trace #{47}
              </div>

              {/* Metadata */}
              <div className="mt-4 pt-2 border-t border-gray-200 text-xxs text-gray-400 flex justify-between">
                <span>COMMENT ID: {showCommentModal.comment.id}</span>
                <span className="opacity-30 hover:opacity-100">█ FLAG █</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Classifieds;