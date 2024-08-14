import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const user = pgTable('test_users', {
    id: serial('id').primaryKey(),
    name: varchar('name', {length: 100})
})