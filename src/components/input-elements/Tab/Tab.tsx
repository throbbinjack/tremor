import React from 'react';

import {
    border,
    classNames,
    defaultColors,
    fontSize,
    fontWeight,
    getColorTheme,
    getColorVariantsFromColorThemeValue,
    spacing
} from 'lib';
import { Color } from '../../../lib';

export interface TabProps {
    text: string,
    value: any,
    privateProps?: {
        color: Color,
        isActive: boolean,
        setSelectedTab: React.Dispatch<React.SetStateAction<string>>,
    },
}

const Tab = ({
    text,
    value,
    privateProps,
}: TabProps) => {
    const activeClassNames = classNames(
        getColorVariantsFromColorThemeValue(getColorTheme(privateProps!.color).text).textColor,
        getColorVariantsFromColorThemeValue(getColorTheme(privateProps!.color).darkBorder).borderColor,
        border.md.bottom,
    );
    const inActiveClassNames = classNames(
        getColorVariantsFromColorThemeValue(defaultColors.transparent).borderColor,
        getColorVariantsFromColorThemeValue(defaultColors.lightText).textColor,
        getColorVariantsFromColorThemeValue(defaultColors.text).hoverTextColor,
        getColorVariantsFromColorThemeValue(defaultColors.border).hoverBorderColor,
        'hover:tr-border-b-2'
    );
    return(
        <li>
            <button
                className={ classNames(
                    'tr-flex tr-whitespace-nowrap tr-max-w-xs tr-truncate',
                    spacing.twoXs.paddingRight,
                    spacing.twoXs.paddingLeft,
                    spacing.sm.paddingTop,
                    spacing.sm.paddingBottom,
                    spacing.px.negativeMarginBottom,
                    fontSize.sm,
                    fontWeight.md,
                    privateProps!.isActive ? activeClassNames : inActiveClassNames,
                ) }
                value={ value }
                onClick={ () => privateProps!.setSelectedTab!(value) }
            >
                <p className="tr-whitespace-nowrap tr-truncate">{ text }</p>
            </button>
        </li>
    );
};

export default Tab;
