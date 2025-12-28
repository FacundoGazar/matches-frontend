import { ReactNode } from "react";

interface DetailCardProps {
  title: string;
  children: ReactNode;
}

export const DetailCard = ({ title, children }: DetailCardProps) => {
  return (
    <div style={{
      maxWidth: "700px",
      margin: "0 auto",
      padding: "1.5rem",
      borderRadius: "8px",
      backgroundColor: "#fff",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
    }}>
      <h2 style={{ marginBottom: "1rem", borderBottom: "1px solid #eee" }}>
        {title}
      </h2>
      {children}
    </div>
  );
};
