import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import CatTemperamentForm from "../components/CatTemperamentForm"

describe("CatTemperamentForm", () => {
    const temperament = "Alert, Agile, Energetic, Demanding, Intelligent"

    it("renders as expected", () => {
        const { asFragment } = render(<CatTemperamentForm temperament={temperament} />);
        const component = asFragment();
        expect(component).toMatchSnapshot();
    });

    it("contains title", () => {
        render(<CatTemperamentForm temperament={temperament} />);
        expect(screen.getByText(/would you agree that/i)).toBeInTheDocument();
    });

    it("render expected number of cat qualities", () => {
        render(
            <CatTemperamentForm temperament={temperament} />
        );

        expect(screen.getAllByTestId("temperament-checkbox")).toHaveLength(5);
    });
});


