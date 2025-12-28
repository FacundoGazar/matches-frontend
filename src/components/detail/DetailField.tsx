import { ReactNode } from "react";

interface DetailFieldProps {
  label: string;
  value: ReactNode;
}

export const DetailField = ({ label, value }: DetailFieldProps) => {
  return (
    <>
      <span style={{ fontWeight: 600, color: "#555" }}>{label}</span>
      <span>{value}</span>
    </>
  );
};
