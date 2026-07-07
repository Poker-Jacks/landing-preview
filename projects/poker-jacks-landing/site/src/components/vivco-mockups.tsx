/*
 * CSS-only mockups of the Vivco product. The Vivco brand colors
 * (teal #1F6E7E, coral #F97316) live ONLY inside these components.
 * In-product text stays in Spanish on purpose: these read as real
 * screenshots of a Costa Rican product.
 */

const TEAL = "#1F6E7E";
const CORAL = "#F97316";

/* Deterministic 7x7 pseudo-QR pattern */
const QR = [
  [1, 1, 1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 1, 1, 0, 1, 1, 1],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 1, 0],
  [1, 1, 1, 0, 1, 0, 1],
];

function QrPattern({ size = 44 }: { size?: number }) {
  return (
    <div
      className="grid grid-cols-7 gap-px rounded-sm bg-white p-1"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {QR.flat().map((cell, i) => (
        <div
          key={i}
          className="rounded-[1px]"
          style={{ background: cell ? "#1c1b18" : "transparent" }}
        />
      ))}
    </div>
  );
}

export function ResidentPhone({ className }: { className?: string }) {
  return (
    <div
      role="img"
      aria-label="Pantalla de la app Vivco para residentes: cuota pagada, código QR de visita y reserva del rancho"
      className={`w-[248px] rounded-[2rem] border border-foreground/15 bg-white p-2 shadow-[0_24px_48px_-24px_rgba(20,20,20,0.25)] ${className ?? ""}`}
    >
      <div className="overflow-hidden rounded-[1.55rem] bg-[#F7F9F9]">
        {/* status bar + header */}
        <div className="px-4 pt-3 pb-4" style={{ background: TEAL }}>
          <div className="mx-auto mb-3 h-1 w-14 rounded-full bg-white/30" />
          <p className="text-[10px] font-medium text-white/70">Vivco</p>
          <p className="text-sm font-semibold text-white">Hola, Ana</p>
          <p className="text-[9px] text-white/70">
            Condominio Vista del Valle · Filial B-14
          </p>
        </div>

        <div className="space-y-2 p-3">
          {/* quota card */}
          <div className="rounded-xl bg-white p-3 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[9px] text-neutral-500">Cuota de julio</p>
                <p
                  className="text-base font-bold text-neutral-900"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  ₡85 000
                </p>
              </div>
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[9px] font-semibold text-emerald-700">
                Pagada
              </span>
            </div>
          </div>

          {/* visitor QR card */}
          <div className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm">
            <QrPattern />
            <div>
              <p className="text-[10px] font-semibold text-neutral-900">
                Visita de hoy
              </p>
              <p className="text-[9px] text-neutral-500">
                Carlos M. · vence 6:00 pm
              </p>
              <span
                className="mt-1 inline-block rounded-full px-2 py-0.5 text-[8px] font-semibold text-white"
                style={{ background: CORAL }}
              >
                Compartir QR
              </span>
            </div>
          </div>

          {/* reservation row */}
          <div className="flex items-center justify-between rounded-xl bg-white p-3 shadow-sm">
            <div>
              <p className="text-[10px] font-semibold text-neutral-900">
                Rancho · sábado 10 am
              </p>
              <p className="text-[9px] text-neutral-500">Reserva confirmada</p>
            </div>
            <div
              className="grid size-6 place-items-center rounded-full"
              style={{ background: `${TEAL}1a` }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                <path
                  d="M1.5 5.5 4 8l4.5-6"
                  fill="none"
                  stroke={TEAL}
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* biometric hint */}
          <p className="pt-0.5 text-center text-[8px] text-neutral-400">
            Ingreso con biométrico · &lt;3 s
          </p>
        </div>
      </div>
    </div>
  );
}

export function GuardScreens({ className }: { className?: string }) {
  return (
    <div
      role="img"
      aria-label="Pantallas del guarda en Vivco: acceso autorizado en verde y denegado en rojo"
      className={`flex gap-3 ${className ?? ""}`}
    >
      {/* authorized */}
      <div className="w-1/2 overflow-hidden rounded-xl border border-foreground/10 bg-emerald-600 p-3 text-white shadow-sm">
        <div className="mx-auto mb-2 grid size-8 place-items-center rounded-full bg-white/20">
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
            <path
              d="M2.5 7.5 5.5 10.5 11.5 3.5"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <p className="text-center text-[11px] font-extrabold tracking-widest">
          AUTORIZADO
        </p>
        <p className="mt-1 text-center text-[9px] text-white/85">
          Filial B-14 · Carlos Mora
        </p>
      </div>
      {/* denied */}
      <div className="w-1/2 overflow-hidden rounded-xl border border-foreground/10 bg-red-600 p-3 text-white shadow-sm">
        <div className="mx-auto mb-2 grid size-8 place-items-center rounded-full bg-white/20">
          <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
            <path
              d="M2.5 2.5 9.5 9.5 M9.5 2.5 2.5 9.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <p className="text-center text-[11px] font-extrabold tracking-widest">
          DENEGADO
        </p>
        <p className="mt-1 text-center text-[9px] text-white/85">
          Código vencido · 6:12 pm
        </p>
      </div>
    </div>
  );
}

const BARS = [34, 58, 22, 72, 41, 88];

export function AdminDashboard({ className }: { className?: string }) {
  return (
    <div
      role="img"
      aria-label="Panel web de administración de Vivco con gráfico de morosidad por filial"
      className={`overflow-hidden rounded-xl border border-foreground/10 bg-white shadow-sm ${className ?? ""}`}
    >
      {/* browser chrome */}
      <div className="flex items-center gap-1.5 border-b border-neutral-100 px-3 py-2">
        <span className="size-1.5 rounded-full bg-neutral-300" />
        <span className="size-1.5 rounded-full bg-neutral-300" />
        <span className="size-1.5 rounded-full bg-neutral-300" />
        <span className="ml-2 rounded bg-neutral-100 px-2 py-0.5 text-[8px] text-neutral-500">
          vivco.app/admin
        </span>
      </div>
      <div className="p-3">
        <div className="flex items-baseline justify-between">
          <p className="text-[10px] font-semibold text-neutral-900">
            Morosidad por filial
          </p>
          <p className="text-[8px] text-neutral-400">julio 2026</p>
        </div>
        <div className="mt-2 flex h-16 items-end gap-1.5">
          {BARS.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm"
              style={{
                height: `${h}%`,
                background: i === 5 ? CORAL : TEAL,
                opacity: i === 5 ? 1 : 0.4 + (h / 100) * 0.6,
              }}
            />
          ))}
        </div>
        <div className="mt-2 flex items-center justify-between border-t border-neutral-100 pt-2">
          <p className="text-[8px] text-neutral-500">
            Comunicado enviado · 132 de 140 leídos
          </p>
          <span
            className="rounded-full px-1.5 py-0.5 text-[7px] font-semibold text-white"
            style={{ background: TEAL }}
          >
            Al día 94%
          </span>
        </div>
      </div>
    </div>
  );
}

const LEDGER_ROWS = [
  { label: "Cuota B-14 · julio", amount: "+ ₡85 000", positive: true },
  { label: "Mant. portón principal", amount: "− ₡140 000", positive: false },
  { label: "Cuota A-02 · julio", amount: "+ ₡85 000", positive: true },
];

export function AccountantLedger({ className }: { className?: string }) {
  return (
    <div
      role="img"
      aria-label="Vista contable de Vivco con fondos separados y estado de cuenta exportable"
      className={`overflow-hidden rounded-xl border border-foreground/10 bg-white shadow-sm ${className ?? ""}`}
    >
      <div className="flex items-center justify-between border-b border-neutral-100 px-3 py-2">
        <p className="text-[10px] font-semibold text-neutral-900">
          Estado de cuenta
        </p>
        <span
          className="rounded px-1.5 py-0.5 text-[7px] font-semibold"
          style={{ background: `${TEAL}14`, color: TEAL }}
        >
          Exportar PDF
        </span>
      </div>
      <div className="grid grid-cols-2 gap-px bg-neutral-100">
        <div className="bg-white p-2.5">
          <p className="text-[8px] text-neutral-500">Fondo operativo</p>
          <p
            className="text-[11px] font-bold text-neutral-900"
            style={{ fontVariantNumeric: "tabular-nums" }}
          >
            ₡2 460 000
          </p>
        </div>
        <div className="bg-white p-2.5">
          <p className="text-[8px] text-neutral-500">Fondo de reserva</p>
          <p
            className="text-[11px] font-bold"
            style={{ fontVariantNumeric: "tabular-nums", color: TEAL }}
          >
            ₡8 120 000
          </p>
        </div>
      </div>
      <div className="divide-y divide-neutral-100 border-t border-neutral-100">
        {LEDGER_ROWS.map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between px-3 py-1.5"
          >
            <p className="text-[9px] text-neutral-600">{row.label}</p>
            <p
              className="text-[9px] font-semibold"
              style={{
                fontVariantNumeric: "tabular-nums",
                color: row.positive ? "#047857" : "#b91c1c",
              }}
            >
              {row.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
