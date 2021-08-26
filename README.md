# backend



localhost:4000/login
...POST



localhost:4000/signup
...POST
...expect " {
        id: "123",
        name: text,
        email: text,
        phone: number,
        address: text,
      }"
.......if succeed get "{"status": "200",
    "message": "Failed to posted profile"}
.......if failed receive "{"status": "300","message": "Failed to posted profile"
}"


localhost:4000/profile
...GET

localhost:4000/profile
...PUT

localhost:4000/product
...GET

localhost:4000/product/:id
...i.e localhost:4000/product/12
...GET
...POST
...PUT
...DELETE