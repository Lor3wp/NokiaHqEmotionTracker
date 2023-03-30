import { render, screen } from "@testing-library/react";
import EmotionStats from "../EmotionStats";

test("displays the emotion stats correctly", async () => {
  const statsData = { count: 100 };
  const statsTodayData = { count: 10 };
  render(
    <EmotionStats
      statsData={statsData}
      setStatsData={() => {}}
      statsTodayData={statsTodayData}
      setStatsTodayData={() => {}}
    />
  );

  await screen.findByText(/Loading/i);
  expect(screen.getByText(/all feelings/i)).toBeInTheDocument();
});
