"use client";

import React, { useState, useCallback } from "react";
import { PhotoGroup, Photo } from "@/types";
import { Lightbox } from "@/components/Lightbox";
import Image from "next/image";

interface GalleryProps {
  groups: PhotoGroup[];
}

export const Gallery: React.FC<GalleryProps> = ({ groups }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [currentIndex, setCurrentIndex] = useState<{
    groupIdx: number;
    photoIdx: number;
  } | null>(null);

  const openLightbox = (groupIdx: number, photoIdx: number) => {
    setCurrentIndex({ groupIdx, photoIdx });
    setSelectedPhoto(groups[groupIdx].photos[photoIdx]);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
    setCurrentIndex(null);
  };

  const navigate = useCallback(
    (direction: "prev" | "next") => {
      if (!currentIndex) return;

      let { groupIdx, photoIdx } = currentIndex;

      if (direction === "next") {
        if (photoIdx < groups[groupIdx].photos.length - 1) {
          photoIdx++;
        } else if (groupIdx < groups.length - 1) {
          groupIdx++;
          photoIdx = 0;
        } else {
          // Loop to start
          groupIdx = 0;
          photoIdx = 0;
        }
      } else {
        if (photoIdx > 0) {
          photoIdx--;
        } else if (groupIdx > 0) {
          groupIdx--;
          photoIdx = groups[groupIdx].photos.length - 1;
        } else {
          // Loop to end
          groupIdx = groups.length - 1;
          photoIdx = groups[groupIdx].photos.length - 1;
        }
      }

      setCurrentIndex({ groupIdx, photoIdx });
      setSelectedPhoto(groups[groupIdx].photos[photoIdx]);
    },
    [currentIndex, groups]
  );

  return (
    <div className="space-y-12">
      {groups.map((group, groupIdx) => (
        <div key={groupIdx} className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="h-1px flex-1 bg-stone-200"></div>
            <h3 className="text-lg font-bold text-stone-500 uppercase tracking-widest text-center">
              {group.category}
            </h3>
            <div className="h-px flex-1 bg-stone-200"></div>
          </div>

          <div className="grid grid-cols-3 gap-2 px-1">
            {group.photos.map((photo, photoIdx) => (
              <button
                key={photo.id}
                onClick={() => openLightbox(groupIdx, photoIdx)}
                className="aspect-square relative overflow-hidden rounded-md group active:scale-95 transition-transform"
              >
                <Image
                  width={400}
                  height={400}
                  src={photo.url}
                  alt="Photo"
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      ))}

      <p className="text-center text-stone-400 text-sm italic mt-8">
        Tap any photo to enlarge
      </p>

      {selectedPhoto && (
        <Lightbox
          photo={selectedPhoto}
          onClose={closeLightbox}
          onPrev={() => navigate("prev")}
          onNext={() => navigate("next")}
        />
      )}
    </div>
  );
};
