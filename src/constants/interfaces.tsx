export interface PropertyFilters {
    startDate: string;
    endDate: string;
    sortBy: string;
    categories: string[];
    subCategories: string[];
    amenities: string[];
    buildUpArea: [number, number];
    priceDaily: [number, number];
    floor: [number, number];
    capacity: [number, number];
    autoAcceptUpcomingBooking: boolean;
  }
  
  export interface ProprtyFilterState {
    filters: PropertyFilters;
    amenities: AmenityGroup[];
  }
  
  export type Identifiable = {
    _id: string;
    name: string;
  };
  
  export type SubCategory = Identifiable & {
    iconImage: string;
  };
  
  export type Category = Identifiable & {
    subCategoryData: SubCategory[];
  };
  
  export type Amenity = Identifiable & {
    iconImage: string;
  };
  
  export type AmenityGroup = {
    _id: string;
    amentiesData: Amenity[];
  };
  
  export type DefaultPrice = {
    daily: number;
    monthly: number;
    yearly: number;
  };
  
  export type PropertySpaceCategory = Identifiable & {
    options: any;
    description: string;
    iconImage: string;
  };
  
  export type PropertySpaceSubCategory = SubCategory & {
    description: string;
    parentId: string;
  };
  
  export type PropertySpace = {
    dynamicPricing: any[];
    defaultPrice: DefaultPrice;
    isDynamicPrice: number;
    spaceId: string;
    category: PropertySpaceCategory;
    subCategory: PropertySpaceSubCategory;
    include: string[];
    capacity: number;
    units: number;
    space_Id: string;
    maxQuantity: number;
  };
  
  export type PropertyCategory = {
    _id: string;
    data: PropertySpace[];
    // these are assumed properties, please replace when actual API values are made available
    offers: any[];
    terms: string;
  };
  
  export type BookingData = {
    categoryData: any;
    createdAt: string;
    fromDate: string;
    toDate: string;
    occupancy: number;
    bookingStatus: number;
    price: number;
    propertyData: any;
    quantity: number;
    timing: number;
    userStatus: BookingStatus;
    _id: string;
  };
  
  export enum BookingStatus {
    ONGOING = 0,
    COMPLETED = 1,
    CANCELLED = 2,
    UPCOMING = 3,
    REJECTED = 4,
    ABANDONED = 5,
    ACCEPTED = 6,
    PENDING = 7,
  }
  export enum ProfileStatus {
    BEGINNER = 1,
    INTERMEDIATE = 2,
    ADVANCE = 3,
  }
  export enum PassbaseVerified {
    NOTVERIFIED = 0,
    VERIFIED = 1,
  }
  export enum SUB_COMPANY_TYPE {
    COMPANY = 0,
    FREELANCER = 1,
  }
  export enum COMPANY_TYPE {
    COMAPANY = 'company',
    INDIVIDUAL = 'individual',
  }
  export enum PAYMENT_PLAN {
    DAILY = 0,
    MONTHLY = 1,
    YEARLY = 2,
    COMPLETE = 3,
  }
  export enum PAYMENT_STATUS {
    PENDING = 0,
    SUCCESS = 1,
    FAILURE = 2,
    CANCELLED = 4,
  }
  export enum BOOKING_TYPE {
    HOURS = 0,
    MONTHLY = 1,
    CUSTOM = 2,
  }
  
  export enum toggleNotification {
    ENABLED = 1,
    DISABLED = 0,
  }
  export enum tokenType {
    android = 1,
    ios = 2,
    web = 3,
  }
  export enum PLATFORM_USER_TYPE {
    host = 1,
    user = 2,
    admin = 3,
  }
  export enum CHAT_MESSAGE_TYPE {
    text = 1,
    video = 2,
    audio = 3,
    doc = 4,
    image = 5,
    demo = 6,
  }
  
  export interface IDemo {
    propertyName: string;
    date: string;
    time: string;
    remarks: string;
    status: any;
    demoId: string;
  }
  
  export enum DEMO_STATUS {
    accept = 1,
    reject = 2,
    pending = 3,
  }
  
  export enum DISCOUNT_LABEL_TYPE {
    BOOKING_DURATION = 0,
    ADVANCE_BOOKING_DURATION = 1,
    UNITS = 2,
  }
  export enum TYPE_FILTERS {
    RELEVENCE = 'Relevance',
    PRICE_LOW_HIGH = 'Price low to high',
    PRICE_HIGH_LOW = 'Price high to low',
    AVERAGE_RATING = 'Average Ratings',
    RATING_LOW_HIGH = 'Rating low to high',
    RATING_HIGH_LOW = 'Rating high to low',
  }
  export type firebaseUserData = {
    email: string;
    name: string;
    phone: string;
    countryCode: string;
    userImage: string;
  };
  
  export type Coworkerlistdata = {
    bookingId: string;
    createdAt: string;
    email: string;
    status: string;
    updatedAt: string;
    userId: string;
    _id: string;
  };
  export type BookingReducer = {
    next: boolean;
    page: number;
    bookingProperties: Array<BookingData>;
    totalProperties: number;
    forceRerender: boolean;
    bookingSummary: any;
    coworkerList: Array<Coworkerlistdata>;
    filters: any;
    parentCategory: Array<any>;
  };
  
  export interface ReviewFilters {
    sortBy: string[];
  }
  export enum ratingListSort {
    ASCENDING = 1,
    DECENDING = -1,
  }
  export enum area {
    min = 500,
    max = 100000,
  }
  
  export enum floor {
    min = 1,
    max = 200,
  }
  export enum price {
    min = 0,
    max = 10000,
  }
  export enum capacity {
    min = 50,
    max = 5000,
  }
  export enum NOTIFICATION_TYPE {
    ACCEPT_REJECT_REQUEST = 1,
    BOOK_PROPERTY = 2,
    CANCEL_BOOK_PROPERTY = 3,
    ADMIN_BULK = 4,
    BOOKING_SUCCESS_USER = 5,
    BOOKING_CONFIRMED_USER = 6,
    BOOKING_REJECTED_USER = 7,
    BOOKING_SUCCESS_HOST = 8,
    BOOKING_REQUEST_HOST = 9,
    BOOKING_REQUEST_USER = 10,
    BOOKING_REQUEST_ACCEPTED_HOST = 11,
    BOOKING_REQUEST_ACCEPTED_USER = 12,
    BOOKING_CANCELLED_USER = 13,
    BOOKING_CANCELLED_HOST = 14,
    CHAT_TYPE = 16,
    USER_PB_VERIFICATION_SUCCESS = 15,
    USER_PB_VERIFICATION_FALSE = 17,
    BOOKING_DEMO = 20,
  }
  export enum SPACE_AVAILABLE {
    AVAILABLE = 1,
    NO_AVAILABLE = 0,
  }
  