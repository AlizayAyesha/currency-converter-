import inquirer from "inquirer";
// Define the currency map with exchange rates
const currency = {
    PKR: 280, // Pakistani Rupee (PKR)
    INR: 74.57, // Indian Rupee (INR)
    IRR: 42105.00, // Iranian Rial (IRR) 1 USD = 42105.00 IRR
    IQD: 1458.00, // Iraqi Dinar (IQD) 1 USD = 1458.00 IQD
    AFN: 86.62, // Afghan Afghani (AFN) 1 USD = 86.62 AFN
    DZD: 137.74, // Algerian Dinar (DZD) 1 USD = 137.74 DZD
    TRY: 13.00, // Turkish Lira (TRY) 1 USD = 13.00 TRY
    USD: 1, // United States Dollar (USD) 
    EUR: 0.91, // Euro (EUR) 1 USD = 0.83 EUR
    GBP: 0.79, // British Pound Sterling (GBP)
    SAR: 3.75, // Saudi Riyal (SAR) 1 USD = 3.75 SAR
    IDR: 14347.50, // Indonesian Rupiah (IDR) 1 USD = 14347.50 IDR
    QAR: 3.64, // Qatari Riyal (QAR)  1 USD = 3.64 QAR
    AED: 3.67, // United Arab Emirates Dirham (AED)  1 USD = 3.67 AED
    MAD: 8.93, // Moroccan Dirham (MAD) 1 USD = 8.93 MAD
    AUD: 1.31, // Australian Dollar (AUD) 1 USD = 1.31 AUD
    ITL: 1178.45, // Italian Lira (ITL) 1 USD = 1178.45 ITL
    FRF: 5.70, // French Franc (FRF) 1 USD = 5.70 FRF
    ESP: 161.64, // Spanish Peseta (ESP) 1 USD = 161.64 ESP
    BRL: 5.22, // Brazilian Real (BRL) 1 USD = 5.22 BRL
    CNY: 6.44, // Chinese Yuan (CNY)  1 USD = 6.44 CNY
    KRW: 1161.38, // South Korean Won (KRW)  1 USD = 1161.38 KRW
    JPY: 112.00, // Japanese Yen (JPY) 1 USD = 112.00 JPY
    NLG: 1.84, // Dutch Guilder (NLG) 1 USD = 1.84 NLG
    THB: 32.85, // Thai Baht (THB) 1 USD = 32.85 THB
    RUB: 73.50 // Russian Ruble (RUB)  1 USD = 73.50 RUB
};
async function convertCurrency() {
    // Prompt the user for source currency, target currency, and amount to convert
    const { from, to, amount } = await inquirer.prompt([
        {
            name: "from",
            type: "list",
            choices: Object.keys(currency),
            message: "Enter the source currency"
        },
        {
            name: "to",
            type: "list",
            choices: Object.keys(currency),
            message: "Enter the target currency"
        },
        {
            name: "amount",
            type: "number",
            message: "Enter the amount to convert"
        }
    ]);
    // Retrieve exchange rates for source and target currencies
    const fromAmount = currency[from];
    const toAmount = currency[to];
    // Calculate the converted amount
    const convertedAmount = (amount / fromAmount) * toAmount;
    // Output the conversion result
    console.log(`${amount} ${from} is equivalent to ${convertedAmount.toFixed(2)} ${to}`);
}
// Call the function to start currency conversion
convertCurrency();
