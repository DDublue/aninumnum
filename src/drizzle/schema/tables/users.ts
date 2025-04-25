import {
  pgTable,
  timestamp,
  text,
} from 'drizzle-orm/pg-core';

const users = pgTable('user', {
  id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  name: text('name'),
  email: text('email').unique(),
  // emailVerified: timestamp('emailVerified', {mode: 'date'}),
  // image: text('image'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});
