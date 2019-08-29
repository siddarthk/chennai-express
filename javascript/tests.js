const replaceVowels = [
    { tc:1, input : 'aeiou' , output : '12345' },
    { tc:2, input : 'see if you can get this right' , output : 's22 3f y45 c1n g2t th3s r3ght' },
    { tc:3, input : 'chennai' , output : 'ch2nn13' },
    { tc:4, input : undefined , output : '' },
    { tc:5, input : null , output : '' },
]

const longestWord = [
    { tc:1, input : 'fun&!! time' , output : 'time' },
    { tc:2, input : 'i love dogs' , output : 'love' },
    { tc:3, input : 'in search for the longest word' , output : 'longest' },
    { tc:4, input : 'found!! the hiding word' , output : 'hiding' },
]

const letterChanges =  [
    {tc:1, input: 'hello*3', output: 'Ifmmp*3' },
    {tc:2, input: 'fun times!', output: 'gvO Ujnft!' },
    {tc:3, input: 'zoom car', output: 'Appn dbs' },
    {tc:4, input: 'zdhnt', output: 'AEIOU' },
    {tc:5, input: '#$A78@', output: '#$A78@' },
]

const matchParanthesis = [
    {tc:1, input: 'this is a (test', output:'this is a (test'},
    {tc:2, input: 'this is (another (test', output:'this is a (another (test))'},
    {tc:3, input: 'Sometimes (when I nest them (my parentheticals) too much (like this (and this) they get confusing', output:'Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing'}
]

const binarySearch = [
    {tc:1, input: [3,8,7,6,5,-4,3,2,1 ], output : [4,-3,1,2,3,5,6,7,8] }
]

module.exports = {
    replaceVowels,
    longestWord,
    letterChanges,
    matchParanthesis,
    binarySearch
}
