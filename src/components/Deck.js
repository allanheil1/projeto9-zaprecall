import Flashcard from './Flashcard'

export default function Deck({cards, cont, setCont}){
    return(
        <>
            {cards.map((card, index) => (
                <Flashcard
                    card={card}
                    key={index}
                    cont={cont}
                    setCont={setCont}
                >
                </Flashcard>
            ))}
        </>
    );
}