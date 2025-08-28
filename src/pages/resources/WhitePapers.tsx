import React, { useState } from 'react';

// Data for the FAQ items, updated with your specific videos.
const faqItems = [
  {
    id: 1,
    title: 'Solar Dashboard Overview',
    description: 'Learn how to use TrackSo Solar IoT Platform to monitor and analyse energy generation and performance of all your solar power plants.',
    videoId: 'vI3R2-xIt2s', // Your first video
    thumbnailUrl: 'https://i.ytimg.com/vi/vI3R2-xIt2s/maxresdefault.jpg',
  },
  {
    id: 2,
    title: 'Download Energy Reports',
    description: 'Learn how to download daily/monthly/yearly energy generation reports for your solar power plants.',
    videoId: 'tOkhvsKXFwY', // Your second video
    thumbnailUrl: 'https://i.ytimg.com/vi/tOkhvsKXFwY/maxresdefault.jpg',
  },
];

const FAQs = () => {
  // State to keep track of the video that is currently playing
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className="bg-gray-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Watch our tutorials to get the most out of our platform.
          </p>
        </div>

        <div className="mt-12 space-y-16">
          {faqItems.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Text Content */}
              <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900">
                  {item.id}. {item.title}
                </h3>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Video Player Area */}
              <div className="md:w-1/2 w-full">
                <div className="relative aspect-video rounded-lg shadow-2xl overflow-hidden bg-black">
                  {/* Conditionally render the iframe or the thumbnail */}
                  {activeVideo === item.videoId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1&rel=0`}
                      title={item.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  ) : (
                    <div
                      className="relative w-full h-full cursor-pointer group"
                      onClick={() => setActiveVideo(item.videoId)}
                    >
                      <img
                        src={item.thumbnailUrl}
                        alt={`Thumbnail for ${item.title}`}
                        className="w-full h-full object-cover"
                      />
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-20">
                        <svg
                          className="w-20 h-20 text-white opacity-80 group-hover:opacity-100 transform group-hover:scale-110 transition-transform duration-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;