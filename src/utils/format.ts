export const formatValue = (
  value: number | string | null | undefined,
  options?: { zeroIsValid?: boolean }
) => {
  if (value === null || value === undefined) {
    return "-";
  }

  if (typeof value === "number") {
    if (Number.isNaN(value)) return "-";
    if (value === 0 && !options?.zeroIsValid) return "-";
  }

  if (typeof value === "string") {
    const v = value.trim().toLowerCase();
    if (v === "" || v === "nan" || v === "null" || v === "undefined") {
      return "-";
    }
  }

  return value;
};
