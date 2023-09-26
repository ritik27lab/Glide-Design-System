import * as React from "react";
import Svg, { Path } from "react-native-svg";
export function SignUpPipe(props) {
    return (
        <Svg
            width={2}
            height={32}
            viewBox="0 0 2 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path d="M1 65L1 0" stroke="white" strokeOpacity={0.9} />
        </Svg>
    );
}
