function move (){
    var parent1 = document.getElementById("parent");
    var parent2 = document.getElementById("parent2");
    var child1 = parent1.children[0];
    var child2 = parent1.children[1];

    console.log(child1.classList);

    parent2.appendChild(child1);
    parent2.appendChild(child2);

    setTimeout(function () {
        child1.classList.remove("fade-out");
        child2.classList.remove("fade-out");
        child1.classList.add("fade-in");
        child2.classList.add("fade-in");
        child2.classList.add("gd-c2");
    }, 100);
}

act_nav = (id) => {
    var button = document.getElementById(id);
    var st_col = "white"
    if (id === "for_school") st_col = "#E42B49"
    else if (id === "for_work") st_col = "#176BCE"
    else if (id === "for_home") st_col = "#6BAE59"
    else if (id === "for_academy") st_col = "#D9A412"

    console.log(st_col)
    button.style.color = "azure"
    button.style.backgroundColor = st_col
}