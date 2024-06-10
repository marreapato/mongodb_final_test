use projeto3cin

// Inserir os documentos na coleção empresasProdutorasDeGames com os jogos já embutidos
db.empresasProdutorasDeGames.insertMany([
    {
        "nome": "Naughty Dog",
        "paisOrigem": "EUA",
        "fundacao": 1984,
        "jogosDesenvolvidos": [
            {
                "_id": ObjectId(),
                "titulo": "The Last of Us",
                "genero": "Ação e Aventura",
                "idiomasDisponiveis": ["Inglês", "Português", "Espanhol"],
                "anoLancamento": 2013,
                "criticas": [
                    {"site": "Metacritic", "avaliacao": 9.7},
                    {"site": "IGN", "avaliacao": 10}
                ],
                "quantidadeHoras": 170,
                "preco": 59.99
            },
            {
                "_id": ObjectId(),
                "titulo": "The Last of Us Part II",
                "genero": "Ação e Aventura",
                "idiomasDisponiveis": ["Inglês", "Português", "Espanhol"],
                "anoLancamento": 2020,
                "criticas": [
                    {"site": "Metacritic", "avaliacao": 9.5},
                    {"site": "IGN", "avaliacao": 9.3}
                ],
                "quantidadeHoras": 40,
                "preco": 69.99
            }
        ],
        "comentarios": [
            {
                "usuario": "johndoe",
                "comentario": "Excelente empresa com jogos emocionantes!",
                "indicacao": 10
            },
            {
                "usuario": "janedoe",
                "comentario": "Os gráficos dos jogos são incríveis.",
                "indicacao": 9
            }
        ]
    },
    {
        "nome": "Rockstar Games",
        "paisOrigem": "EUA",
        "fundacao": 1998,
        "jogosDesenvolvidos": [
            {
                "_id": ObjectId(),
                "titulo": "Grand Theft Auto V",
                "genero": "Ação",
                "idiomasDisponiveis": ["Inglês", "Português", "Espanhol", "Francês", "Alemão"],
                "anoLancamento": 2013,
                "criticas": [
                    {"site": "Metacritic", "avaliacao": 9.5},
                    {"site": "IGN", "avaliacao": 10},
                    {"site": "GameSpot", "avaliacao": 9.6}
                ],
                "quantidadeHoras": 110,
                "preco": 29.99
            },
            {
                "_id": ObjectId(),
                "titulo": "Grand Theft Auto IV",
                "genero": "Ação",
                "idiomasDisponiveis": ["Inglês", "Português", "Espanhol", "Francês", "Alemão"],
                "anoLancamento": 2008,
                "criticas": [
                    {"site": "Metacritic", "avaliacao": 9.0},
                    {"site": "IGN", "avaliacao": 9.2},
                    {"site": "GameSpot", "avaliacao": 9.4}
                ],
                "quantidadeHoras": 25,
                "preco": 19.99
            },
            {
                "_id": ObjectId(),
                "titulo": "Red Dead Redemption 2",
                "genero": "Ação e Aventura",
                "idiomasDisponiveis": ["Inglês", "Português", "Espanhol", "Francês", "Alemão"],
                "anoLancamento": 2018,
                "criticas": [
                    {"site": "Metacritic", "avaliacao": 9.8},
                    {"site": "IGN", "avaliacao": 10},
                    {"site": "GameSpot", "avaliacao": 9.7}
                ],
                "quantidadeHoras": 430,
                "preco": 59.99
            }
        ],
        "comentarios": [
            {
                "usuario": "gamer123",
                "comentario": "Adoro a série GTA!",
                "indicacao": 10
            },
            {
                "usuario": "player456",
                "comentario": "RDR2 é um dos melhores jogos que já joguei.",
                "indicacao": 9
            }
        ]
    },
    {
        "nome": "CD Projekt Red",
        "paisOrigem": "Polônia",
        "fundacao": 2002,
        "jogosDesenvolvidos": [
            {
                "_id": ObjectId(),
                "titulo": "The Witcher 3: Wild Hunt",
                "genero": "RPG",
                "idiomasDisponiveis": ["Inglês", "Português", "Espanhol", "Polonês", "Francês"],
                "anoLancamento": 2015,
                "criticas": [
                    {"site": "Metacritic", "avaliacao": 9.5},
                    {"site": "IGN", "avaliacao": 9.3},
                    {"site": "GameSpot", "avaliacao": 9.6}
                ],
                "quantidadeHoras": 3000,
                "preco": 39.99
            }
        ],
        "comentarios": [
            {
                "usuario": "witcherfan",
                "comentario": "The Witcher 3 tem uma história incrível.",
                "indicacao": 10
            },
            {
                "usuario": "rpglover",
                "comentario": "Melhor RPG de todos os tempos.",
                "indicacao": 10
            }
        ]
    },
    {
        "nome": "Valve Corporation",
        "paisOrigem": "EUA",
        "fundacao": 1996,
        "jogosDesenvolvidos": [
            {
                "_id": ObjectId(),
                "titulo": "Half-Life 2",
                "genero": "FPS",
                "idiomasDisponiveis": ["Inglês", "Português", "Espanhol"],
                "anoLancamento": 2004,
                "criticas": [
                    {"site": "Metacritic", "avaliacao": 9.6},
                    {"site": "IGN", "avaliacao": 9.8}
                ],
                "quantidadeHoras": 120,
                "preco": 9.99
            },
            {
                "_id": ObjectId(),
                "titulo": "Portal 2",
                "genero": "Puzzle",
                "idiomasDisponiveis": ["Inglês", "Português", "Espanhol", "Francês", "Alemão"],
                "anoLancamento": 2011,
                "criticas": [
                    {"site": "Metacritic", "avaliacao": 9.5},
                    {"site": "IGN", "avaliacao": 9.4},
                    {"site": "GameSpot", "avaliacao": 9.6}
                ],
                "quantidadeHoras": 40,
                "preco": 19.99
            }
        ],
        "comentarios": [
            {
                "usuario": "portalplayer",
                "comentario": "Portal 2 é genial!",
                "indicacao": 10
            },
            {
                "usuario": "halflifefan",
                "comentario": "Ainda espero pelo Half-Life 3.",
                "indicacao": 8
            }
        ]
    },
    {
        "nome": "Bethesda",
        "paisOrigem": "EUA",
        "fundacao": 1986,
        "jogosDesenvolvidos": [
            {
                "_id": ObjectId(),
                "titulo": "The Elder Scrolls V: Skyrim",
                "genero": "RPG",
                "idiomasDisponiveis": ["Inglês", "Português", "Espanhol", "Francês", "Alemão"],
                "anoLancamento": 2011,
                "criticas": [
                    {"site": "Metacritic", "avaliacao": 9.3},
                    {"site": "IGN", "avaliacao": 9.1},
                    {"site": "GameSpot", "avaliacao": 9.2}
                ],
                "quantidadeHoras": 600,
                "preco": 29.99
            },
            {
                "_id": ObjectId(),
                "titulo": "The Elder Scrolls IV: Morrowind",
                "genero": "RPG",
                "idiomasDisponiveis": ["Inglês", "Português"],
                "anoLancamento": 2002,
                "criticas": [
                    {"site": "Metacritic", "avaliacao": 9.1},
                    {"site": "IGN", "avaliacao": 8.9}
                ],
                "quantidadeHoras": 400,
                "preco": 9.99
            },
            {
                "_id": ObjectId(),
                "titulo": "The Elder Scrolls III: Oblivion",
                "genero": "RPG",
                "idiomasDisponiveis": ["Inglês", "Português", "Espanhol", "Francês"],
                "anoLancamento": 2006,
                "criticas": [
                    {"site": "Metacritic", "avaliacao": 9.2},
                    {"site": "IGN", "avaliacao": 9.0},
                    {"site": "GameSpot", "avaliacao": 8.8}
                ],
                "quantidadeHoras": 102,
                "preco": 14.99
            },
            {
                "_id": ObjectId(),
                "titulo": "The Elder Scrolls II: Daggerfall",
                "genero": "RPG",
                "idiomasDisponiveis": ["Inglês"],
                "anoLancamento": 1996,
                "criticas": [
                    {"site": "Metacritic", "avaliacao": 8.5},
                    {"site": "IGN", "avaliacao": 8.7}
                ],
                "quantidadeHoras": 75,
                "preco": 4.99
            },
            {
                "_id": ObjectId(),
                "titulo": "The Elder Scrolls",
                "genero": "RPG",
                "idiomasDisponiveis": ["Inglês"],
                "anoLancamento": 1994,
                "criticas": [
                    {"site": "Metacritic", "avaliacao": 7.8},
                    {"site": "IGN", "avaliacao": 7.5}
                ],
                "quantidadeHoras": 30,
                "preco": 2.99
            }
        ],
        "comentarios": [
            {
                "usuario": "tesfan",
                "comentario": "Skyrim é um jogo que sempre volto a jogar.",
                "indicacao": 10
            },
            {
                "usuario": "morrowindlover",
                "comentario": "Morrowind tem uma nostalgia especial.",
                "indicacao": 9
            }
        ]
    }
]);

db.empresasProdutorasDeGames.find().pretty();
