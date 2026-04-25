// GlobalStyles.ts
// Clases Tailwind reutilizables agrupadas por categoría.
// Uso: import { gs } from "@/constants/GlobalStyles"
//      className={gs.cardBase}

export const gs = {
  // ─── Layout ────────────────────────────────────────────────────────────────
  screenPadding: "px-md py-md",
  centered: "flex-1 items-center justify-center",
  row: "flex-row items-center",
  rowBetween: "flex-row items-center justify-between",

  // ─── Cards ─────────────────────────────────────────────────────────────────
  cardBase: "bg-white rounded-card p-md shadow-sm",
  cardBordered: "bg-white rounded-card p-md border border-neutral-200",

  // ─── Botones ───────────────────────────────────────────────────────────────
  btnPrimary: "bg-brand-primary rounded-button py-sm px-md items-center",
  btnSecondary: "bg-brand-secondary rounded-button py-sm px-md items-center",
  btnOutline:
    "border border-brand-primary rounded-button py-sm px-md items-center",
  btnDanger: "bg-status-error rounded-button py-sm px-md items-center",

  // ─── Texto ─────────────────────────────────────────────────────────────────
  h1: "text-2xl font-bold text-text-main",
  h2: "text-xl font-semibold text-text-main",
  h3: "text-lg font-semibold text-text-main",
  body: "text-base text-text-primary",
  caption: "text-xs text-text-secondary",
  label: "text-sm font-medium text-text-main",
  placeholder: "text-sm text-text-placeholder",

  // ─── Inputs ────────────────────────────────────────────────────────────────
  inputBase:
    "border border-neutral-200 rounded-button px-md py-sm text-base text-text-main bg-white",
  inputFocused: "border-brand-primary",
  inputError: "border-status-error",

  // ─── Badges / Estado ───────────────────────────────────────────────────────
  badgeSuccess:
    "bg-status-success/20 text-status-success text-xs font-medium rounded-full px-sm py-xs",
  badgeWarning:
    "bg-status-warning/20 text-status-warning text-xs font-medium rounded-full px-sm py-xs",
  badgeError:
    "bg-status-error/20 text-status-error text-xs font-medium rounded-full px-sm py-xs",

  // ─── Separadores ───────────────────────────────────────────────────────────
  divider: "border-t border-neutral-200 my-sm",
} as const;
