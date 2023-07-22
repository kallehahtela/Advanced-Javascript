// Flattening
const array = [1,2,3,4,5]
array.flat()

const array2 = [1,[2,3],[4,5]]
array2.flat()

const array3 = [1,2,[3,4,[5]]]
array3.flat()


const entries = ['bob', 'sally',,,,, 'cindy']
entries.flat();


const NPC = ['pekka', 'jari', 'saku', 'ilmari', 'jalmari']
const NPCChaos = NPC.flatMap(creature => creature + '!')

const userEmail = '        pekka-jari@gmail.com';
const userEmail2 = 'jonne.pekka@gmail.com              ';
userEmail.trimStart();
userEmail2.trimEnd();

