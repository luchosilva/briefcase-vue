import * as XLSX from "xlsx"

export function useExcelExport() {
  const exportToExcel = (
    data: any[],
    schema: any[],
    fileName: string,
    sheetName = "Datos",
  ): void => {
    const filteredData = data.map((item) => {
      const newItem: any = {}
      schema.forEach((schemaItem: any) => {
        if (schemaItem?.exportable) {
          newItem[schemaItem.label] =
            typeof schemaItem?.transform === "function"
              ? schemaItem.transform(item[schemaItem.key], item)
              : item[schemaItem.key]
        }
      })
      return newItem
    })

    const wb: XLSX.WorkBook = XLSX.utils.book_new()
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(filteredData)
    XLSX.utils.book_append_sheet(wb, ws, sheetName)
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "buffer" })

    const blob: Blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    })
    const url: string = window.URL.createObjectURL(blob)
    const a: HTMLAnchorElement = document.createElement("a")
    a.href = url
    a.download = fileName
    a.click()
    window.URL.revokeObjectURL(url)
  }

  return {
    exportToExcel,
  }
}
