export const usersTableScheme = [
  {
    key: "name",
    label: "Nombre",
    filterable: true,
  },
  {
    key: "email",
    label: "Email",
    filterable: true,
  },
  {
    key: "createdAt",
    label: "Creado en",
    transform: (value: any) => useDateFormat(value, "naturalDate"),
  },
  {
    key: "status",
    label: "Estado",
    filterable: true,
  },
]
