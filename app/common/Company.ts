import { Coupon } from './Coupon';
export class Company {

    constructor(public id?: number, public compName?: string, public password?: string, public email?: string, public coupons?: Coupon) {	}
}
