import React from "react";
import { get } from "lodash-es";
import FormItem from "../utilities/form-item";
import { FormItemCommon } from "../../utilities/form-item.common";
import { CSSWidthValues } from "./width.props";

export default class CSSWidth extends FormItem<
    {} & FormItemCommon<CSSWidthValues>,
    CSSWidthValues,
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
                        value={get(this.props, "data.width", "")}
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
        return super.generateClassNames(get(this.props, "managedClasses.cssWidth"));
    }

    private handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.handleChange({ width: e.target.value });
    };

    private generateControlClassNames(): string {
        return get(this.props, "managedClasses.cssWidth_control");
    }

    private generateControlLabelClassNames(): string {
        return get(this.props, "managedClasses.cssWidth_controlLabel");
    }

    private generateControlInputClassNames(): string {
        return get(this.props, "managedClasses.cssWidth_controlInput");
    }

    private generateSoftRemoveClassNames(): string {
        return get(this.props, "managedClasses.cssWidth_softRemove");
    }
}
