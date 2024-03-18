interface AuthUser {
  id: string
  username?: string
  email: string
  permissions: string[]
  roles: { id: string; name: string; description: string }[]
  profile: { [key: string]: any }
  company: string
}

export const useAuthStore = defineStore('auth', () => {
  const user = useState<AuthUser | undefined>()

  const setUser = (value: any) => {
    user.value = value
  }

  return {
    user,
    setUser,
  }
})
