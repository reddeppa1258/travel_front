import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
  const [people, setPeople] = useState(1);
  return (
    <SearchContext.Provider value={{ people, setPeople }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;

export const useSearchState = () => {
  const Context = useContext(SearchContext);
  return Context;
};
