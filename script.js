fetch("./data.json")
    .then(res => {
        if (!res.ok) {
            throw new Error("HTTP error " + res.status);
        }
        return res.json();
    })
    .then(data => {
        const list = document.getElementById("ratings-list");

        data.forEach(item => {
            const li = document.createElement("li");

            li.classList.add(item.category.toLowerCase());

            li.innerHTML = `
                <div class="left">
                    <img src="${item.icon}" alt="${item.category}">
                    <p>${item.category}</p>
                </div>
                <p>${item.score} <span>/ 100</span></p>
            `;

            list.appendChild(li);
        });
    })
    .catch(err => {
        console.error("Fetch failed:", err);
    });