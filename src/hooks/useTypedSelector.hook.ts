// node_modules/react-redux
import { TypedUseSelectorHook, useSelector } from "react-redux"

// store
import { RootState } from "@/store"

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector