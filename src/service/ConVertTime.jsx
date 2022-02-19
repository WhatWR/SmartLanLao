const ConvertTime = (temp) => {
    const date = new Date(temp)
    const hours = date.getHours() 
    const min = date.getMinutes()
    
    return `${hours}:${min}`

}
export default ConvertTime