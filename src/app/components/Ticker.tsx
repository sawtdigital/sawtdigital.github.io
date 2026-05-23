export default function Ticker() {
  const items = [
    'ASIC Compliant',
    'TGA Aware',
    'AI Integrated',
    'Pixel Perfect',
    'One Voice',
    'One Signal',
    'Built to Comply',
  ];
  return (
    <div className="min-h-10 max-h-10 border-t-2 border-black bg-black text-canvas overflow-hidden">
      <div
        className="flex py-3 whitespace-nowrap font-mono text-xs tracking-caps uppercase gap-12 w-fit"
        style={{
          animation: `marquee 20s linear infinite`,
        }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <>
            {items.map((item) => (
              <>
                <span className="text-signal">★</span>
                <span>{item}</span>
              </>
            ))}
          </>
        ))}
      </div>
    </div>
  );
}
