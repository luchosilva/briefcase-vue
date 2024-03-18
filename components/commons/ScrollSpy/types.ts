export type ScrollSpyEvents = (e: "update") => void

export type MenuItem = {
  id: string
  title: string
  description?: string
}

export type Menu = {
  id: string
  title: string
  sections?: Menu[]
  items?: MenuItem[]
}
