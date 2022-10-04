import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import CatInfoSection from "../components/CatInfoSection"

describe("CatInfoSection", () => {
    const catData = {
        name: "Bengal",
        temperament: "Alert, Agile, Energetic, Demanding, Intelligent",
        description: "Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it.",
        image: {
            "id": "O3btzLlsO",
            "width": 1100,
            "height": 739,
            "url": "https://cdn2.thecatapi.com/images/O3btzLlsO.png"
        }
    }

    it("contains the cat's name", () => {
        render(<CatInfoSection catData={catData} />);
        expect(screen.getByText(/name/i)).toBeInTheDocument();
    });

    it("displays cat information", () => {
        const { container } = render(<CatInfoSection catData={catData} />);
        expect(container).toMatchSnapshot();
    });
})

