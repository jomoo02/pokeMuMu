import React from 'react';

interface InfoItemProps {
  subject: string;
  content?: string | number;
  children?: React.ReactNode;
}

export default function InfoItem({
  subject,
  content,
  children,
}: InfoItemProps) {
  return (
    <div className="flex gap-x-3.5 xs:gap-x-5 md:gap-x-7 py-1 items-center font-semibold min-h-[35px] border-b border-slate-400">
      <div className="w-[4.75rem] sm:w-[5.5rem] text-slate-500 text-xs sm:text-sm capitalize flex items-center justify-end">
        {subject}
      </div>
      <div className="text-slate-600 capitalize text-xs sm:text-[15px]">
        {content}
        {children}
      </div>
    </div>
  );
}
