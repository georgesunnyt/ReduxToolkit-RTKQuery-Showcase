import { useDispatch } from "react-redux";
import { showSecondarySelection, updateNickname, updateSelection } from "../selectionSlice";

export default function PrimarySelection() {

  const dispatch = useDispatch()

  const handleChange = (event) => {
    if (event.target.value === "Combination") {
      dispatch(showSecondarySelection(true));
      dispatch(updateSelection(null))
    } else {
      dispatch(showSecondarySelection(false));
      dispatch(updateSelection(event.target.value))
      dispatch(updateNickname(''))
    }
  };

  return (
    <div className="primary-selection">
      <label>
        <input type="radio" name="topping" value="Plain" onChange={e=>handleChange(e)} />
        <span>Plain</span>
      </label>
      <label>
        <input type="radio" name="topping" value="Sprinkles" onChange={e=>handleChange(e)}/>
        <span>Sprinkles</span>
      </label>
      <label>
        <input type="radio" name="topping" value="Combination" onChange={e=>handleChange(e)} />
        <span>Combo...</span>
      </label>
    </div>
  );
}
