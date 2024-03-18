function adjustDateToUTC(date: string | Date): Date {
  if (date instanceof Date) {
    const timeZoneOffsetInHours: number = (date.getTimezoneOffset() / 60) * -1
    date.setHours(date.getHours() - timeZoneOffsetInHours)
    return date
  } else {
    const dateObject = new Date(date)
    const timeZoneOffsetInHours: number =
      (dateObject.getTimezoneOffset() / 60) * -1
    dateObject.setHours(dateObject.getHours() - timeZoneOffsetInHours)
    return dateObject
  }
}

const dateFormatters = {
  adjustDateToUTC,
}

export function useDateToUTC() {
  return {
    ...dateFormatters,
  }
}
