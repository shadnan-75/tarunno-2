import React from 'react';
import { Target, Heart, History } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-[#f0f2ff] py-16 px-6 font-bengali">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* বাম পাশের ইমেজ বা ডিজাইন সেকশন */}
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-tks-blue to-tks-magenta rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative bg-white p-8 rounded-[2rem] shadow-2xl border-t-8 border-tks-magenta overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform duration-500">
                <History size={120} className="text-tks-blue" />
              </div>
              <h3 className="text-xl font-black text-gray-300 uppercase tracking-widest mb-4">History</h3>
              <div className="w-20 h-2 bg-tks-orange rounded-full mb-8"></div>
              <div className="aspect-video bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex items-center justify-center">
                 <img src="/logo.jpg" alt="TKS Logo" className="w-32 h-32 opacity-80" />
              </div>
            </div>
          </div>

          {/* ডান পাশের টেক্সট সেকশন */}
          <div className="w-full md:w-1/2 space-y-8">
            <div>
              <h1 className="text-5xl font-black text-tks-blue mb-4 tracking-tight">
                আমাদের <span className="text-tks-magenta">যাত্রা</span>
              </h1>
              <div className="h-2 w-32 bg-tks-orange rounded-full mb-8"></div>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                ৯ জানুয়ারি ২০২৬ সালে চট্টগ্রামের একদল স্বপ্নবাজ তরুণের হাত ধরে 
                <span className="text-tks-blue font-bold"> "তারুণ্য ক্রীড়া সংঘ" </span> 
                এর যাত্রা শুরু হয়।আমাদের মূল লক্ষ্য শুধু সামাজিক সেবা, একটি সুশৃঙ্খল এবং মাদকমুক্ত সমাজ গড়ে তোলা।
              </p>
            </div>

            <div className="space-y-6">
              {/* পয়েন্ট ১ */}
              <div className="flex items-start gap-5 p-6 bg-white rounded-2xl shadow-sm border border-tks-blue/5 hover:shadow-md transition-shadow">
                <div className="bg-tks-red/10 p-3 rounded-xl text-tks-red">
                  <Target size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-tks-blue mb-1">লক্ষ্য</h4>
                  <p className="text-gray-600 font-medium">আগামী প্রজন্মের নেতৃত্ব তৈরি করা।</p>
                </div>
              </div>

              {/* পয়েন্ট ২ */}
              <div className="flex items-start gap-5 p-6 bg-white rounded-2xl shadow-sm border border-tks-blue/5 hover:shadow-md transition-shadow">
                <div className="bg-tks-orange/10 p-3 rounded-xl text-tks-orange">
                  <Heart size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-tks-blue mb-1">সামাজিক সেবা</h4>
                  <p className="text-gray-600 font-medium">সামাজিক সেবা ও ক্রীড়া চর্চার মাধ্যমে একতা তৈরি।</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;