export default function Login() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">Iniciar Sesión</h1>
        <p>Para crear un pedido debes iniciar sesión</p>
      </div>

      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <form>
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

          <input
            type="submit"
            value="Iniciar Sesión"
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-2 uppercase font-bold cursor-pointer"
          />
        </form>
      </div>
    </>
  );
}
