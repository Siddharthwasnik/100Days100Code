import { useState } from 'react';

export default function ButtonDemo() {
  const [clickCount, setClickCount] = useState({
    primary: 0,
    secondary: 0,
    success: 0,
    danger: 0,
    warning: 0,
    info: 0,
    light: 0,
    dark: 0,
    outline: 0,
    link: 0,
    small: 0,
    large: 0,
  });

  const handleClick = (variant) => {
    setClickCount(prev => ({
      ...prev,
      [variant]: prev[variant] + 1
    }));
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Reusable Button Component with Variants</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">Color Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" onClick={() => handleClick('primary')}>
              Primary {clickCount.primary > 0 && `(${clickCount.primary})`}
            </Button>
            <Button variant="secondary" onClick={() => handleClick('secondary')}>
              Secondary {clickCount.secondary > 0 && `(${clickCount.secondary})`}
            </Button>
            <Button variant="success" onClick={() => handleClick('success')}>
              Success {clickCount.success > 0 && `(${clickCount.success})`}
            </Button>
            <Button variant="danger" onClick={() => handleClick('danger')}>
              Danger {clickCount.danger > 0 && `(${clickCount.danger})`}
            </Button>
            <Button variant="warning" onClick={() => handleClick('warning')}>
              Warning {clickCount.warning > 0 && `(${clickCount.warning})`}
            </Button>
            <Button variant="info" onClick={() => handleClick('info')}>
              Info {clickCount.info > 0 && `(${clickCount.info})`}
            </Button>
            <Button variant="light" onClick={() => handleClick('light')}>
              Light {clickCount.light > 0 && `(${clickCount.light})`}
            </Button>
            <Button variant="dark" onClick={() => handleClick('dark')}>
              Dark {clickCount.dark > 0 && `(${clickCount.dark})`}
            </Button>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Style Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" outline onClick={() => handleClick('outline')}>
              Outline {clickCount.outline > 0 && `(${clickCount.outline})`}
            </Button>
            <Button variant="primary" link onClick={() => handleClick('link')}>
              Link {clickCount.link > 0 && `(${clickCount.link})`}
            </Button>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Size Variants</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <Button variant="primary" size="sm" onClick={() => handleClick('small')}>
              Small {clickCount.small > 0 && `(${clickCount.small})`}
            </Button>
            <Button variant="primary" onClick={() => handleClick('primary')}>
              Default
            </Button>
            <Button variant="primary" size="lg" onClick={() => handleClick('large')}>
              Large {clickCount.large > 0 && `(${clickCount.large})`}
            </Button>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">State Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" disabled>
              Disabled
            </Button>
            <Button variant="primary" isLoading>
              Loading
            </Button>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">With Icons</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" iconLeft={<IconHeart />}>
              Like
            </Button>
            <Button variant="success" iconRight={<IconArrowRight />}>
              Continue
            </Button>
            <Button variant="secondary" iconOnly={<IconSettings />} aria-label="Settings" />
          </div>
        </section>
      </div>
    </div>
  );
}

function Button({
  children,
  variant = "primary",
  size = "md",
  outline = false,
  link = false,
  disabled = false,
  isLoading = false,
  iconLeft = null,
  iconRight = null,
  iconOnly = null,
  className = "",
  onClick,
  ...props
}) {
  // Base styles applied to all buttons
  const baseStyles = "inline-flex items-center justify-center font-medium rounded focus:outline-none transition duration-150 ease-in-out";
  
  // Size variants
  const sizeStyles = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-4 py-2",
    lg: "text-base px-6 py-3"
  };
  
  // Color variants
  const variantStyles = {
    primary: outline 
      ? "border border-blue-600 text-blue-600 hover:bg-blue-50" 
      : link 
        ? "text-blue-600 hover:underline" 
        : "bg-blue-600 text-white hover:bg-blue-700",
    secondary: outline 
      ? "border border-gray-600 text-gray-600 hover:bg-gray-50" 
      : link 
        ? "text-gray-600 hover:underline" 
        : "bg-gray-600 text-white hover:bg-gray-700",
    success: outline 
      ? "border border-green-600 text-green-600 hover:bg-green-50" 
      : link 
        ? "text-green-600 hover:underline" 
        : "bg-green-600 text-white hover:bg-green-700",
    danger: outline 
      ? "border border-red-600 text-red-600 hover:bg-red-50" 
      : link 
        ? "text-red-600 hover:underline" 
        : "bg-red-600 text-white hover:bg-red-700",
    warning: outline 
      ? "border border-yellow-500 text-yellow-600 hover:bg-yellow-50" 
      : link 
        ? "text-yellow-600 hover:underline" 
        : "bg-yellow-500 text-white hover:bg-yellow-600",
    info: outline 
      ? "border border-blue-400 text-blue-500 hover:bg-blue-50" 
      : link 
        ? "text-blue-500 hover:underline" 
        : "bg-blue-400 text-white hover:bg-blue-500",
    light: outline 
      ? "border border-gray-300 text-gray-700 hover:bg-gray-50" 
      : link 
        ? "text-gray-700 hover:underline" 
        : "bg-gray-200 text-gray-800 hover:bg-gray-300",
    dark: outline 
      ? "border border-gray-800 text-gray-800 hover:bg-gray-50" 
      : link 
        ? "text-gray-800 hover:underline" 
        : "bg-gray-800 text-white hover:bg-gray-900"
  };
  
  // State styles
  const disabledStyles = "opacity-60 cursor-not-allowed pointer-events-none";
  const loadingStyles = "relative !text-transparent";
  
  // Icon styles
  const iconOnlyStyles = iconOnly ? `${size === 'sm' ? 'p-1' : size === 'lg' ? 'p-3' : 'p-2'} aspect-square` : '';
  
  // Combine all the styles
  const buttonStyles = `
    ${baseStyles}
    ${sizeStyles[size]}
    ${variantStyles[variant]}
    ${disabled ? disabledStyles : ''}
    ${isLoading ? loadingStyles : ''}
    ${iconOnlyStyles}
    ${link ? 'shadow-none p-0' : ''}
    ${className}
  `.trim();

  return (
    <button 
      className={buttonStyles}
      disabled={disabled || isLoading}
      onClick={onClick}
      {...props}
    >
      {isLoading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
              fill="none"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </span>
      )}
      
      {iconLeft && <span className="mr-2">{iconLeft}</span>}
      {iconOnly || children}
      {iconRight && <span className="ml-2">{iconRight}</span>}
    </button>
  );
}

// Simple icon components for demo
function IconHeart() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  );
}

function IconArrowRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
}

function IconSettings() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
    </svg>
  );
}