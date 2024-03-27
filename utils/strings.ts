export const capFirstLetter = (str: string) => 
    (str.charAt(0).toUpperCase() + str.slice(1));


export const getMatchingWordsWithSymbols = (symbols: string[], firstName: string, lastName: string) => {
    let tempFirstSymbol = "";
    let tempLastSymbol = "";

    symbols.forEach(symbol => {
        if (firstName.startsWith(symbol)) {
            if (tempFirstSymbol.length < symbol.length)
                tempFirstSymbol = symbol;
        }

        if (lastName.startsWith(symbol)) {
            if (tempLastSymbol.length < symbol.length)
                tempLastSymbol = symbol;
        }
    })

    return {
        firstSymbol: tempFirstSymbol,
        lastSymbol: tempLastSymbol
    }
}