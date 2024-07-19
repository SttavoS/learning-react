import { createContext, useContext, useState } from "react";

export const ProdutoContext = useContext();

export const ProdutoProvider = ({ children }) => {
  const [produto, setProduto] = useState(null);

  return (
    <ProdutoContext.Provider value={{ produto, setProduto }}>
      {children}
    </ProdutoContext.Provider>
  );
};
