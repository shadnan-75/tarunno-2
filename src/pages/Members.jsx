import React from 'react';
import { Facebook, Mail, Instagram, ShieldCheck } from 'lucide-react';

const Members = () => {
  const members = [
    {
      id: 1,
      name: "সৌরভ হোসেন চয়ন",
      role: "প্রতিষ্ঠাতা ও সভাপতি",
      image: "/members/member1.jpg",
      fb: "#",
      mail: "mailto:example@gmail.com"
    },
    {
      id: 2,
      name: "আদনান সামি",
      role: "সাধারণ সম্পাদক",
      image: "/members/member2.jpg",
      fb: "#",
      mail: "mailto:example@gmail.com"
    },
    {
      id: 3,
      name: "রাফসান আহমেদ",
      role: "সাংগঠনিক সম্পাদক",
      image: "/members/member3.jpg",
      fb: "#",
      mail: "mailto:example@gmail.com"
    },
    {
      id: 4,
      name: "তানভীর হাসান",
      role: "কার্যনির্বাহী সদস্য",
      image: "/members/member4.jpg",
      fb: "#",
      mail: "mailto:example@gmail.com"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f0f2ff] py-16 px-6 font-bengali">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black text-tks-blue mb-2 tracking-tight">
            আমাদের <span className="text-tks-magenta">সদস্যবৃন্দ</span>
          </h1>
          <div className="h-1.5 w-24 bg-tks-orange mx-auto rounded-full"></div>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member) => (
            <div 
              key={member.id} 
              className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group"
            >
              
              {/* Member Image with smooth ring */}
              <div className="relative w-32 h-32 mb-6">
                <div className="absolute inset-0 bg-gradient-to-tr from-tks-blue to-tks-magenta rounded-full opacity-20 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-700"></div>
                <div className="absolute inset-1 bg-white rounded-full"></div>
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-full bg-gray-50 border border-gray-100"
                  onError={(e) => {e.target.src = `https://ui-avatars.com/api/?name=${member.name}&background=2D3192&color=fff`}}
                />
              </div>

              {/* Name & Role */}
              <h3 className="text-xl font-bold text-tks-blue mb-1">{member.name}</h3>
              <p className="text-tks-magenta font-black text-[10px] uppercase tracking-widest mb-6 px-3 py-1 bg-tks-magenta/5 rounded-full italic">
                {member.role}
              </p>

              {/* Social Options - মাউস নিলে ভেসে উঠবে */}
              <div className="flex gap-4 pt-4 border-t border-gray-50 w-full justify-center">
                <a href={member.fb} className="p-2.5 bg-blue-50 text-tks-blue rounded-xl hover:bg-tks-blue hover:text-white transition-all duration-300">
                  <Facebook size={18} />
                </a>
                <a href={member.mail} className="p-2.5 bg-orange-50 text-tks-orange rounded-xl hover:bg-tks-orange hover:text-white transition-all duration-300">
                  <Mail size={18} />
                </a>
                <a href="#" className="p-2.5 bg-magenta-50 text-tks-magenta rounded-xl hover:bg-tks-magenta hover:text-white transition-all duration-300">
                  <Instagram size={18} />
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;