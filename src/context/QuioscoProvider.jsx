import { createContext, useState } from "react";
import { categorias as categoriasDB } from "../data/categorias";

const QuioscoContext = createContext();

// eslint-disable-next-line react/prop-types
const QuioscoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState(categoriasDB);
  return (
    <QuioscoContext.Provider value={{ categorias }}>
      {children}
    </QuioscoContext.Provider>
  );
};

export { QuioscoProvider };

export default QuioscoContext;
