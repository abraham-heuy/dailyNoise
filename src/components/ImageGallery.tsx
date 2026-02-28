import React, { useState } from 'react';
import pete from "../assets/pete.png"
import bob from "../assets/bob.png"
import gif from "../assets/girraffe.png"
import face from "../assets/shock.jpg"

const galleryImages = [
  {
    id: 'spongebob-work',
    thumb: bob , 
    full: bob,
    title: "UNTITLED (1999)",
    filename: "ARCHIVE_99_47A.tif",
    binaryData: "01011001 01101111 01110101 00100111 01110010 01100101 00100000 01101111 01101110 01101100 01111001 00100000 01101000 01100101 01110010 01100101 00100000 01100010 01100101 01100011 01100001 01110101 01110011 01100101 00100000 01111001 01101111 01110101 00100000 01100011 01101100 01101111 01100011 01101011 01100101 01100100 00100000 01101001 01101110 00100000 01100001 01101110 01100100 00100000 01101111 01110101 01110100 00100000 01101100 01101001 01101011 01100101 00100000 01101001 01110100",
    envKey: "VITE_IMAGE_KEY_SPONGEBOB",
    decodedMessage: "you're only here because you clocked in and out like it matters"
  },
  {
    id: 'pete-ostrich',
    thumb: face,
    full: face,
    title: "UNTITLED (1999)",
    filename: "ARCHIVE_99_47B.tif",
    binaryData: "01011001 01101111 01110101 00100000 01101000 01100001 01110110 01100101 00100000 01110100 01101000 01100101 00100000 01100101 01101101 01101111 01110100 01101001 01101111 01101110 01100001 01101100 00100000 01110010 01100001 01101110 01100111 01100101 00100000 01101111 01100110 00100000 01100001 00100000 01110011 01110000 01100001 01110100 01110101 01101100 01100001 00100000 01110111 01101000 01101111 00100111 01110011 00100000 01100001 01100110 01110010 01100001 01101001 01100100 00100000 01101111 01100110 00100000 01100011 01101111 01101101 01101101 01101001 01110100 01101101 01100101 01101110 01110100",
    envKey: "VITE_IMAGE_KEY_OSTRICH",
    decodedMessage: "you have the emotional range of a spatula who's afraid of commitment"
  },
  {
    id: 'stewie-cookie',
    thumb: gif, 
    full: gif,
    title: "UNTITLED (1999)",
    filename: "ARCHIVE_99_47C.tif",
    binaryData: "01011001 01101111 01110101 01110010 00100000 01101111 01110000 01101001 01101110 01101001 01101111 01101110 00100000 01101001 01110011 00100000 01100001 01110011 00100000 01110101 01110011 01100101 01100110 01110101 01101100 00100000 01100001 01110011 00100000 01100001 00100000 01100011 01101000 01101111 01100011 01101111 01101100 01100001 01110100 01100101 00100000 01100110 01100001 01110101 01100011 01100101 01110100 00100000 01101111 01101110 00100000 01100001 00100000 01110011 01110101 01101001 01100011 01101001 01100100 01100101 00100000 01101101 01100001 01100011 01101000 01101001 01101110 01100101",
    envKey: "VITE_IMAGE_KEY_COOKIE",
    decodedMessage: "your opinion is as useful as a chocolate teapot on a suicide mission"
  },
  {
    id: 'brian-pigeon',
    thumb: pete,
    full: pete,
    title: "UNTITLED (1999)",
    filename: "ARCHIVE_99_47D.tif",
    binaryData: "01011001 01101111 01110101 00100000 01101000 01100001 01110110 01100101 00100000 01110100 01101000 01100101 00100000 01100101 01101101 01101111 01110100 01101001 01101111 01101110 01100001 01101100 00100000 01101001 01101110 01110100 01100101 01101100 01101100 01101001 01100111 01100101 01101110 01100011 01100101 00100000 01101111 01100110 00100000 01100001 00100000 01100010 01100001 01100111 00100000 01101111 01100110 00100000 01100110 01100001 01101001 01101100 01100101 01100100 00100000 01100101 01111000 01110000 01100101 01110010 01101001 01101101 01100101 01101110 01110100 01110011",
    envKey: "VITE_IMAGE_KEY_PIGEON",
    decodedMessage: "you have the emotional intelligence of a failed toaster who still thinks it's an oven"
  }
];

const ImageGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [userThought, setUserThought] = useState('');
  const [attemptResult, setAttemptResult] = useState<{success: boolean; message: string} | null>(null);
  const [hasAttempted, setHasAttempted] = useState(false);
  const [inputError, setInputError] = useState<string | null>(null);

  const getKeyFromEnv = (envKey: string): string => {
    // For Vite, environment variables are exposed via import.meta.env
    // They must be prefixed with VITE_
    const key = import.meta.env[envKey] || '';
    return key;
  };

  const handleComment = () => {
    if (!selectedImage || hasAttempted) return;
    
    // Validate that there's actual input
    if (!userThought.trim()) {
      setInputError('Well it cannot be that bad, no thoughts?');
      return;
    }
    
    // Clear any previous input error
    setInputError(null);
    
    // Get the correct key from environment variables
    const correctKey = getKeyFromEnv(selectedImage.envKey);
    const isCorrect = userThought.toLowerCase().trim() === correctKey;
    
    setAttemptResult({
      success: isCorrect,
      message: isCorrect ? selectedImage.decodedMessage : "Wrong! well your thoughts are useless afterall"
    });
    
    setHasAttempted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserThought(e.target.value);
    // Clear input error when user starts typing again
    if (inputError) {
      setInputError(null);
    }
  };

  const handleModalClose = () => {
    setSelectedImage(null);
    setUserThought('');
    setAttemptResult(null);
    setHasAttempted(false);
    setInputError(null);
  };

  return (
    <div className="border-2 border-black p-3 bg-white">
      <h2 className="section-title">ARCHIVE PHOTOS (1999)</h2>
      <p className="text-xxs text-gray-500 italic mb-2">
        * Images from the year 1999. Some contain encrypted comments.
      </p>
      
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 gap-2 mb-2">
        {galleryImages.map((img) => (
          <div 
            key={img.id} 
            className="border border-black cursor-pointer hover:border-gray-500 transition-colors"
            onClick={() => {
              setSelectedImage(img);
              setUserThought('');
              setAttemptResult(null);
              setHasAttempted(false);
              setInputError(null);
            }}
          >
            <img 
              src={img.thumb} 
              alt={img.title}
              className="w-full h-auto filter grayscale"
            />
            <div className="text-xxs text-gray-300 text-center select-none">
              {img.filename}
            </div>
          </div>
        ))}
      </div>
      
      {/* Footer */}
      <div className="text-xxs text-gray-300 border-t border-gray-200 pt-2">
        <span>ROLL #47 • COMMENTS ENCRYPTED • DECODE AT YOUR OWN RISK</span>
      </div>
      
      {/* Image Detail Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={handleModalClose}
        >
          <div 
            className="bg-white border-4 border-black shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b-2 border-black p-4 flex justify-between items-start">
              <div>
                <span className="text-xxs bg-black text-white px-2 py-0.5 tracking-wider">
                  {selectedImage.filename}
                </span>
                <h3 className="font-bold text-lg font-serif mt-1">{selectedImage.title}</h3>
              </div>
              <button 
                onClick={handleModalClose}
                className="text-2xl leading-none hover:text-gray-600 ml-4"
              >
                ×
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-5">
              {/* Image */}
              <div className="mb-4 border-2 border-black p-2">
                <img 
                  src={selectedImage.full} 
                  alt={selectedImage.title}
                  className="w-full h-auto filter grayscale"
                />
              </div>
              
              {/* Encrypted Comment Section - Black and White, No Green */}
              <div className="mb-4 border border-black p-3 bg-gray-100 font-mono">
                <div className="text-xs mb-2 break-all text-gray-800">
                  {selectedImage.binaryData}
                </div>
                <p className="text-xxs text-gray-500">
                  ENCRYPTED COMMENT FOUND • DECODE WITH IMAGE KEY
                </p>
              </div>
              
              {/* Comment Input */}
              <div className="mb-4">
                <label className="block text-xs font-bold mb-1">leave a comment:</label>
                <input
                  type="text"
                  value={userThought}
                  onChange={handleInputChange}
                  disabled={hasAttempted}
                  placeholder="type your thoughts here..."
                  className={`w-full border-2 p-2 text-sm font-mono disabled:bg-gray-100 disabled:text-gray-400 ${
                    inputError ? 'border-red-600 bg-red-50' : 'border-black'
                  }`}
                />
                {inputError && (
                  <p className="text-red-600 text-xxs mt-1 italic">{inputError}</p>
                )}
              </div>
              
              {/* Comment Button */}
              {!hasAttempted ? (
                <button
                  onClick={handleComment}
                  className="w-full bg-black text-white py-3 text-sm border border-black hover:bg-gray-800 mb-4"
                >
                  POST COMMENT
                </button>
              ) : (
                <div className={`mb-4 p-4 text-center font-mono border ${
                  attemptResult?.success 
                    ? 'bg-white text-black border-black' 
                    : 'bg-white text-gray-400 border-gray-300'
                }`}>
                  {attemptResult?.message}
                </div>
              )}
              
              {/* Pixel Data (Red Herring) */}
              <div className="border-t border-gray-200 pt-3 text-xxs text-gray-400">
                <div className="grid grid-cols-8 gap-0 text-center mb-1">
                  {Array.from({ length: 47 }).map((_, i) => (
                    <span key={i} className="text-gray-300">
                      {Math.floor(Math.random() * 2)}
                    </span>
                  ))}
                </div>
                <p className="text-center">ADDITIONAL PIXEL DATA FOUND • NOISE RATIO: 47%</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;