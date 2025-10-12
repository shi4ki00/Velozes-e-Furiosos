const dadosPersonagens = {
    toretto: {
        nome: "Dominic 'Dom' Toretto",
        ator: "Vin Diesel",
        descricao: "Dominic Toretto é um piloto habilidoso e líder nato, conhecido por sua força, lealdade e pelo valor inabalável que dá à família. Sempre calmo e determinado, ele é o coração do grupo, alguém que inspira respeito e confiança. Sua paixão por carros potentes e sua ética de proteger os seus acima de tudo definem quem ele é."
    },
    brian: {
        nome: "Brian O'Conner",
        ator: "Paul Walker",
        descricao: "Brian O’Conner começou como policial infiltrado, mas acabou se tornando parte da família de Toretto. É corajoso, justo e tem um bom coração. Seu amor por Mia e sua lealdade ao grupo o transformaram em um verdadeiro irmão para Dom. É um excelente piloto e tem um instinto natural para correr riscos."
    },
    han: {
        nome: "Han Seoul-Oh",
        ator: "Sung Kang",
        descricao: "Han Lue é calmo, observador e sempre parece estar um passo à frente. Gosta de manter a tranquilidade, mesmo nas situações mais tensas, e tem um charme natural. Está quase sempre com um lanche na mão e dirige com uma precisão impecável."
    },
    gisele: {
        nome: "Gisele Yashar",
        ator: "Gal Gadot",
        descricao: "Gisele Yashar é uma ex-agente altamente treinada, inteligente e elegante. Habilidosa tanto com armas quanto em manobras arriscadas, ela tem uma atitude confiante e destemida. Seu relacionamento com Han revela um lado mais humano e afetuoso."
    },
    hobbs: {
        nome: "Luke Hobbs",
        ator: "Dwayne Johnson",
        descricao: "Luke Hobbs é um agente de segurança extremamente forte e disciplinado, movido por um senso rígido de dever e justiça. No início, foi um adversário de Toretto, mas acabou se tornando um dos seus maiores aliados. Sua presença impõe respeito e confiança."
    },
    letty: {
        nome: "Letty Ortiz",
        ator: "Michelle Rodriguez",
        descricao: "Letty Ortiz é uma mulher forte e destemida, tão feroz no volante quanto em combate. Ela é a parceira e o grande amor de Toretto, além de uma guerreira que nunca foge de um desafio. Apesar da dureza, tem um lado sensível e um profundo senso de lealdade."
    },
    suki: {
        nome: "Suki",
        ator: "Devon Aoki",
        descricao: "Suki é uma piloto ousada, estilosa e vibrante. Dona de uma personalidade marcante e de um visual inconfundível, ela representa o espírito livre das corridas de rua, sempre com confiança e atitude."
    },
    sean: {
        nome: "Sean Boswell",
        ator: "Lucas Black",
        descricao: "Sean Boswell é um jovem rebelde que se muda para o Japão e aprende o estilo de corrida drift. Impulsivo, mas determinado, ele amadurece ao longo de sua jornada e encontra em Han uma figura de mentor."
    },
    roman: {
        nome: "Roman Pearce",
        ator: "Tyrese Gibson",
        descricao: "Roman Pearce é o mais falante e engraçado da equipe. Cheio de carisma e sempre com um comentário pronto, costuma ser o alívio cômico em meio ao perigo. Mesmo com seu jeito brincalhão e medroso, é um amigo leal e um piloto talentoso."
    },
    tej: {
        nome: "Tej Parker",
        ator: "Ludacris",
        descricao: "Tej Parker é o cérebro tecnológico do grupo. Criativo, esperto e com um humor afiado, ele é responsável por tudo que envolve engenharia e tecnologia nas missões. Apesar de ser mais racional, gosta de estar nas corridas e sabe se divertir."
    },
    ramsey: {
        nome: "Ramsey",
        ator: "Nathalie Emmanuel",
        descricao: "Ramsey é uma hacker genial e destemida, especialista em invadir e proteger sistemas complexos. Inteligente, sarcástica e confiante, ela se destaca por sua mente brilhante e papel essencial nas missões mais tecnológicas do grupo."
    },
    mia: {
        nome: "Mia Toretto",
        ator: "Jordana Brewster",
        descricao: "Mia Toretto é o elo emocional da equipe, carinhosa e protetora. Inteligente e centrada, ela é quem traz equilíbrio para a família, especialmente em meio ao caos das corridas e missões perigosas. Mesmo não sendo uma combatente, é corajosa e sabe cuidar de si mesma."
    }
};

const personagens = document.querySelectorAll('.img1')

const secaoDetalhes = document.getElementById('descricao')

function dadosdojs(dados) {
    return `<div class="descricoes" style="text-align: center; color: white; padding: 20px; background-color: black; border-radius: 10px;">
            <h2 style="color: #ff0000; margin-bottom: 15px;">${dados.nome}</h2>
            <p><strong>Ator/Atriz:</strong> ${dados.ator}</p>
            <hr style="margin: 15px 0; border-color: #ff0000;">
            <p><strong>Descrição:</strong> ${dados.descricao}</p>
        </div>`;
}

personagens.forEach(personagem => {
    personagem.addEventListener('click', function() {
        const idClicado = this.id
        const dados = dadosPersonagens[idClicado]

        if (dados) {
            const conteudoHTML = dadosdojs(dados)
            
            secaoDetalhes.innerHTML = conteudoHTML
            
            secaoDetalhes.style.justifyContent = 'flex-start'
            secaoDetalhes.style.alignItems = 'center'
            
        } 
    })
})
