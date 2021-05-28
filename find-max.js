function songDecoder(song){
    const decodedSong = song.replace(/WUB/g, " ");
    return decodedSong;
}

console.log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"))

// const str = 'WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB';
// const newStr = str.replace(/WUB/g, " ");
// console.log(newStr);

