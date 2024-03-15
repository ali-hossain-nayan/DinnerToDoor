// types.ts

export interface user {
    username: string;
    email: string;
    _id:string;
    // Add other properties as needed
  }

  export interface navbar{
    filterItem: (category: string) => void;
    menuList: string[];
    curElem:string
    category:string;
    
    // map:string
  }
  export interface menuCard{
    menuData: string
    curElem:any
    
  }
  export interface MenuItem {
    id: number;
    name: string;
    category: string;
    image?: string; // Optional property
    description?: string; // Optional property
  }
  export interface Blog{
    title:string
    content:string
  }
  