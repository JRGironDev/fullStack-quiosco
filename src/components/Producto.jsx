import { formatearDinero } from "../helpers";
import useQuiosco from "../hooks/useQuiosco";

export default function Producto({ producto }) {
  const { handleClickModal, handleSetProducto } = useQuiosco();
  const { nombre, imagen, precio } = producto;

  return (
    <div className="border p-3 shadow bg-white">
      <img
        className="w-full"
        src={`/img/${imagen}.jpg`}
        alt={`imagen ${nombre}`}
      />
      <div className="p-5">
        <h3 className="text-xl">{nombre}</h3>

        <p className="mt-5 text-2xl text-amber-500 ">${precio}</p>

        <button
          type="button"
          onClick={() => {
            handleClickModal();
            handleSetProducto(producto);
          }}
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
        >
          Agregar
        </button>
      </div>
    </div>
  );
}
