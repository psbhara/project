import React, { useState, useEffect } from 'react';
import { Filter, X, ZoomIn } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { galleryImages, getGalleryCategories } from '../data/gallery';

const GalleryPage: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const categories = ['All', ...getGalleryCategories()];
  const location = useLocation();
  
  // Get event filter from URL if available
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const eventParam = params.get('event');
    if (eventParam) {
      // If there's an event filter in the URL, try to find matching images
      const matchingImages = galleryImages.filter(img => 
        img.event.toLowerCase() === eventParam.toLowerCase()
      );
      if (matchingImages.length > 0) {
        // If we have matching images, set the filter to the category of the first matching image
        setFilter(matchingImages[0].category);
      }
    }
  }, [location]);

  // Filter images based on selected category
  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === filter);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary-900 text-white py-16">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-primary-100 max-w-3xl">
            Browse through photos from our events, workshops, and activities. Get a glimpse of what 
            CSI KRMU Chapter has been up to.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section bg-gray-50">
        <div className="container">
          {/* Category Filter */}
          <div className="mb-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center">
              <Filter size={20} className="text-primary-600 mr-2" />
              <span className="font-medium">Filter by Category:</span>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    filter === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map(image => (
              <div
                key={image.id}
                className="relative overflow-hidden bg-gray-200 rounded-lg group cursor-pointer aspect-square"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-3">
                    <ZoomIn size={24} className="mx-auto mb-2" />
                    <p className="text-sm font-medium">{image.event}</p>
                    <p className="text-xs">{new Date(image.date).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-700 mb-2">No images found</h3>
              <p className="text-gray-500">
                There are no images in the {filter} category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Enlarged view" 
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default GalleryPage;