import Marker from '@/app/components/Marker';
import SectionLabel from '@/app/components/SectionLabel';
import { useEffect, useRef, useState } from 'react';
import Raven from '../components/Raven';
export default function About() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const textRefs = useRef<(HTMLSpanElement | null)[]>([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
          }
        });
      },
      { threshold: 0.5 },
    );
    observer.observe(sectionRef.current!);
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <section id="about" className="px-6 md:px-10 py-20 md:py-32 border-b-2 border-black text-black" ref={sectionRef}>
      <SectionLabel num="002" label="About Us" />
      <div className="grid grid-cols-12 gap-6 md:gap-10">
        <div className="col-span-12 md:col-span-5">
          <h2 className="text-[10vw] md:text-[5.5vw] leading-heading tracking-heading font-black uppercase">
            {'SAWT'.split('').map((l, i) => (
              <span
                key={i}
                className="inline-block"
                ref={(el) => void (textRefs.current[i] = el)}
                style={{
                  transitionDelay: `${i * 75}ms`,
                  opacity: animate ? 1 : 0,
                  transitionDuration: '0ms',
                  transitionProperty: 'opacity',
                  marginLeft: i === 1 ? '-0.02em' : i === 2 ? '-0.1em' : undefined,
                  marginRight: i === 2 ? '0.02em' : undefined,
                }}
              >
                {l}
              </span>
            ))}
            <br />
            {'MEANS'.split('').map((l, i) => (
              <span
                key={i}
                className="inline-block"
                ref={(el) => void (textRefs.current[i + 4] = el)}
                style={{
                  transitionDelay: `${100 + (i + 4) * 75}ms`,
                  opacity: animate ? 1 : 0,
                  transitionDuration: '0ms',
                  transitionProperty: 'opacity',
                }}
              >
                {l}
              </span>
            ))}
            <br />
            {'VOICE.'.split('').map((l, i) => (
              <span
                key={i}
                className="inline-block font-normal"
                ref={(el) => void (textRefs.current[i + 9] = el)}
                style={{
                  transitionDelay: `1000ms`,
                  opacity: animate ? 1 : 0,
                  transitionProperty: 'opacity',
                  transitionDuration: '1500ms',
                }}
              >
                {l}
              </span>
            ))}
          </h2>
          <div className="-mt-8 leading-none" dir="rtl">
            <Raven className="h-40 md:h-[20vmax] max-h-70" />
          </div>
        </div>
        <div className="col-span-12 md:col-span-7 md:pl-10 md:border-l-2 md:border-black">
          <p className="text-[22px] md:text-[28px] leading-body-tight mb-8">One signal. Clearly heard.</p>
          <p className="text-base md:text-lg leading-normal mb-6">
            We're a digital development studio with deep experience in finance, superannuation, and pharmaceuticals. We
            prototype fast, build clean, and operate inside compliance constraints without using them as an excuse to
            slow down.
          </p>
          <p className="text-base md:text-lg leading-normal border-l-4 border-signal pl-4">
            Most agencies can move fast <span className="font-mono text-sm">OR</span> stay compliant.
            <br />
            We've spent over a decade doing both.
          </p>
          <div className="mt-12 grid grid-cols-3 gap-4 border-t-2 border-black pt-6">
            <div>
              <div className="font-mono text-[40px] md:text-[56px] leading-none font-black">10+</div>
              <Marker>Years of experience</Marker>
            </div>
            <div>
              <div className="font-mono text-[40px] md:text-[56px] leading-none font-black">03</div>
              <Marker>Core industries</Marker>
            </div>
            <div>
              <div className="font-mono text-[40px] md:text-[56px] leading-none font-black">01</div>
              <Marker>Voice. Signal.</Marker>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
