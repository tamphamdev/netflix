import { fireEvent, render } from "@testing-library/react"
import React from "react"
import { Player } from "../../components"

describe("<Player/>", () => {
  it("render the <Player/> with a buny video", () => {
    const { getByText, queryByTestId, container, debug } = render(
      <Player>
        <Player.Button />
        <Player.Video src="/public/videos/bunny.mp4" />
      </Player>
    )
    debug()
    expect(queryByTestId("player")).toBeFalsy()
    fireEvent.click(getByText("Play"))

    expect(queryByTestId("player")).toBeTruthy()
    fireEvent.click(queryByTestId("player"))

    expect(queryByTestId("player")).toBeFalsy()
    expect(container.firstChild).toMatchSnapshot()
  })
})
