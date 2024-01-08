import { Navbar } from "@/components/Navbar";
import React, { ReactNode } from "react";
import { Button, Heading } from "@navikt/ds-react";
import styles from "./contentpage.module.css";

export enum Step {
  oppfolgingsplan = 1,
  infoTilNavOgLege = 2,
  innsending = 3,
}

interface Props {
  pageHeader: string;
  children: ReactNode;
  activeStep: Step;
}

export const ContentPage = ({ pageHeader, children, activeStep }: Props) => {
  return (
    <div>
      <Navbar activeStep={activeStep} />
      <div className={styles.contentpage}>
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
    </div>
  );
};
