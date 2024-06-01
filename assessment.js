/*Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

let AnimeCollection = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(Anime_Name, Genre, Main_Character, Release_Year, Director, Rating) {
    const newAnime = {Anime_Name, Genre, Main_Character, Release_Year, Director, Rating};
    AnimeCollection.push(newAnime);
    console.log(`Minted: "${Anime_Name}" directed by ${Director}`);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    console.log("\nList of all the anime NFTs in the collection:\n");
    AnimeCollection.forEach(anime => {
        console.log(`Anime Name: ${anime.Anime_Name}`);
        console.log(`Genre: ${anime.Genre}`);
        console.log(`Main Character: ${anime.Main_Character}`);
        console.log(`Release Year: ${anime.Release_Year}`);
        console.log(`Director: ${anime.Director}`);
        console.log(`Rating: ${anime.Rating}`);
        console.log("\n");
    });
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return AnimeCollection.length;
}

// call your functions below this line

mintNFT("Spirited Away", "Fantasy", "Chihiro", 2001, "Hayao Miyazaki", 8.6);
mintNFT("My Neighbor Totoro", "Fantasy", "Totoro", 1988, "Hayao Miyazaki", 8.2);
mintNFT("Akira", "Science Fiction", "Kaneda", 1988, "Katsuhiro Otomo", 8.1);
mintNFT("Princess Mononoke", "Fantasy", "Ashitaka", 1997, "Hayao Miyazaki", 8.4);
mintNFT("Grave of the Fireflies", "Drama", "", 1988, "Isao Takahata", 8.5);
mintNFT("Attack on Titan", "Action", "Eren Yeager", 2013, "Hajime Isayama", 8.9);
mintNFT("Cowboy Bebop", "Sci-Fi", "Spike Spiegel", 1998, "Shinichirō Watanabe", 8.9);
mintNFT("Neon Genesis Evangelion", "Mecha", "Shinji Ikari", 1995, "Hideaki Anno", 8.5);
mintNFT("One Piece", "Adventure", "Monkey D. Luffy", 1999, "Eiichiro Oda", 8.7);
mintNFT("Naruto", "Action", "Naruto Uzumaki", 2002, "Masashi Kishimoto", 8.3);


listNFTs();

const totalNFTs = getTotalSupply();
console.log(`Total Supply: ${totalNFTs}`);



