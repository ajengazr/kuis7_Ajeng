const products = [
    {
        id: 1,
        nama: "laptop",
        image: "https://tse4.mm.bing.net/th?id=OIP.mMgywNDrD-Qwe846MwHD3AHaD_&pid=Api&P=0&h=180",
        price: "Rp. 8000.000",
        desc:[
            "lucu","bagus", "imut"
        ]
    },
    {
        id: 2,
        nama: "laptop",
        image: "https://tse3.mm.bing.net/th?id=OIP.ysAtVUSVgu57S2fXl5slFQHaE9&pid=Api&P=0&h=180",
        price: "Rp. 6000.000",
        desc:[
            "lucu","bagus", "imut"
        ]
    },
    {
        id: 3,
        nama: "laptop",
        image: "https://tse3.mm.bing.net/th?id=OIP.9znJvLlECQ-emykoT1fX1AHaGk&pid=Api&P=0&h=180",
        price: "Rp. 5000.000",
        desc:[
            "lucu","bagus", "imut"
        ]
    },
    {
        id: 4,
        nama: "laptop",
        image: "https://tse3.mm.bing.net/th?id=OIP.J2ERwGU_nYDVU041IPHS3wHaGT&pid=Api&P=0&h=180",
        price: "Rp. 7000.000",
        desc:[
            "lucu","bagus", "imut"
        ]
    },
    {
        id: 5,
        nama: "laptop",
        image: "https://tse1.mm.bing.net/th?id=OIP.XzbjH1QwBRtfGqg_Uf10hgHaGj&pid=Api&P=0&h=180",
        price: "Rp. 10.000.000",
        desc:[
            "lucu","bagus", "imut"
        ]
    },
    {
        id: 6,
        nama: "laptop",
        image: "https://tse4.mm.bing.net/th?id=OIP.mMgywNDrD-Qwe846MwHD3AHaD_&pid=Api&P=0&h=180",
        price: "Rp. 8000.000",
        desc:[
            "lucu","bagus", "imut"
        ]
    },
    {
        id: 7,
        nama: "laptop",
        image: "https://tse3.mm.bing.net/th?id=OIP.ysAtVUSVgu57S2fXl5slFQHaE9&pid=Api&P=0&h=180",
        price: "Rp. 6000.000",
        desc:[
            "lucu","bagus", "imut"
        ]
    },
    {
        id: 8,
        nama: "laptop",
        image: "https://tse3.mm.bing.net/th?id=OIP.9znJvLlECQ-emykoT1fX1AHaGk&pid=Api&P=0&h=180",
        price: "Rp. 5000.000",
        desc:[
            "lucu","bagus", "imut"
        ]
    },
    {
        id: 9,
        nama: "laptop",
        image: "https://tse3.mm.bing.net/th?id=OIP.J2ERwGU_nYDVU041IPHS3wHaGT&pid=Api&P=0&h=180",
        price: "Rp. 7000.000",
        desc:[
            "lucu","bagus", "imut"
        ]
    },
    {
        id: 10,
        nama: "laptop",
        image: "https://tse1.mm.bing.net/th?id=OIP.XzbjH1QwBRtfGqg_Uf10hgHaGj&pid=Api&P=0&h=180",
        price: "Rp. 10.000.000",
        desc:[
            "lucu","bagus", "imut"
        ]
    }

];
function card(product) {
    let content = document.querySelector('.content');
    let figure = document.createElement('figure');
    let figcaption = document.createElement('figcaption');
    let img = document.createElement('img');
    img.src = product.image;
    let h1 = document.createElement('h1');
    h1.textContent = product.nama;
    let h2 = document.createElement('h2');
    h2.textContent = product.price;
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    product.desc.map((d)=>{
        let li = document.createElement('li');
        li.textContent = d;
        ul.appendChild(li);
    })
    let button = document.createElement('button');
    button.textContent = "Beli sekarang";
    button.addEventListener("click", () => confirm('anda yakin akan membeli produk ini?'));
    
    let like = document.createElement('button');
    like.textContent = "like";
    like.addEventListener("click", () => alert('anda menyukai produk ini'));
    
    let komen = document.createElement('button');
    komen.textContent = "komentar";
    komen.addEventListener("click", () => prompt('berikan komentar anda!'));
    
    content.appendChild(figure);
    figure.appendChild(img);
    figure.appendChild(figcaption);
    figcaption.appendChild(h1);
    figcaption.appendChild(ul);
    figcaption.appendChild(h2);
    figcaption.appendChild(button);
    figcaption.appendChild(like);
    figcaption.appendChild(komen);

}
products.map((product)=>{
    card(product);
})