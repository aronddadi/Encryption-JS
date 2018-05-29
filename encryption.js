function cipher(key, abc) {

    key = key.split('');
    abc = abc.split('')

    let match = new RegExp("[" + abc + "]+");
    let tempKey = [];
    let count = 0;

    for (let i = 0; i < abc.length; i++) {
        if (count >= key.length) {
            count = 0;
        }
        tempKey.push(key[count]);
        count++;
    }
    this.encode = function (str) {
        let toBeEncoded = [];
        str = str.split('');
        for (let i = 0; i < str.length; i++) {
            if (match.exec(str[i])) {
                let y = abc.indexOf(tempKey[i]) + abc.indexOf(str[i])
                if (y >= abc.length) {
                    y = y - abc.length;
                }
                toBeEncoded.push(abc[y]);
            } else {
                toBeEncoded.push(str[i]);
            }
            console.log(toBeEncoded);
        }
        return toBeEncoded.join('');
        console.log(toBeEncoded);
    };
    this.decode = function (str) {
        let toBeDecoded = []
        str = str.split('');
        for (let i = 0; i < str.length; i++) {
            if (match.exec(str[i])) {
                let y = abc.indexOf(str[i]) - abc.indexOf(tempKey[i])
                if (abc.indexOf(str[i]) < abc.indexOf(tempKey[i])) {
                    y = y + abc.length;
                }
                toBeDecoded.push(abc[y]);
            } else {
                toBeDecoded.push(str[i]);
            }
        }
        toBeDecoded = toBeDecoded.join('');
        return (toBeDecoded);
    };
}