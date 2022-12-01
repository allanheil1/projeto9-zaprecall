import Flashcard from './Flashcard'

export default function Deck({cards, cont, setCont}){
    return(
        <>
            {cards.map((card, index) => (
                <Flashcard
                    key={index}
                    card={card}
                    cont={cont}
                    setCont={setCont}
                >
                </Flashcard>
            ))}
        </>
    );
}