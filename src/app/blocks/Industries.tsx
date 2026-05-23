import { ArrowUpRight } from 'lucide-react';
import img4 from '@/imports/image-4.png';
import SectionLabel from '@/app/components/SectionLabel';

const industries = [
  { n: 'I.', t: 'Financial services', s: '& superannuation', ar: 'تمويل' },
  { n: 'II.', t: 'Pharmaceuticals', s: '& healthcare', ar: 'صحة' },
  { n: 'III.', t: 'Fintech', s: '& embedded finance', ar: 'تقنية' },
];

export default function Industries() {
  return (
    <section id="industries" className="px-6 md:px-10 py-20 md:py-32 border-b-2 border-black">
      <SectionLabel num="004" label="Industries" />
      <div className="grid grid-cols-12 gap-6 md:gap-10">
        <div className="col-span-12 lg:col-span-5">
          <div className="aspect-[5/3] lg:aspect-[3/4] border-2 border-black overflow-hidden">
            <img
              src={img4}
              alt=""
              className="w-full h-full object-cover grayscale contrast-125 scale-102 hover:grayscale-0 hover:scale-105 transition-all duration-700"
            />
          </div>
          <div className="flex justify-between mt-2 font-mono text-micro tracking-caps uppercase">
            <span>FIG.02</span>
            <span>INFRASTRUCTURE</span>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-7 flex flex-col">
          {industries.map((row) => (
            <div
              key={row.n}
              className="group flex items-center justify-between gap-6 border-t-2 border-black py-8 md:py-12 last:border-b-2 hover:pl-4 transition-all"
            >
              <div className="flex items-baseline gap-6 md:gap-8 xl:gap-10">
                <span className="font-mono text-sm tracking-label opacity-60 w-8">{row.n}</span>
                <div>
                  <div className="text-[24px] sm:text-[32px] md:text-[36px] xl:text-[48px] leading-title tracking-title font-black uppercase text-nowrap">
                    {row.t}
                  </div>
                  <div className="text-xl md:text-[28px] leading-none italic font-normal opacity-80 mt-1">{row.s}</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                {/* <span className="font-arabic text-[28px] hidden md:inline" dir="rtl">
                  {row.ar}
                </span> */}
                {/* <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10 xl:w-12 xl:h-12 group-hover:rotate-45 transition-transform" /> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
