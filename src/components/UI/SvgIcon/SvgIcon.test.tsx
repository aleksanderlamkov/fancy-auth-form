import { describe, expect, it } from "vitest"
import { render } from "../../../utils/test-utils"
import SvgIcon from "./SvgIcon"

const iconName = "test-name"

describe("SvgIcon", () => {
  it("SvgIcon should be rendered with use tag with expected href attr", () => {
    const { container } = render(<SvgIcon name={iconName} />)
    const useNode = container.getElementsByTagName("use")[0]
    expect(useNode.getAttribute("href")).toBe(`#icon-${iconName}`)
  })

  it("Icon snapshot", () => {
    const icon = render(<SvgIcon name={iconName}/>)

    expect(icon).toMatchSnapshot()
  })
})
