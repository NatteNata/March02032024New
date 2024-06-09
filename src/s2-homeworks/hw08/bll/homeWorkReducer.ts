import {initialPeople, InitialPeopleType, UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: InitialPeopleType=initialPeople, action: ActionType): InitialPeopleType => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name     // need to fix
            return [...state].sort((a, b) => {
               return action.payload === 'up' ?  a.name.toLowerCase().localeCompare(b.name.toLowerCase())
                : b.name.toLowerCase().localeCompare(a.name.toLowerCase())
            })
        }
        case 'check': {
            return state.filter(person => person.age > action.payload) // need to fix
        }
        default:
            return state
    }
}
