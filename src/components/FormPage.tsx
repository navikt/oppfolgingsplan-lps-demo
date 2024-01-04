import { Navbar } from "@/components/Navbar";
import React, { FormEventHandler, ReactNode } from "react";
import { Button, Heading } from "@navikt/ds-react";
import { FormProvider, useForm } from "react-hook-form";
import styles from "./formpage.module.css";

export enum Step {
  oppfolgingsplan = 1,
  infoTilNavOgLege = 2,
  innsending = 3,
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
      <form onSubmit={onSubmit} className="flex max-w-4xl flex-col w-full">
        <Navbar activeStep={activeStep} />
        <div className={styles.formpage}>
          <Heading size="large" level={"1"}>
            {pageHeader}
          </Heading>
          {children}
          <div className="flex flex-row gap-8">
            {activeStep !== Step.oppfolgingsplan && (
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
              {activeStep === 3 ? "Send inn oppfølgingsplanen" : "Neste"}
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
