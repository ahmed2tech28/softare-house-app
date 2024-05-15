"use client";
import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface State {
  city: string;
  x: number | null;
  y: number | null;
}

export const MapContext = createContext<
  [State, Dispatch<SetStateAction<State>>]
>([
  {
    city: "",
    x: null,
    y: null,
  },
  () => {},
]);

interface Props {
  children: React.ReactNode;
}
export const ContextProvider: React.FC<Props> = ({ children }) => {
  const [state, setState] = useState<State>({
    city: "",
    x: null,
    y: null,
  });
  return (
    <MapContext.Provider value={[state, setState]}>
      {children}
    </MapContext.Provider>
  );
};
