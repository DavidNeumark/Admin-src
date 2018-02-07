import { Coupon } from './Coupon';
export class Customer {



constructor(public id?: number, public custName?: string, public password?, public custEmail?: string, public coupons?: Set<Coupon>) {

}

}
