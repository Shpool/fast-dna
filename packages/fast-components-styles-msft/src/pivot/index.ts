import { DesignSystem, withDesignSystemDefaults } from "../design-system";
import {
    ComponentStyles,
    ComponentStyleSheet,
    CSSRules,
} from "@microsoft/fast-jss-manager";
import {
    applyFocusVisible,
    applyLocalizedProperty,
    Direction,
    toPx,
} from "@microsoft/fast-jss-utilities";
import { height, heightNumber, horizontalSpacing } from "../utilities/density";
import {
    accentFillRest,
    neutralFocus,
    neutralForegroundActive,
    neutralForegroundHover,
    neutralForegroundRest,
} from "../utilities/color";
import { PivotClassNameContract } from "@microsoft/fast-components-class-name-contracts-msft";
import { applyCornerRadius, applyFocusPlaceholderBorder } from "../utilities/border";
import { applyScaledTypeRamp } from "../utilities/typography";

const styles: ComponentStyles<PivotClassNameContract, DesignSystem> = (
    config: DesignSystem
): ComponentStyleSheet<PivotClassNameContract, DesignSystem> => {
    const designSystem: DesignSystem = withDesignSystemDefaults(config);
    const direction: Direction = designSystem.direction;
    const activeIndicatorHeight: number = 3;

    return {
        pivot: {
            position: "relative",
            overflow: "hidden",
            color: neutralForegroundRest,
            transition: "all 0.2s ease-in-out",
        },
        pivot_tabList: {
            display: "flex",
            boxSizing: "border-box",
        },
        pivot_tab: {
            height: height(),
            padding: `0 ${horizontalSpacing(2)(designSystem)}`,
            whiteSpace: "nowrap",
            display: "flex",
            ...applyFocusPlaceholderBorder(designSystem),
            alignItems: "center",
            boxSizing: "border-box",
            userSelect: "none",
            color: neutralForegroundRest,
            ...applyCornerRadius(),
            "&:hover": {
                color: neutralForegroundHover,
            },
            "&:active": {
                color: neutralForegroundActive,
            },
            ...applyFocusVisible<DesignSystem>({
                borderColor: neutralFocus,
            }),
        },
        pivot_tab__active: {},
        pivot_tabContent: {
            transition: "all 0.2s ease-in-out",
            ...applyScaledTypeRamp("t7"),
            position: "relative",
            top: "-2px",
        },
        pivot_activeIndicator: {
            position: "absolute",
            ...applyCornerRadius(),
            top: toPx(
                heightNumber(1)(designSystem) -
                    activeIndicatorHeight -
                    designSystem.focusOutlineWidth
            ),
            left: "-10px",
            transition: "0.2s ease-in-out",
            width: "20px",
            height: toPx(activeIndicatorHeight),
            display: "block",
            background: accentFillRest,
        },
        pivot_tabPanel: {
            display: "block",
        },
        pivot_tabPanel__hidden: {
            display: "none",
        },
        pivot_tabPanels: {
            animationTimingFunction: "cubic-bezier(0.4, 0.0, 0.6, 1.0)",
        },
        pivot_tabPanels__animatePrevious: {
            animation: `${applyLocalizedProperty(
                "fromLeft",
                "fromRight",
                direction
            )} 0.2s`,
        },
        pivot_tabPanels__animateNext: {
            animation: `${applyLocalizedProperty(
                "fromRight",
                "fromLeft",
                direction
            )} 0.2s`,
        },
        pivot_tabPanelContent: {},
        "@keyframes fromRight": {
            "0%": {
                opacity: "0",
                transform: "translateX(-50px)",
            },
            "100%": {
                opacity: "1",
                transform: "translateX(0)",
            },
        },
        "@keyframes fromLeft": {
            "0%": {
                opacity: "0",
                transform: "translateX(50px)",
            },
            "100%": {
                transform: "translateX(0)",
                opacity: "1",
            },
        },
    };
};

export default styles;
