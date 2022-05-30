function checkout(){
            event.preventDefault();
            showmsg('Your order is accepted',0);
            showmsg('Your order is being Prepared',3000);
            showmsg('Your order is being Packed',8000);
            showmsg('Your order is out for delivery',10000);
            showmsg('Order delivered',12000);
}

function show(msg,t)

            function(){
                        setTimeout(
                        alert(msg);
                        ,t)
            }
}