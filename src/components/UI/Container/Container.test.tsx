import { describe, expect, it } from "vitest"
import Container from "./Container"
import { render, screen, userEvent } from "../../../utils/test-utils"

const content = "Content"

describe("Container", () => {
  it("Container should be rendered with children content", async () => {
    render(
      <Container>
        {content}
      </Container>
    )
    expect(await screen.findByText(content)).toBeInTheDocument()
  })
})
