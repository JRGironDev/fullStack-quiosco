import { createContext, useState } from "react";
import { categorias as categoriasDB } from "../data/categorias";

const QuioscoContext = createContext();

// eslint-disable-next-line react/prop-types
const QuioscoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState(categoriasDB);
  const [categoriaActual, setCategoriaActual] = useState(categorias[0]);

  const handleClickCategoria = (id) => {
    const categoria = categorias.filter((categoria) => categoria.id === id)[0];
    setCategoriaActual(categoria);
  };

  return (
    <QuioscoContext.Provider
      value={{ categorias, categoriaActual, handleClickCategoria }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};

export { QuioscoProvider };

export default QuioscoContext;
