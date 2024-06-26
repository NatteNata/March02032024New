const initState = {
    themeId: 1,
}

export type InitialState = typeof initState

export const themeReducer = (state = initState, action: ReturnType<typeof changeThemeId>): InitialState => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({type: 'SET_THEME_ID', id} as const) // fix any