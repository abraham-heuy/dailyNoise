import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t-2 border-black mt-8 pt-4 text-xs text-gray-600">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <p className="font-bold">THE DAILY NOISE</p>
          <p>123 Main Street</p>
          <p>Anytown. Don't know where</p>
        </div>
        <div className="text-center">
          <p>© 2026 The Daily Noise</p>
          <p>All rights reserved (probably)</p>
        </div>
        <div className="text-right">
          <p>Printed on recycled chaos</p>
          <p>Est. 1873 (give or take)</p>
        </div>
      </div>
      <div className="text-center mt-4 text-xs opacity-50">
        <span>⚠️ This newspaper has been optimized for Netscape Navigator. </span>
        <span>Please lower your expectations.</span>
      </div>
    </footer>
  );
};

export default Footer;