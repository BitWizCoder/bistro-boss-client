const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center w-60 mx-auto my-5">
      <p className="text-yellow-600">{subHeading}</p>
      <h3 className="border-y-4 py-2 my-2 text-2xl">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
