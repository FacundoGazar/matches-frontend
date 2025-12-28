import { Link } from "react-router-dom";
import { ReactNode } from "react";
import "./HomeCard.css";

interface Props {
  title: string;
  icon: ReactNode;
  to: string;
}

export const HomeCard = ({ title, icon, to }: Props) => {
  return (
    <Link to={to} className="home-card">
      <div className="home-card-icon">{icon}</div>
      <div className="home-card-title">{title}</div>
    </Link>
  );
};
