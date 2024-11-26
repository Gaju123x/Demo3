import { useState } from "react";

function Homework() {
    const [Visible, setVisible] = useState(false);
    const [isOn, setIsOn] = useState(false);

    const toggle = () => {
        if (!isOn) {
            setIsOn(true); // Turn the light on only if it's currently off
        }
    };

    return (
        <div>
            <button onClick={() => setVisible(!Visible)}>
                {Visible ? "Hide" : "Show"}
            </button>
            {Visible && (
                <div
                    style={{
                        backgroundColor: "blue",
                        height: "100px",
                        width: "100px",
                    }}
                ></div>
            )}

            <div>
                <button onClick={toggle}>
                    {isOn ? "Turn On Again" : "Turn On"}
                </button>
                <p>The light is {isOn ? "On" : "Off"}.</p>
                <img
                    src={isOn ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgASQUyercFx5HfqlXvDyuGN6nUOTSIFnMg&s" : "https://c8.alamy.com/comp/2A5C5XA/vector-3d-realistic-golden-off-light-bulb-icon-closeup-isolated-on-white-background-design-template-clipart-glowing-incandescent-filament-lamps-2A5C5XA.jpg"}
                    alt={isOn ? "Light On" : "Light Off"}
                    style={{ height: "150px", width: "150px"}}
                />
            </div>
        </div>
    );
}

export default Homework;
