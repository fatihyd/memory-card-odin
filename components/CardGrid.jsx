import React from "react"
import Card from "./Card"

export default function CardGrid({ score, setScore, bestScore, setBestScore }) {
    // keep track of the clicked cards by their id
    const [clickedTitans, setClickedTitans] = React.useState([]);

    // titans raw data from the api
    const [titans, setTitans] = React.useState([]);

    // get the titans array from the api
    React.useEffect(() => {
        fetch("https://api.attackontitanapi.com/titans/")
            .then(response => response.json())
            .then(responseJSON => responseJSON.results)
            .then(titansArray => {
                setTitans(() => shuffleArray(titansArray));
            })
    }, []);

    // utility function to shuffle an array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    /* GAME LOGIC */
    function handleClick(id) {
        if (clickedTitans.includes(id)) {
            // If yes, it reset the game/score.
            if (score > bestScore) {
                setBestScore(score);
            }
            setScore(0);
            setClickedTitans([]);
        } else {
            // If no, add +1 to the score.
            setScore(prevScore => prevScore + 1);
            setClickedTitans(prevClickedTitans => [...prevClickedTitans, id]);
        }
        // In either case, shuffle the cards
        setTitans((prevTitans) => shuffleArray([...prevTitans]));
    }

    return (
        <div id="card-grid">
            {
                titans.map(titan => (
                    <Card key={titan.id} id={titan.id} titan={titan} handleClick={handleClick} />
                ))
            }
        </div>
    );
}