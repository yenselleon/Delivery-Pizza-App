import CardConfirmDataCheckOut from "../components/CardConfirmDataCheckOut";
import CheckoutListAndPayCard from "../components/CheckoutListAndPayCard";
import TimeLineDelivery from "../components/TimeLineDelivery";


 const stepsCheckOut = [
    { label: 'CheckOut', content: <CheckoutListAndPayCard />,},
    { label: 'Confirm', content: <CardConfirmDataCheckOut/>,},
    { label: 'End', content: <TimeLineDelivery/>,},
]

export default stepsCheckOut;