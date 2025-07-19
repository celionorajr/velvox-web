export function Button({ children, className = '', variant = 'default', ...props }) {
  const base = 'px-6 py-3 rounded-lg font-medium transition-colors duration-200';
  const variants = {
    default: 'bg-primary text-white hover:bg-primary-dark',
    outline: 'border border-primary text-primary hover:bg-primary/10',
    cta: 'bg-white text-primary-dark border border-primary-dark hover:bg-gray-50 hover:text-primary'
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}