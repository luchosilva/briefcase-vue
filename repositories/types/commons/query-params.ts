import { Limits } from "~/repositories/types"

export type QueryParams<T> = Partial<T> & Limits
