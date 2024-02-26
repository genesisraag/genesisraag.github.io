let toys = ["drum", "ball", "rope", "balloon", "tire"];
let toyPrices = [];
toyPrices["barbie"] = 7.54;
toyPrices["doll house"] = 86.23;
toyPrices ["slide"] = 34.23;
toyPrices ["ken"] = 2.30;
toyPrices ["bike"] = 5.60;

const showToys = () => {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
    /*
    Good if you need index
    for (let i in toys) {
        console.log(toys[i]);
    }
    */

    /*
    toys.forEach((toy) => { Good if you don't want the index
        console.log(toy);
    });
};
*/

    toys.forEach((toy) => {
        const p = document.createElement("p");
        p.innerHTML = toy;
        resultDiv.append(p);
    });
};

const addToy = () => {
    const toy = document.getElementById("txt-toy").value;
    toys.push(toy);
    showToys();
};

const showToysTable = () => {
    const toyTable = document.getElementById("toy-table");

    for(let toy in toyPrices) {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.innerHTML = toy;
        tr.append(td);
        toyTable.append(tr);
        
        tr.onclick = () => {
           const descP = document.getElementById("toy-description");
           descP.innerHTML = `${toy} costs $${toyPrices[toy]}`;
        };
        
       
        /*
        tr.onclick = showPrice.bind(null, toy);
        */
    }
};

/*
const showPrice = (toy) => {
    console.log(toy);
};
*/
showToys();
document.getElementById("button-add-toy").onclick = addToy;
showToysTable();