"use client";
import { Box, Heading } from "@navikt/ds-react";
import { LpsHeaderMenu } from "@/components/lpsheader/LpsHeaderMenu";
import styles from "./lpsheader.module.css";

export const LpsHeader = () => {
  return (
    <Box className={styles.lpsHeader}>
      <div className="align-center flex w-full flex-row items-center">
        <Heading level="2" size="medium" className="flex w-40">
          Svele LPS
        </Heading>
        <div className="flex w-full justify-center pr-40">
          <LpsHeaderMenu />
        </div>
      </div>
    </Box>
  );
};
