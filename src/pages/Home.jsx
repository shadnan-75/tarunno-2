import React from 'react';
import { Trophy, Users, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="font-bengali">
      {/* Hero Section with Logo Colors */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-tks-blue">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-tks-magenta rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-tks-orange rounded-full blur-3xl opacity-30"></div>

        <div className="relative z-10 text-center px-6">
          <img src="/logo.jpg" alt="TKS Logo" className="w-32 h-32 mx-auto rounded-full border-4 border-white shadow-2xl mb-8 animate-bounce" />
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            তারুণ্য <span className="text-tks-orange">ক্রীড়া</span> সংঘ
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            "সুস্থ দেহ, সুন্দর মন — ক্রীড়াই হোক জীবনের স্পন্দন" <br />
            মিরসরাই একঝাঁক তরুণের স্বপ্নের ঠিকানা।
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/events" className="bg-tks-orange hover:bg-white hover:text-tks-blue text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all flex items-center gap-2">
              ইভেন্ট দেখুন <ArrowRight size={20} />
            </Link>
            <Link to="/members" className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 px-8 py-4 rounded-full font-bold text-lg backdrop-blur-md transition-all">
              আমাদের সদস্যবৃন্দ
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="p-10 rounded-3xl bg-gray-50 border-b-8 border-tks-blue hover:shadow-2xl transition">
            <Trophy className="w-16 h-16 text-tks-blue mx-auto mb-6" />
            <h2 className="text-4xl font-black text-gray-800">১৫+</h2>
            <p className="text-gray-500 font-bold mt-2">আয়োজিত টুর্নামেন্ট</p>
          </div>
          <div className="p-10 rounded-3xl bg-gray-50 border-b-8 border-tks-magenta hover:shadow-2xl transition">
            <Users className="w-16 h-16 text-tks-magenta mx-auto mb-6" />
            <h2 className="text-4xl font-black text-gray-800">300+</h2>
            <p className="text-gray-500 font-bold mt-2">সক্রিয় সদস্য</p>
          </div>
          <div className="p-10 rounded-3xl bg-gray-50 border-b-8 border-tks-orange hover:shadow-2xl transition">
            <Calendar className="w-16 h-16 text-tks-orange mx-auto mb-6" />
            <h2 className="text-4xl font-black text-gray-800">১০+</h2>
            <p className="text-gray-500 font-bold mt-2">সামাজিক ইভেন্ট</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;