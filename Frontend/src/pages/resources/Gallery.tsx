import React from "react";
import Footer from "@/components/Footer";
import { galleryImages } from "@/data/galleryData";

const Gallery = () => {
  // An array to hold your gallery image data. This makes it easy to add or remove images.

  return (
    <>
      <div className="w-full bg-white text-gray-900">
        <div className="container mx-auto px-6 py-16 pt-24">
          {/* --- 1. Page Header --- */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
              Our Project Gallery
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of our high-quality installations, advanced monitoring
              solutions, and the dedicated teams that make it all happen.
            </p>
          </div>

          {/* --- 2. Image Grid --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
                {/* Overlay with Title */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                  <h3 className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    {image.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
