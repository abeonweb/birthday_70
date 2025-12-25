import React, { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Photo } from "@/types";
import Image from "next/image";

interface LightboxProps {
  photo: Photo;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  photo,
  onClose,
  onPrev,
  onNext,
}) => {
  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-100 flex flex-col bg-black/95 animate-in fade-in duration-300">
      {/* Header */}
      {photo.caption && (
        <div className="flex items-center justify-between p-4 text-white z-10">
          <span className="text-sm font-medium opacity-80">
            {photo.caption}
          </span>
          <button
            onClick={onClose}
            className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      )}

      {!photo.caption && (
        <div className="flex justify-end p-4 text-white z-10">
          <button
            onClick={onClose}
            className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      )}

      {/* Main Image */}
      <div className="flex-1 relative flex items-center justify-center p-4">
        {onPrev && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors z-20"
            aria-label="Previous"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
        )}

        <Image
          width={1200}
          height={600}
          src={photo.url}
          alt="Full size photo"
          className="max-w-full max-h-full object-contain shadow-2xl rounded-sm"
        />

        {onNext && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors z-20"
            aria-label="Next"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        )}
      </div>

      {/* Footer / Caption */}
      {photo.caption && (
        <div className="p-8 text-center bg-linear-to-t from-black to-transparent">
          <p className="text-white text-lg font-medium max-w-lg mx-auto italic">
            {photo.caption}
          </p>
          <p className="text-white/40 text-xs mt-4 uppercase tracking-widest">
            Tap outside or close to exit
          </p>
        </div>
      )}

      {!photo.caption && (
        <div className="p-4 text-center">
          <p className="text-white/40 text-xs uppercase tracking-widest">
            Tap outside or close to exit
          </p>
        </div>
      )}

      {/* Overlay to close by tapping background */}
      <div className="absolute inset-0 -z-1" onClick={onClose} />
    </div>
  );
};
