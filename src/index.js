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
        img.src = card.sprites.other['official-artwork'].front_default;
        li.appendChild(img);

        const ul = document.createElement('ul');
        ul.className = 'card--text';

        card.stats.forEach((stat) => {
            const statLi = document.createElement('li');
            statLi.textContent = `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`;
            ul.appendChild(statLi);
        });

        li.appendChild(ul);
        cards.appendChild(li);
    })
}

addCard();