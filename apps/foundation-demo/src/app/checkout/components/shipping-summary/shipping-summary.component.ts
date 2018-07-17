import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { ShippingAddress, ShippingOption } from '@daffodil/core';

@Component({
  selector: 'shipping-summary',
  templateUrl: './shipping-summary.component.html',
  styleUrls: ['./shipping-summary.component.scss']
})
export class ShippingSummaryComponent implements OnInit {

  @Input() shippingInfo: ShippingAddress;
  @Input() selectedShippingOption: string;
  @Output() editShippingInfo: EventEmitter<any> = new EventEmitter();
  @Output() selectShippingOption: EventEmitter<any> = new EventEmitter();

  disableContinueToPayment: boolean;
  shippingOptions: ShippingOption[];

  constructor() { 
    this.shippingOptions = [
      {
        id: 'standard-shipping',
        text: 'Standard'
      },
      {
        id: 'two-day-shipping',
        text: 'Two Day'
      },
      {
        id: 'one-day-shipping',
        text: 'One Day'
      }
    ]
  }

  ngOnInit() {
    this.disableContinueToPayment = true;
  }

  onEdit() {
    this.editShippingInfo.emit();
  }

  onSelectShippingOption(option: string) {
    this.disableContinueToPayment = false;
    this.selectShippingOption.emit(option);
  }
}
