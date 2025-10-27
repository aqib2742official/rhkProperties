import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ImageSkeleton } from '../ImageSkeleton'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

interface ImageWithFallbackProps {
  src: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
  quality?: number;
  fill?: boolean;
  sizes?: string;
  loading?: 'lazy' | 'eager';
}

export function ImageWithFallback({ 
  src, 
  alt = '', 
  className, 
  priority = false,
  quality = 75,
  fill = false,
  sizes,
  style,
  loading
}: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleError = () => {
    setDidError(true)
    setIsLoading(false)
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  if (didError) {
    return (
      <div
        className={`inline-block bg-gray-100 dark:bg-gray-800 text-center align-middle ${className ?? ''}`}
        style={{
          ...style,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img src={ERROR_IMG_SRC} alt="Error loading image" data-original-url={src} />
      </div>
    )
  }

  if (fill) {
    return (
      <>
        {mounted && isLoading && (
          <div className="absolute inset-0">
            <ImageSkeleton className="w-full h-full" />
          </div>
        )}
        <Image
          src={src}
          alt={alt}
          fill
          className={className}
          style={{...style, objectFit: 'cover'}}
          priority={priority}
          quality={quality}
          sizes={sizes || '100vw'}
          onError={handleError}
          onLoad={handleLoad}
          loading={loading}
        />
      </>
    )
  }

  return (
    <>
      {mounted && isLoading && (
        <div className="absolute inset-0">
          <ImageSkeleton className="w-full h-full" />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        width={800}
        height={600}
        className={className}
        style={{...style, width: '100%', height: '100%', objectFit: 'cover'}}
        priority={priority}
        quality={quality}
        sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
        onError={handleError}
        onLoad={handleLoad}
        loading={loading}
      />
    </>
  )
}
