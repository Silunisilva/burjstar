import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'gold', // 'gold', 'outline-gold', 'dark', 'outline-white', 'whatsapp'
  size = 'md', // 'sm', 'md', 'lg'
  className = '',
  icon: Icon,
  iconPosition = 'right',
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg select-none disabled:opacity-50 disabled:cursor-not-allowed group';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2 gap-1.5 font-semibold',
    md: 'text-sm px-5 py-2.5 gap-2 font-semibold tracking-wide',
    lg: 'text-base px-7 py-3.5 gap-2.5 font-semibold tracking-wide shadow-md',
  };

  const variantStyles = {
    gold: 'bg-[#D89828] text-black hover:bg-[#E5AF4D] hover:shadow-gold-glow active:scale-[0.98]',
    'outline-gold': 'border border-[#D89828] text-[#D89828] hover:bg-[#D89828] hover:text-black active:scale-[0.98]',
    dark: 'bg-[#181818] text-white border border-neutral-800 hover:border-neutral-700 hover:bg-[#222222] active:scale-[0.98]',
    'outline-white': 'border border-white/30 text-white hover:bg-white hover:text-black active:scale-[0.98]',
    whatsapp: 'bg-[#25D366] text-white hover:bg-[#22bf5b] shadow-md active:scale-[0.98]',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.gold} ${className}`;

  const renderContent = () => (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
      )}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {renderContent()}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses} {...props}>
        {renderContent()}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {renderContent()}
    </button>
  );
}
