import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../index"

interface IStatus {
  label: string,
  expirationTimeMS?: number
}

interface IStatuses {
  items: IStatus[]
}

const initialState: IStatuses = {
  items: [],
}

const statusesSlice = createSlice({
  name: "statuses",
  initialState,
  reducers: {
    addStatus(state, action: PayloadAction<IStatus>) {
      const {
        label,
        expirationTimeMS = 5000,
      } = action.payload

      return {
        items: [ ...state.items, { label, expirationTimeMS } ],
      }
    },
    clearStatuses(state) {
      return {
        items: [],
      }
    },
  },
})

export const { addStatus, clearStatuses } = statusesSlice.actions

export const getStatuses = (state: RootState) => state.statuses.items

export default statusesSlice.reducer
