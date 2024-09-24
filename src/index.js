function addCard() {
    const cards = document.querySelector(".cards")

    data.forEach((card) => {
        const li = document.createElement('li')
        li.className = 'card'

        const h2 = document.createElement('h2')
        h2.className = 'card--title'
        h2.textContent = card.name.charAt(0).toUpperCase() + card.name.slice(1);
        li.appendChild(h2)

        const img = document.createElement('img')
        img.className = 'card--img'
        img.width = 256
        img.src = card.sprites.other['official-artwork'].front_default
        li.appendChild(img)

        // Add event listener for image click to swap image source
        img.addEventListener('click', () => {
            if (img.src === card.sprites.other['official-artwork'].front_default) {
                img.src = card.sprites.back_default || card.sprites.front_default
            } else {
                img.src = card.sprites.other['official-artwork'].front_default
            }
        });

        const ul = document.createElement('ul')
        ul.className = 'card--text'

        card.stats.forEach((stat) => {
            const statLi = document.createElement('li')
            statLi.textContent = `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`
            ul.appendChild(statLi);
        });

        const games = []
        card.game_indices.forEach((game) => {
             games.push(`${game.version.name.toUpperCase()}`);
        });
        const gamesLi = document.createElement('li')
        gamesLi.textContent = games.toString()
        gamesLi.style.wordBreak = 'break-all';
        ul.appendChild(gamesLi);

        li.appendChild(ul);
        cards.appendChild(li)
    })
}

addCard();