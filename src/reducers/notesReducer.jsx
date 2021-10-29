/*
    {
        notes: [],
        active: null,
        active: {
            id: '456ad4a4dsad',
            title: '',
            body: '',
            imageUrl: '',
            date: 12335454,
        }
    }
*/

import { types } from '../types/types';

const initialSate = {
    notes: [],
    active: null,
};

export const notesReducer = (state = initialSate, action) => {
    switch (action.type) {
        case types.notesActive:
            return {
                ...state,
                active: {
                    ...action.payload,
                },
            };
        case types.notesAddNew:
            return {
                ...state,
                notes: [action.payload, ...state.notes]
            };
        case types.notesLoad:
            return {
                ...state,
                notes: [...action.payload],
            };
        case types.notesUpdated:
            return {
                ...state,
                notes: state.notes.map((note) =>
                    note.id === action.payload.id ? action.payload.note : note
                ),
            };
        case types.notesDelete:
            return {
                ...state,
                active: null,
                //retorna todas las notas cuyo id sea diferente a payload
                notes: state.notes.filter((note) => note.id !== action.payload),
            };
        case types.notesLogoutCleaning:
            return {
                ...state,
                active: null,
                notes: []
            };
        default:
            return state;
    }
};
