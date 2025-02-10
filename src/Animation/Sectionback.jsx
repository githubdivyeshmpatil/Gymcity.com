const Sectionback = ({ imageUrl, children }) => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="   p-6 rounded-lg text-center rajdhani-font">
        {children}
      </div>
    </div>
  );
};

export default Sectionback;
