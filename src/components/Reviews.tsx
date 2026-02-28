import React, { useState } from 'react';

const reviews = [
  {
    id: 'sparrow-1',
    user: "CaptainJackSparrow_Fan",
    rating: "★★★☆☆",
    title: "WHERE IS THE RUM THOUGH",
    text: "I sailed the seven seas to watch this and there's not a single bottle of rum. Not one. The animation was fine, the plot made sense I think? I was very drunk. But where is the rum? This is a fundamental flaw. Also the parrot in scene 47 blinked in Morse code. Just saying.",
    fullReview: "Listen, I've been on ships longer than most of these characters have been alive. The ocean physics are wrong. The waves don't move like that. And the rum situation is an absolute disgrace. That being said, the kraken looked friendly. Would sail again. Probably. Savvy?",
    comments: [
      { user: "WillTurner_Official", text: "You were drunk through all three movies, Jack.", timestamp: "2 days ago" },
      { user: "DavyJones_Locker", text: "THE RUM IS IN MY LOCKER. COME GET IT.", timestamp: "2 days ago" },
      { user: "ElizabethSwan_Real", text: "He's not wrong about the waves though.", timestamp: "1 day ago" },
      { user: "CaptainJackSparrow_Fan", text: "Hide the rum Mr. Gibbs. Hide it where no one finds it. Especially not the kraken.", timestamp: "1 day ago" },
      { user: "MrGibbs_Sailing", text: "Aye aye Jack. The rum is safe. I put it in the review section. No one ever reads reviews carefully.", timestamp: "1 day ago" },
      { user: "HectorBarbossa_OneLeg", text: "You're not even in the right review board you fool. This is for cartoons. CARTOONS. Not pirate movies. I've got one leg and even I can see that.", timestamp: "23 hours ago" },
      { user: "CaptainJackSparrow_Fan", text: "The rum is in the cartoons now. Strategic. They'll never suspect.", timestamp: "23 hours ago" },
      { user: "HectorBarbossa_OneLeg", text: "This is why I mutinied. Twice. The man has no sense of genre.", timestamp: "22 hours ago" }
    ]
  },
  {
    id: 'peter-familyguy',
    user: "PeterGriffin_Hehehe",
    rating: "★★★★☆",
    title: "FREAKIN SWEET",
    text: "Lois says I watch too much TV but then she watches this show with me and laughs more than I do. Make it make sense. The chicken fights are the best part. I've been in 47 of them and I still don't know who started it. Also the toaster talks to me now. Is that normal?",
    fullReview: "You know what really grinds my gears? When people don't appreciate the cutaways. The cutaways are the best part. I learned everything I know from cutaways. History, science, how to annoy Lois. The show is basically a documentary about my life if my life was way more interesting and had more singing. Hehehehe.",
    comments: [
      { user: "Quagmire_Alright", text: "Giggity giggity goo. Peter, your wife called. She said come home. Also nice review.", timestamp: "4 hours ago" },
      { user: "Stewie_Baby", text: "Peter, you're a buffoon. But I've seen the toaster. It definitely watches. The red glow means something.", timestamp: "3 hours ago" },
      { user: "Brian_Dog", text: "I once dated a girl who reviewed movies. She said my reviews were better. She was blind though.", timestamp: "3 hours ago" },
      { user: "Stewie_Baby", text: "Brian, she was blind AND she still couldn't let you hit. That's a new low even for you.", timestamp: "2 hours ago" },
      { user: "Quagmire_Alright", text: "OH SNAP. The baby speaks truth. Giggity giggity goo.", timestamp: "2 hours ago" },
      { user: "Brian_Dog", text: "I hate this family. I'm going to write a book about it.", timestamp: "2 hours ago" }
    ]
  },
  {
    id: 'southpark-cartman',
    user: "Cartman_Authoritah",
    rating: "★★★☆☆",
    title: "SCREW YOU GUYS I'M GOING HOME",
    text: "I watched this show 47 times and Kenny still dies. That's not a spoiler, it's a lifestyle. The underpants gnomes are the only ones making sense. Phase 2 is obviously a government cover up. Also Kyle's mom is still a bitch. That is all.",
    fullReview: "You know what's not cool? When people don't respect my authoritah. I've been reviewing cartoons since I was 8. I'm 35 now. Nothing has changed. Stan still says 'dude' too much. Butters is still blissfully unaware. And Kenny still dies. The number 47 appears exactly when Kenny dies. Coincidence? I think not. The government is in on it. I have proof. I stored it on a Tegridy Farms server. Randy said he'd keep it safe.",
    comments: [
      { user: "Kyle_RespectMyAuthoritah", text: "You're not grounded. You're evicted from the gene pool. 47 days minimum.", timestamp: "5 hours ago" },
      { user: "Kenny_Muffled", text: "Mmph mmph mmph mmph. (Translation: I've died 47 times and I still don't know why.)", timestamp: "5 hours ago" },
      { user: "Stan_Dude", text: "Dude. This is just a cartoon. Dude.", timestamp: "4 hours ago" },
      { user: "Butters_OhHamburgers", text: "I think it's a lovely review. My mom says I can't read reviews though. She says they're full of evil spirits.", timestamp: "4 hours ago" },
      { user: "Randy_Tegridy", text: "Tegridy Farms approved this message. Definitely not a government front. Nope. Tegridy.", timestamp: "3 hours ago" }
    ]
  },
  {
    id: 'nemo-dory',
    user: "Dory_Remembered",
    rating: "★★★★☆",
    title: "I FORGOT WHAT I WAS REVIEWING BUT IT WAS GOOD",
    text: "Just keep swimming just keep swimming. I think I saw a fish? Or a boat? There was a dad looking for his son? I remember something about a shark that said fish are friends not food. That's deep man. Really deep. Like the ocean deep. Wait what was I saying?",
    fullReview: "Okay so I watched this 47 times and each time it's like watching it for the first time! Which is great because I love first times. The turtles are chill. The seagulls are annoying but honest. Mine? Mine? Mine? That's a mood. The blue tang is clearly the best character. Very relatable. Very forgetful. Very blue. 10 out of 10 would forget again.",
    comments: [
      { user: "Marlin_Clownfish", text: "I spent 47 hours looking for Nemo and this is what you post? Unbelievable.", timestamp: "6 hours ago" },
      { user: "Nemo_LuckyFin", text: "Dad chill. The review is fine. Also Dory, thanks for finding me that one time.", timestamp: "6 hours ago" },
      { user: "Bruce_Shark", text: "Fish are friends not food. Except reviews. Reviews are food. I'm hungry.", timestamp: "5 hours ago" },
      { user: "Crush_Turtle", text: "Dude. The current took me to this review. Totally gnarly. Radical even.", timestamp: "5 hours ago" },
      { user: "Nigel_Pelican", text: "I saw the whole thing from the air. The review is accurate. The ocean is big. The fish are small. Story checks out.", timestamp: "4 hours ago" }
    ]
  },
  {
    id: 'spongebob-concert',
    user: "Squidward_Tentacles",
    rating: "★☆☆☆☆",
    title: "I AM AN ARTIST, NOT A FRY COOK",
    text: "I have a concert coming up. Finally, the world will recognize my talent. The clarinet calls to the masses. I practiced for 47 days straight. My neighbors are less than supportive but they don't understand art. This review is about me. Not the movie. The movie is irrelevant. I am relevant.",
    fullReview: "I've been playing clarinet for 25 years. The same 25 years I've been working next to the most annoying fry cook in the ocean. He's cheerful. Constantly. It's exhausting. But my concert will be my escape. My masterpiece. My moment. The Bikini Bottom Philharmonic will weep with joy. Or they'll be confused. Either way, I'm playing. Review my concert. Not this movie. The movie doesn't matter. I matter.",
    comments: [
      { user: "SpongeBob_Ready", text: "I'm ready! I'm ready! I'm ready for the concert! I have my jellyfish net ready to catch the music!", timestamp: "2 hours ago" },
      { user: "Patrick_Star", text: "Is the concert the part where we eat?", timestamp: "2 hours ago" },
      { user: "Squidward_Tentacles", text: "NO PATRICK. YOU DON'T EAT THE MUSIC.", timestamp: "2 hours ago" },
      { user: "MrKrabs_Money", text: "Me boy, I'll be there. Admission is 47 dollars. Cash only.", timestamp: "1 hour ago" },
      { user: "SpongeBob_Ready", text: "I'll bring my headphones so I can hear the music extra good!", timestamp: "1 hour ago" },
      { user: "Patrick_Star", text: "I'll bring my earplugs so I don't hear it at all! We're both prepared!", timestamp: "1 hour ago" },
      { user: "Squidward_Tentacles", text: "I hate all of you. Every single one. 47 times over.", timestamp: "1 hour ago" }
    ]
  },
  {
    id: 'shrek-swamp',
    user: "Shrek_Ogre",
    rating: "★★★★★",
    title: "GET OUT OF MY SWAMP",
    text: "I watched this movie about an ogre who just wants to be left alone. Relatable. Then a donkey shows up and won't leave. Even more relatable. Then a princess turns into an ogre and he finally finds love. Beautiful. The onion has layers. This movie has layers. Ogres have layers. Review has layers.",
    fullReview: "I've seen this film 47 times. Each time I notice something new. Like how the gingerbread man is clearly a government informant. He knows too much. He talks too fast. And the dragon? Definitely not a dragon. That's a surveillance drone with scales. Lord Farquaad's castle? That's a listening post. The whole movie is a warning. Stay in your swamp. Trust no one. Especially donkeys.",
    comments: [
      { user: "Donkey_Talking", text: "Ogre not ogre not ogre not! You gotta listen to the review! It's got layers man! Layers!", timestamp: "7 hours ago" },
      { user: "Fiona_Ogre", text: "Shrek, the review is lovely. But you've been in the swamp for 47 days. Come inside.", timestamp: "7 hours ago" },
      { user: "Gingerbread_Man", text: "Eat me? No. The review is good. But the real story is in the icing. Check the icing.", timestamp: "6 hours ago" },
      { user: "Puss_Boots", text: "I have reviewed this movie also. It is purrfect. The donkey is annoying though. No offense.", timestamp: "6 hours ago" },
      { user: "Donkey_Talking", text: "None taken! ...wait what?", timestamp: "6 hours ago" }
    ]
  },
  {
    id: 'puss-boots',
    user: "PussInBoots_Swordsman",
    rating: "★★★★★",
    title: "THE BOOTS STAY ON",
    text: "I have seen many battles. Fought many foes. But this movie? This movie defeated me. The eyes. The big eyes. I cried 47 times. The boots are historically accurate though. I appreciate that. The hat too. The sword work is sloppy but the heart is there. Purrfect.",
    fullReview: "The scene where he realizes his mortality? I felt that. Deep in my nine lives. The dog is clearly a spy though. Too happy. Too friendly. Nobody is that happy without an agenda. The cat in the movie is obviously based on me. The resemblance is uncanny. The swagger. The charm. The boots. All me. Hollywood called. They denied it. Liars.",
    comments: [
      { user: "Shrek_Ogre", text: "Get out of my review section. ...Fine stay. But no staring.", timestamp: "8 hours ago" },
      { user: "Donkey_Talking", text: "The boots DO stay on! I've seen things man. Things.", timestamp: "8 hours ago" },
      { user: "Kitty_Softpaws", text: "Your review is adequate. For a cat. The dog thing is accurate though. He's definitely watching.", timestamp: "7 hours ago" },
      { user: "Perro_Dog", text: "Happy? Me? I'm just a dog. Wag wag. Nothing to see here. Wag wag.", timestamp: "7 hours ago" },
      { user: "PussInBoots_Swordsman", text: "See? The tail wags are too regular. 47 wags per minute. Exactly. Suspicious.", timestamp: "7 hours ago" }
    ]
  }
];

const DisneyReviews: React.FC = () => {
  const [selectedReview, setSelectedReview] = useState<typeof reviews[0] | null>(null);

  return (
    <div className="border-2 border-black p-3 bg-white">
      <h2 className="section-title flex justify-between items-center">
        <span>CARTOON REVIEWS (lost souls edition)</span>
        <span className="text-xxs bg-black text-white px-1">UNCENSORED</span>
      </h2>
      
      <p className="text-xxs text-gray-500 italic mb-2">
        * These users may be compromised. Read at your own risk.
      </p>
      
      <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
        {reviews.map((review, idx) => (
          <div 
            key={idx} 
            className="border border-black p-3 cursor-pointer hover:bg-gray-50 transition-colors bg-white"
            onClick={() => setSelectedReview(review)}
          >
            <div className="flex justify-between items-start mb-1">
              <span className="font-bold text-sm font-serif">{review.user}</span>
              <span className="text-xxs bg-gray-200 px-1 font-mono">{review.rating}</span>
            </div>
            
            <h3 className="text-xs font-bold italic mb-1">"{review.title}"</h3>
            <p className="text-xs text-gray-700 line-clamp-2">{review.text}</p>
            
            <div className="flex justify-between items-center mt-2 text-xxs text-gray-400 border-t border-gray-200 pt-1">
              <span>{review.comments.length} comments</span>
              <span className="opacity-30 hover:opacity-100">#{idx + 47}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-3 text-xxs text-gray-400 border-t border-gray-300 pt-2 text-right">
        <span className="opacity-30 hover:opacity-100">reviews may contain hidden messages • 47 verified • proceed with caution</span>
      </div>
      
      {/* Review Detail Modal */}
      {selectedReview && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedReview(null)}
        >
          <div 
            className="bg-white border-4 border-black shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b-2 border-black p-4 flex justify-between items-start">
              <div>
                <span className="text-xxs bg-black text-white px-2 py-0.5 tracking-wider">
                  REVIEW #{47 + reviews.indexOf(selectedReview)}
                </span>
                <h3 className="font-bold text-lg font-serif mt-1">{selectedReview.user}</h3>
              </div>
              <button 
                onClick={() => setSelectedReview(null)}
                className="text-2xl leading-none hover:text-gray-600 ml-4"
              >
                ×
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-5">
              {/* Rating and Title */}
              <div className="mb-3 border-b border-gray-200 pb-2">
                <div className="flex justify-between items-center">
                  <span className="text-xxs bg-gray-200 px-1 py-0.5 font-mono">{selectedReview.rating}</span>
                  <span className="text-xs text-gray-400">{selectedReview.title}</span>
                </div>
              </div>
              
              {/* Review Text */}
              <div className="mb-4">
                <p className="text-sm italic bg-gray-50 p-3 border border-gray-200">
                  "{selectedReview.text}"
                </p>
              </div>
              
              {/* Full Review */}
              <div className="mb-4">
                <h4 className="font-bold text-xs border-b border-gray-300 pb-1 mb-2">FULL REVIEW</h4>
                <p className="text-sm">{selectedReview.fullReview}</p>
              </div>
              
              {/* Comments Section */}
              <div className="mb-4">
                <h4 className="font-bold text-xs border-b border-gray-300 pb-1 mb-2">
                  COMMENTS ({selectedReview.comments.length})
                </h4>
                
                <div className="space-y-3 max-h-48 overflow-y-auto pr-1">
                  {selectedReview.comments.map((comment, idx) => (
                    <div key={idx} className="border-l-2 border-gray-300 pl-2">
                      <div className="flex justify-between">
                        <span className="font-bold text-xs">{comment.user}</span>
                        <span className="text-xxs text-gray-400">{comment.timestamp}</span>
                      </div>
                      <p className="text-xs text-gray-700 mt-0.5">{comment.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Hidden Message */}
              <div className="text-xxs text-gray-200 select-none text-right">
                {selectedReview.id === 'sparrow-1' && 'the rum is always gone • check the locker'}
                {selectedReview.id === 'frozen-47' && 'the ice is watching • 47 degrees'}
                {selectedReview.id === 'mickey-cheese' && 'the toaster knows • unplug it'}
                {selectedReview.id === 'ariel-water' && 'follow the crab • he knows about forks'}
                {selectedReview.id === 'spongebob-work' && '4:47 daily • the jellyfish are drones'}
                {selectedReview.id === 'cartoon-network' && 'the bag is in the wind • aku lives'}
                {selectedReview.id === 'south-park' && 'phase 2 is real • member berries warned us'}
                {selectedReview.id === 'family-guy-cutaway' && 'giggity is a distress signal • the toaster is watching'}
              </div>
              
              {/* Metadata */}
              <div className="mt-3 pt-2 border-t border-gray-200 text-xxs text-gray-400 flex justify-between">
                <span>REVIEW ID: RV-{47 + reviews.indexOf(selectedReview)}</span>
                <span className="opacity-30 hover:opacity-100">VERIFY AT 47°N 122°W</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisneyReviews;