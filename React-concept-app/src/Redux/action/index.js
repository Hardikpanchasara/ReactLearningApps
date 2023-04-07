export const IncNumber = (num) => {
     return{
        type: "Increment",
        payload : num
     }
}

export const DecNumber = () => {
    return{
        type: "Decrement"
    }
}