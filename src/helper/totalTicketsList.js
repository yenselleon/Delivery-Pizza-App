/* {
    "pizzas": [
        {
            "id": "b1d143da-a56c-4010-941a-9f008022196f",
            "size": "Small",
            "price": 8,
            "quanty": 1
        }
    ],
    "drinks": [
        {
            "id": "b4d97df8-9618-40fa-8077-0b302850d7f5",
            "drink": "Coca-Cola",
            "price": 3,
            "quanty": 2
        }
    ],
    "dressings": [
        "Mayonnaise"
    ],
    "comment": "adasd"
} */

const totalTikectsList = (ticket = {})=> {

    let total = 0;
    
    const keysTicketObject = Object.keys(ticket);

    keysTicketObject.forEach((item, index)=> {

        //total dressings
        if(item === "dressings"){
            ticket[item].forEach(()=> {
                total += 1;
            })
        }

        //total Any other articles
        if( Array.isArray(ticket[item]) && item !== "dressings"){

            if(ticket[item].length > 0){

                ticket[item].forEach((object , index)=> {

                    total += object.price * object.quanty;
                })

            } 
                 
        }

    })

    return total

}

export {
    totalTikectsList,
    
}