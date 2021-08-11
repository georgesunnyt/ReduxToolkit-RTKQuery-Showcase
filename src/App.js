/*
Instructions:

- Make this HTML template functional pretending there is a working backend.
- Add react state and redux sagas (or thunk if you prefer).
- Add two unit tests, one success case and one failure case.
- You may change the file structure and code in any way you see fit.

- Save your changes from the menu in the top left, or press "ctrl+s" or "cmd+s"
- You do not need to create an account, simply saving will create a new fork.
- When you are done, please email back your new fork's URL.
- If you have any questions, please do not hesitate to ask.
- Make sure to test the URL in an incognito window to ensure that it worked.

==================================================================

Acceptance criteria:

- First, the user must choose plain, sprinkles, or combo.
- If combo is selected, render the secondary selection options.
- If combo is selected, the user must choose at least one option.
- The user may enter a nickname for their combo order.
- When "Save order" is clicked, render the user's selection in the output element.
- If save order is clicked when there is an invalid selection, display in the output:
  "Please select your toppings"
- User can click "Save order" again to update their previous order with a new one.

Example outputs:
- Default state: "No order placed"
- Basic state: "Your order: Plain"
- Combo state with nickname: "Your order: Sprinkles, Cherry (The Classic)"
- Error state: "Please select your toppings"

Good luck! 🌟✨
*/

import "./styles.css";
import PrimarySelection from "./features/PrimarySelection/PrimarySelection";
import SecondarySelection from "./features/SecondarySelection/SecondarySelection";
import SaveOrder from "./features/SaveOrder/SaveOrder";
import Output from "./features/Output/Output";

export default function App() {
  return (
    <div className="App">
        <div className="title">Chose your toppings</div>
        <PrimarySelection/>
        <SecondarySelection/>
        <SaveOrder/>
        <Output/>
    </div>
  );
}
