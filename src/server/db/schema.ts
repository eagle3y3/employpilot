import {
  datetime,
  index,
  int,
  mysqlTable,
  text,
  timestamp,
  uniqueIndex,
  varchar,
  tinyint,
  mediumint,
} from "drizzle-orm/mysql-core";
import { nanoid } from "nanoid";

export const accounts = mysqlTable(
  "accounts",
  {
    id: varchar("id", { length: 191 }).primaryKey().notNull(),
    userId: varchar("userId", { length: 191 }).notNull(),
    type: varchar("type", { length: 191 }).notNull(),
    provider: varchar("provider", { length: 191 }).notNull(),
    provides: varchar("provides", { length: 191 }).notNull(),

    providerAccountId: varchar("providerAccountId", { length: 191 }).notNull(),
    access_token: text("access_token"),
    expires_in: int("expires_in"),
    id_token: text("id_token"),
    refresh_token: text("refresh_token"),
    refresh_token_expires_in: int("refresh_token_expires_in"),
    scope: varchar("scope", { length: 191 }),
    token_type: varchar("token_type", { length: 191 }),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  },
  (account) => ({
    providerProviderAccountIdIndex: uniqueIndex(
      "accounts__provider__providerAccountId__idx",
    ).on(account.provider, account.providerAccountId),
    userIdIndex: index("accounts__userId__idx").on(account.userId),
  }),
);

export const sessions = mysqlTable(
  "sessions",
  {
    id: varchar("id", { length: 191 }).primaryKey().notNull(),
    sessionToken: varchar("sessionToken", { length: 191 }).notNull(),
    userId: varchar("userId", { length: 191 }).notNull(),
    expires: datetime("expires").notNull(),

    created_at: timestamp("created_at").notNull().defaultNow(),
    updated_at: timestamp("updated_at").notNull().defaultNow().onUpdateNow(),
  },
  (session) => ({
    sessionTokenIndex: uniqueIndex("sessions__sessionToken__idx").on(
      session.sessionToken,
    ),
    userIdIndex: index("sessions__userId__idx").on(session.userId),
  }),
);

export const users = mysqlTable(
  "users",
  {
    id: varchar("id", { length: 191 }).primaryKey().notNull(),
    name: varchar("name", { length: 191 }),
    email: varchar("email", { length: 191 }).notNull(),
    emailVerified: timestamp("emailVerified"),
    image: varchar("image", { length: 191 }),
    created_at: timestamp("created_at").notNull().defaultNow(),
    updated_at: timestamp("updated_at").notNull().defaultNow().onUpdateNow(),
  },
  (user) => ({
    emailIndex: uniqueIndex("users__email__idx").on(user.email),
  }),
);

export const verificationTokens = mysqlTable(
  "verification_tokens",
  {
    identifier: varchar("identifier", { length: 191 }).primaryKey().notNull(),
    token: varchar("token", { length: 191 }).notNull(),
    expires: datetime("expires").notNull(),
    created_at: timestamp("created_at").notNull().defaultNow(),
    updated_at: timestamp("updated_at").notNull().defaultNow().onUpdateNow(),
  },
  (verificationToken) => ({
    tokenIndex: uniqueIndex("verification_tokens__token__idx").on(
      verificationToken.token,
    ),
  }),
);

export const googleUrls = mysqlTable(
  "google_urls",
  {
    id: varchar("id", { length: 191 }).primaryKey().notNull(),
    url: varchar("url", { length: 2048 }).notNull(), // Store the full URL
    urlId: varchar("urlId", { length: 255 }).notNull(), // Store the unique part of the URL
    apiUrl: varchar("apiUrl", { length: 255 }).notNull(),
    searchTerm: varchar("searchTerm", { length: 255 }).notNull(), // Search term used to find this URL
    retrievedAt: timestamp("retrievedAt").notNull().defaultNow(), // Timestamp for when the URL was retrieved
    isProcessed: tinyint("isProcessed").default(0),
    // Add other fields if necessary
  },
  (googleUrl) => ({
    urlIdIndex: uniqueIndex("google_urls__urlId__idx").on(googleUrl.urlId),
    // Add other indexes if necessary
  }),
);

export const jobs = mysqlTable(
  "jobs",
  {
    jobId: varchar("jobId", { length: 21 }).primaryKey().notNull(),
    companyName: varchar("companyName", { length: 255 }).notNull(),
    aboutCompany: text("aboutCompany"), // Provides cutting-edge situational awareness capabilities...
    responsibilities: text("responsibilities"), // Building reliable infrastructure...
    urlId: varchar("urlId", { length: 255 }).notNull(),
    techStack: text("techStack"), // AWS, PostgreSQL, Hadoop...
    salaryRange: varchar("salaryRange", { length: 255 }), // $120,000-$140,000*
    salaryHigh: mediumint("salaryHigh"), // 140000
    jobType: varchar("jobType", { length: 255 }), // Full Time
    role: varchar("role", { length: 255 }), // Software Engineering
    minYearsOfExperience: tinyint("minYearsOfExperience"), // 4
    industry: varchar("industry", { length: 255 }), // Technology
  },
  (url) => ({
    urlIdIndex: index("jobs__urlId__idx").on(url.urlId),
    // ... other indexes ...
  }),
);
