import { State } from "../../redux/state"
import { rendererEntireTree } from "../rerender/rerender"

export const updateMessageText = (text:string) => {
    State.profilePage.newPostText= text;
    rendererEntireTree(State)
  }