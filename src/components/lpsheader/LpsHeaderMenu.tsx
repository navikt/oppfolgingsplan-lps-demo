import { FirstAidIcon, PiggybankIcon, TasklistIcon } from "@navikt/aksel-icons";
import { ToggleGroup } from "@navikt/ds-react";

export const LpsHeaderMenu = () => {
  return (
    <div className="flex flex-row gap-4">
      <ToggleGroup defaultValue="oppfolgingsplan" onChange={console.log}>
        <ToggleGroup.Item value="oppfolgingsplan">
          <TasklistIcon aria-hidden />
          Oppfølgingsplan
        </ToggleGroup.Item>
        <ToggleGroup.Item value="syk">
          <FirstAidIcon aria-hidden />
          Sykmeldinger
        </ToggleGroup.Item>
        <ToggleGroup.Item value="lonn">
          <PiggybankIcon aria-hidden />
          Lønn og timeføring
        </ToggleGroup.Item>
      </ToggleGroup>
    </div>
  );
};
