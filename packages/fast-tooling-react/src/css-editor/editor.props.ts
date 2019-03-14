import { ManagedClasses } from "@microsoft/fast-jss-manager";
import { CSSEditorClassNameContract } from "./editor.style";
import { CSSWidthValues } from "./width";
import { CSSSpacingValues } from "./spacing";
import { CSSPositionValues } from "./position";
import { CSSHeightValues } from "./height";

export interface CSSEditorConfig
    extends CSSSpacingValues,
        CSSPositionValues,
        CSSHeightValues,
        CSSWidthValues {}

export type CSSOnChange = (CSS: CSSEditorConfig) => void;

export interface CSSEditorUnhandledProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface CSSEditorHandledProps
    extends ManagedClasses<CSSEditorClassNameContract> {
    /**
     * The onUpdate event for updating the data
     */
    onUpdate?: CSSOnChange;

    /**
     * The CSS data
     */
    data?: CSSEditorConfig;
}

export type CSSEditorProps = CSSEditorHandledProps & CSSEditorUnhandledProps;
