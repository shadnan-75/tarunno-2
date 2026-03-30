import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 border-t-4 border-tks-orange">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <div>
          <h2 className="text-2xl font-bold italic text-tks-orange">তারুণ্য ক্রীড়া সংঘ</h2>
          <p className="text-gray-400 mt-2">জাগো উচ্ছলতায়, বাঁচো তারুণ্যে। প্রতিষ্ঠা: ২০২৬।</p>
        </div>
        <div className="flex gap-8 text-gray-400">
          <a href="#" className="hover:text-white transition">শর্তাবলী</a>
          <a href="#" className="hover:text-white transition">প্রাইভেসি</a>
          <a href="#" className="hover:text-white transition">হেল্প</a>
        </div>
        <p className="text-gray-500 text-sm">Developed by Chyon</p>
      </div>
    </footer>
  );
};

export default Footer;