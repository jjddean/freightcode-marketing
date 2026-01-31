'use client';

import { useState } from 'react';

interface VideoEmbedProps {
    videoId: string;
    title: string;
    className?: string;
}

export function VideoEmbed({ videoId, title, className = '' }: VideoEmbedProps) {
    const [isPlaying, setIsPlaying] = useState(false);

    if (!videoId) {
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
                <img
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                />
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
        <div className={`relative w-full aspect-video ${className}`}>
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
            />
        </div>
    );
}
