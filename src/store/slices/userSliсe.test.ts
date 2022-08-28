import userReducer, {
  setUser,
  logOutUser,
} from "./userSliсe"
import { describe, expect, it } from "vitest"

const initialState = {
  email: null,
  token: null,
  id: null,
}

const user = {
  email: "example@example.ru",
  token: "example-token",
  id: "example-id",
}

describe("userSlice", () => {
  it("Should return default state when passed an empty action", () => {
    const result = userReducer(undefined, { type: "" })

    expect(result).toEqual(initialState)
  })

  it("Should set user with 'setUser' action", () => {

    const action = {
      type: setUser.type,
      payload: user
    }

    const result = userReducer(initialState, action)

    expect(result).toBe(user)
  })

  it("Should log out user with 'logOut' action", () => {
    const loggedUser = user
    const action = { type: logOutUser.type }

    const result = userReducer(loggedUser, action)

    expect(result).toStrictEqual(initialState)
  })
})