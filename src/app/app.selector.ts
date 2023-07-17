import { AppRootStateType } from 'app/store'

export default {
  appSelector: 'app-selector',
}

export const statusSelector = (state: AppRootStateType) => state.app.status
export const isInitializedSelector = (state: AppRootStateType) => state.app.isInitialized
export const isLoggedInSelector = (state: AppRootStateType) => state.auth.isLoggedIn
export const tasksSelector = (state: AppRootStateType) => state.tasks
export const todolistsSelector = (state: AppRootStateType) => state.todolists
