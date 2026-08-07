import { ThemeToggle } from "@/components/theme/theme-toggle";

export function HeaderActions() {
  return (
    <div className="flex items-center gap-2">
      <ThemeToggle />
    </div>
  );
}