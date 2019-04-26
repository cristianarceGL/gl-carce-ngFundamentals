export interface Contact {
  id?: number | string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
}

export interface Contactdex {
  contact: Array<Contact>;
}
