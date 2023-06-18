export default function Registro() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">Crea tu cuenta</h1>
        <p>Crea tu cuenta llamando al formulario</p>
      </div>

      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <form>
          <div className="mb-4">
            <label className="text-slate-800" htmlFor="name">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              placeholder="Tu Nombre"
              className="mt-2 p-3 bg-gray-50 w-full"
              name="name"
            />
          </div>

          <div className="mb-4">
            <label className="text-slate-800" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Tu Email"
              className="mt-2 p-3 bg-gray-50 w-full"
              name="email"
            />
          </div>

          <div className="mb-4">
            <label className="text-slate-800" htmlFor="password">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              placeholder="Tu Contraseña"
              className="mt-2 p-3 bg-gray-50 w-full"
              name="password"
            />
          </div>

          <div>
            <label className="text-slate-800" htmlFor="password_confirmation">
              Repetir Contraseña
            </label>
            <input
              type="password"
              id="password_confirmation"
              placeholder="Repite Tu Contraseña"
              className="mt-2 p-3 bg-gray-50 w-full"
              name="password_confirmation"
            />
          </div>

          <input
            type="submit"
            value="Crear Cuenta"
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-2 uppercase font-bold cursor-pointer"
          />
        </form>
      </div>
    </>
  );
}
