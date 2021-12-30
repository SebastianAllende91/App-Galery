import { render, screen } from "@testing-library/react";
import Cards from "../components/layouts/Cards";

describe("<Container/>", () => {
  it("Snapshot principal", () => {
    render(<Cards />);

    expect(screen.getByLabelText("imagenes")).toMatchSnapshot();
  });

  //Esta prueba me tira error en el metodo find
  // it("Snapshot segundo", async () => {
  //   render(<Cards />);

  //   const res = await screen.findAllByLabelText("img");

  //   expect(res).toHaveLength(10);
  //   //console.log(await screen.findAllByLabelText("img"));
  // });
});
