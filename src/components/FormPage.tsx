import { Navbar } from "@/components/Navbar";
import React, { FormEventHandler, ReactNode } from "react";
import { Button, Heading } from "@navikt/ds-react";
import { FormProvider, useForm } from "react-hook-form";

export enum Step {
  arbeidsoppgaver = 1,
  tilrettelegging = 2,
  bedriftsinfo = 3,
  kommunikasjon = 4,
  innsending = 5,
}

interface Props {
  pageHeader: string;
  children: ReactNode;
  activeStep: Step;
  onSubmit?: FormEventHandler<any> | undefined;
}

export const FormPage = ({
  pageHeader,
  children,
  activeStep,
  onSubmit,
}: Props) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <Navbar activeStep={activeStep} />
        <div className="flex max-w-5xl w-full justify-between flex-col gap-8 bg-slate-100 p-24">
          <Heading size="large" level={"1"}>
            {pageHeader}
          </Heading>
          {children}
          <div className="flex flex-row gap-8">
            {activeStep !== Step.arbeidsoppgaver && (
              <Button
                variant="secondary"
                type="button"
                onClick={() => history.back()}
                className="w-fit mt-4"
              >
                Forrige steg
              </Button>
            )}
            <Button variant="primary" className="w-fit mt-4">
              {activeStep === 5 ? "Send inn oppfølgingsplanen" : "Neste"}
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
