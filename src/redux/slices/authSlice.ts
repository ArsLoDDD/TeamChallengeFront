//redux
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
//types

//npm

export interface AuthState {
	isAuthLogin: boolean
}

export enum StatusResponse {
	Success = 200,
	NotFound = 404,
}

const initialState: AuthState = {
	isAuthLogin: false,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
			state.isAuthLogin = action.payload
		},
	},
})

export const { setIsAuthenticated } = authSlice.actions

export default authSlice.reducer
