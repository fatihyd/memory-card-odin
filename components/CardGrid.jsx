import React from "react"
import Card from "./Card"

export default function CardGrid({ score, setScore, bestScore, setBestScore }) {
    // keep track of the clicked cards
    const [clickedTitans, setClickedTitans] = React.useState([]);
    /*
        CardGrid: 
        This component contains all the Card components. 
        It should have the game logic. 
        When a card is clicked, it checks if the card has been clicked before. 
            If yes, it resets the game/score. 
            If no, it adds +1 to the score. 
            In either case, it shuffles the cards. 
        It also keeps track of the current score and passes this information to the Header component.
    */
    /* GET THE CARDS */
    // titan card elements
    const [titanCards, setTitanCards] = React.useState([]);

    // get the titans array from the api
    React.useEffect(() => {
        fetch("https://api.attackontitanapi.com/titans/")
            .then(response => response.json())
            .then(responseJSON => responseJSON.results)
            .then(titans => {
                setTitanCards(() => getRandomCards(titans));
            })
    }, []);

    // make cards from the titans array in random order
    function getRandomCards(titans) {
        let cards = [];
        const NUMBER_OF_TITANS = 9;
        for (let i = 0; i < NUMBER_OF_TITANS; i++) {
            cards.push(<Card key={titans[i].id} id={titans[i].id} titan={titans[i]} handleClick={handleClick} />);
        }
        return shuffleArray(cards);
    }

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
        setTitanCards((prevTitanCards) => shuffleArray([...prevTitanCards]));
    }

    /*
    function handleClick(id) {
        // Use a functional update to ensure correct handling of asynchronous state updates
        setClickedTitans(prevClickedTitans => {
            if (prevClickedTitans.includes(id)) {
                // If yes, reset the game/score.
                if (score > bestScore) {
                    setBestScore(score);
                }
                setScore(0);
                return [];
            } else {
                // If no, add +1 to the score.
                setScore(prevScore => prevScore + 1);
                return [...prevClickedTitans, id];
            }
        });

        // In either case, shuffle the cards
        setTitanCards(prevTitanCards => shuffleArray([...prevTitanCards]));
    }
    */

    return (
        <div id="card-grid">
            {titanCards}
        </div>
    );
}
