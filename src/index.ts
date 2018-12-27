//export * from './test-plugin';
//export * from './test-plugin-configuration';
export * from './resources/index';

import { FrameworkConfiguration } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';

export function configure(aurelia: FrameworkConfiguration) {
    aurelia.globalResources([
        PLATFORM.moduleName('./resources/elements/DuActionButton'),
        PLATFORM.moduleName('./resources/elements/DuBreadcrumb'),
        PLATFORM.moduleName('./resources/elements/DuCheckbox'),
        PLATFORM.moduleName('./resources/elements/DuChoiceGroup'),
        PLATFORM.moduleName('./resources/elements/DuColorPicker'),
        PLATFORM.moduleName('./resources/elements/DuComboBox'),
        PLATFORM.moduleName('./resources/elements/DuCommandBar'),
        PLATFORM.moduleName('./resources/elements/DuCommandBarButton'),
        PLATFORM.moduleName('./resources/elements/DuCompactPeoplePicker'),
        PLATFORM.moduleName('./resources/elements/DuCompoundButton'),
        PLATFORM.moduleName('./resources/elements/DuContextualMenu'),
        PLATFORM.moduleName('./resources/elements/DuDatePicker'),
        PLATFORM.moduleName('./resources/elements/DuDefaultButton'),
        PLATFORM.moduleName('./resources/elements/DuDropdown'),
        PLATFORM.moduleName('./resources/elements/DuIconButton'),
        PLATFORM.moduleName('./resources/elements/DuLabel'),
        PLATFORM.moduleName('./resources/elements/DuListPeoplePicker'),
        PLATFORM.moduleName('./resources/elements/DuMessageBar'),
        PLATFORM.moduleName('./resources/elements/DuNav'),
        PLATFORM.moduleName('./resources/elements/DuPeoplePicker'),
        PLATFORM.moduleName('./resources/elements/DuPivot'),
        PLATFORM.moduleName('./resources/elements/DuProgressIndicator'),
        PLATFORM.moduleName('./resources/elements/DuSearch'),
        PLATFORM.moduleName('./resources/elements/DuSlider'),
        PLATFORM.moduleName('./resources/elements/DuSpinButton'),
        PLATFORM.moduleName('./resources/elements/DuTagPicker'),
        PLATFORM.moduleName('./resources/elements/DuTextField'),
        PLATFORM.moduleName('./resources/elements/DuToggle')
    ]);
}