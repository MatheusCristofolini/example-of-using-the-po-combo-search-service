import { Component, ViewChild } from '@angular/core';
import {
  PoDynamicFormField,
  PoModalComponent,
  PoTableColumn,
} from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(PoModalComponent, { static: true })
  public poModal!: PoModalComponent;

  public readonly columns: Array<PoTableColumn> = [
    {
      property: 'string',
      label: 'Teste String',
      type: 'string',
    },
    {
      property: 'number',
      label: 'Teste Number',
      type: 'number',
    },
    {
      property: 'boolean',
      label: 'Teste Boolean',
      type: 'boolean',
    },
    {
      property: 'options',
      label: 'Teste Options',
      type: 'string',
    },
    {
      property: 'optionsService',
      label: 'Teste Options Service',
      type: 'string',
    },
    {
      property: 'actions',
      label: 'Ações',
      type: 'icon',
      icons: [
        {
          action: this.openModal.bind(this),
          icon: 'po-icon-edit',
          value: 'update',
        },
      ],
    },
  ];
  public readonly formFields: Array<PoDynamicFormField> = [
    {
      property: 'string',
      label: 'Teste String',
      type: 'string',
      gridColumns: 4,
    },
    {
      property: 'number',
      label: 'Teste Number',
      type: 'number',
      gridColumns: 4,
    },
    {
      property: 'boolean',
      label: 'Teste Boolean',
      type: 'boolean',
      gridColumns: 4,
    },
    {
      property: 'options',
      label: 'Teste Options',
      gridColumns: 6,
      options: [
        { label: 'Santa Catarina', valor: 1 },
        { label: 'São Paulo', valor: 2 },
        { label: 'Rio de Janeiro', valor: 3 },
        { label: 'Minas Gerais', valor: 4 },
      ],
      fieldLabel: 'label',
      fieldValue: 'valor',
    },
    {
      property: 'optionsService',
      label: 'Teste Options Service',
      gridColumns: 6,
      fieldLabel: 'nickname',
      fieldValue: 'name',
      optionsService: 'https://po-sample-api.onrender.com/v1/heroes',
    },
  ];
  public readonly items: Array<Object> = [
    {
      string: 'Bola',
      number: 2024,
      boolean: true,
      options: 1,
      optionsService: 'Tony Stark',
      actions: 'update',
    },
    {
      string: 'Biscoito',
      number: 50,
      boolean: false,
      options: 3,
      optionsService: 'Robert Bruce Banner',
      actions: 'update',
    },
  ];
  public formValue!: any;

  private openModal(rowTable: any): void {
    this.formValue = Object.assign({}, rowTable);

    console.log(this.formValue);

    this.poModal.open();
  }
}
