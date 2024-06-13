import React from 'react';
import { Data } from '../Data/Data';

const Card = () => {
  return (
    <div className=" bg-white container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Data.map((item) => (
          <div key={item.id} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            <div className="w-full h-60">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4 flex flex-col justify-between h-40">
              <h2 className="text-xl font-bold mb-2 text-[#495d83]">{item.title}</h2>
              <p className="text-gray-700 mb-2">Price: ${item.price.toLocaleString()}</p>
              <p className="text-gray-700 mb-2">Location: {item.location}</p>
              <p className="text-gray-700">Properties: {item.properties}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
