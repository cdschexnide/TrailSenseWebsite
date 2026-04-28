export function TelemetryStrip() {
  return (
    <div className="relative z-10 border-b border-hairline bg-bg-deepest">
      <div className="mx-auto flex max-w-container items-center gap-6 overflow-x-auto whitespace-nowrap px-6 py-2 font-mono text-[11px] uppercase tracking-spaced text-fg-muted md:px-8 [&::-webkit-scrollbar]:hidden">
        <span className="flex items-center gap-1.5">
          <span className="pulse-dot" />
          <span className="text-fg-secondary">SCANNING</span>
        </span>
        <span className="text-fg-disabled">/</span>
        <span className="flex items-center gap-1.5">
          <span className="text-fg-disabled">RF</span>
          <span className="text-fg-secondary">2.4GHz · 5.8GHz · LTE</span>
        </span>
        <span className="text-fg-disabled">/</span>
        <span className="flex items-center gap-1.5">
          <span className="text-fg-disabled">RANGE</span>
          <span className="text-fg-secondary">800FT</span>
        </span>
        <span className="text-fg-disabled">/</span>
        <span className="flex items-center gap-1.5">
          <span className="text-fg-disabled">UNITS DEPLOYED</span>
          <span className="text-fg-secondary tabular">2,418</span>
        </span>
        <span className="text-fg-disabled">/</span>
        <span className="flex items-center gap-1.5">
          <span className="text-fg-disabled">UPTIME</span>
          <span className="text-fg-secondary tabular">99.97%</span>
        </span>
      </div>
    </div>
  )
}
