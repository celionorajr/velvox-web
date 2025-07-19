export function Button({ 
  children, 
  className = '', 
  variant = 'default', 
  onClick, 
  ...props 
}) {
  const base = 'px-6 py-3 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary';
  const variants = {
    default: 'bg-primary text-white hover:bg-primary-dark',
    outline: 'border border-primary text-primary hover:bg-purple-50',
    cta: 'bg-white text-primary-dark border border-primary-dark hover:bg-gray-50 hover:text-primary'
  };

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}