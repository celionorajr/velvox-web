export function Button({ children, className = '', variant = 'default', ...props }) {
  const base = 'px-6 py-3 rounded-lg font-medium transition-colors duration-200';
  const variants = {
    default: 'bg-[#6C30BF] text-white hover:bg-[#5F2DA6]',
    outline: 'border border-[#6C30BF] text-[#6C30BF] hover:bg-[#f0e6ff]',
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}