"use client";

import { InfoOmBedriften } from "@/app/components/InfoOmBedriften";
import { KommunikasjonMedNavOgSykmelder } from "@/app/components/KommunikasjonMedNavOgSykmelder";
import { Arbeidssituasjon } from "@/app/components/Arbeidssituasjon";
import { Tilrettelegging } from "@/app/components/Tilrettelegging";
import { UtfyllendeOpplysninger } from "@/app/components/UtfyllendeOpplysninger";
import { Overskrift } from "@/app/components/Overskrift";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex max-w-3xl w-full justify-between flex-col gap-8 bg-slate-100 p-24">
        <Overskrift />

        <Arbeidssituasjon />

        <Tilrettelegging />

        <InfoOmBedriften />

        <UtfyllendeOpplysninger />

        <KommunikasjonMedNavOgSykmelder />


      </div>
    </main>
  );
}
