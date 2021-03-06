import { customElement, inject } from 'aurelia-framework';
import { Toggle, IToggleProps } from 'office-ui-fabric-react/lib/Toggle';
import { AuReactStateWrapper, addPropertiesState } from '@dunite/au-react-wrapper';

let reactprops: IToggleProps = {} as IToggleProps;
reactprops.ariaLabel = <any>{}; 
reactprops.label = <any>{};
reactprops.onText = <any>{};
reactprops.offText = <any>{};
reactprops.checked = <any>{};
reactprops.defaultChecked = <any>{};
reactprops.disabled  = <any>{};
reactprops.onChange = function (that: any, _event: any, newValue?: string)
{
  that['checked'] = newValue; 
};
reactprops.className = <any>{};
reactprops.keytipProps  = <any>{};


@inject(Element)
@customElement('du-toggle')
export class DuToggle extends  AuReactStateWrapper implements IToggleProps {

  constructor(element) {
  super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean = false;

  attached() {

    
    this.renderReact(Toggle, this.createState(reactprops));
  }
}

addPropertiesState(DuToggle, reactprops);