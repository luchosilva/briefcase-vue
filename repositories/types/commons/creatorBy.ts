import { Profile } from '~/repositories/types'

export interface CreatorBy {
  email: string
  id: string
  username?: string
  profile: Profile
}
