import { fireEvent, render } from "@testing-library/react"
import React from "react"
import { Player } from "../components"

describe("<Player/>", () => {
  it("render the <Player/> with a buny video", () => {
    const { getByText, queryByTestId, container } = render(
      <Player>
        <Player.Button />
        <Player.Video src="/public/videos/bunny.mp4" />
      </Player>
    )

    expect(queryByTestId("player")).toBeFalsy()
    fireEvent.click(getByText("Play"))

    expect(queryByTestId("player")).toBeTruthy()
    fireEvent.click(getByText("Play"))

    expect(queryByTestId("player")).toBeFalsy()
    // expect(container.firstChild).toMatchSnapshot()
  })
})
