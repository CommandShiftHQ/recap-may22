import CatInfoSection from "./CatInfoSection";

const CatInfo = ({ catData, handleClick }) => {
    return (
        <div>
            <h2>Cat Info</h2>
            <button onClick={handleClick}>Refresh</button>
            <div>
                <CatInfoSection catData={catData} />
            </div>
        </div>
    )
}

export default CatInfo;