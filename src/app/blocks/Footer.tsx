import logoWhite from '@/imports/sawt-logo-white.svg';
import Logo from '../components/Logo';
export default function Footer() {
  return (
    <footer className="bg-black text-canvas px-6 md:px-10 py-10">
      <div className="flex justify-between">
        <a href="#hero" className="flex items-center gap-3">
          <Logo variant="white" className="h-8 w-auto" />
        </a>
        {/* <div className="flex flex-col col-span-6 md:col-span-3 font-mono text-label tracking-nav uppercase space-y-2 opacity-80">
          <a href="#about">About</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#industries">Industries</a>
          <a href="#contact">Contact</a>
        </div> */}
        <div className="flex flex-row gap-4">
          <a href="">
            <svg className="fill-white hover:fill-signal h-12 w-12 transition-colors" viewBox="-5.5 0 32 32">
              <title>linkedin</title>
              <path d="M0 8.219v15.563c0 1.469 1.156 2.625 2.625 2.625h15.563c0.719 0 1.406-0.344 1.844-0.781 0.469-0.469 0.781-1.063 0.781-1.844v-15.563c0-1.469-1.156-2.625-2.625-2.625h-15.563c-0.781 0-1.375 0.313-1.844 0.781-0.438 0.438-0.781 1.125-0.781 1.844zM2.813 10.281c0-1 0.813-1.875 1.813-1.875 1.031 0 1.875 0.875 1.875 1.875 0 1.031-0.844 1.844-1.875 1.844-1 0-1.813-0.813-1.813-1.844zM7.844 23.125v-9.531c0-0.219 0.219-0.406 0.375-0.406h2.656c0.375 0 0.375 0.438 0.375 0.719 0.75-0.75 1.719-0.938 2.719-0.938 2.438 0 4 1.156 4 3.719v6.438c0 0.219-0.188 0.406-0.375 0.406h-2.75c-0.219 0-0.375-0.219-0.375-0.406v-5.813c0-0.969-0.281-1.5-1.375-1.5-1.375 0-1.719 0.906-1.719 2.125v5.188c0 0.219-0.219 0.406-0.438 0.406h-2.719c-0.156 0-0.375-0.219-0.375-0.406zM2.875 23.125v-9.531c0-0.219 0.219-0.406 0.375-0.406h2.719c0.25 0 0.406 0.156 0.406 0.406v9.531c0 0.219-0.188 0.406-0.406 0.406h-2.719c-0.188 0-0.375-0.219-0.375-0.406z"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="border-t border-canvas/30 mt-10 pt-4 flex flex-wrap justify-between gap-4 font-mono text-micro tracking-caps uppercase opacity-60">
        <span>© 2026 SAWT STUDIO PTY LTD</span>
        <span>ONE SIGNAL · CLEARLY HEARD</span>
        <span>BUILT TO MOVE · BUILT TO COMPLY</span>
      </div>
    </footer>
  );
}
