import React from 'react';

export default function SectionHeading({
  badge,
  title,
  titleHighlight,
  description,
  align = 'center', // 'left', 'center', 'right'
  theme = 'dark', // 'dark' or 'light'
  className = ''
}) {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto'
  }[align] || 'text-center items-center mx-auto';

  return (
    <div className={`flex flex-col max-w-3xl mb-12 sm:mb-16 ${alignClass} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.25em] mb-4 border shadow-sm ${
          theme === 'light'
            ? 'bg-[#D89828]/15 text-[#946317] border-[#D89828]/40'
            : 'bg-[#D89828]/15 text-[#D89828] border-[#D89828]/40'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#D89828] animate-pulse"></span>
          <span>{badge}</span>
        </div>
      )}
      
      <h2 className={`text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight leading-[1.18] ${
        theme === 'light' ? 'text-neutral-900' : 'text-white'
      }`}>
        {title}{' '}
        {titleHighlight && (
          <span className="font-serif italic font-medium text-gold-gradient block sm:inline">
            {titleHighlight}
          </span>
        )}
      </h2>

      {description && (
        <p className={`mt-4 text-sm sm:text-base leading-relaxed font-sans font-normal max-w-2xl ${
          theme === 'light' ? 'text-neutral-700' : 'text-gray-200'
        }`}>
          {description}
        </p>
      )}
    </div>
  );
}
