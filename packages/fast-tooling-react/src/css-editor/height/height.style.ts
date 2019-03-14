import { ComponentStyles } from "@microsoft/fast-jss-manager";
import { applyInputStyle, background800, foreground800 } from "../../style";

export interface CSSHeightClassNameContract {
    cssHeight?: string;
    cssHeight_control?: string;
    cssHeight_controlLabel?: string;
    cssHeight_controlInput?: string;
    cssHeight_softRemove?: string;
}

const styles: ComponentStyles<CSSHeightClassNameContract, {}> = {
    cssHeight: {},
};

export default styles;
