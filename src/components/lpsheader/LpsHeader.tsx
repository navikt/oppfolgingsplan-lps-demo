"use client";
import { Box, Heading } from "@navikt/ds-react";
import { LpsHeaderMenu } from "@/components/lpsheader/LpsHeaderMenu";
import styles from "./lpsheader.module.css"

export const LpsHeader = () => {
  return (
    <Box className={styles.lpsHeader}>
      <div className="flex flex-row w-full align-center items-center">
        <Heading level="2" size="medium" className="flex w-40">
          Svele HRM
        </Heading>
        <div className="flex w-full pr-40 justify-center">
          <LpsHeaderMenu />
        </div>
      </div>
    </Box>
  );
};
