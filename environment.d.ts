declare global {
  export namespace NodeJS {
    export interface ProcessEnv {
      PUBLIC_NEXT_FIREBASE_API_KEY: string;
      PUBLIC_NEXT_FIREBASE_AUTH_DOMAIN: string;
      PUBLIC_NEXT_FIREBASE_PROJECT_ID: string;
      PUBLIC_NEXT_FIREBASE_STORAGE_BUCKET: string;
      PUBLIC_NEXT_FIREBASE_MESSAGING_SENDER_ID: string;
      PUBLIC_NEXT_FIREBASE_APP_ID: string;
    }
  }
}

export {};
