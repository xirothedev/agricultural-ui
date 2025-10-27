'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ProductImageGalleryProps {
  images: string[];
  alt: string;
}

export default function ProductImageGallery({ images, alt }: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  const changeImage = (index: number) => {
    setSelectedImage(index);
  };

  return (
    <div>
      <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden mb-4">
        <Image
          src={images[selectedImage]}
          alt={alt}
          width={800}
          height={800}
          className="w-full h-full object-cover"
          unoptimized
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => changeImage(index)}
            className={`aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 transition-colors ${selectedImage === index
                ? 'border-gray-900'
                : 'border-transparent hover:border-gray-300'
              }`}
          >
            <Image
              src={image}
              alt={`${alt} view ${index + 1}`}
              width={200}
              height={200}
              className="w-full h-full object-cover"
              unoptimized
            />
          </button>
        ))}
      </div>
    </div>
  );
}
