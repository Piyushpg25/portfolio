export function HeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto aspect-square w-full max-w-md"
    >
      <div className="absolute inset-8 rounded-full border bg-muted/30 blur-[1px]" />

      <div className="absolute inset-16 rounded-full border border-dashed" />

      <div className="absolute left-1/2 top-1/2 size-24 -translate-x-1/2 -translate-y-1/2 rounded-2xl border bg-background/80 shadow-2xl backdrop-blur">
        <div className="flex h-full items-center justify-center text-2xl font-semibold">
          PX
        </div>
      </div>
    </div>
  );
}