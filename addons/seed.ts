import { MongoClient, ObjectId } from 'mongodb';
import { db } from '../src/config';

async function seed(dbName: string, user: string, password: string) {
  const uri = db.url
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db(dbName);
    await db.collection('api_keys').deleteMany({});
    await db.collection('roles').deleteMany({});
    await db.collection('users').deleteMany({});

    // Check if user already exists
    const userInfo = await db.command({ usersInfo: user });
    const userExists = userInfo.users.length > 0;

    if (!userExists) {
      await db.command({
        createUser: user,
        pwd: password,
        roles: [{ role: 'readWrite', db: dbName }],
      });
      console.log(`✅ Created DB user '${user}'`);
    } else {
      console.log(`ℹ️ DB user '${user}' already exists`);
    }

    await db.createCollection('api_keys');
    await db.createCollection('roles');

    await db.collection('api_keys').insertOne({
      key: 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj',
      permissions: ['GENERAL'],
      comments: ['To be used by the xyz vendor'],
      version: 1,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const roleResult = await db.collection('roles').insertMany([
      {
        code: 'LEARNER',
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'WRITER',
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'EDITOR',
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'ADMIN',
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    const roleIds = Object.values(roleResult.insertedIds);

    await db.collection('users').insertOne({
      name: 'Admin',
      email: 'admin@xyz.com',
      password: '$2a$10$psWmSrmtyZYvtIt/FuJL1OLqsK3iR1fZz5.wUYFuSNkkt.EOX9mLa', // hashed: changeit
      roles: roleIds,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    console.log(`✅ Seeded ${dbName}`);
  } catch (err) {
    console.error(`❌ Error seeding ${dbName}:`, err);
  } finally {
    await client.close();
  }
}

(async () => {
  await seed('blogs-db', 'blogs-db-user', 'changeit');
  await seed('blogs-test-db', 'blogs-test-db-user', 'changeit');
})();
