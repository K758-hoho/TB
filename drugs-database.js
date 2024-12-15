document.addEventListener("DOMContentLoaded", function() {
    const effectFilter = document.getElementById("effectFilter");
    const ingredientFilter = document.getElementById("ingredientFilter");
    const searchInput = document.getElementById("drugSearchInput");
    
    if (effectFilter && ingredientFilter && searchInput) {
        effectFilter.innerHTML = ` <option value="">Filter by Effect</option> <option value="restorative">Restorative</option> <option value="enhancement">Enhancement</option> <option value="recreational">Recreational</option> <option value="damage">Damage</option> <option value="utility">Utility</option> `;

        ingredientFilter.innerHTML = ` <option value="">Filter by Base Ingredient</option> <option value="elbrozkaa">Elbrozkaa</option> <option value="puorikkin">Puorikkin</option> <option value="apricate">Apricate</option> <option value="kapsaris">Kapsaris</option> <option value="carmiddel">Carmiddel</option> <option value="eraser mints">Eraser Mints</option> <option value="teulnan">Teulnan</option> <option value="litkus">Litkus</option> <option value="kiépi">Kiépi</option> `;

        searchInput.addEventListener("input", filterDrugs);
        effectFilter.addEventListener("change", filterDrugs);
        ingredientFilter.addEventListener("change", filterDrugs);
        renderDrugs(drugsDatabase);
    }
});

const drugsDatabase = [{
    name: "Elbrikkin",
    effects: ["restorative"],
    ingredients: ["elbrozkaa", "puorikkin"],
    description: "A rare drug that mends open wounds and reconnects broken tissue if applied within an hour after injury."
}, {
    name: "Elpricuss",
    effects: ["enhancement"],
    ingredients: ["elbrozkaa", "apricate", "kapsaris"],
    description: "A stimulant that enhances physical strength while inducing blinding rage and single-minded obsession towards a goal in the user for 30 minutes."
}, {
    name: "Apricuss",
    effects: ["recreational"],
    ingredients: ["apricate"],
    description: "An illegal drug that gives soul-bending euphoria and warmth to the consumer while numbing all sensory input."
}, {
    name: "Petrifying Gas",
    effects: ["damage"],
    ingredients: ["puorikkin", "kapsaris"],
    description: "When puorikkin and kapsaris are burned together, they release yellow gas that crystalizes when in contact with solid surfaces, freezing anyone and anything in its proximity."
}, {
    name: "Caridell",
    effects: ["restorative"],
    ingredients: ["carmiddel"],
    description: "A common drug that relieves the consumer from intense physical pain."
}, {
    name: "Cold Acid",
    effects: ["damage"],
    ingredients: ["kapsaris", "eraser mints"],
    description: "An acidic liquid that dissolves any organic tissue, be it plants, animals, or people."
}, {
    name: "Night-eyes",
    effects: ["utility"],
    ingredients: ["teulnan", "kapsaris"],
    description: "A common drug that gives temporary night vision. Duration of effects depends on how much kapsaris is added."
}, {
    name: "Litkus",
    effects: ["restorative"],
    ingredients: ["litkus"],
    description: "A lightweight painkiller that soothes minor pains, such as sores."
}, {
    name: "Kechi",
    effects: ["restorative", "recreational"],
    ingredients: ["kiépi"],
    description: "An alcoholic drink that warms the body from within, regardless of being served hot, cold, or at room temperature."
}, {
    name: "Puorikkin Cement",
    effects: ["utility"],
    ingredients: ["puorikkin"],
    description: "When puorikkin is burned, its crystalized gas can used as heavy-duty glue in crafts and construction."
}];
function renderDrugs(e) {
    let i = document.getElementById("drugList");
    i.innerHTML = "",
    e.forEach(e => {
        let t = document.createElement("div");
        t.className = "drug-card",
        t.innerHTML = ` <h2>${e.name}</h2> <p>${e.description}</p> <div class="drug-tags"> ${e.effects.map(e => `<span class="tag effect-tag" data-effect="${e}">${e}</span>`).join("")} ${e.ingredients.map(e => `<span class="tag ingredient-tag">${e}</span>`).join("")} </div> `,
        i.appendChild(t)
    }
    )
}
function filterDrugs() {
    let e = document.getElementById("drugSearchInput").value.toLowerCase()
      , i = document.getElementById("effectFilter").value
      , t = document.getElementById("ingredientFilter").value
      , n = drugsDatabase.filter(n => {
        let a = n.name.toLowerCase().includes(e)
          , r = !i || n.effects.includes(i)
          , s = !t || n.ingredients.includes(t);
        return a && r && s
    }
    );
    renderDrugs(n)
}
