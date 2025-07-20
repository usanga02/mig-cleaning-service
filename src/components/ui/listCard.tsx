type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ListCard = ({ icon, title, description }: Props) => {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        {icon}
        <div>
          <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
          <p className="text-gray-600 text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
