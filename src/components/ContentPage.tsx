import {Navbar} from "@/components/Navbar";
import React, {ReactNode} from "react";
import {Button, Heading} from "@navikt/ds-react";
import styles from "./contentpage.module.css";
import {PageContainer, RootPages, SideMenu} from "@navikt/dinesykmeldte-sidemeny";
import {PersonIcon} from "@navikt/aksel-icons";

export enum Step {
    oppfolgingsplan = 1,
    infoTilNavOgLege = 2,
    planlegging,
    innsending = 4,
    kvittering = 5
}

interface Props {
    pageHeader: string;
    children: ReactNode;
    activeStep: Step;
}

export const ContentPage = ({pageHeader, children, activeStep}: Props) => {
    return (


        <>
            <PageContainer
                sykmeldt={{navn: "Per Persen", fnr: "12345678910"}}
                header={{
                    title: "Per Persen",
                    subtitle: `100% sykmeldt 23. januar 2025 - 23. februar 2025`,
                    Icon: PersonIcon,
                }}
                navigation={
                    <SideMenu
                        sykmeldtName={"Per Persen"}
                        sykmeldtId={"12345678910"}
                        activePage={RootPages.Oppfolgingsplaner}
                        routes={{
                            Soknader: 0,
                            Sykmeldinger: 0,
                            Meldinger: false,
                            Dialogmoter: 0,
                            Oppfolgingsplaner: 0,
                            DineSykmeldte: 0,
                        }}
                    />
                }
            >

                <div>
                    <div className={styles.contentpage}>
                        <Heading size="large" level={"1"}>
                            {pageHeader}
                        </Heading>
                        {children}
                        {
                            activeStep !== Step.kvittering &&
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
                                    {activeStep === 1 ? "Lagre oppfølgingsplan" : "Neste"}
                                </Button>
                            </div>
                        }

                    </div>
                </div>
            </PageContainer>


        </>
    );
};
