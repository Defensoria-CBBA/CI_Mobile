import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function Title() {
    return (
        <Svg
            width={309}
            height={95}
            viewBox="0 0 309 95"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            
        >
            <Path
                d="M309 206c0 113.771-95.811 206-214 206s-214-92.229-214-206C-119 92.23-23.189 0 95 0s214 92.23 214 206z"
                fill="url(#paint0_linear_172_4)"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_172_4"
                    x1={209.949}
                    y1={129.515}
                    x2={-37.2062}
                    y2={394.979}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#CAF1C6" />
                    <Stop offset={1} stopColor="#97ECFF" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export default Title;