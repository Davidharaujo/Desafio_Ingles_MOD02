let comedy = [{
    title: "Superhero Movie",
    director: "Craig Mazin",
    year: 2008
},{
    title: "Scary Movie 5",
    director: "Malcolm D. Lee",
    year: 2013
},{
    title: "Scary Movie 3",
    director: "David Zucker",
    year: 2003
}]

let action = [{
    title: "Ghost in the Shell",
    director: "Rupert Sanders",
    year: 2017
},{
    title: "Wanted",
    director: "Timur Bekmambetov",
    year: 2008
},{
    title: "Matrix",
    director: "Lana Wachowski & Lilly Wachowski",
    year: 1999
}]

let fantasy = [{
    title: "Percy Jackson & the Olympians: The Lightning Thief",
    director: "Chris Columbus",
    year: 2010
},{
    title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    director: "	Andrew Adamson",
    year: 2005
},{
    title: "Harry Potter and the Deathly Hallows: Part 2",
    director: "David Yates",
    year: 2011
}]

function avaliaFilme(arr, i) {
    if(arr[i] == arr[2]){
        console.log("My favorite movie is " + arr[2].title)
    }else {
        console.log("Not Even 5 Stars "+ arr[i].title)
    }
}

avaliaFilme(action,2)



