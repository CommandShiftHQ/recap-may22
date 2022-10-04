import React, { useState } from "react";

const formatTemperamentData = (temperamentData) => {
    return temperamentData.split(",").map(
        (temperament, index) => ({
            id: `${temperament}-${index}`,
            text: temperament,
            hasQuality: false
        })
    )
}


const CatTemperamentForm = ({ temperament }) => {
    const [formData, setFormData] = useState(formatTemperamentData(temperament))
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (id) => {
        const newFormData = formData.map((item) => (
            item.id === id ? { ...item, hasQuality: !item.hasQuality } : item
        ))

        console.log({ newFormData })

        setFormData(newFormData)
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // axios.post somewhere
        setSubmitted(true);
    }

    return (
        <form
            onSubmit={handleFormSubmit}
        >
            {/* pass a name prop to this component and insert the cat's name below */}
            {submitted ? <p>Thank you!</p> : <><p>Would you agree that [insert cat's name] cats are: </p>
                {formData && formData.map((item, index) => (
                    <label key={index} data-testid="temperament-checkbox">
                        <input
                            type="checkbox"
                            value={item.text}
                            checked={item.hasQuality}
                            onChange={() => handleChange(item.id)}
                            id={item.id}
                        />

                        {item.text}

                    </label>))}
                <button>Submit</button>
            </>
            }

        </form>
    )
}

export default CatTemperamentForm;