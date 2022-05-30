// On clicking remove button the item should be removed from DOM as well as localstorage.
getItem().then(res=>{
            let total_price = 0;
            res.map(v=>{
                total_price+= v.price;
            });
            document.querySelector("#total_amount").innerHTML = total_price;
            displaycoffee(res);
        })
        
        
        function checkout(){
            window.location.href = "./checkout.html"
        }
        function displaycoffee(data){
            console.log(data);
            data.map(v=>{
                
                const container = document.createElement("div");
        
                const img = document.createElement("img");
                img.setAttribute("src",v.image);
        
                const item_name = document.createElement("p");
                item_name.innerHTML = v.name;
        
                const price = document.createElement("p");
                price.innerHTML = v.price;
        
        
                const add_to_cart = document.createElement("button");
                add_to_cart.setAttribute("id","remove");
        
                add_to_cart.innerHTML = "remove";
                
                add_to_cart.addEventListener("click",function(){
                    let coffee  = localStorage.getItem('coffee')|| '[]';
        
                    coffee = JSON.parse(coffee);
        
                    const filteredItems = coffee.filter(f=> f._id != v._id );
                    // console.log(filteredItems)
        
        
                    /* ======================== */
                    let total_price = 0;
                    items.map(v=>{
                            total_price+= v.price;
                        });
                        document.querySelector("#total_amount").innerHTML = total_price;
        
        
                    // document.querySelector("#cart_total").innerHTML = filteredItems.length;
        
                    const temp = JSON.stringify(filteredItems);
                    localStorage.setItem("coffee",temp);
                    window.location.reload();
                })
            
                const items = document.querySelector("#bucket");
                container.append(img,item_name,price,add_to_cart);
                items.append(container);
            })
            
            }
        
        function getItem(){
            return new Promise( (resolve, reject)=>{
                let coffee = localStorage.getItem("coffee")||'[]';
                coffee = JSON.parse(coffee);
                resolve(coffee);
            })
        }
