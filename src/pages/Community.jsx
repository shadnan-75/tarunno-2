import React from 'react';

const photos = [
  { id: 1, title: "ফুটবল ম্যাচ", url: "https://picsum.photos/600/400?random=11" },
  { id: 2, title: "রক্তদান ক্যাম্প", url: "https://picsum.photos/600/400?random=12" },
  { id: 3, title: "পরিবেশ রক্ষা", url: "https://picsum.photos/600/400?random=13" },
  { id: 4, title: "সভাপতির সাথে আড্ডা", url: "https://picsum.photos/600/400?random=14" },
  { id: 5, title: "পুরস্কার বিতরণী", url: "https://picsum.photos/600/400?random=15" },
  { id: 6, title: "বার্ষিক পিকনিক", url: "https://picsum.photos/600/400?random=16" },
];

const Community = () => {
  return (
    <div className="py-16 bg-white px-6 font-bengali min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-black text-center text-tks-blue mb-4">আমাদের কমিউনিটি</h1>
        <p className="text-center text-gray-500 mb-12 italic">"স্মৃতিতে তারুণ্য ক্রীড়া সংঘ"</p>
        
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((photo) => (
            <div key={photo.id} className="relative group overflow-hidden rounded-2xl shadow-lg border-2 border-transparent hover:border-tks-magenta transition">
              <img src={photo.url} alt={photo.title} className="w-full object-cover group-hover:scale-105 transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
                <h4 className="text-white font-bold text-lg">{photo.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;