import clsx from "clsx";
import { styles } from "@/lib/colors";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={clsx(centered && "text-center", className)}>
      <h2 className="text-3xl md:text-4xl font-bold mb-3" style={styles.primaryText}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
