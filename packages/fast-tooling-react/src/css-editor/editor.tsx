import React from "react";
import { get, pick } from "lodash-es";
import Foundation, {
    FoundationProps,
    HandledProps,
} from "@microsoft/fast-components-foundation-react";
import { CSSEditorHandledProps, CSSEditorUnhandledProps } from "./editor.props";
import { CSSPosition, CSSPositionValues, Location, PositionValue } from "./position";
import { CSSSpacing, CSSSpacingValues, SpacingProperty } from "./spacing";
import { CSSWidth, CSSWidthValues } from "./width";
import { CSSHeight, CSSHeightValues } from "./height";

export default class CSSEditor extends Foundation<
    CSSEditorHandledProps,
    CSSEditorUnhandledProps,
    {}
> {
    public static displayName: string = "CSSEditor";

    protected handledProps: HandledProps<CSSEditorHandledProps> = {
        data: void 0,
        onUpdate: void 0,
        managedClasses: void 0,
    };

    public render(): React.ReactNode {
        return (
            <div className={this.props.managedClasses.cssEditor}>
                {this.renderPosition()}
            </div>
        );
    }

    private renderPosition(): React.ReactNode {
        return (
            <React.Fragment>
                <CSSSpacing
                    jssStyleSheet={{ cssSpacing: { marginBottom: "10px" } }}
                    data={this.getSpacingData()}
                    onUpdate={this.handleCSSUpdate}
                />
                <CSSPosition
                    data={this.getPositionData()}
                    onUpdate={this.handleCSSUpdate}
                />
                <CSSWidth
                    data={this.getWidthData()}
                    onUpdate={this.handleCSSUpdate}
                    label={"Width"}
                    dataLocation={"width"}
                />
                <CSSHeight
                    data={this.getHeightData()}
                    onUpdate={this.handleCSSUpdate}
                    label={"Height"}
                    dataLocation={"height"}
                />
            </React.Fragment>
        );
    }

    private getSpacingData(): CSSSpacingValues {
        const spacingData: CSSSpacingValues = pick(this.props.data, [
            SpacingProperty.marginBottom,
            SpacingProperty.marginLeft,
            SpacingProperty.marginRight,
            SpacingProperty.marginTop,
            SpacingProperty.paddingBottom,
            SpacingProperty.paddingLeft,
            SpacingProperty.paddingRight,
            SpacingProperty.paddingTop,
        ]);

        return spacingData;
    }

    private getPositionData(): CSSPositionValues {
        const positionData: CSSPositionValues = pick(this.props.data, [
            "position",
            Location.left,
            Location.right,
            Location.top,
            Location.bottom,
        ]);

        return positionData;
    }

    private getWidthData(): CSSWidthValues {
        const widthData: CSSWidthValues = pick(this.props.data, ["width"]);

        return widthData;
    }

    private getHeightData(): CSSHeightValues {
        const heightData: CSSHeightValues = pick(this.props.data, ["height"]);

        return heightData;
    }

    private handleCSSUpdate = <D extends {}>(updatedCSS: D): void => {
        if (typeof this.props.onUpdate === "function") {
            this.props.onUpdate(Object.assign({}, this.props.data, updatedCSS));
        }
    };
}
