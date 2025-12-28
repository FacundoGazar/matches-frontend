import { ReactNode } from "react";

interface DetailGridProps {
  children: ReactNode;
}

export const DetailGrid = ({ children }: DetailGridProps) => {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "180px 1fr",
      rowGap: "0.75rem",
      columnGap: "1rem",
      alignItems: "center"
    }}>
      {children}
    </div>
  );
};
