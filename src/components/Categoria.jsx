export default function Categoria({ categoria }) {
  const { icono, id, nombre } = categoria;
  return (
    <div className="flex items-center gap-7 w-100 p-4 hover:bg-amber-400 cursor-pointer">
      <img
        src={`/img/icono_${icono}.svg`}
        alt="imagen icono"
        className="w-10"
      />
      <p className="text-lg cursor-pointer truncate">{nombre}</p>
    </div>
  );
}
