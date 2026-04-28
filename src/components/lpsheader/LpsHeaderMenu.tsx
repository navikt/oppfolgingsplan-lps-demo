import { FirstAidIcon, PiggybankIcon, TasklistIcon } from "@navikt/aksel-icons";
import { ToggleGroup } from "@navikt/ds-react";

export const LpsHeaderMenu = () => {
  return (
    <div className="flex flex-row gap-4">
      <ToggleGroup defaultValue="oppfolgingsplan" onChange={console.log}>
        <ToggleGroup.Item
          value="oppfolgingsplan"
          label="Oppfølgingsplan"
          icon={<TasklistIcon aria-hidden />}
        />
        <ToggleGroup.Item
          value="syk"
          label="Sykmeldinger"
          icon={<FirstAidIcon aria-hidden />}
        />
        <ToggleGroup.Item
          value="lonn"
          label="Lønn og timeføring"
          icon={<PiggybankIcon aria-hidden />}
        />
      </ToggleGroup>
    </div>
  );
};
