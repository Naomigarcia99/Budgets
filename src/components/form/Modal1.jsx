import React from "react";
import Info from "../../assets/images/info.png";
import { useAppContext } from "../../context/AppContext";

export default function Modal1() {
  const { ShowModal1, openModal1, CloseModal1 } = useAppContext();

  return (
    <div>
      <button
        className="btn-xs btn-circle bg-white flex justify-center items-center"
        onClick={ShowModal1}
      >
        <img src={Info} width={15} />
      </button>
      {openModal1 && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded-2xl shadow-lg max-w-lg w-full">
            <h1 className="text-2xl font-bold text-black mb-10">
              Nombre de pàgines
            </h1>
            <p className="text-black">
              Afegeix les pàgines que necessitis per a dur a terme el teu
              projecte.
            </p>
            <p className="text-black">El cost de cada pàgina és de 30€.</p>
            <button
              className="btn btn-circle bg-green-500  text-white mt-10"
              onClick={CloseModal1}
            >
              ✘
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
