// Add the coffee to local storage with key "coffee"
fetch('https://masai-mock-api.herokuapp.com/coffee/menu').then(res=>res.json()).then(result=>{
    displaycoffee(result.data);

    let menu  = localStorage.getItem('coffee')|| '[]';
    coffee = JSON.parse(coffee);

    document.querySelector("#coffee_count").innerHTML = menu.length;
});



      function displaycoffee(data){
        // console.log(data);
        data.map(v=>{
            
            const container = document.createElement("div");

            const img = document.createElement("img");
            img.setAttribute("src",v.image);

            const item_name = document.createElement("p");
            item_name.innerHTML = v.name;

            const price = document.createElement("p");
            price.innerHTML = v.price;


            const add_to_cart = document.createElement("button");
            add_to_cart.setAttribute("id","add_to_cart")

            add_to_cart.innerHTML = "Add to cart";
            
            add_to_cart.addEventListener("click",function(){
                let coffee  = localStorage.getItem('coffee')|| '[]';

                coffee = JSON.parse(coffee);
                coffee.push(v);
                document.querySelector("#coffee_count").innerHTML = coffee.length;
    
                const temp = JSON.stringify(coffee);
                localStorage.setItem("items",temp);
                window.location
            })
        
            const menu = document.querySelector("#items");
            container.append(img,item_name,price,add_to_cart);
            coffee.append(container);
        })
        
        }