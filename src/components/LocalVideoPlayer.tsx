'use client';

import { useState } from 'react';

interface LocalVideoPlayerProps {
    src: string;
    title: string;
    className?: string;
    poster?: string;
}

export function LocalVideoPlayer({ src, title, className = '', poster }: LocalVideoPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false);

    if (!src) {
        return (
            <div className={`relative w-full aspect-video bg-gray-100 flex items-center justify-center ${className}`}>
                <p className="text-gray-400 text-xs">Video coming soon</p>
            </div>
        );
    }

    if (!isPlaying) {
        return (
            <button
                onClick={() => setIsPlaying(true)}
                className={`relative w-full aspect-video group cursor-pointer ${className}`}
                aria-label={`Play ${title}`}
            >
                {poster ? (
                    <img
                        src={poster}
                        alt={title}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                    />
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100" />
                )}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg">
                        <svg className="w-5 h-5 text-[#003057] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                </div>
            </button>
        );
    }

    return (
        <div className={`relative w-full aspect-video bg-black ${className}`}>
            <video
                src={src}
                title={title}
                controls
                autoPlay
                loop
                className="absolute inset-0 w-full h-full"
            >
                Your browser does not support the video tag.
            </video>
        </div>
    );
}
