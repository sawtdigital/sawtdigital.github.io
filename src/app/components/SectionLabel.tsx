type Props = { num: string; label: string; ar?: string; variant?: 'light' | 'dark' };

export default function SectionLabel({ num, label, ar, variant = 'light' }: Props) {
  const border = variant === 'dark' ? 'border-canvas' : 'border-black';
  return (
    <div className={`flex items-baseline justify-between border-b-2 ${border} pb-3 mb-10 w-full`}>
      <div className="flex items-baseline gap-6 justify-between w-full">
        <span className="font-mono text-label tracking-label">[{num}]</span>
        <span className="font-mono text-label tracking-caps uppercase">{label}</span>
      </div>
      {/* {ar && (
        <span className="font-arabic text-lg" dir="rtl">
          {ar}
        </span>
      )} */}
    </div>
  );
}
