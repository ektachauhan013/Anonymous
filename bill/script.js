function Calculate_bill(){
    let samosa_qty=document.getElementById("samosa").value
    samosa_qty=Number(samosa_qty)
    let samosa_bill=samosa_qty*15

    let tea_qty=document.getElementById("tea").value
    tea_qty=Number(tea_qty)
    let tea_bill=tea_qty*10

    let burger_qty=document.getElementById("burger").value
    burger_qty=Number(burger_qty)
    let burger_bill=burger_qty*25

    let total = burger_bill + tea_bill + samosa_bill

    document.getElementById("samosa_quantity").innerText=document.getElementById("samosa").value
    document.getElementById("tea_quantity").innerText=document.getElementById("tea").value
    document.getElementById("burger_quantity").innerText=document.getElementById("burger").value

    document.getElementById("samosa_bill").innerText=samosa_bill
    document.getElementById("tea_bill").innerText=tea_bill
    document.getElementById("burger_bill").innerText=burger_bill

    document.getElementById("total").innerText=total
}

document.getElementById("bill").addEventListener("click",Calculate_bill)

