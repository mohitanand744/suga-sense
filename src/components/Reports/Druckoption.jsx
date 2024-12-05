import React from "react";

const Druckoption = () => {
  const data = [
    { date: "21-05-2024", duration: "24h0min", hyper: "0%", hypo: "6.06%" },
    { date: "22-05-2024", duration: "24h0min", hyper: "30%", hypo: "0%" },
    { date: "23-05-2024", duration: "24h0min", hyper: "0%", hypo: "0%" },
    { date: "24-05-2024", duration: "24h0min", hyper: "0%", hypo: "0%" },
    { date: "25-05-2024", duration: "24h0min", hyper: "0%", hypo: "0%" },
    { date: "26-05-2024", duration: "24h0min", hyper: "0%", hypo: "0%" },
    { date: "27-05-2024", duration: "24h0min", hyper: "0%", hypo: "0%" },
  ];

  return (
    <div className="py-4 ">
      <div className="overflow-auto hideScrollBar">
        <table className="w-full text-black border-gray-300 table-auto whitespace-nowrap">
          <thead>
            <tr className="text-left bg-white rounded-xl">
              <th className="p-2 py-4 text-center ">Datum</th>
              <th className="p-2 py-4 text-center ">Überwachungsdauer</th>
              <th className="hidden p-2 py-4 text-center md:block">
                Prozentsatz der Hyperglykämie
              </th>
              <th className="p-2 py-4 text-center ">Hypoglycemia Percent</th>
              <th className="p-2 py-4 text-center ">Option</th>
              <th className="p-2 py-4 text-center ">Wählen</th>
            </tr>
          </thead>
          <tbody className="">
            {data.map((row, index) => (
              <tr key={index} className="text-sm hover:bg-gray-50">
                <td className="px-2 py-5 text-center">{row.date}</td>
                <td className="px-2 py-5 text-center">{row.duration}</td>
                <td className="hidden px-2 py-5 text-center md:block">
                  {row.hyper}
                </td>
                <td className="px-2 py-5 text-center">{row.hypo}</td>
                <td className="px-2 py-5 text-center">
                  <button className="text-blue-500">Vorschau</button>
                </td>
                <td className="flex items-center justify-center px-2 py-5">
                  <input
                    type="checkbox"
                    className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-blue-600 bg-gray-300 rounded-md appearance-none checked:after:content-['✓'] checked:after:text-white flex justify-center items-center  checked:bg-[#0480CA]"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Druckoption;
