interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className = "", ...props }: ContainerProps) {
  return (
    <div 
      className={`container py-24 ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
}