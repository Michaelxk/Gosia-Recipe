import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import config from '@/firebase/config'

// Shtaart
firebase.initializeApp(config)
