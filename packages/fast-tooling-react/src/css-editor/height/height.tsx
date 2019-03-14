import React from "react";
import { get } from "lodash-es";
import FormItem from "../utilities/form-item";
import { FormItemCommon } from "../../utilities/form-item.common";
import { CSSHeightValues } from "./height.props";

export default class CSSHeight extends FormItem<
    {} & FormItemCommon<CSSHeightValues>,
    CSSHeightValues,
    {},
    {}
> {
    public render(): React.ReactNode {
        return (
            <div className={this.generateClassNames()}>
                <div className={this.generateControlClassNames()}>
                    <label
                        htmlFor={this.props.dataLocation}
                        className={this.generateControlLabelClassNames()}
                    >
                        {this.props.label}
                    </label>
                    <input
                        className={this.generateControlInputClassNames()}
                        id={this.props.dataLocation}
                        name={this.props.dataLocation}
                        value={get(this.props.data, "data.height", "")}
                        onChange={this.handleInputChange}
                        disabled={this.props.disabled}
                    />
                </div>
                <div className={this.generateSoftRemoveClassNames()}>
                    {this.renderSoftRemove(
                        this.generateSoftRemoveClassNames(),
                        this.handleSoftRemove
                    )}
                </div>
            </div>
        );
    }

    protected generateClassNames(): string {
        return super.generateClassNames(get(this.props, "managedClasses.cssHeight"));
    }

    private handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.handleChange({ height: e.target.value });
    };

    private generateControlClassNames(): string {
        return get(this.props, "managedClasses.cssHeight_control");
    }

    private generateControlLabelClassNames(): string {
        return get(this.props, "managedClasses.cssHeight_controlLabel");
    }

    private generateControlInputClassNames(): string {
        return get(this.props, "managedClasses.cssHeight_controlInput");
    }

    private generateSoftRemoveClassNames(): string {
        return get(this.props, "managedClasses.cssHeight_softRemove");
    }
}
