import React, { useState, useEffect } from 'react';

interface NoResponse {
  reason: string;
}

const NoService: React.FC = () => {
  const [currentResponse, setCurrentResponse] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [refreshCount, setRefreshCount] = useState(0);

  const fetchNoResponse = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('https://naas.isalman.dev/no');
      const data: NoResponse = await response.json();
      setCurrentResponse(data.reason);
    } catch (err) {
      setError('failed to load. probably the no server is saying no.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNoResponse();
  }, [refreshCount]);

  const handleRefresh = () => {
    setRefreshCount(prev => prev + 1);
  };

  return (
    <div className="border-2 border-black p-3 bg-white">
      {/* Header */}
      <div className="border-b-2 border-black pb-2 mb-3">
        <h2 className="section-title text-lg mb-1">THE NO SERVICE</h2>
        <p className="text-xs text-gray-600 leading-tight">
          tired of being nice to your boss, your girlfriend, or even your parents?
        </p>
        <p className="text-xs text-gray-600 leading-tight">
          can't figure out how to say no? well don't worry cause we got you.
        </p>
      </div>

      {/* Main Content */}
      <div className="min-h-[100px] flex flex-col items-center justify-center mb-3 border border-gray-200 p-3 bg-gray-50">
        {isLoading ? (
          <div className="text-sm text-gray-400 italic">loading a no for you...</div>
        ) : error ? (
          <div className="text-sm text-red-600 italic">{error}</div>
        ) : (
          <div className="text-center">
            <span className="text-sm text-gray-500 block mb-1">try this:</span>
            <p className="text-lg font-bold italic font-serif">
              "{currentResponse}"
            </p>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="flex justify-center mb-3">
        <button
          onClick={handleRefresh}
          disabled={isLoading}
          className="bg-black text-white px-4 py-2 text-sm border border-black hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'LOADING...' : 'GIVE ME ANOTHER NO'}
        </button>
      </div>

      {/* Stats */}
      <div className="flex justify-between text-xxs text-gray-400 border-t border-gray-200 pt-2">
        <span>refreshes: {refreshCount}</span>
        <span className="opacity-30 hover:opacity-100">no's given: {refreshCount + 1}</span>
      </div>

      {/* Footer Warning */}
      <div className="mt-2 text-xxs text-gray-400 italic border-t border-gray-200 pt-2">
        <p>* we don't solve the consequences of using these no's. use wisely.</p>
        <p className="opacity-30 hover:opacity-100 mt-1">* api may also say no. it's thematic.</p>
      </div>

      {/* Hidden Agent Message */}
      <div className="text-xxs text-gray-200 select-none text-right mt-1">
        {currentResponse.includes('stock') && 'financial motivation detected'}
        {currentResponse.includes('options') && 'corporate resistance confirmed'}
        {currentResponse.length > 0 && ` • response #${refreshCount + 47}`}
      </div>
    </div>
  );
};

export default NoService;