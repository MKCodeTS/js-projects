//Function that removes the string WUB from a string provided and leaves only one space between remaining words/strings


// function songDecoder(song){
//     const decodedSong = song.replace(/WUB/g, " ");// -this removed the WUB but not the double spaces
//     return decodedSong;
// }

// function songDecoder(song){
//     const decodedSong = song.replace(/(WUB)+/g, ' ');- this removed the double spaces but did not  pass all tests
//     return decodedSong;
// }

// this solution is from https://www.florin-pop.com/blog/2019/07/jcc-dubstep/
function songDecoder(song) { 
	return (
		song
		    // Step 1 & 2. Replace all he 'WUB' set of characters with an empty string (' ') using ReGeX . 
            // Remove the extra spaces between words using ReGeX, again
		    .replace(/(WUB)+/g, ' ')
		    // Step 3.Trim the remaining whitespace from both sides of the string
		    .trim() 
	);
}


console.log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"))



