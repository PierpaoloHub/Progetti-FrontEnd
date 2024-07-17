let b = document.getElementById("btn"), n1 , k, l, res = document.getElementById("res")

b.addEventListener("click", ()=> 
    {
    n1 = (document.getElementById("number1").value); 
    n1 = String(n1).split("").map((x)=>parseInt(x))
        if(n1.reduce((p, c) => { console.log(p+c);return p + c }, 0)
            ===
           n1.reduce((p, c) => { console.log(p*c);return p * c }, 1))
            {
                res.innerText = "spy"
            }
        else res.innerText = "non spy"
    }
)