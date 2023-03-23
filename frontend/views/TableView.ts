
import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '@vaadin/grid';
import '@vaadin/grid/vaadin-grid-sort-column.js';
import StaticData from 'Frontend/data/staticData';
import { applyTheme } from 'Frontend/generated/theme';

@customElement('grid-sorting')
export class TableView extends LitElement {
  protected override createRenderRoot() {
    const root = super.createRenderRoot();
    // Apply custom theme (only supported if your app uses one)
    applyTheme(root);
    return root;
  }

  @state()
  private items: Person[] = StaticData.actionData;

  protected override async firstUpdated() {
    const { people } = await getPeople();
    this.items = people.map((person) => ({
      ...person,
    }));
  }

  protected override render() {
    return html`
      <!-- tag::snippet[] -->
      <vaadin-grid .items="${this.items}">
        <vaadin-grid-sort-column path="id"></vaadin-grid-sort-column>
        <vaadin-grid-sort-column path="displayName" header="Name"></vaadin-grid-sort-column>
        <vaadin-grid-sort-column path="email"></vaadin-grid-sort-column>
        <vaadin-grid-sort-column path="profession"></vaadin-grid-sort-column>
        <vaadin-grid-sort-column path="birthday"></vaadin-grid-sort-column>
      </vaadin-grid>
      <!-- end::snippet[] -->
    `;
  }
}
