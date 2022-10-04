import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import CatInfo from "../components/CatInfo"

describe("CatInfo", () => {
    const refreshCatInfo = jest.fn();

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

    it('calls updateCounter prop when clicked', () => {
        render(
            <CatInfo catData={catData} handleClick={refreshCatInfo} />
        );
        fireEvent.click(screen.getByText("Refresh"));
        expect(refreshCatInfo).toHaveBeenCalledTimes(1);
    });
})

