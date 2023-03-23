import * as React from 'react';
import router from 'Frontend/routes.js';
import { RouterProvider } from 'react-router-dom';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'vaadin-button': VaadinButtonProps,
      'vaadin-icon': VaadinIconProps,
      'vaadin-grid': VaadinGridProps,
      'vaadin-grid-column': VaadinGridColumnProps,
      'vaadin-grid-sort-column': VaadinGridSortColumnProps,
      'vaadin-text-area': VaadinTextArea,
      'vaadin-grid-selection-column': vaadinGridSelectionColumn,
    }
  }
}

interface VaadinButtonProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
}

interface VaadinIconProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
}

interface VaadinGridProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
}

interface VaadinGridColumnProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
}

interface VaadinGridSortColumnProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
}

interface VaadinTextArea extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
}

interface vaadinGridSelectionColumn extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
}

export default function App() {
  return <RouterProvider router={router} />;
}
