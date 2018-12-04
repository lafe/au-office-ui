import { customElement, inject, noView } from 'aurelia-framework';
import { MessageBar, IMessageBarProps } from 'office-ui-fabric-react/lib/MessageBar';
import { renderReact, addProperties, ReactWrapper } from '../wrapper/ReactWrapper';

let reactprops: IMessageBarProps = <IMessageBarProps>{};
reactprops.className = <any>{};
reactprops.isMultiline = <any>{};
reactprops.messageBarType = <any>{};
reactprops.onDismiss = () => {};
reactprops.dismissButtonAriaLabel = <any>{};
reactprops.truncated = <any>{};
reactprops.overflowButtonAriaLabel = <any>{};
reactprops.actions = <any>{};

@noView()
@inject(Element)
@customElement('du-message-bar')
export class DuMessageBar extends ReactWrapper {

  constructor(element) {
    super(element);
  }

  public render() {

    renderReact.bind(this)(MessageBar, reactprops);
  }
}

addProperties(DuMessageBar, reactprops);