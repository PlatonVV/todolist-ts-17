import { AppRootStateType } from 'app/store'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
