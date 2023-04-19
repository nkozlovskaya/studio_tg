import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICharacter } from "../../types/CharacterType";

export interface CharacterState {
  characters: ICharacter[];
}

const initialState: CharacterState = {
  characters: [],
};

export const changeColorSlice = createSlice({
  name: "changeColor",
  initialState,
  reducers: {
    changeColor(state, action: PayloadAction<string>) {
      state.characters = state.characters.filter(
        (character) => character.eye_color === action.payload
      );
    },
  },
});

export const { changeColor } = changeColorSlice.actions;
const addressReducer = changeColorSlice.reducer;
export default addressReducer;
