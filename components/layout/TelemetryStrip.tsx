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
          <span className="text-fg-disabled">BAND</span>
          <span className="text-fg-secondary">20–4000 MHz</span>
        </span>
        <span className="text-fg-disabled">/</span>
        <span className="flex items-center gap-1.5">
          <span className="text-fg-disabled">ENGINE</span>
          <span className="text-fg-secondary">V2 FUSION</span>
        </span>
        <span className="text-fg-disabled">/</span>
        <span className="flex items-center gap-1.5">
          <span className="text-fg-disabled">WIFI</span>
          <span className="text-fg-secondary">2.4 GHz</span>
        </span>
        <span className="text-fg-disabled">/</span>
        <span className="flex items-center gap-1.5">
          <span className="text-fg-disabled">BLE</span>
          <span className="text-fg-secondary">PASSIVE</span>
        </span>
      </div>
    </div>
  )
}
