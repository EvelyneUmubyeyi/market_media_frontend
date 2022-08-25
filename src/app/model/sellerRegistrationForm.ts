export class sellerRegistrationForm {
    BusinessName: string = "";
    Tin:number= 0;
    BusinessDescription: string = "";
    Website: string = "";
    Socialmedia: string = "";
    mobilePaymentCode: string = "";
    contactPersonId:number= 0;
    Branches:Array<Branch>=[];
}

export class Branch{
    Name: string = "";
    Street_number: string = "";
    sellerId: number = 0;
    villageId: number = 0;
    email: string = "";
    phone: string = "";
    addressDetails: string = "";
}