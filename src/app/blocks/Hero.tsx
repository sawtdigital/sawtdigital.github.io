import { ArrowUpRight, Plus } from 'lucide-react';
import Marker from '@/app/components/Marker';
import img1 from '@/imports/image.png';
import Ticker from '@/app/components/Ticker';
import PrimaryButton from '../components/PrimaryButton';

export default function Hero() {
  return (
    <section className="relative border-b-2 border-black overflow-hidden" id="hero">
      <div className="grid grid-cols-12 gap-0 md:min-h-fit h-full bg-canvas  md:h-[calc(100vh-132px)]">
        <div className="col-span-12 md:col-span-8 px-6 md:px-10 py-12 md:py-12 border-r-2 border-black">
          <div className="flex items-center gap-4 mb-12">
            <span className="w-3 h-3 bg-accent rounded-full" />
            <span className="font-mono text-label tracking-label uppercase">[001] Hero</span>
          </div>
          <h1 className="text-[14vw] md:text-[9.5vmin] leading-display tracking-display font-black uppercase">
            Built to
            <br />
            move.
            <br />
            <span className="italic font-normal">Built to</span>
            <br />
            comply<span className="text-accent">.</span>
          </h1>
          <div className="mt-12 max-w-2xl">
            <p className="text-base md:text-[2vmin] leading-body">
              We build digital products for industries where getting it wrong isn't an option. Fast, experimental, pixel
              perfect, and fluent in the regulatory frameworks that break most dev shops.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <PrimaryButton variant="link" href="#contact">
              Brief us
            </PrimaryButton>
            <a
              href="#capabilities"
              className="inline-flex items-center gap-3 px-6 py-3 font-mono text-xs tracking-nav uppercase border-2 border-black hover:bg-black hover:text-canvas transition-colors"
            >
              What we do
            </a>
          </div>
        </div>

        <aside className="col-span-12 md:col-span-4 flex flex-col md:h-full">
          <div className="relative h-[280px] md:h-1/2 w-full border-b-2 border-black overflow-hidden">
            <img src={img1} alt="" className="w-full h-full object-cover grayscale contrast-125" />
            <div className="absolute inset-0 mix-blend-multiply bg-signal/10" />
            <div className="absolute bottom-3 left-3 right-3 flex justify-between font-mono text-micro tracking-nav uppercase text-white drop-shadow">
              <span>FIG.01</span>
              <span>STRUCTURE</span>
            </div>
          </div>
          <div className="flex-1 p-6 md:p-8 bg-black text-canvas hidden md:flex flex-col justify-between h-[280px] md:h-1/2">
            <div className="flex items-start justify-between">
              <Marker>Index</Marker>
              <Plus className="w-4 h-4" />
            </div>
            <div className="font-mono text-micro tracking-caps uppercase opacity-70">ONE SIGNAL · CLEARLY HEARD</div>
          </div>
        </aside>
      </div>

      <Ticker />
    </section>
  );
}
