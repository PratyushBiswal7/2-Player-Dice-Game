// Button.js
import "../index.css";

function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 mt-2 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
