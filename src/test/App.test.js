import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
  getByText,
} from "@testing-library/react";

import axios from "axios";
import App, { onCategorySubmit, baseURL } from "../App";
import RestaurantDetail from "../Components/RestaurantDetail";

describe('App', () => {
  it("renders a message", () => {
    const { container, getByText } = render(<App />);
    expect(getByText("COVID Food Finder")).toBeInTheDocument();
  });
});
