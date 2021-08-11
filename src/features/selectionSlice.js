import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedItems: [],
    showSecondarySelection: false,
    nickname: '',
    outputMessage:'No order placed'
}

const selectionSlice = createSlice ({
    name: 'selection',
    initialState,
    reducers: {
        updateSelection(state, action) {
            if(action.payload == null) {
                state.selectedItems = []
            } else if (state.showSecondarySelection === true){
                state.selectedItems = action.payload
            } else {
                let arr = [action.payload]
                state.selectedItems = arr
            }
        },
        showSecondarySelection(state, action) {
            state.showSecondarySelection = action.payload
        },
        updateNickname(state,action) {
            state.nickname = action.payload
        },
        updateOutputMessage(state, action) {
            state.outputMessage = action.payload
        }
    }
})


export const{showSecondarySelection, updateSelection, updateNickname, updateOutputMessage} = selectionSlice.actions
export default selectionSlice.reducer