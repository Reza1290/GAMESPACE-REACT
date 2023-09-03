// // Import the functions you need from the SDKs you need
// // import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase-admin/auth";
// // import { admin } from "firebase-admin/app";

// // import {getAuth} from 'firebase-admin/app';
// import { cert, initializeApp } from "firebase-admin/app";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   credential: cert({
//     "type": "service_account",
//     "project_id": "komunitas-6e07e",
//     "private_key_id": "4ba4bde288a0999e865b39a8e48b145fcc110abd",
//     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCxiQRkdTZqohDt\n5diH6lNJP8v0dwF31C4//+ojcQ64C5a9avALHExtsmbP9295G6pW93wxx7g5gWG/\n9cjpfhMPcBpstSVpcN2+vumPl0toxumBlTiQYWKxQjkmci6INFhovHs2cJSwQdeI\nyaQg+9t3EB7UeksIYAmpJK7z7B9E7WEeeXwzHZScSYQfuTstpGbAvSfEt2zVFAlN\n/QakYvLxOSEIgfVEQUjprFWGqLoih4HpEpEBFDrcUHFRNRlQSivi47pAf5ekAbiK\n9SN03lB6lpcgMqYBZhcro8mkAfO/JtNH5SNo/C+xna9WPxc2/QMoEw5qSMARtHMO\nuCvewRc/AgMBAAECggEAMJ8KVWrmgtCs20J6CUsrESIIPQUEoWk6W2u+l4NEmTIP\nUAQEBr7yzY4w6x7kaCIkBhpUaJu+f/1HpJdvNUdCeBVnH0ODIfv3tuA5Pgqc6+6i\nD8uqyJvrOAmfdkCKLuJLHjAUfIXbquP1X/B9Y00mv1ZqYx21A++tZaX2xjXyIGF/\n1CmaRm5CPg3DrAHgVRpat41T8hSnXiNsffNxlHevNABm5GtLusmE+Ktlf33oYNWF\nYfO8jbysCxrb+4ytQ8z17GpsqQx1GJLuTtfWqpxmavX4YeCEkvqXd/NH/Jbs+K5v\ni70IpeM4Cipu/QYkKnr6dCYlUo8GlRHXR8vXr0GTUQKBgQDWBsLe4oatyblYSXJe\ntrd+azf1NwBeg7oa5kaHkTFYoqNhSjor89lrymLnAnhdX2OgNmRreyo2V4Q1RLrk\nZTBk8ZwYWg7MDXrrXNwGl4igOPbTxDF2mprXA8e5mXsMxZ4y9S4+iecj/vu31t37\nDwcSbucuSE3h1WcxK6KWumz0sQKBgQDUWjVkcMQxAdhTHuOitOrBo8m9DlhDuol3\n1MpSUaBcIbu9drhZHN6toXl7QT1WIGLbYTyVkRQwfq4qtpyVULxfWhRgjB5IFRio\nK7T6oHzY5MmgmkHN9OFAiHd5OcZFow7qpTBzy5RUe9H7KBoc8FcHm0ZP/NWEsrFz\nPgfgRzSG7wKBgCQFY0rL6Urahp07T0ptihh2xyY4KZG+rdXVJ82tPBbk2IaJTZ0U\nH2Wq3FZw7f0ZDtVqEiCczA/1TsUAWkwSU8DJgTIABjmFk0iFimp5mn8M103w2TpS\n7vh9JGIyWKlfoS6GYVAZOZOvWIIqYZXdg50wmSwK80Cs//8gju67VZchAoGAT7Vs\nxT7u5dZjdQ/rMm/mjrkESMrRptqmLyzYpP2uy+Z9qiieGhUUIOizyOg8NdACS4a8\nTwgeI/XpOm9BZ2reyovtijAOTdBdaQK+9DS5qFB4vqgoez6oLqkK754YJpuGRd2r\nyktoai3wK+5pnuM4R8qpIe0t2Jmasj9ehXk05lECgYA09IVDTBsvQh3NKGppxaE8\nrk2uNA/jL2g5TS42vgxrL+xzzSdxqyruRSY7UdNcCRXyCvpptKP/b6KmJgb5VCAM\nNLuWdANksi9kiLX9k5Uzr0MjpEahUQ1VUGxo+PO1XjF5Twuzl7+PMYXAfuFjTQNI\nYn4OfvqYuVATQagUyRMVIw==\n-----END PRIVATE KEY-----\n",
//     "client_email": "firebase-adminsdk-vdh2c@komunitas-6e07e.iam.gserviceaccount.com",
//     "client_id": "110908306431838093057",
//     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//     "token_uri": "https://oauth2.googleapis.com/token",
//     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-vdh2c%40komunitas-6e07e.iam.gserviceaccount.com",
//     "universe_domain": "googleapis.com"
//   }),
//   databaseURL: "https://komunitas-6e07e-default-rtdb.asia-southeast1.firebasedatabase.app"
// };


// // Initialize Firebase

// const appMin = initializeApp(firebaseConfig);

// export const authMin = getAuth(appMin);

// export default appMin;


import admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert('../../'),
    databaseURL: 'https://fast-feedback-demo.firebaseio.com'
  });
}

const db = admin.firestore();
const auth = admin.auth();

export { db, auth };