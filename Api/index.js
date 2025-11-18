function fetchData()
{
    fetch('https://fakestoreapi.com/products')
    .then((res)=>res.json())
    .then((data)=>display(data))
    .catch((err)=>console.log(err))
}
fetchData();




function display(data)
{
    let structure = data.map((el)=>card(el.employee_id, el.name, el.image))

    document.getElementById('cards').append(...structure)

}


function card(employee_id, name,image)
{
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
        <h3>ID : ${employee_id}</h3> 
        <img src="${image}" alt="${name}" />
        <h1>${name}</h1>
        
    `;
    return div;
}