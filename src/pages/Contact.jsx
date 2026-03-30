import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // এখানে আপনার EmailJS এর সার্ভিস আইডি, টেম্পলেট আইডি এবং পাবলিক কি বসাতে হবে
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(() => alert("আপনার মেসেজটি সফলভাবে পাঠানো হয়েছে!"), (error) => alert("দুঃখিত, মেসেজটি পাঠানো যায়নি।"));
  };

  return (
    <div className="min-h-screen bg-[#f0f2ff] font-bengali py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-0 rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        
        {/* Contact Info Card */}
        <div className="bg-gradient-to-br from-tks-blue via-tks-magenta to-tks-red p-12 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-black mb-6 tracking-tight">যোগাযোগ করুন</h2>
            <p className="opacity-90 mb-10 text-lg leading-relaxed italic font-medium">
              "তারুণ্যের উচ্ছলতায় আমাদের সাথে যুক্ত হোন। যেকোনো প্রয়োজনে আমাদের মেসেজ দিন।"
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-5 group">
                <div className="bg-white/20 p-4 rounded-2xl shadow-inner"><MapPin className="text-tks-orange" /></div>
                <span className="font-bold text-lg"> মিরসরাই, চট্টগ্রাম, বাংলাদেশ</span>
              </div>
              <div className="flex items-center gap-5 group">
                <div className="bg-white/20 p-4 rounded-2xl shadow-inner"><Phone className="text-tks-orange" /></div>
                <span className="font-bold text-lg">+8801619965653</span>
              </div>
              <div className="flex items-center gap-5 group">
                <div className="bg-white/20 p-4 rounded-2xl shadow-inner"><Mail className="text-tks-orange" /></div>
                <span className="font-bold text-lg text-wrap">info@tarunyo.com</span>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-sm font-black opacity-80 tracking-[0.2em] uppercase">তারুণ্য ক্রীড়া সংঘ © ২০২৬</p>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white p-12">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              {/* লেবেলের কালার tks-blue করা হয়েছে যাতে পরিষ্কার বোঝা যায় */}
              <label className="block text-tks-blue font-black mb-2 uppercase text-xs tracking-wider">আপনার নাম</label>
              <input 
                type="text" 
                name="user_name" 
                required 
                className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:ring-2 focus:ring-tks-blue focus:border-tks-blue outline-none transition font-bold text-gray-800 placeholder:text-gray-400" 
                placeholder="আপনার নাম লিখুন" 
              />
            </div>
            <div>
              <label className="block text-tks-blue font-black mb-2 uppercase text-xs tracking-wider">ইমেইল ঠিকানা</label>
              <input 
                type="email" 
                name="user_email" 
                required 
                className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:ring-2 focus:ring-tks-magenta focus:border-tks-magenta outline-none transition font-bold text-gray-800 placeholder:text-gray-400" 
                placeholder="example@mail.com" 
              />
            </div>
            <div>
              <label className="block text-tks-blue font-black mb-2 uppercase text-xs tracking-wider">বার্তা লিখুন</label>
              <textarea 
                name="message" 
                rows="5" 
                required 
                className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:ring-2 focus:ring-tks-orange focus:border-tks-orange outline-none transition font-bold text-gray-800 placeholder:text-gray-400 resize-none" 
                placeholder="আপনার কথাগুলো এখানে লিখুন..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-tks-orange text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-tks-blue shadow-xl transition-all duration-300 active:scale-95"
            >
              মেসেজ পাঠান <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;