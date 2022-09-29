
//INSTANCES EXPORTS
export * from './instances/firestorage'
export * from './instances/auth'
export * from './instances/storage'

//AUTHENTICATION EXPORTS
export * from './authentication/signUp'
export * from './authentication/signOut'
export * from './authentication/signIn'

//FIRESTORE EXPORTS
export * from './firestore/registerNewUser'
export * from './firestore/addContact'
export * from './firestore/searchUser'
export * from './firestore/IterateContacts'
export * from './firestore/blockUser'
export * from './firestore/unblockUser'
export * from './firestore/eliminateContact'
export * from './firestore/getCurrentUser'
export * from './firestore/getActiveChats'
export * from './firestore/addNewChat'
export * from './firestore/addMessage'

//FIRESTORE REALTIME EXPORTS
export * from './firestore/realtime/getChatDataRealtime'

//FIREBASE STORAGE EXPORTS
export * from './storage/uploadAudio'
export * from './storage/getDownloadUrlFromStorage'