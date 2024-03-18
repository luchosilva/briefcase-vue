const humanFileSize = (size?: number | string) => {
  if (typeof size === "number") {
    const i: number = Math.floor(Math.log(size) / Math.log(1024))
    const sizeInBytes: number = size / Math.pow(1024, i)
    const sizeFormatted: string = sizeInBytes.toFixed(2)
    return sizeFormatted + " " + ["B", "kB", "MB", "GB", "TB"][i]
  }
}

export default function useHumanFileSize() {
  return {
    humanFileSize,
  }
}
