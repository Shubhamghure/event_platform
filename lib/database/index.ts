import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if(!MONGODB_URI) throw new Error('MONGODB_URI is missing');

  cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
    dbName: 'evently',
    bufferCommands: false,
  })

  cached.conn = await cached.promise;

  return cached.conn;
}


// import mongoose from 'mongoose';

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//   throw new Error('MONGODB_URI is missing');
// }

// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// export async function connectToDatabase() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     cached.promise = mongoose.connect(MONGODB_URI, {
//       dbName: 'evently',
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }).then((mongoose) => {
//       return mongoose;
//     });
//   }

//   cached.conn = await cached.promise;
//   return cached.conn;
// }
