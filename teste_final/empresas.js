db.empresasProdutorasDeGames.insertMany([
    {
        "nome": "Rockstar Games",
        "paisOrigem": "EUA",
        "fundacao": 1998,
        "jogosDesenvolvidos": [
            "Grand Theft Auto V",
            "Grand Theft Auto IV",
            "Red Dead Redemption 2"
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
        "nome": "SEGA",
        "paisOrigem": "Japão",
        "fundacao": 1988,
        "jogosDesenvolvidos": [
            "Sonic"
        ],
        "comentarios": [
            {
                "usuario": "jsilva",
                "comentario": "Nostalgia Pura!",
                "indicacao": 10
            }
        ]
    },
    {
        "nome": "CD Projekt Red",
        "paisOrigem": "Polônia",
        "fundacao": 2002,
        "jogosDesenvolvidos": [
            "The Witcher 3: Wild Hunt"
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
            "Half-Life 2",
            "Portal 2"
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
            "The Elder Scrolls V: Skyrim",
            "The Elder Scrolls IV: Oblivion",
            "The Elder Scrolls III: Morrowind"
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
    },
    {
        "nome": "Nintendo",
        "paisOrigem": "Japão",
        "fundacao": 1889,
        "jogosDesenvolvidos": [
            "The Legend of Zelda: Breath of the Wild",
            "Super Mario Odyssey"
        ],
        "comentarios": [
            {
                "usuario": "zeldafan",
                "comentario": "Breath of the Wild redefine o gênero de aventura.",
                "indicacao": 10
            },
            {
                "usuario": "mariolover",
                "comentario": "Super Mario Odyssey é pura diversão.",
                "indicacao": 10
            }
        ]
    },
    {
        "nome": "Santa Monica Studio",
        "paisOrigem": "EUA",
        "fundacao": 1999,
        "jogosDesenvolvidos": [
            "God of War"
        ],
        "comentarios": [
            {
                "usuario": "gowfan",
                "comentario": "God of War é uma obra-prima.",
                "indicacao": 10
            }
        ]
    },
    {
        "nome": "CD Projekt",
        "paisOrigem": "Polônia",
        "fundacao": 1994,
        "jogosDesenvolvidos": [
            "Cyberpunk 2077"
        ],
        "comentarios": [
            {
                "usuario": "cyberfan",
                "comentario": "Cyberpunk 2077 é um jogo razoavel, apesar dos bugs.",
                "indicacao": 5
            }
        ]
    },
    {
        "nome": "Mojang Studios",
        "paisOrigem": "Suécia",
        "fundacao": 2009,
        "jogosDesenvolvidos": [
            "Minecraft"
        ],
        "comentarios": [
            {
                "usuario": "blockbuilder",
                "comentario": "Minecraft é um jogo infinito.",
                "indicacao": 10
            }
        ]
    },
    {
        "nome": "Innersloth",
        "paisOrigem": "EUA",
        "fundacao": 2015,
        "jogosDesenvolvidos": [
            "Among Us"
        ],
        "comentarios": [
            {
                "usuario": "crewmate",
                "comentario": "Among Us é muito divertido com amigos.",
                "indicacao": 9
            }
        ]
    }
]);

//mais dois jogos de elder scrolls

db.empresasProdutorasDeGames.updateOne(
    { nome: "Bethesda" },
    { $addToSet: { jogosDesenvolvidos: { $each: ["The Elder Scrolls II: Daggerfall", "The Elder Scrolls"] } } }
);
    
