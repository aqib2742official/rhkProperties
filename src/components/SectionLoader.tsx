'use client';

interface SectionLoaderProps {
  minHeight?: string;
}

export function SectionLoader({ minHeight = '400px' }: SectionLoaderProps) {
  return (
    <div 
      className="w-full flex items-center justify-center" 
      style={{ minHeight }}
    >
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-accent/20 border-t-accent rounded-full animate-spin"></div>
        
        {/* Loading Text */}
        <p className="text-sm text-muted-foreground">Loading section...</p>
      </div>
    </div>
  );
}

