import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class TableComponent {
  products: { name: string; price: number; category: string }[] = [];
  productForm: FormGroup;
  isEditing: boolean = false;
  currentIndex: number | null = null;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]],
      category: ['', Validators.required],
    });
  }

  addProduct() {
    if (this.productForm.valid) {
      this.products.push(this.productForm.value);
      this.productForm.reset();
    }
  }

  editProduct(index: number) {
    const product = this.products[index];
    this.isEditing = true;
    this.currentIndex = index;
    this.productForm.patchValue(product);
  }

  updateProduct() {
    if (this.productForm.valid && this.currentIndex !== null) {
      this.products[this.currentIndex] = this.productForm.value;
      this.isEditing = false;
      this.currentIndex = null;
      this.productForm.reset();
    }
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
  }

  cancelEdit() {
    this.isEditing = false;
    this.currentIndex = null;
    this.productForm.reset();
  }
}
