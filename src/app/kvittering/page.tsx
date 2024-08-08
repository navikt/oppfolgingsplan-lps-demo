"use client";
import {BodyLong, GuidePanel, Heading} from "@navikt/ds-react";
import React from "react";

export default function Page() {
    return (
        <div className="max-w-4xl pt-12">

            <GuidePanel poster>
                <Heading spacing size={"large"} level={"1"}>
                    Hei!
                </Heading>

                <BodyLong>
                    Denne appen er et eksempel på hvordan man kan implementere oppfølgingsplan-APIet.
                </BodyLong>

                <BodyLong spacing>
                    Dersom du har noen spørsmål så send oss gjerne en e-post på:{" "}
                    <a href="mailto:team-esyfo@nav.no?Subject=Oppfølgingsplan">
                        team-esyfo@nav.no
                    </a>
                </BodyLong>
            </GuidePanel>
        </div>
    );
}
