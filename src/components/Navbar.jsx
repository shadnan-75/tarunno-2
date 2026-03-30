import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Users, Calendar, Mail, Info } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/95 border-b-4 border-tks-blue/20 sticky top-0 z-50 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          
          {/* Logo Section - লোগোর রঙের গ্রাডিয়েন্ট টেক্সট */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-tks-blue to-tks-magenta rounded-full blur opacity-20 group-hover:opacity-100 transition duration-500"></div>
              <img 
                src="/logo.jpg" 
                alt="Logo" 
                className="relative w-14 h-14 rounded-full border-2 border-white shadow-md object-cover" 
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-tks-blue leading-none tracking-tight italic uppercase">তারুণ্য</span>
              <span className="text-[10px] font-bold text-tks-magenta tracking-[0.25em] uppercase">ক্রীড়া সংঘ</span>
            </div>
          </Link>

          {/* Desktop Navigation - ক্লিন অ্যান্ড প্রফেশনাল */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-tks-blue font-black text-sm uppercase transition-all tracking-wide relative group">
              হোম
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-tks-orange rounded-full transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-tks-blue font-black text-sm uppercase transition-all tracking-wide relative group">
              আমাদের সম্পর্কে
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-tks-magenta rounded-full transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/events" className="text-gray-700 hover:text-tks-blue font-black text-sm uppercase transition-all tracking-wide relative group">
              ইভেন্ট
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-tks-blue rounded-full transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/members" className="text-gray-700 hover:text-tks-blue font-black text-sm uppercase transition-all tracking-wide relative group">
              সদস্যবৃন্দ
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-tks-red rounded-full transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-tks-blue font-black text-sm uppercase transition-all tracking-wide relative group">
              যোগাযোগ
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-tks-orange rounded-full transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Mobile Button - লোগোর ম্যাজেন্টা কালার */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-tks-blue hover:bg-tks-blue/10 p-2 rounded-xl transition"
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - উজ্জ্বল এবং পরিষ্কার */}
      {isOpen && (
        <div className="md:hidden bg-white border-t-2 border-tks-blue/10 p-4 space-y-2 shadow-2xl animate-in slide-in-from-top-2">
          <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-4 px-4 py-4 text-tks-blue font-black rounded-xl hover:bg-gray-50 border-b border-gray-50">
            <Home className="text-tks-orange" size={20} /> হোম
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="flex items-center gap-4 px-4 py-4 text-tks-blue font-black rounded-xl hover:bg-gray-50 border-b border-gray-50">
            <Info className="text-tks-magenta" size={20} /> আমাদের সম্পর্কে
          </Link>
          <Link to="/events" onClick={() => setIsOpen(false)} className="flex items-center gap-4 px-4 py-4 text-tks-blue font-black rounded-xl hover:bg-gray-50 border-b border-gray-50">
            <Calendar className="text-tks-blue" size={20} /> ইভেন্ট
          </Link>
          <Link to="/members" onClick={() => setIsOpen(false)} className="flex items-center gap-4 px-4 py-4 text-tks-blue font-black rounded-xl hover:bg-gray-50 border-b border-gray-50">
            <Users className="text-tks-red" size={20} /> সদস্যবৃন্দ
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="flex items-center gap-4 px-4 py-4 text-tks-blue font-black rounded-xl hover:bg-gray-50 border-b border-gray-50">
            <Mail className="text-tks-orange" size={20} /> যোগাযোগ
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;