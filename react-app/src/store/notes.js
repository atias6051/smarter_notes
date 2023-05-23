const SET_NOTES = 'notes/SET_NOTES'

const setNotes = notes => ({
    type: SET_NOTES,
    payload: notes
})

export const getNotes = () => async dispatch => {
    const res = await fetch("/api/notes",{
        headers: {
			"Content-Type": "application/json",
		},
    })
    if(res.ok){
        const data = await res.json()
        if (data.errors) {
			return;
		}
        dispatch(setNotes(data))
    }
}

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
