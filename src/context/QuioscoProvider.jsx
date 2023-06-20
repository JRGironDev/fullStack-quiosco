import { context } from "react";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
  return (
    <QuioscoContext.provider value={{}}>{children}</QuioscoContext.provider>
  );
};

export { QuioscoProvider };

export default QuioscoContext;
