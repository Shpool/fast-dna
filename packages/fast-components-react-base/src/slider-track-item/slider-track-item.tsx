import React from "react";
import Foundation, { HandledProps } from "@microsoft/fast-components-foundation-react";
import { get } from "lodash-es";
import { SliderTrackItemClassNameContract } from "@microsoft/fast-components-class-name-contracts-base";
import {
    SliderTrackItemAnchor,
    SliderTrackItemHandledProps,
    SliderTrackItemProps,
    SliderTrackItemUnhandledProps,
} from "./slider-track-item.props";
import { SliderOrientation } from "../slider/slider.props";
import { SliderContext, SliderContextType } from "../slider/slider-context";
import { DisplayNamePrefix } from "../utilities";

class SliderTrackItem extends Foundation<
    SliderTrackItemHandledProps,
    SliderTrackItemUnhandledProps,
    {}
> {
    public static displayName: string = `${DisplayNamePrefix}SliderTrackItem`;

    public static contextType: React.Context<SliderContextType> = SliderContext;

    public static defaultProps: Partial<SliderTrackItemProps> = {};

    protected handledProps: HandledProps<SliderTrackItemHandledProps> = {
        trackerUpperValuePositionBinding: void 0,
        trackerLowerValuePositionBinding: void 0,
        managedClasses: void 0,
    };

    /**
     * Renders the component
     */
    public render(): React.ReactElement<HTMLDivElement> {
        return (
            <div
                {...this.unhandledProps()}
                className={this.generateClassNames()}
                style={{
                    position: "absolute",
                    ...this.applyPositioningValues(),
                }}
            >
                {this.props.children}
            </div>
        );
    }

    /**
     * Create class-names
     */
    protected generateClassNames(): string {
        let classNames: string = get(this.props, "managedClasses.sliderTrackItem", "");

        if (
            (this.context as SliderContextType).sliderOrientation ===
            SliderOrientation.vertical
        ) {
            classNames = `${classNames} ${get(
                this.props,
                "managedClasses.sliderTrackItem__orientationVertical",
                ""
            )}`;
        } else {
            classNames = `${classNames} ${get(
                this.props,
                "managedClasses.sliderTrackItem__orientationHorizontal",
                ""
            )}`;
        }

        return super.generateClassNames(classNames);
    }

    /**
     * Gets the appropriate absolute positioning
     */
    private applyPositioningValues = (): any => {
        const minValue: number = this.getValueFromPositionBinding(
            this.props.trackerLowerValuePositionBinding
        );
        const maxValue: number = this.getValueFromPositionBinding(
            this.props.trackerUpperValuePositionBinding
        );

        if (
            (this.context as SliderContextType).sliderOrientation ===
            SliderOrientation.vertical
        ) {
            return {
                top: `${100 - maxValue}%`,
                bottom: `${minValue}%`,
            };
        } else {
            return {
                left: `${minValue}%`,
                right: `${100 - maxValue}%`,
            };
        }
    };

    /**
     *
     */
    private getValueFromPositionBinding = (
        anchor: SliderTrackItemAnchor | number
    ): number => {
        if (anchor === undefined) {
            return undefined;
        }

        if (typeof anchor === "number") {
            return (this.context as SliderContextType).sliderValueAsPercent(anchor);
        }

        switch (anchor) {
            case SliderTrackItemAnchor.selectedRangeMax:
                return (this.context as SliderContextType).sliderValueAsPercent(
                    (this.context as SliderContextType).sliderUpperValue
                );

            case SliderTrackItemAnchor.selectedRangeMin:
                return (this.context as SliderContextType).sliderValueAsPercent(
                    (this.context as SliderContextType).sliderLowerValue
                );

            case SliderTrackItemAnchor.totalRangeMax:
                return 100;

            case SliderTrackItemAnchor.totalRangeMin:
                return 0;
        }
    };
}

SliderTrackItem.contextType = SliderContext;
export default SliderTrackItem;
export * from "./slider-track-item.props";
export { SliderTrackItemClassNameContract };
