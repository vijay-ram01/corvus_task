import { Tabs } from 'Frontend/components/Tabs/Tabs';
import '@vaadin/tabs';

export function TodoView () {
  return (
      <vaadin-tabs>
         <vaadin-tab>Details</vaadin-tab>
         <vaadin-tab>Payment</vaadin-tab>
         <vaadin-tab>Shipping</vaadin-tab>
       </vaadin-tabs>
  );
}

// import { html, LitElement } from 'lit';
// import { customElement } from 'lit/decorators.js';
// import '@vaadin/tabs';

// @customElement('tabs-basic')
// export class TodoView extends LitElement {
//   protected override render() {
//     return html`
//       <!-- tag::snippet[] -->
//       <vaadin-tabs>
//         <vaadin-tab>Details</vaadin-tab>
//         <vaadin-tab>Payment</vaadin-tab>
//         <vaadin-tab>Shipping</vaadin-tab>
//       </vaadin-tabs>
//       <!-- end::snippet[] -->
//     `;
//   }
// }
