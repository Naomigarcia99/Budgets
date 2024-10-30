import React from "react";
import Info from "../../assets/images/info.png";
import { useAppContext } from "../../context/AppContext";

export default function Modal2() {
  const { ShowModal2, CloseModal2, openModal2 } = useAppContext();

  return (
    <div>
      <button
        className="btn-xs btn-circle bg-white flex justify-center items-center"
        onClick={ShowModal2}
      >
        <img src={Info} width={15} />
      </button>
      {openModal2 && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded-2xl shadow-xl max-w-lg w-full">
            <h1 className="text-2xl font-bold text-black mb-10">
              Nombre de llenguatges
            </h1>
            <p className="text-black">
              Afegeix els llenguatges que tindrà el teu projecte.
            </p>
            <p className="text-black">El cost de cada llenguatge és de 30€.</p>
            <button
              className="btn btn-circle bg-green-500  text-white mt-10"
              onClick={CloseModal2}
            >
              ✘
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
