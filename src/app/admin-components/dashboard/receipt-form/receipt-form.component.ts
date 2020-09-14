import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ReceiptService } from 'src/app/globalServices/receipt.service';
import { Receipt } from 'src/app/models/Receipt';
import { Product } from 'src/app/models/Product';
import { selectInput } from '../../../utils-components/validators'
import { Subscription } from 'rxjs';
import { Loading, mError, Success } from 'src/app/DataState';

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
  isLoading = []
  receiptsSub: Subscription
  receipts

  constructor(private receiptService: ReceiptService) { }

  ngOnInit(): void {
    this.isLoading["form1"] = false
    this.isLoading["form2"] = true

    this.receiptsListener()
    this.receiptService.getAllReceipts()

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
      'price': new FormControl(null, { validators: [Validators.required, Validators.max(6000), Validators.min(1)] }),
      'amount': new FormControl(null, { validators: [Validators.required, Validators.max(10), Validators.min(1)] })
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
        payment: this.productForm.value.payment,
        amount: this.productForm.value.amount
      }
      this.products[index] = pr
      this.status = null
      return
    }

    const pr: Product = {
      name: this.productForm.value.product,
      price: this.productForm.value.price,
      payment: this.productForm.value.payment,
      amount: this.productForm.value.amount
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


  createReceipt() {
    if (this.form.invalid)
      return
    this.isLoading['form1'] = true

    const reciept: Receipt = {
      idNumber: this.form.value.idNumber,
      phoneNumber: this.form.value.phoneNumber,
      address: this.form.value.address,
      fullName: this.form.value.fullName,
      products: this.products,
      notes: this.form.value.notes
    }
    this.receiptService.createReceipt(reciept).subscribe(res => {
      this.downloadFile(res)
      this.receiptService.getAllReceipts()
      this.isLoading['form1'] = false
    }, err => {
      console.log(err);
      this.isLoading['form1'] = false
    })
  }



  downloadFile(data) {
    const blob = new Blob([data], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    window.open(url);
  }




  receiptsListener() {
    this.receiptsSub = this.receiptService.getReceiptListener().subscribe(res => {
      console.log(res);

      if (res instanceof Success) {
        this.receipts = res.data
        this.isLoading['form2'] = false
        console.log(this.receipts);

      } else if (res instanceof Loading) {
        this.isLoading['form2'] = true

      } else if (res instanceof mError) {
        this.isLoading['form2'] = false
      }
    })
  }

  getReceipt(fileName: string) {
    this.receiptService.getReceipt(fileName).subscribe(res => {
      console.log(res);
      this.downloadFile(res)
    })
  }



  ngOnDestroy(): void {
    this.receiptsSub.unsubscribe()
  }


  getReceipts(form: NgForm) {
    console.log(form);
    this.receiptService.getAllReceipts(form.value.search)
  }
}
