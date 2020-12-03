var tvRemote = function (word) {
    let arr = [['a', 'b', 'c', 'd', 'e', '1', '2', '3'],
    ['f', 'g', 'h', 'i', 'j', '4', '5', '6'],
    ['k', 'l', 'm', 'n', 'o', '7', '8', '9'],
    ['p', 'q', 'r', 's', 't', '', '@', '0'],
    ['u', 'v', 'w', 'x', 'y', 'z', '-', '/']]

    let buttonPressCount = 0;
    let prevIndex = [0, 0];

    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            for (let k = 0; k < arr[j].length; k++) {
                if (word[i] == (arr[j][k])) {
                    buttonPressCount += Math.abs(j - prevIndex[0]) + Math.abs(k - prevIndex[1]) + 1;
                    prevIndex = [j,k];
                }
            }
        }
    } return buttonPressCount;
}