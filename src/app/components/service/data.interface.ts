 export interface Country {
  id: string;
  name: string;
  flag: string;
  code: string;
  someWeirdServerFieldNameWithCount: number;
  selected: boolean; 
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatarUrl: string;
  selected: boolean;  
}

export interface Payment {
  id: string;
  status: string;
  receiver: string;
  internalFieldA: string;
  xYZRandomField: string;
  selected: boolean;  
}
