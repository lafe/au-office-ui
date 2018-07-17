System.register(["@uifabric/styling"], function (exports_1, context_1) {
    "use strict";
    var styling_1;
    var __moduleName = context_1 && context_1.id;
    function standardStyles(theme) {
        var _a, _b, _c;
        var s = theme.semanticColors;
        var buttonBackground = s.buttonBackground;
        var buttonBackgroundChecked = s.buttonBackgroundChecked;
        var buttonBackgroundHovered = s.buttonBackgroundHovered;
        var buttonText = s.buttonText;
        var buttonTextHovered = s.buttonTextHovered;
        var buttonTextChecked = s.buttonTextChecked;
        var buttonTextCheckedHovered = s.buttonTextCheckedHovered;
        return {
            root: {
                backgroundColor: buttonBackground,
                color: buttonText
            },
            rootHovered: {
                backgroundColor: buttonBackgroundHovered,
                color: buttonTextHovered,
                selectors: (_a = {},
                    _a[styling_1.HighContrastSelector] = {
                        borderColor: 'Highlight',
                        color: 'Highlight'
                    },
                    _a)
            },
            rootPressed: {
                backgroundColor: buttonBackgroundChecked,
                color: buttonTextChecked
            },
            rootExpanded: {
                backgroundColor: buttonBackgroundChecked,
                color: buttonTextChecked
            },
            rootChecked: {
                backgroundColor: buttonBackgroundChecked,
                color: buttonTextChecked
            },
            rootCheckedHovered: {
                backgroundColor: theme.palette.neutralLight,
                color: buttonTextCheckedHovered
            },
            // Split button styles
            splitButtonContainer: {
                selectors: (_b = {},
                    _b[styling_1.HighContrastSelector] = {
                        border: 'none'
                    },
                    _b)
            },
            splitButtonMenuButton: {
                color: theme.palette.white,
                backgroundColor: theme.palette.neutralLighter,
                selectors: {
                    ':hover': {
                        backgroundColor: theme.palette.neutralLight,
                        selectors: (_c = {},
                            _c[styling_1.HighContrastSelector] = {
                                color: 'Highlight'
                            },
                            _c)
                    }
                }
            },
            splitButtonMenuButtonDisabled: {
                backgroundColor: theme.palette.neutralLighter,
                selectors: {
                    ':hover': {
                        backgroundColor: theme.palette.neutralLighter
                    }
                }
            },
            splitButtonDivider: {
                backgroundColor: theme.palette.neutralTertiaryAlt
            },
            splitButtonMenuButtonChecked: {
                backgroundColor: theme.palette.themePrimary
            },
            splitButtonMenuButtonExpanded: {
                backgroundColor: theme.palette.neutralLight
            },
            splitButtonMenuIcon: {
                color: theme.palette.neutralPrimary
            },
            splitButtonMenuIconDisabled: {
                color: theme.palette.neutralTertiary
            }
        };
    }
    exports_1("standardStyles", standardStyles);
    function primaryStyles(theme) {
        var _a, _b, _c, _d, _e, _f;
        return {
            root: {
                backgroundColor: theme.palette.themePrimary,
                color: theme.palette.white,
                selectors: (_a = {},
                    _a[styling_1.HighContrastSelector] = {
                        color: 'Window',
                        backgroundColor: 'WindowText',
                        MsHighContrastAdjust: 'none'
                    },
                    _a)
            },
            rootHovered: {
                backgroundColor: theme.palette.themeDarkAlt,
                color: theme.palette.white,
                selectors: (_b = {},
                    _b[styling_1.HighContrastSelector] = {
                        color: 'Window',
                        backgroundColor: 'Highlight'
                    },
                    _b)
            },
            rootPressed: {
                backgroundColor: theme.palette.themeDark,
                color: theme.palette.white,
                selectors: (_c = {},
                    _c[styling_1.HighContrastSelector] = {
                        color: 'Window',
                        backgroundColor: 'WindowText',
                        MsHighContrastAdjust: 'none'
                    },
                    _c)
            },
            rootExpanded: {
                backgroundColor: theme.palette.themeDark,
                color: theme.palette.white
            },
            rootChecked: {
                backgroundColor: theme.palette.themeDark,
                color: theme.palette.white
            },
            rootCheckedHovered: {
                backgroundColor: theme.palette.themePrimary,
                color: theme.palette.white
            },
            rootDisabled: {
                selectors: (_d = {},
                    _d[styling_1.HighContrastSelector] = {
                        color: 'GrayText',
                        borderColor: 'GrayText',
                        backgroundColor: 'Window'
                    },
                    _d)
            },
            // Split button styles
            splitButtonContainer: {
                selectors: (_e = {},
                    _e[styling_1.HighContrastSelector] = {
                        border: 'none'
                    },
                    _e)
            },
            splitButtonDivider: {
                backgroundColor: theme.palette.themeLighter
            },
            splitButtonMenuButton: {
                backgroundColor: theme.palette.themePrimary,
                color: theme.palette.white,
                selectors: {
                    ':hover': {
                        backgroundColor: theme.palette.themeDark,
                        selectors: (_f = {},
                            _f[styling_1.HighContrastSelector] = {
                                color: 'Highlight'
                            },
                            _f)
                    }
                }
            },
            splitButtonMenuButtonDisabled: {
                backgroundColor: theme.palette.neutralLighter,
                selectors: {
                    ':hover': {
                        backgroundColor: theme.palette.neutralLighter
                    }
                }
            },
            splitButtonMenuButtonChecked: {
                backgroundColor: theme.palette.themeDark
            },
            splitButtonMenuButtonExpanded: {
                backgroundColor: theme.palette.themeDark
            },
            splitButtonMenuIcon: {
                color: theme.palette.white
            },
            splitButtonMenuIconDisabled: {
                color: theme.palette.neutralTertiary
            }
        };
    }
    exports_1("primaryStyles", primaryStyles);
    return {
        setters: [
            function (styling_1_1) {
                styling_1 = styling_1_1;
            }
        ],
        execute: function () {
        }
    };
});
