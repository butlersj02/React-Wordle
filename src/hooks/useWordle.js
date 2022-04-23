import { useState } from 'react'

const useWordle = (solution) => {
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([]) // each guess is an array
    const [history, setHistory] = useState([]) // each guess is a string
    const [isCorrect, setIsCorrect] = useState(false)
    
    // format a guess into an array of letter objects
    // e.g. [{key: 'a', color: 'yellow'}]

    // const formatGuess = (guess) => {
    //     const formattedGuess = []
    //     const guessArray = guess.split("")
    //     const solutionArray = solution.split("")
    //     guessArray.forEach((letter, ind) => {
    //         let answer = {key: letter, color: ""}
    //         if (letter === solutionArray[ind]){
    //             answer.color = "green"
    //         } else if (solutionArray.includes(letter)){
    //             answer.color = "yellow"
    //         } else {
    //             answer.color = "gray"
    //         }
    //         formattedGuess.push(answer)
    //     })
    // }

    // format a guess into an array of letter objects
    // e.g. [{key: 'a', color: 'yellow'}]
    const formattGuess = () => {}

    // add a new guess to the guesses history
    // update the isCorrect state if the guess is correct
    // add one to the turn state
    const addNewGuesses = () => {

    }

    // handle keyup event & track current guess
    // if the user presses enter, add the new guess

    const handleKeyup = () => {

    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyup}
}

export default useWordle