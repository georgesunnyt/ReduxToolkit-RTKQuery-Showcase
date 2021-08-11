import { useDispatch, useSelector } from "react-redux";
import { updateSelection, updateNickname } from "../selectionSlice";

export default function SecondarySelection() {
  let dispatch = useDispatch()
  let show = useSelector((state) => state.selection.showSecondarySelection);
  let selectedItems = useSelector(state=>state.selection.selectedItems)
  let tempArr = [...selectedItems]
  let nickname = useSelector(state=>state.selection.nickname)
  
  const handleChange = (event) => {
    if (event.target.checked === true) {
      tempArr.push(event.target.value)
    } else if (event.target.checked === false) {
      let index = tempArr.indexOf(event.target.value)
      if (index > -1) {
        tempArr.splice(index, 1)
      }
    }
    dispatch(updateSelection(tempArr))
  };

  const handleNicknameChange = event => {
    dispatch(updateNickname(event.target.value))
  }
  
  return (
    <>
      {show ? (
        <div className="secondary-selection">
          <label>
            <input type="checkbox" name="combo" value="sprinkles" onChange={e=>handleChange(e)}/>
            <span>Sprinkles</span>
          </label>
          <label>
            <input type="checkbox" name="combo" value="cherry" onChange={e=>handleChange(e)}/>
            <span>Cherry</span>
          </label>
          <label>
            <input type="checkbox" name="combo" value="cream" onChange={e=>handleChange(e)}/>
            <span>Whipped cream</span>
          </label>
          <label className="nickname">
            <div>Nickname (optional)</div>
            <input type="text" value={nickname} placeholder="Enter a nickname" onChange={e=>handleNicknameChange(e)}/>
          </label>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
