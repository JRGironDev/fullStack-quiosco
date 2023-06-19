import Categoria from "./Categoria";
import { categorias } from "../data/categorias";

export default function Sidebar() {
  return (
    <aside className="md:w-72">
      <div className="p-4">
        <img src="img/logo.svg" alt="logo" className="w-40 " />
      </div>

      <div className="mt-10">
        {categorias.map((categoria) => (
          <Categoria categoria={categoria} />
        ))}
      </div>

      <div className="m-5 px-5">
        <button className="text-center bg-red-500 hover:bg-red-700 w-full p-3 font-bold text-white truncate">
          Cancelar Orden
        </button>
      </div>
    </aside>
  );
}
