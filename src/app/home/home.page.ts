import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  name = ['ball', 'bat', 'glove', 'glove', 'glove'];
  price = [2,3,1,2,1];
  weight = [2,5,1,1,1];

  nrDuplicates = 0;

  constructor() {}

  checkDuplicates(nameStr, priceStr, weightStr) {
    let count = 0;
    const resultData = new Map();
    let i = 0;
    for (i=0; i < nameStr.length; i++) {
       const currentProduct = nameStr[i] + priceStr[i] + weightStr[i];
       if (resultData.get(currentProduct) != null) {
          count++;
       } else {
          resultData.set(currentProduct, 1);
       };
    };
    console.log(count);
    return count;
  }

  onClickCount() {
    this.nrDuplicates = this.checkDuplicates(this.name, this.price, this.weight);
  };


}