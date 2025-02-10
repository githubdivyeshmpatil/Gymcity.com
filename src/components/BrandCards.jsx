import React from "react";

const BrandCards = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 p-4">
      {/* Card 1 */}
      <div className="flex items-center p-6 rounded-lg bg-gradient-to-r from-purple-200 to-blue-100 w-full md:w-1/3">
        <img src="/img/esn.png" alt="Nutrabay" className="w-32 h-32 mr-4" />
        <div>
          <h2 className="text-xl font-bold italic">ESN CREATINE</h2>
          <p className="text-sm">Visit the Brand Store &rarr;</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex items-center p-6 rounded-lg bg-gradient-to-r from-red-200 to-orange-100 w-full md:w-1/3">
        <img src="/img/big.jpg" alt="Athlab" className="w-32 h-32 mr-4" />
        <div>
          <h2 className="text-xl font-bold text-red-600">BIG DADDY CREATINE</h2>
          <p className="text-sm">Naturally Flavoured creatine &rarr;</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="flex items-center p-6 rounded-lg bg-gradient-to-r from-green-200 to-teal-100 w-full md:w-1/3">
        <img src="/img/re.png" alt="Authenticity" className="w-32 h-32 mr-4" />
        <div>
          <h2 className="text-xl font-bold">100% Authentic Products</h2>
          <p className="text-sm">Learn more &rarr;</p>
        </div>
      </div>
    </div>
   
    </>
  );
};

export default BrandCards;
