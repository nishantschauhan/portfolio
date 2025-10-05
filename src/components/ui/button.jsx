// src/components/ui/button.jsx
export function Button({ children, className, ...props }) {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
