import { Navbar } from "@/components/Navbar";
import React, { ReactNode } from "react";
import { Heading } from "@navikt/ds-react";

interface Props {
  pageHeader: string;
  children: ReactNode;
  activeStep: number;
}
export const Side = ({ pageHeader, children, activeStep }: Props) => {
  return (
    <div>
      <Navbar activeStep={activeStep} />
      <div className="flex max-w-5xl w-full justify-between flex-col gap-8 bg-slate-100 p-24">
        <Heading size="large" level={"1"}>
          {pageHeader}
        </Heading>
        {children}
      </div>
    </div>
  );
};
