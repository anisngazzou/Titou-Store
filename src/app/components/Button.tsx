// components/Button.js
const Button = ({ children, onClick, className = '', ...props } :any) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 rounded-full hover:bg-[#b2ac9c7d] bg-white font-semibold ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
