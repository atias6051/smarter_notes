const SET_NOTES = 'notes/SET_NOTES'

const setNotes = notes => ({
    type: SET_NOTES,
    payload: notes
})

const initialState = {notes:null, currentNote:null}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case SET_NOTES:
            const notes = {}
            action.payload.map(el=>notes[el.id] = el)
            return {...state, notes:notes}
        default:
            return state;
    }
}
