 const responses = [
    "Without a doubt",
    "Yes - definitely",
    "Most likely",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "In your dreams", 
    "hahaha",
    "Better luck next time"
]

export default () => {
    return responses[Math.floor(Math.random() * responses.length)]
} 