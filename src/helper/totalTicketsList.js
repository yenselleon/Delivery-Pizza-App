/* {
    "pizzas": [
        {
            "id": "37463dbd-bea1-4f2d-bfbf-265bbbe6591b",
            "size": "Small",
            "price": 8,
            "quanty": 1
        },
        {
            "id": "b65dd04d-e772-4d85-b349-b7a78e146265",
            "size": "Medium",
            "price": 12,
            "quanty": 1
        }
    ],
    "drinks": [
        {
            "id": "267d9f6d-306c-49ad-8e7a-ebb5208ecf9b",
            "drink": "Coca-Cola",
            "price": 3,
            "quanty": 1
        }
    ],
    "dressings": [
        "Mayonnaise",
        "Barbecue Sauce"
    ],
    "comment": "asd",
    "id": "2f0ad045-6ba2-42ec-9dc1-409d35a542ce",
    "imageUrl": "https://i.ibb.co/PNrKzR5/Garlic-Fingers-min.jpg",
    "title": "Garlic Fingers",
    "total": 25,
    "itemsCount": 5
} */

const totalTikectsList = (ticket = {})=> {

    let total = 0;
    let items = 0;
    
    const keysTicketObject = Object.keys(ticket);

    keysTicketObject.forEach((item, index)=> {

        //total dressings
        if(item === "dressings"){
            ticket[item].forEach(()=> {
                total += 1;
                items += 1;
            })
        }

        //total Any other articles
        if( Array.isArray(ticket[item]) && item !== "dressings"){

            if(ticket[item].length > 0){

                ticket[item].forEach((object , index)=> {

                    total += object.price * object.quanty;
                    items += object.quanty;
                })

            } 
                 
        }

    })

    return {
        total,
        items
    }

}

const totalShoppingCart = (ShoppingCartTikect = [])=> {

    let totalOnShoppingCart = 0;
    let ItemsOnShoppingCart = 0;
    
    
    
    ShoppingCartTikect.forEach((item, index)=> {

            totalOnShoppingCart += item.total;
            ItemsOnShoppingCart += item.itemsCount;

    })

    return {
        totalOnShoppingCart,
        ItemsOnShoppingCart,
    };

}

export {
    totalTikectsList,
    totalShoppingCart,
}