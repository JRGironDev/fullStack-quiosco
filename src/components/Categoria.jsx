/* eslint-disable react/prop-types */
import useQuiosco from "../hooks/useQuiosco";

export default function Categoria({ categoria }) {
  const { handleClickCategoria } = useQuiosco();
  const { icono, id, nombre } = categoria;
  return (
    <div className="flex items-center gap-7 w-100 p-4 hover:bg-amber-400 cursor-pointer">
      <img
        src={`/img/icono_${icono}.svg`}
        alt="imagen icono"
        className="w-10"
      />
      <button
        type="button"
        className="text-lg cursor-pointer truncate"
        onClick={handleClickCategoria}
      >
        {nombre}
      </button>
    </div>
  );
}
