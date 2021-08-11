import { useDispatch, useSelector } from "react-redux"
import {updateOutputMessage} from "../selectionSlice"
import { useCreateOrderMutation } from "./saveOrderSlice"

export default function SaveOrder () {
    const [createOrder] = useCreateOrderMutation()
    let selectedItems = useSelector(state=>state.selection.selectedItems)
    let nickname = useSelector(state=>state.selection.nickname)
    if(nickname!=='') {
        nickname = '(' + nickname + ')'
    }
    let dispatch = useDispatch()

    const handleChange = () => {
      if (selectedItems.length === 0) {
        dispatch(updateOutputMessage("Please select your toppings"));
      } else {
        createOrder(selectedItems)
          .unwrap()
          .then((fulfilled) =>
            dispatch(
              updateOutputMessage(
                `Your order: ${selectedItems.join(", ")} ${nickname}`
              )
            )
          )
          .catch((rejected) =>
            dispatch(
              updateOutputMessage("Please check your internet connection")
            )
          );
      }
    };

    return (        
        <button onClick={handleChange} className='order-button'>Save order</button>
    )
}