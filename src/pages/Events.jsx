import React from 'react';
import { Calendar, MapPin, Users, TreeDeciduous, GraduationCap, Heart } from 'lucide-react';

const Events = () => {
  const events = [
    {
      id: 1,
      title: "মিরসরাই সবুজায়ন কর্মসূচি",
      desc: "পরিবেশ রক্ষায় মিরসরাই  সরকারি কলেজ এলাকায় ৫০০০ বৃক্ষরোপণ অভিযান।",
      date: "১৫ জুন, ২০২৬",
      location: "মিরসরাই কলেজ রোড",
      type: "পরিবেশ",
      icon: <TreeDeciduous size={32} className="text-tks-blue" />,
      borderColor: "border-tks-blue"
    },
    {
      id: 2,
      title: "দরিদ্র শিক্ষার্থীদের শিক্ষা সহায়তা",
      desc: "এলাকার মেধাবী কিন্তু অস্বচ্ছল শিক্ষার্থীদের মাঝে বিনামূল্যে বই ও শিক্ষা উপকরণ বিতরণ।",
      date: "০১ জানুয়ারি, ২০২৬",
      location: "সংঘ কার্যালয়, মিরসরাই",
      type: "শিক্ষা",
      icon: <GraduationCap size={32} className="text-tks-magenta" />,
      borderColor: "border-tks-magenta"
    },
    {
      id: 3,
      title: "ফ্রি মেডিকেল ক্যাম্প ও রক্তদান",
      desc: "বিশেষজ্ঞ ডাক্তারদের মাধ্যমে এলাকার মানুষের জন্য বিনামূল্যে স্বাস্থ্য পরীক্ষা।",
      date: "২৬ মার্চ, ২০২৬",
      location: "মিরসরাই প্রাইমারি স্কুল মাঠ",
      type: "সেবা",
      icon: <Heart size={32} className="text-tks-red" />,
      borderColor: "border-tks-red"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f0f2ff] py-16 px-6 font-bengali">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-tks-blue mb-4 tracking-tight">
            আমাদের <span className="text-tks-magenta">কার্যক্রম</span>
          </h1>
          <div className="h-2 w-32 bg-tks-orange mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 text-lg font-medium">
            তারুণ্য ক্রীড়া সংঘের সকল সামাজিক ও জনকল্যাণমূলক কর্মকাণ্ডের তালিকা।
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div 
              key={event.id} 
              className={`bg-white rounded-[2.5rem] p-8 shadow-xl border-t-8 ${event.borderColor} hover:translate-y-[-10px] transition-all duration-300 group`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="bg-gray-50 p-4 rounded-2xl group-hover:bg-tks-blue/5 transition-colors">
                  {event.icon}
                </div>
                <span className="bg-tks-orange/10 text-tks-orange px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                  {event.type}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-tks-blue mb-3 leading-tight">
                {event.title}
              </h3>
              
              <p className="text-gray-500 mb-6 font-medium text-sm leading-relaxed">
                {event.desc}
              </p>

              <div className="space-y-3 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3 text-gray-600 font-bold text-sm">
                  <Calendar size={18} className="text-tks-magenta" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 font-bold text-sm">
                  <MapPin size={18} className="text-tks-red" />
                  <span>{event.location}</span>
                </div>
              </div>

              <button className="w-full mt-8 bg-gradient-to-r from-tks-blue to-tks-magenta text-white font-bold py-3.5 rounded-2xl shadow-lg hover:shadow-tks-blue/30 transition-all active:scale-95">
                অংশগ্রহণ করুন
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;