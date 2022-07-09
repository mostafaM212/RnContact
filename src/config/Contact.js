export class Contact {
  constructor(photo, fname, lname, label1, phone1, email, label2, phone2) {
    this.photo = photo;
    this.firstName = fname;
    this.lastName = lname;
    this.label1 = label1;
    this.label2 = label2;
    this.email = email;
    this.phone1 = phone1;
    this.phone2 = phone2;
  }

  validateContact = () => {
    if (this.firstName.length < 3) {
      return {
        error: 'fristName',
        message: 'please enter the first name !',
        isError: true,
      };
      }
      
      if (this.lastName.length < 3) {
        return {
          error: 'lastName',
          message: 'please enter the last name !',
          isError: true,
        };
      }
      if (this.label1.length < 3) {
        return {
          error: 'label1',
          message: 'please enter the label first number !',
          isError: true,
        };
      }
      if (this.phone1.length < 3) {
        return {
          error: 'phone1',
          message: 'please enter the first number !',
          isError: true,
          };
          
      }
      return { isError : false }
      
    };
    
    contactFormatter = () => {
        
        return  {
            emailAddresses: [{
              label: "work",
              email: this.email,
            }],
            familyName: this.lastName,
            givenName: this.firstName,
            displayName: this.firstName + ' ' + this.lastName,
            hasThumbnail: false,
            thumbnailPath: `${this.photo}` ,
            phoneNumbers: [
                {  label: this.label1, number: this.phone1 },
                { label: this.label2, number: this.phone2}
            ]
          }
    }
}
