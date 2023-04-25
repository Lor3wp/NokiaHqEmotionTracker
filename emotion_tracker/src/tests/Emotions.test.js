import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Emotions from "../components/Emotions";
import {fetch} from "node-fetch"
describe("buttonClicked", () => {
  // const fetch = require("node-fetch");

  it("calls the add emotion function with an id correctly", async () => {
    const mockAddEmotion = jest.fn();
    const mockSetClicked = jest.fn();
    const mockTimerStart = jest.fn();
    const id = 1;

    const { getByTestId } = render(<Emotions />);

    fireEvent.click(getByTestId(`emotion-button-${id}`));

    expect(mockAddEmotion).toHaveBeenCalledWith(id);
    expect(mockSetClicked).toHaveBeenCalledWith(id);
    expect(mockTimerStart).toHaveBeenCalled();

    // Use the fetch function to make an API call
    const response = await fetch("https://api.example.com/emotions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    // Check that the response was successful
    expect(response.ok).toBe(true);
  });
});
