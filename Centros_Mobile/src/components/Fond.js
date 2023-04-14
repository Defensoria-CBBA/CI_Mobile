import * as React from "react"
import Svg, {
    G,
    Ellipse,
    Defs,
    LinearGradient,
    Stop,
    ClipPath,
    Path
} from "react-native-svg"


function Fond() {
    return (
        <Svg
            width={390}
            height={316}
            viewBox="0 0 390 316"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            
        >
            <G clipPath="url(#clip0_91_27)">
                <Ellipse
                    cx={110.5}
                    cy={68}
                    rx={294.5}
                    ry={248}
                    fill="url(#paint0_linear_91_27)"
                />
            </G>
            <Defs>
                <LinearGradient
                    id="paint0_linear_91_27"
                    x1={433.5}
                    y1={-209.5}
                    x2={110.5}
                    y2={316}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#CAF1C6" />
                    <Stop offset={1} stopColor="#8AE4DF" />
                </LinearGradient>
                <ClipPath id="clip0_91_27">
                    <Path fill="#fff" d="M0 0H390V316H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default Fond;