import * as React from "react";

interface ContainerProps {
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  className = "",
  children,
}) => {
  return (
    <div className={`container mx-auto md:px-0 px-8 ${className}`}>
      {children}
    </div>
  );
};
