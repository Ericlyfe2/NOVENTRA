"use client";
import { useEffect, useState } from "react";

const TIME_FMT = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Africa/Accra",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

const DATE_FMT = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Africa/Accra",
  weekday: "short",
  day: "numeric",
  month: "short",
});

function accraSnapshot() {
  const now = new Date();
  const hour = Number(
    new Intl.DateTimeFormat("en-GB", { timeZone: "Africa/Accra", hour: "2-digit", hour12: false }).format(now)
  );
  return {
    time: TIME_FMT.format(now),
    date: DATE_FMT.format(now),
    open: hour >= 8 && hour < 18,
  };
}

export default function GhanaTime() {
  const [snap, setSnap] = useState(null);

  useEffect(() => {
    setSnap(accraSnapshot());
    const id = setInterval(() => setSnap(accraSnapshot()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="glass-panel p-xl rounded-lg flex flex-col justify-center">
      <p className="font-label-md text-label-md text-primary mb-sm">Accra Local Time · GMT+0</p>
      <h3 className="font-display-md text-display-md text-on-surface tabular-nums" suppressHydrationWarning>
        {snap ? snap.time : "--:--:--"}
      </h3>
      <p className="font-body-md text-body-md text-on-surface-variant" suppressHydrationWarning>
        {snap ? snap.date : " "} · Operating 08:00 — 18:00
      </p>
      <div className="flex items-center gap-sm mt-sm">
        <span
          className={`w-2 h-2 rounded-full ${snap?.open ? "bg-emerald-500" : "bg-error"} ${snap?.open ? "animate-pulse-glow" : ""}`}
        />
        <span className="font-code-sm text-code-sm text-on-surface-variant" suppressHydrationWarning>
          {snap ? (snap.open ? "Office currently open" : "Office currently closed") : "Checking availability…"}
        </span>
      </div>
    </div>
  );
}
