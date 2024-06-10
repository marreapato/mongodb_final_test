db.usuarios.insertMany([
    {
        "nome": "João Silva",
        "idade": 30,
        "email": "joao.silva@example.com",
        "jogos": [{
                "$ref": "empresasProdutorasDeGames",
                "$id": db.empresasProdutorasDeGames.findOne({"jogosDesenvolvidos.titulo": "The Last of Us"}).jogosDesenvolvidos[0]._id
            },
            {
                "$ref": "empresasProdutorasDeGames",
                "$id": db.empresasProdutorasDeGames.findOne({"jogosDesenvolvidos.titulo": "Grand Theft Auto V"}).jogosDesenvolvidos[0]._id
            }],
        "acessoAntecipado": true,
        "nickname": "jsilva"
    },
    {
        "nome": "Maria Oliveira",
        "idade": 25,
        "email": "maria.oliveira@example.com",
        "jogos": [{
                "$ref": "empresasProdutorasDeGames",
                "$id": db.empresasProdutorasDeGames.findOne({"jogosDesenvolvidos.titulo": "Red Dead Redemption 2"}).jogosDesenvolvidos[0]._id
            },
            {
                "$ref": "empresasProdutorasDeGames",
                "$id": db.empresasProdutorasDeGames.findOne({"jogosDesenvolvidos.titulo": "The Witcher 3: Wild Hunt"}).jogosDesenvolvidos[0]._id
            }],
        "acessoAntecipado": false,
        "nickname": "mariaoliveira"
    },
    {
        "nome": "Carlos Souza",
        "idade": 35,
        "email": "carlos.souza@example.com",
        "jogos": [{
                "$ref": "empresasProdutorasDeGames",
                "$id": db.empresasProdutorasDeGames.findOne({"jogosDesenvolvidos.titulo": "Half-Life 2"}).jogosDesenvolvidos[0]._id
            },
            {
                "$ref": "empresasProdutorasDeGames",
                "$id": db.empresasProdutorasDeGames.findOne({"jogosDesenvolvidos.titulo": "Portal 2"}).jogosDesenvolvidos[0]._id
            },
            {
                "$ref": "empresasProdutorasDeGames",
                "$id": db.empresasProdutorasDeGames.findOne({"jogosDesenvolvidos.titulo": "The Elder Scrolls V: Skyrim"}).jogosDesenvolvidos[0]._id
            }],
        "acessoAntecipado": true,
        "nickname": "csouza"
    },
    {
        "nome": "John Doe",
        "idade": 28,
        "email": "johndoe@example.com",
        "jogos": [{
                "$ref": "empresasProdutorasDeGames",
                "$id": db.empresasProdutorasDeGames.findOne({"jogosDesenvolvidos.titulo": "The Last of Us"}).jogosDesenvolvidos[0]._id
            },
            {
                "$ref": "empresasProdutorasDeGames",
                "$id": db.empresasProdutorasDeGames.findOne({"jogosDesenvolvidos.titulo": "The Last of Us Part II"}).jogosDesenvolvidos[0]._id
            }],
        "acessoAntecipado": false,
        "nickname": "johndoe"
    },
    {
        "nome": "Jane Doe",
        "idade": 26,
        "email": "janedoe@example.com",
        "jogos": [{
                "$ref": "empresasProdutorasDeGames",
                "$id": db.empresasProdutorasDeGames.findOne({"jogosDesenvolvidos.titulo": "The Last of Us"}).jogosDesenvolvidos[0]._id
            },
            {
                "$ref": "empresasProdutorasDeGames",
                "$id": db.empresasProdutorasDeGames.findOne({"jogosDesenvolvidos.titulo": "The Last of Us Part II"}).jogosDesenvolvidos[0]._id
            }],
        "acessoAntecipado": true,
        "nickname": "janedoe"
    },
    {
        "nome": "Gabriel Ribeiro",
        "idade": 22,
        "email": "gamer123@example.com",
        "jogos": [{
                "$ref": "empresasProdutorasDeGames",
                "$id": db.empresasProdutorasDeGames.findOne({"jogosDesenvolvidos.titulo": "Grand Theft Auto V"}).jogosDesenvolvidos[0]._id
            },
            {
                "$ref": "empresasProdutorasDeGames",
                "$id": db.empresasProdutorasDeGames.findOne({"jogosDesenvolvidos.titulo": "Grand Theft Auto IV"}).jogosDesenvolvidos[0]._id
            }],
        "acessoAntecipado": false,
        "nickname": "gamer123"
    },
    {
        "nome": "Paula Lima",
        "idade": 24,
        "email": "player456@example.com",
        "jogos": [{
                "$ref": "empresasProdutorasDeGames",
                "$id": db.empresasProdutorasDeGames.findOne({"jogosDesenvolvidos.titulo": "Red Dead Redemption 2"}).jogosDesenvolvidos[0]._id
            }],
        "acessoAntecipado": true,
        "nickname": "player456"
    },
    {
        "nome": "Washington Luis",
        "idade": 29,
        "email": "witcherfan@example.com",
        "jogos": [{
                "$ref": "empresasProdutorasDeGames",
                "$id": db.empresasProdutorasDeGames.findOne({"jogosDesenvolvidos.titulo": "The Witcher 3: Wild Hunt"}).jogosDesenvolvidos[0]._id
            }],
        "acessoAntecipado": false,
        "nickname": "witcherfan"
    },
    {
        "nome": "Renato Livio",
        "idade": 27,
        "email": "rpglover@example.com",
        "jogos": [{
                "$ref": "empresasProdutorasDeGames",
                "$id": db.empresasProdutorasDeGames.findOne({"jogosDesenvolvidos.titulo": "The Witcher 3: Wild Hunt"}).jogosDesenvolvidos[0]._id
            }],
        "acessoAntecipado": true,
        "nickname": "rpglover"
    },
    {
        "nome": "Paulo Fagundes",
        "idade": 23,
        "email": "portalplayer@example.com",
        "jogos": [{
                "$ref": "empresasProdutorasDeGames",
                "$id": db.empresasProdutorasDeGames.findOne({"jogosDesenvolvidos.titulo": "Portal 2"}).jogosDesenvolvidos[0]._id
            }],
        "acessoAntecipado": false,
        "nickname": "portalplayer"
    },
    {
        "nome": "Fernanda Souza",
        "idade": 32,
        "email": "halflifefan@example.com",
        "jogos": [{
                "$ref": "empresasProdutorasDeGames",
                "$id": db.empresasProdutorasDeGames.findOne({"jogosDesenvolvidos.titulo": "Half-Life 2"}).jogosDesenvolvidos[0]._id
            }],
        "acessoAntecipado": true,
        "nickname": "halflifefan"
    },
    {
        "nome": "Cassie Silva",
        "idade": 31,
        "email": "tesfan@example.com",
        "jogos": [{
                "$ref": "empresasProdutorasDeGames",
                "$id": db.empresasProdutorasDeGames.findOne({"jogosDesenvolvidos.titulo": "The Elder Scrolls V: Skyrim"}).jogosDesenvolvidos[0]._id
            }],
        "acessoAntecipado": false,
        "nickname": "tesfan"
    },
    {
        "nome": "Oliver Rivera",
        "idade": 33,
        "email": "morrowindlover@example.com",
        "jogos": [{
                "$ref": "empresasProdutorasDeGames",
                "$id": db.empresasProdutorasDeGames.findOne({"jogosDesenvolvidos.titulo": "The Elder Scrolls IV: Morrowind"}).jogosDesenvolvidos[0]._id
            }],
        "acessoAntecipado": true,
        "nickname": "morrowindlover"
    }
]);
