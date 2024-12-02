import { Link, useNavigate } from "react-router-dom";
import Pagination from "../Paginations/Pagination";

export default function PatientenTable({ pathname }) {
  const patients = [
    {
      name: "Janim Kim",
      age: 22,
      gender: "männlich",
      phone: "20220 102 45",
      lastData: "2024-06-11 10:03:58",
      glucose: "9.6mmol/L",
      performance: "Sendeleistung: 3",
      startTime: "28-05-2024 03:13:32",
      endTime: "11-06-2024 10:05:50",
      period: "14 Tag(e) 6 Std.",
      monitorStatus: "aktiv",
      status: "normal",
    },
    {
      name: "Janim Kim",
      age: 22,
      gender: "männlich",
      phone: "20220 102 45",
      lastData: "2024-06-11 10:03:58",
      glucose: "9.6mmol/L",
      performance: "Sendeleistung: 3",
      startTime: "28-05-2024 03:13:32",
      endTime: "11-06-2024 10:05:50",
      period: "14 Tag(e) 6 Std.",
      monitorStatus: "beendet",
      status: "normal",
    },
    {
      name: "Janim Kim",
      age: 22,
      gender: "männlich",
      phone: "20220 102 45",
      lastData: "2024-06-11 10:03:58",
      glucose: "9.6mmol/L",
      performance: "Sendeleistung: 3",
      startTime: "28-05-2024 03:13:32",
      endTime: "11-06-2024 10:05:50",
      period: "14 Tag(e) 6 Std.",
      monitorStatus: "beendet",
      status: "normal",
    },
    {
      name: "Kanim Kim",
      age: 22,
      gender: "männlich",
      phone: "20220 102 45",
      lastData: "2024-06-11 10:03:58",
      glucose: "9.6mmol/L",
      performance: "Sendeleistung: 3",
      startTime: "28-05-2024 03:13:32",
      endTime: "11-06-2024 10:05:50",
      period: "14 Tag(e) 6 Std.",
      monitorStatus: "OnGoing",
      status: "normal",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="">
      <h2 className="mb-4 text-lg font-semibold text-black md:text-2xl">
        Ausgewählte Patienten
      </h2>
      <div className="overflow-x-auto hideScrollBar">
        <table className="w-full text-sm text-left border-collapse table-auto whitespace-nowrap lg:whitespace-normal">
          <thead>
            <tr className="font-medium text-gray-600 bg-gray-100">
              <th className="px-3 py-4">Name und Details</th>
              <th className="px-3 py-4">Letzte Daten</th>
              <th className="px-3 py-4">Letzter Glucosewert</th>
              <th className="px-3 py-4 text-center">Zeit</th>
              <th className="px-3 py-4">Überwachungszeitraum</th>
              <th className="px-3 py-4">Monitor status</th>
              <th className="px-3 py-4">Status</th>
              <th className="px-3 py-4">Aktion</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr
                key={index}
                onClick={() => {
                  navigate("/dashboard/cgmreport");
                }}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-gray-100`}
              >
                {/* Name and Details */}
                <td className="px-1">
                  <div>
                    <div className="font-semibold text-black">
                      {patient.name}
                    </div>
                    <div className="flex flex-wrap items-center w-full text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <img src="/images/age.png" alt="" />{" "}
                        <span className="mx-1">{patient.age} Jahre</span>{" "}
                      </div>
                      <div className="flex items-center gap-1">
                        <img src="/images/gender.png" alt="" />{" "}
                        <span className="">{patient.gender}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <img src="/images/icons.png" alt="" />
                      {patient.phone}
                    </div>
                  </div>
                </td>

                {/* Letzte Daten */}
                <td className="flex flex-col gap-3 p-1 px-3">
                  <span>{patient.lastData}</span>{" "}
                  <span>Neueste Daten Nr..: 6855</span>
                </td>

                {/* Glucose */}
                <td className="p-4">
                  <span className="font-bold text-blue-600">
                    {patient.glucose}
                  </span>
                  <div className="text-sm text-gray-500">
                    {patient.performance}
                  </div>
                </td>

                {/* Zeit */}
                <td className="p-4">
                  <div>
                    Startzeit:{" "}
                    <span className="text-blue-700">{patient.startTime}</span>
                  </div>
                  <div>Beendet : {patient.endTime}</div>
                </td>

                {/* Überwachungszeitraum */}
                <td className="p-4">{patient.period}</td>

                {/* Monitor status */}
                <td className="p-4">
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className={`w-[7rem] text-center px-4 py-2 rounded-xl text-sm font-medium ${
                      patient.monitorStatus === "aktiv"
                        ? "bg-yellow-400 text-white"
                        : patient.monitorStatus === "OnGoing"
                        ? "bg-[#33d613] text-white"
                        : "bg-[#0480CA] text-white"
                    }`}
                  >
                    {patient.monitorStatus}
                  </button>
                </td>

                {/* Status */}
                <td className="p-4">
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="w-[6rem] text-center px-4 py-2 text-sm font-medium text-white bg-[#0480CA] rounded-xl"
                  >
                    {patient.status}
                  </button>
                </td>

                {/* Aktion */}
                <td className="p-4">
                  <label
                    htmlFor="my_modal_7"
                    onClick={(e) => e.stopPropagation()}
                    className=" flex items-center gap-2 w-[6rem] text-center px-4  py-2 text-sm font-medium bg-gray-500 rounded-xl text-gray-50 hover:bg-gray-400 "
                  >
                    <img src="/images/eye.png" alt="" /> Ansicht
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_7" className=" modal-toggle" />
      <div className="modal" role="dialog">
        <div className="text-center text-black bg-white modal-box">
          <h3 className="text-xl font-bold md:text-3xl">Anfrage senden</h3>

          <div className="border border-blue-600 w-[16rem] mx-auto rounded-2xl mt-4 py-2">
            <p className="font-semibold text-black ps-[1.6rem] text-start">
              Janim Kim
            </p>
            <div className="flex flex-wrap items-center ps-[1.6rem] w-full gap-5 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <img src="/images/age.png" alt="" />{" "}
                <span className="mx-1">22 Jahre</span>{" "}
              </div>
              <div className="flex items-center gap-1">
                <img src="/images/gender.png" alt="" />{" "}
                <span className="">männlich</span>
              </div>
            </div>
            <div className="flex items-center ps-[1.6rem] gap-1 mt-1 text-sm text-gray-500">
              <img src="/images/icons.png" alt="" />
              5436 3555 53653
            </div>
          </div>

          <p className="py-4 text-lg text-gray-500">
            Wir haben die Anfrage an den Patientenantrag gesendet, als die
            Anfrage akzeptiert wurde. Details werden automatisch angezeigt..
          </p>

          <button className="p-3 px-4 text-white bg-gray-500 rounded-lg">
            Anfrage erneut senden
          </button>
          <p className="mt-2 text-gray-600">0:59</p>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>

      {pathname === "dashboardpatienten" && <Pagination />}
    </div>
  );
}
