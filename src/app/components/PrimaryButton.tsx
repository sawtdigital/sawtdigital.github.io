import { ArrowUpRight } from 'lucide-react';

type PrimaryButtonProps =
  | {
      variant: 'link';
      href: string;
      children?: React.ReactNode;
    }
  | {
      variant?: 'button';
      onClick(): void;
      children?: React.ReactNode;
    };

const PrimaryButton = (props: PrimaryButtonProps) =>
  props.variant === 'link' ? (
    <a
      href={props.href}
      className="group inline-flex items-center gap-3 bg-black text-canvas px-6 py-3 font-mono text-xs tracking-nav uppercase border-2 border-black hover:bg-signal hover:text-black transition-colors"
    >
      {props.children} <ArrowUpRight className="w-4 h-4 group-hover:rotate-135 transition-transform duration-300" />
    </a>
  ) : (
    <button
      onClick={props.onClick}
      className="group inline-flex items-center gap-3 bg-black text-canvas px-6 py-3 font-mono text-xs tracking-nav uppercase border-2 border-black hover:bg-signal hover:border-signal transition-colors"
    >
      {props.children}
    </button>
  );

export default PrimaryButton;
