import { useState } from "react";
import { getRolls } from "./utils";
import Dice from "./Dice";

export default function LuckyN({ numDice = 2, winCheck }) {
    const [dice, setDice] = useState(getRolls(numDice));
    const isWinner = winCheck(dice);

    const handleClick = () => {
        setDice(getRolls(numDice));
    }

    return (
        <main className="LuckyN">
            <h1>
                Lucky {isWinner && 'You Win!!!'}
            </h1>
            <Dice dice={dice} />
            <button onClick={handleClick}>RE:Roll</button>
        </main>
    )
}