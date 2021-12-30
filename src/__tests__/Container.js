import { render, screen } from "@testing-library/react";
import Container from "../components/pages/Container";

describe("<Container/>", () => {
  it("Snapshot principal", () => {
    render(<Container />);

    expect(screen.getByLabelText("container")).toMatchSnapshot();
  });
});
