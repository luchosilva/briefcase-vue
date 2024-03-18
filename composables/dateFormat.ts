const naturalDate = (input: string | Date) => {
  const date = typeof input === "string" ? new Date(input) : input
  return date.toLocaleString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

const numericDate = (input: string | Date) => {
  const date = typeof input === "string" ? new Date(input) : input
  return date.toLocaleString("es-ES", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  })
}

const timeAgo = (date: string | Date) => {
  if (!date) return ""
  const DATE_UNITS = {
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1, // un segundo tiene... un segundo :D
  }
  const rtf = new Intl.RelativeTimeFormat()
  const getUnitAndValueDate = (secondsElapsed: number) => {
    for (const [unit, secondsInUnit] of Object.entries(DATE_UNITS)) {
      if (secondsElapsed >= secondsInUnit || unit === "second") {
        const value = Math.floor(secondsElapsed / secondsInUnit) * -1
        return { value, unit }
      }
    }
  }
  const secondsElapsed = (Date.now() - new Date(date).getTime()) / 1000
  const { value, unit } = getUnitAndValueDate(secondsElapsed) as {
    value: number
    unit: any
  }
  return rtf.format(value, unit)
}

function formatHour(date: string | Date): string {
  const dateObject = new Date(date)
  const hour = dateObject.getHours()
  const minute = dateObject.getMinutes().toString().padStart(2, "0")

  return `${hour}:${minute}`
}

type dateFormattersTypes =
  | "naturalDate"
  | "numericDate"
  | "timeAgo"
  | "formatHour"

const dateFormatters = {
  naturalDate,
  numericDate,
  timeAgo,
  formatHour,
}

export function useDateFormat(
  date: string | Date | Ref<string | Date>,
  format: dateFormattersTypes,
): string {
  const value = toValue(date)

  return value ? dateFormatters[format](value) : ""
}
