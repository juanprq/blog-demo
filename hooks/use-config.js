import { createContext, useContext } from 'react';

export const ConfigContext = createContext({});
const useConfig = () => useContext(ConfigContext);
export default useConfig;
