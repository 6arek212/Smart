import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ReceiptService } from 'src/app/globalServices/receipt.service';
import { Receipt } from 'src/app/models/Receipt';
import { Product } from 'src/app/models/Product';
import { selectInput } from '../../../utils-components/validators'

@Component({
  selector: 'app-receipt-form',
  templateUrl: './receipt-form.component.html',
  styleUrls: ['./receipt-form.component.css'],
  providers: [ReceiptService]
})
export class ReceiptFormComponent implements OnInit {


  form: FormGroup
  productForm: FormGroup
  products: Product[] = []
  status = null

  constructor(private receiptService: ReceiptService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'fullName': new FormControl(null, { validators: [Validators.required, Validators.maxLength(20), Validators.minLength(2)] }),
      'idNumber': new FormControl(null, { validators: [Validators.maxLength(20)] }),
      'phoneNumber': new FormControl(null, { validators: [Validators.required, Validators.maxLength(14), Validators.minLength(6)] }),
      'address': new FormControl(null, { validators: [Validators.required, Validators.maxLength(20), Validators.minLength(2)] }),
      'notes': new FormControl(null, { validators: [Validators.required] })

    })

    this.productForm = new FormGroup({
      'payment': new FormControl('-1', { asyncValidators: [selectInput] }),
      'product': new FormControl(null, { validators: [Validators.required, Validators.maxLength(20), Validators.minLength(2)] }),
      'price': new FormControl(null, { validators: [Validators.required, Validators.max(6000), Validators.min(1)] })
    })

  }


  addProduct() {
    if (this.productForm.invalid)
      return

    if (this.status != null) {
      const index = this.products.indexOf(this.status)
      const pr: Product = {
        name: this.productForm.value.product,
        price: this.productForm.value.price,
        payment: this.productForm.value.payment
      }
      this.products[index] = pr
      this.status = null
      return
    }

    const pr: Product = {
      name: this.productForm.value.product,
      price: this.productForm.value.price,
      payment: this.productForm.value.payment
    }
    this.products.push(pr)
    console.log(this.products);
  }


  removeProduct(pr: Product) {
    const index = this.products.indexOf(pr)
    this.products.splice(index, 1)
  }



  updateProduct(pr: Product) {
    this.status = pr
    this.form.controls.product.setValue(pr.name)
    this.form.controls.price.setValue(pr.price)
    this.form.controls.payment.setValue(pr.payment)
  }


  getReceipt() {
    if (this.form.invalid)
      return

    const reciept: Receipt = {
      idNumber: this.form.value.idNumber,
      phoneNumber: this.form.value.phoneNumber,
      address: this.form.value.address,
      fullName: this.form.value.fullName,
      products: this.products,
      notes: this.form.value.notes
    }
    this.receiptService.getReceipt(reciept).subscribe(res => {
      this.downloadFile(res)
    }, err => {
      console.log(err);
    })
  }



  downloadFile(data) {
    const blob = new Blob([data], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    window.open(url);
  }


}