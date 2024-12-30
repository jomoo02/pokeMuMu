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
    <div className="flex gap-x-3.5 xs:gap-x-5 md:gap-x-7 py-1 items-center min-h-[35px] border-b border-slate-300">
      <div className="min-w-[4.7rem] sm:min-w-[5.25rem] flex items-center justify-end text-slate-500">
        {subject}
      </div>
      <div className="flex-1 overflow-hidden">
        {content}
        {children}
      </div>
    </div>
  );
}
