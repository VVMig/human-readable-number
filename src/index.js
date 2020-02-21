module.exports = function toReadable(number) {
    number = new String(number).split("");
    let readableNumber = [];
    let follow = true;
    if (number.length == 1 && number[0] == 0) return "zero";
    for (let i = 0; i < number.length && follow; i++) {
        switch (number[i]) {
            case "1":
                readableNumber.push("one");
                break;
            case "2":
                readableNumber.push("two");
                break;
            case "3":
                readableNumber.push("three");
                break;
            case "4":
                readableNumber.push("four");
                break;
            case "5":
                readableNumber.push("five");
                break;
            case "6":
                readableNumber.push("six");
                break;
            case "7":
                readableNumber.push("seven");
                break;
            case "8":
                readableNumber.push("eight");
                break;
            case "9":
                readableNumber.push("nine");
                break;
            default:
                break;
        }
        if (number[i + 2] !== undefined) {
            readableNumber.push("hundred");
            continue;
        }
        if (number[i + 1] === undefined) {
            break;
        }
        readableNumber.pop();
        switch (number[i]) {
            case "0":
                readableNumber.push("hundred");
                break;
            case "1":
                switch (number[i + 1]) {
                    case "0":
                        readableNumber.push("ten");
                        break;
                    case "1":
                        readableNumber.push("eleven");
                        break;
                    case "2":
                        readableNumber.push("twelve");
                        break;
                    case "3":
                        readableNumber.push("thirteen");
                        break;
                    case "4":
                        readableNumber.push("fourteen");
                        break;
                    case "5":
                        readableNumber.push("fifteen");
                        break;
                    case "6":
                        readableNumber.push("sixteen");
                        break;
                    case "7":
                        readableNumber.push("seventeen");
                        break;
                    case "8":
                        readableNumber.push("eighteen");
                        break;
                    case "9":
                        readableNumber.push("nineteen");
                        break;
                    default:
                        break;
                }
                follow = false;

                break;
            case "2":
                readableNumber.push("twenty");
                break;
            case "3":
                readableNumber.push("thirty");
                break;
            case "4":
                readableNumber.push("forty");
                break;
            case "5":
                readableNumber.push("fifty");
                break;
            case "6":
                readableNumber.push("sixty");
                break;
            case "7":
                readableNumber.push("seventy");
                break;
            case "8":
                readableNumber.push("eighty");
                break;
            case "9":
                readableNumber.push("ninety");
                break;
            default:
                break;
        }
    }
    return readableNumber.join(" ");
};
