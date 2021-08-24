
function convertToLetters() {
    array1 = ["een", "twee", "drie", "vier", "vijf", "zes", "zeven", "acht", "negen"]
    array2 = ["tien", "elf", "twaalf", "dertien", "veertien"]
    let number = document.querySelector('input').value
    let output

    switch (Number(number)) {
        case 1:
            output = array1[0];
            break;
        case 2:
            output = array1[1];
            break;
        case 3:
            output = array1[2];
            break;
        case 4:
            output = array1[3];
            break;
        case 5:
            output = array1[4];
            break;
        case 6:
            output = array1[5];
            break;
        case 7:
            output = array1[6];
        case 8:
            output = array1[7];
            break;
        case 9:
            output = array1[8];
            break;
        case 0:
            output = "null"
            break;
    }
    switch (Number(number)) {
        case 10:
            output = array2[0]
            break;
        case 11:
            output = array2[1];
            break;
        case 12:
            output = array2[2];
            break;
        case 13:
            output = array2[3];
            break;
        case 14:
            output = array2[4]
            break;
            case 15:
                output = array1[4]+array2[0]
                break;
            case 16:
                output = array1[5]+array2[0];
                break;
            case 17:
                output = array1[6]+array2[0];
                break;
            case 18:
                output = array1[7]+array2[0];
                break;
            case 19:
                output = array1[8]+array2[0]
                break;
    

    }


document.querySelector('p').innerHTML = output;
}
