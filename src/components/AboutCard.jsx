const AboutCard = ({ icon: Icon, line1, line2, line3 }) => {
  return (
    <div className="w-80 h-44 md:h-48 p-5 md:p-10 border-2 border-gray-400 m-2 rounded-2xl">
      <Icon fontSize="large" />
      <h1 className="text-2xl my-1">{line1}</h1>
      <p className="text-gray-600 my-1 dark:text-gray-300">{line2}</p>
      <p className="text-gray-600 my-1 dark:text-gray-300">{line3}</p>
    </div>
  );
};

export default AboutCard;
