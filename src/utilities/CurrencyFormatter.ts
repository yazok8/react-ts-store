
//This will automatically be able to determine how to print out the currency based on your location
const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {currency:"USD", style:"currency"})

export const CurrencyFormatter = (number:number) => {
    return CURRENCY_FORMATTER.format(number)
}