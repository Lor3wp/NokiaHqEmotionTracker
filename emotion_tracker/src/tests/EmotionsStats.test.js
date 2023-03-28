import { render, screen } from "@testing-library/react";
import EmotionStats from "../EmotionStats";

test("renders the count of emotion data", async () => {
  const fakeData = { count: 10 };
  jest.spyOn(global, "fetch").mockResolvedValue({
    json: jest.fn().mockResolvedValue(fakeData),
  });

  render(<EmotionStats />);

  const loadingElement = screen.getByText("Loading...");
  expect(loadingElement).toBeInTheDocument();

  const countElement = await screen.findByText("10");
  expect(countElement).toBeInTheDocument();
});
