"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { InnsendingFormFields } from "@/types/FormType";
import { defaultFormValues } from "@/state/defaultFormValues";

export const AppStateContext = createContext<FormContext>({
  globalFormState: defaultFormValues,
  globalFormStateDispatch: () => {
    return;
  },
});

interface Props {
  children: ReactNode;
}

type FormContext = {
  globalFormState: InnsendingFormFields;
  globalFormStateDispatch: Dispatch<SetStateAction<InnsendingFormFields>>;
};

export function FormStateProvider({ children }: Props) {
  const [formValues, setFormValues] =
    useState<InnsendingFormFields>(defaultFormValues);
  return (
    <AppStateContext.Provider
      value={{ globalFormState: formValues, globalFormStateDispatch: setFormValues }}
    >
      {children}
    </AppStateContext.Provider>
  );
}

export function useGlobalState() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within the FormStateProvider");
  }
  return context;
}
