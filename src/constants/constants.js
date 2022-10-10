export const listOfUsers = [
    {
        id: 1,
        firstName: 'Marko',
        lastName: 'Markovic',
        age: 28,
        city: 'Budva',
        image: "https://cdn-icons-png.flaticon.com/512/194/194933.png",
        movies:[1,3,2,5,7,12,17,9,11]
    
    },{
        id: 2,
        firstName: 'Janko',
        lastName: 'Jankovic',
        age: 30,
        city: 'Cetinje',
        image: "https://cdn-icons-png.flaticon.com/512/194/194935.png",
        movies:[2,1,5,9,16,14,13,4,6,8,10,12]
    },{
        id: 3,
        firstName: 'Ivana',
        lastName: 'Ivanovic',
        age: 18,
        city: 'Podgorica',
        image: "https://cdn-icons-png.flaticon.com/512/194/194938.png",
        movies:[13,14,2,1,5,7,8,10,15]
    },{
        id: 4,
        firstName: 'Nikola',
        lastName: 'Nikolic',
        age: 50,
        city: 'Niksic',
        image: "https://cdn-icons-png.flaticon.com/512/194/194937.png",
        movies:[16,17,18,15,14,7,1,2,3]
    },
];

export const  listOfMovies = [
    {
        id: 1,
        name: 'Pulp Fiction',
        year: 1994,
        genre: 'Crime',
        image:
            'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
        actors: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson']
    },
    {
        id: 2,
        name: 'About Time',
        year: 2013,
        genre: 'Drama',
        image:
            'https://m.media-amazon.com/images/M/MV5BMTA1ODUzMDA3NzFeQTJeQWpwZ15BbWU3MDgxMTYxNTk@._V1_.jpg',
        actors: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson']
    },
    {
        id: 3,
        name: 'The Shawshank Redemption',
        year: 1994,
        genre: 'Drama',
        image: 'https://flxt.tmsimg.com/assets/p15987_p_v8_ai.jpg',
        actors: ['Tim Robbins', 'Morgan Freeman']
    },
    {
        id: 4,
        name: 'Fight Club',
        year: 1999,
        genre: 'Drama',
        image: 'https://lumiere-a.akamaihd.net/v1/images/image_174b2bb6.jpeg',
        actors: ['Brad Pitt', 'Edward Norton']
    },
    {
        id: 5,
        name: 'Inception',
        year: 2010,
        genre: 'Action',
        image:
            'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg',
        actors: [
            'Leonardo DiCaprio',
            'Joseph Gordon-Levitt',
            'Ellen Page(Elliot Page)',
        ]
    },
    {
        id: 6,
        name: `One Flew Over the Cuckoo's Nest`,
        year: 1975,
        genre: 'Drama',
        image:
            'https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg',
        actors: ['Jack Nicholson', 'Louise Fletcher']
    },
    {
        id: 7,
        name: 'The Silence of the Lambs',
        year: 1991,
        genre: 'Crime',
        image:
            'https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
        actors: ['Jodie Foster', 'Anthony Hopkins']
    },
    {
        id: 8,
        name: 'Sinister',
        year: 2012,
        genre: 'Horror',
        image:
            'https://m.media-amazon.com/images/M/MV5BMjI5MTg1Njg0Ml5BMl5BanBnXkFtZTcwNzg2Mjc4Nw@@._V1_.jpg',
        actors: ['Ethan Hawke', 'Juliet Rylance']
    },
    {
        id: 9,
        name: 'Insidious',
        year: 2010,
        genre: 'Horror',
        image:
            'https://m.media-amazon.com/images/M/MV5BMTYyOTAxMDA0OF5BMl5BanBnXkFtZTcwNzgwNTc1NA@@._V1_FMjpg_UX1000_.jpg',
        actors: ['Patrick Wilson', 'Rose Byrne', 'Lin Shaye']
    },
    {
        id: 10,
        name: 'Untouchable',
        year: 2011,
        genre: 'Biography',
        image:
            'https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_FMjpg_UX1000_.jpg',
        actors: ['Francois Cluzet', 'Omar Sy']
    },
    {
        id: 11,
        name: 'The Dark Knight Rises',
        year: 2012,
        genre: 'Action',
        image:
            'https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_FMjpg_UX1000_.jpg',
        actors: ['Christian Bale', 'Tom Hardy']
    },
    {
        id: 12,
        name: 'Avengers: Endgame',
        year: 2019,
        genre: 'Action',
        image:
            'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg',
        actors: ['Robert Downey Jr', 'Chris Evans', 'Mark Ruffalo']
    },
    {
        id: 13,
        name: 'Good Will Hunting',
        year: 1997,
        genre: 'Drama',
        image:
            'https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg',
        actors: ['Robin Williams', 'Matt Damon', 'Ben Affleck']
    },
    {
        id: 14,
        name: 'The Hunt',
        year: 2012,
        genre: 'Drama',
        image: 'https://ruthlessculture.files.wordpress.com/2014/04/th1.jpg',
        actors: ['Mads Mikkelsen', 'Thomas Bo Larsen']
    },
    {
        id: 15,
        name: 'Amelie',
        year: 2001,
        genre: 'Comedy',
        image:
            'https://m.media-amazon.com/images/M/MV5BNDg4NjM1YjMtYmNhZC00MjM0LWFiZmYtNGY1YjA3MzZmODc5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg',
        actors: ['Audrey Tautou', 'Mathieu Kassovitz']
    },
    {
        id: 16,
        name: 'Shutter Island',
        year: 2010,
        genre: 'Mystery',
        image:
            'https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
        actors: ['Leonardo DiCaprio', 'Mark Ruffalo']
    },
    {
        id: 17,
        name: 'Joker',
        year: 2019,
        genre: 'Crime',
        image:
            'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
        actors: ['Joaquin Phoenix', 'Robert De Niro']
    },
    {
        id: 18,
        name: 'The Departed',
        year: 2006,
        genre: 'Crime',
        image:
            'https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_FMjpg_UX1000_.jpg',
        actors: ['Leonardo DiCaprio', 'Matt Damon', 'Jack Nicholson']
    },
]