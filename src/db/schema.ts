import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const tracksTable = pgTable('tracks', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    artist: text('artist').notNull(),
    src: text('src').notNull(),
    thumbnail: text('thumbnail').notNull(),
});

export type InsertTrack = typeof tracksTable.$inferInsert;
export type SelectTrack = typeof tracksTable.$inferSelect;
