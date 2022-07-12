const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
	let str = "";
	let arr = expr.match(/.{1,10}/g).map((item) => {
		if (item === "**********") {
			item = "**";
		}
		return item
			.match(/.{1,2}/g)
			.filter((it) => it === "10" || it === "11" || it === "**")
			.map((value) => {
				if (value === "10") {
					value = ".";
				} else if (value === "11") {
					value = "-";
				} else {
					value = " ";
				}
				return value;
			})
			.join("");
	});
	arr = arr.map((item) => {
		for (let key in MORSE_TABLE) {
			if (item === key) {
				str = str + MORSE_TABLE[key];
			}
		}
		if (item === " ") {
			str = str + item;
		}
	});
	return str;
}

module.exports = {
    decode
}