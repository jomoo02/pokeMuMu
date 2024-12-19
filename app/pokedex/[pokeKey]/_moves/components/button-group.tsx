import React from 'react';
import { Version } from '@/app/data/version';
import useGenButtonGroup from '../hooks/useGenButtonGroup';

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
  gens,
  targetGen,
  setTargetGen,
}: {
  gens: number[];
  targetGen: number;
  setTargetGen: (gen: number) => void;
}) {
  const handleClickButon = (gen: number) => setTargetGen(gen);

  const { scrollContainerRef } = useGenButtonGroup();

  return (
    <div
      ref={scrollContainerRef}
      className="flex gap-x-3 gap-y-2 items-center py-1 overflow-auto scroll-smooth"
    >
      {gens.map((gen) => {
        const isActive = gen === targetGen;

        return (
          <div key={gen} className="w-10 min-w-10">
            <Button
              className={`flex border-2 border-slate-500 items-center justify-center rounded-md px-2 py-1 h-[30px] w-10 min-w-10 flex-shrink-0 md:min-w-11 md:max-w-11 ${isActive ? 'text-white bg-slate-700 border-slate-700' : 'bg-white hover:bg-[#e2e8f0]'}`}
              onClickButton={() => handleClickButon(gen)}
              isActive={isActive}
            >
              <span className="font-semibold">
                {gen}
              </span>
              <span className="text-[12px] font-semibold leading-[24px]">
                th
              </span>
            </Button>
          </div>
        );
      })}
    </div>
  );
}

function VersionGroup({
  versions,
  targetVersion,
  setTargetVersion,
}: {
  versions: {
    version: Version;
    localeVersion: string;
  }[];
  targetVersion: Version;
  setTargetVersion: (version: Version) => void;
}) {
  const handleClickVersion = (version: Version) => setTargetVersion(version);

  return (
    <div className="flex gap-x-2 gap-y-1 lg:gap-x-1.5 overflow-auto">
      {versions.map(({ version, localeVersion }) => {
        const isActive = version === targetVersion;

        return (
          <Button
            key={version}
            isActive={isActive}
            onClickButton={() => handleClickVersion(version)}
            className={`border-2 text-nowrap border-slate-500 border-b-0 font-semibold rounded-t-lg py-1 px-2 lg:px-3.5 text-sm md:text-base ${isActive ? 'bg-slate-700 border-slate-700 text-white text-center flex items-center justify-center' : 'bg-white hover:bg-[#e2e8f0]'}`}
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
