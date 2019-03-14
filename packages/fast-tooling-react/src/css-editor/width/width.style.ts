import { ComponentStyles } from "@microsoft/fast-jss-manager";
import { applyInputStyle, background800, foreground800 } from "../../style";

export interface CSSWidthClassNameContract {
    cssWidth?: string;
    cssWidth_control?: string;
    cssWidth_controlLabel?: string;
    cssWidth_controlInput?: string;
    cssWidth_softRemove?: string;
}

const styles: ComponentStyles<CSSWidthClassNameContract, {}> = {
    cssWidth: {},
};

export default styles;
