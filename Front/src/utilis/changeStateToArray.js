
export const convertArray = (array) => {

    return array.reduce((accumulator, item) => {

        const { userID, quantity, date } = item;

        const existingItem = accumulator.find((obj) => obj.date === date);

        if (existingItem) {
            existingItem.data.push({ userID, quantity: parseInt(quantity) });
        } else {
            accumulator.push({ date, data: [{ userID, quantity: parseInt(quantity) }] });
        }

        return accumulator
    }, [])
}






