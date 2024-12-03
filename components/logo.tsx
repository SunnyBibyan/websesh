import { Monitor } from "lucide-react";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className="flex items-center gap-2">
      <Monitor className={className} />
      <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
        Websesh
      </span>
    </div>
  );
}
