System.register(["@uifabric/utilities", "@uifabric/styling"], function (exports_1, context_1) {
    "use strict";
    var utilities_1, styling_1, noOutline, iconStyle, getStyles;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (utilities_1_1) {
                utilities_1 = utilities_1_1;
            },
            function (styling_1_1) {
                styling_1 = styling_1_1;
            }
        ],
        execute: function () {
            noOutline = {
                outline: 0
            };
            iconStyle = {
                fontSize: styling_1.FontSizes.icon,
                margin: '0 4px',
                height: '16px',
                lineHeight: '16px',
                textAlign: 'center',
                verticalAlign: 'middle',
                flexShrink: 0
            };
            /**
             * Gets the base button styles. Note: because it is a base class to be used with the `mergeRules`
             * helper, it should have values for all class names in the interface. This let `mergeRules` optimize
             * mixing class names together.
             */
            exports_1("getStyles", getStyles = utilities_1.memoizeFunction(function (theme) {
                var _a;
                var semanticColors = theme.semanticColors;
                var border = semanticColors.buttonBorder;
                var disabledBackground = semanticColors.disabledBackground;
                var disabledText = semanticColors.disabledText;
                var buttonHighContrastFocus = {
                    left: -2,
                    top: -2,
                    bottom: -2,
                    right: -2,
                    border: 'none',
                    outlineColor: 'ButtonText'
                };
                return {
                    root: [
                        styling_1.getFocusStyle(theme, -1, 'relative', buttonHighContrastFocus),
                        theme.fonts.medium,
                        {
                            boxSizing: 'border-box',
                            border: '1px solid ' + border,
                            userSelect: 'none',
                            display: 'inline-block',
                            textDecoration: 'none',
                            textAlign: 'center',
                            cursor: 'pointer',
                            verticalAlign: 'top',
                            padding: '0 16px',
                            borderRadius: 0
                        }
                    ],
                    rootDisabled: [
                        styling_1.getFocusStyle(theme, -1, 'relative', buttonHighContrastFocus),
                        {
                            backgroundColor: disabledBackground,
                            color: disabledText,
                            cursor: 'default',
                            pointerEvents: 'none',
                            selectors: (_a = {
                                    ':hover': noOutline,
                                    ':focus': noOutline
                                },
                                _a[styling_1.HighContrastSelector] = {
                                    color: 'grayText',
                                    bordercolor: 'grayText'
                                },
                                _a)
                        }
                    ],
                    iconDisabled: {
                        color: disabledText
                    },
                    menuIconDisabled: {
                        color: disabledText
                    },
                    flexContainer: {
                        display: 'flex',
                        height: '100%',
                        flexWrap: 'nowrap',
                        justifyContent: 'center',
                        alignItems: 'center'
                    },
                    textContainer: {
                        flexGrow: 1
                    },
                    icon: iconStyle,
                    menuIcon: [
                        iconStyle,
                        {
                            fontSize: styling_1.FontSizes.small
                        }
                    ],
                    label: {
                        margin: '0 4px',
                        lineHeight: '100%'
                    },
                    screenReaderText: styling_1.hiddenContentStyle
                };
            }));
        }
    };
});
