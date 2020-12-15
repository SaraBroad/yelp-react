import { fireEvent, render, screen } from "@testing-library/react";
import SearchBar from "../Components/SearchBar";

describe("Search Bar", () => {
  it("allows the user to select a category", () => {
    render(<SearchBar />);
    fireEvent.change(screen.getByLabelText(/type/i), {
      target: { value: "pizza" },
    });
  });
});
