import { CheckCircle } from "lucide-react";

export type ServiceProps = {
  icon: string;
  title: string;
  desc: string;
  points: string[];
};

const ServiceCard = ({ icon, title, desc, points }: ServiceProps) => {
  return (
    <div className="bg-gray-50 p-8 rounded-lg text-justify">
      <div className="text-center">
        <div className="text-3xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
      </div>
      <p className="text-gray-600">{desc}</p>
      <ul className="text-sm text-gray-600 space-y-2 mt-3">
        {points.map((point, index) => (
          <li key={index} className="flex items-center">
            <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
