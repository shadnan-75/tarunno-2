import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background with Logo Colors Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-tks-blue/80 via-tks-magenta/70 to-tks-red/80 z-10"></div>
        <img src="https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Banner" />
      </div>

      <div className="relative z-20 text-center text-white px-4">
        <img src="/image_fdc91e.jpg" className="w-24 h-24 mx-auto mb-6 rounded-full border-4 border-white shadow-2xl animate-bounce" alt="Logo" />
        <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter italic">
          জাগো উচ্ছলতায়, বাঁচো তারুণ্যে
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto">
          তারুণ্যের শক্তিতে আমরা গড়বো এক সুন্দর ও সুস্থ সমাজ। 
          <span className="block mt-2 font-bold text-tks-orange">প্রতিষ্ঠা: ৯ জানুয়ারি ২০২৬</span>
        </p>
        
        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-white text-tks-blue px-8 py-3 rounded-full font-bold text-lg hover:bg-tks-orange hover:text-white transition-all shadow-xl">
            সদস্য হন
          </button>
          <button className="border-2 border-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-tks-blue transition-all">
            আমাদের ইভেন্ট
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;