import { ITooltipProps } from 'office-ui-fabric-react/lib/Tooltip';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
export declare class DuToolTip extends DuReactWrapperBaseClass implements ITooltipProps {
    constructor(element: any);
    hidden: boolean;
    attached(): void;
}
