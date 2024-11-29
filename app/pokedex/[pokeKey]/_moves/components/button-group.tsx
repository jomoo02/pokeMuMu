import React from 'react';
import { Version } from '@/app/data/version';
import { PokeType } from '@/app/data/poke-type';

function Button({
  isActive,
  onClickButton,
  className,
  children,
}: {
  isActive: boolean;
  onClickButton: () => void;
  className?: string;
  children?: React.ReactNode;
}) {
  if (isActive) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  const handleClick = () => onClickButton();

  return (
    <button
      type="button"
      onClick={handleClick}
      className={className}
    >
      {children}
    </button>
  );
}

function GenGroup({
  type,
  gens,
  targetGen,
  setTargetGen,
}: {
  type: PokeType;
  gens: number[];
  targetGen: number;
  setTargetGen: (gen: number) => void;
}) {
  const handleClickButon = (gen: number) => setTargetGen(gen);

  return (
    <div className="flex gap-x-2 flex-wrap gap-y-2 items-center">
      {gens.map((gen) => {
        const isActive = gen === targetGen;

        return (
          <Button
            key={gen}
            className={`flex items-center justify-center rounded-md px-2 py-1 h-7 min-w-10 md:min-w-11 md:max-w-11 ${isActive ? `${type} text-white` : 'bg-slate-200 hover:bg-slate-400/70'}`}
            onClickButton={() => handleClickButon(gen)}
            isActive={isActive}
          >
            <span className="text-sm md:text-base font-medium text-slate-80">
              {gen}
            </span>
            <span className="font-semibold text-[12px] leading-[24px]">
              th
            </span>
          </Button>
        );
      })}
    </div>
  );
}

function VersionGroup({
  type,
  versions,
  targetVersion,
  setTargetVersion,
}: {
  type: PokeType;
  versions: {
    version: Version;
    localeVersion: string;
  }[];
  targetVersion: Version;
  setTargetVersion: (version: Version) => void;
}) {
  const handleClickVersion = (version: Version) => setTargetVersion(version);

  return (
    <div className="grid grid-cols-2 lg:flex gap-x-1 gap-y-1 lg:gap-x-1.5">
      {versions.map(({ version, localeVersion }) => {
        const isActive = version === targetVersion;

        return (
          <Button
            key={version}
            isActive={isActive}
            onClickButton={() => handleClickVersion(version)}
            className={`font-medium rounded-t-lg py-1 px-1 lg:px-3.5 text-sm md:text-base text-balance ${isActive ? `${type} text-white text-center flex items-center justify-center` : 'bg-slate-200 hover:bg-slate-400/70'}`}
          >
            {localeVersion}
          </Button>
        );
      })}
    </div>
  );
}

const ButtonGroup = {
  Gen: GenGroup,
  Version: VersionGroup,
};

export default ButtonGroup;
