import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Section = ({ children }: Props) => {
  return <div className="flex flex-col gap-4">{children}</div>;
};
