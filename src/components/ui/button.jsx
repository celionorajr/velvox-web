export function Button({ children, className = '', variant = 'default', ...props }) {
  const base = 'px-4 py-2 rounded-lg font-semibold';
  const variants = {
    default: 'bg-purple-700 text-white hover:bg-purple-800',
    outline: 'border border-purple-700 text-purple-700 hover:bg-purple-100',
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
