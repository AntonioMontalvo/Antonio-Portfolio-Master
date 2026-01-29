# SQL Fundamentals Reference

**Last Updated:** January 21, 2026  
**Purpose:** Quick reference guide for SQL basics and PostgreSQL patterns  
**Context:** Created during kanban-next PostgreSQL migration

---

## 📋 Table of Contents

1. [What is SQL?](#what-is-sql)
2. [Basic SQL Commands](#basic-sql-commands)
3. [Data Types](#data-types)
4. [Creating Tables](#creating-tables)
5. [Inserting Data](#inserting-data)
6. [Querying Data (SELECT)](#querying-data-select)
7. [Filtering with WHERE](#filtering-with-where)
8. [Updating Data](#updating-data)
9. [Deleting Data](#deleting-data)
10. [Parameterized Queries (Security)](#parameterized-queries-security)
11. [Common PostgreSQL Patterns](#common-postgresql-patterns)
12. [Reserved Keywords](#reserved-keywords)
13. [Best Practices](#best-practices)

---

## What is SQL?

**SQL (Structured Query Language)** is a language for managing data in relational databases.

**Key concepts:**

- **Database**: Container for tables
- **Table**: Collection of rows and columns (like a spreadsheet)
- **Row**: Single record of data
- **Column**: Field in a table (e.g., `title`, `description`)
- **Primary Key**: Unique identifier for each row

**Example database structure:**

```
Database: kanban-db
  └── Table: tasks
       ├── id (PRIMARY KEY)
       ├── title
       ├── description
       ├── status
       └── created_at
```

---

## Basic SQL Commands

**Four main operations (CRUD):**

| Operation  | SQL Command   | Purpose              |
| ---------- | ------------- | -------------------- |
| **C**reate | `INSERT INTO` | Add new data         |
| **R**ead   | `SELECT`      | Retrieve data        |
| **U**pdate | `UPDATE`      | Modify existing data |
| **D**elete | `DELETE`      | Remove data          |

**Additional commands:**

- `CREATE TABLE` - Create new table
- `DROP TABLE` - Delete entire table
- `ALTER TABLE` - Modify table structure

---

## Data Types

**Common PostgreSQL data types:**

```sql
-- Text
VARCHAR(255)      -- Variable-length string (max 255 chars)
TEXT              -- Unlimited-length string
CHAR(10)          -- Fixed-length string (always 10 chars)

-- Numbers
INTEGER           -- Whole numbers (-2B to +2B)
SERIAL            -- Auto-incrementing integer (1, 2, 3...)
BIGINT            -- Large whole numbers
DECIMAL(10, 2)    -- Decimal with precision (e.g., 123.45)
FLOAT             -- Floating-point number

-- Date/Time
TIMESTAMP         -- Date and time (2026-01-21 10:30:00)
DATE              -- Date only (2026-01-21)
TIME              -- Time only (10:30:00)

-- Boolean
BOOLEAN           -- TRUE or FALSE

-- JSON
JSON              -- JSON data
JSONB             -- Binary JSON (faster, recommended)
```

**Example usage:**

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50),
  email VARCHAR(255),
  bio TEXT,
  age INTEGER,
  is_active BOOLEAN,
  created_at TIMESTAMP
);
```

---

## Creating Tables

### Basic Syntax

```sql
CREATE TABLE table_name (
  column1 datatype constraints,
  column2 datatype constraints,
  ...
);
```

### Common Constraints

```sql
PRIMARY KEY       -- Unique identifier, cannot be NULL
NOT NULL          -- Must have a value
UNIQUE            -- No duplicate values allowed
DEFAULT value     -- Default value if none provided
CHECK (condition) -- Custom validation rule
```

### Real Example: Tasks Table

```sql
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,                    -- Auto-increment ID
  title VARCHAR(255) NOT NULL,              -- Required field
  description TEXT,                         -- Optional field
  status VARCHAR(50) NOT NULL DEFAULT 'todo', -- Default value
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Drop Table (Delete Table)

```sql
-- Delete table if it exists (be careful!)
DROP TABLE IF EXISTS tasks;
```

---

## Inserting Data

### Basic INSERT Syntax

```sql
INSERT INTO table_name (column1, column2, column3)
VALUES (value1, value2, value3);
```

### Single Row Insert

```sql
INSERT INTO tasks (title, description, status)
VALUES ('Build login page', 'Add authentication', 'todo');
```

### Multiple Row Insert

```sql
INSERT INTO tasks (title, description, status)
VALUES
  ('Build login page', 'Add authentication', 'todo'),
  ('Design dashboard', 'Create wireframes', 'inProgress'),
  ('Deploy to Vercel', 'Setup CI/CD', 'done');
```

### Insert with RETURNING (PostgreSQL)

```sql
-- Get the inserted row back (useful for getting auto-generated ID)
INSERT INTO tasks (title, description, status)
VALUES ('New task', 'Description', 'todo')
RETURNING *;  -- Returns the entire row

-- Or return specific columns
RETURNING id, title;
```

### Skip Auto-Generated Fields

```sql
-- SERIAL id and TIMESTAMP created_at are auto-generated
INSERT INTO tasks (title, status)
VALUES ('Quick task', 'todo');
-- PostgreSQL automatically adds id and created_at
```

---

## Querying Data (SELECT)

### Basic SELECT Syntax

```sql
SELECT column1, column2
FROM table_name;
```

### Select All Columns

```sql
-- Use * to get all columns
SELECT * FROM tasks;
```

### Select Specific Columns

```sql
-- Only get title and status
SELECT title, status FROM tasks;
```

### Ordering Results

```sql
-- Order by created_at (newest first)
SELECT * FROM tasks
ORDER BY created_at DESC;

-- Order by title (A-Z)
SELECT * FROM tasks
ORDER BY title ASC;

-- Multiple sort criteria
SELECT * FROM tasks
ORDER BY status ASC, created_at DESC;
```

### Limiting Results

```sql
-- Get only first 10 tasks
SELECT * FROM tasks
LIMIT 10;

-- Skip first 10, get next 10 (pagination)
SELECT * FROM tasks
LIMIT 10 OFFSET 10;
```

### Count Rows

```sql
-- Count all tasks
SELECT COUNT(*) FROM tasks;

-- Count tasks by status
SELECT status, COUNT(*) as task_count
FROM tasks
GROUP BY status;
```

---

## Filtering with WHERE

### Basic WHERE Syntax

```sql
SELECT * FROM table_name
WHERE condition;
```

### Comparison Operators

```sql
-- Equal to
SELECT * FROM tasks WHERE status = 'todo';

-- Not equal to
SELECT * FROM tasks WHERE status != 'done';
SELECT * FROM tasks WHERE status <> 'done';  -- Same as !=

-- Greater than / Less than
SELECT * FROM tasks WHERE id > 5;
SELECT * FROM tasks WHERE id <= 10;

-- LIKE (pattern matching)
SELECT * FROM tasks WHERE title LIKE '%login%';  -- Contains "login"
SELECT * FROM tasks WHERE title LIKE 'Build%';   -- Starts with "Build"
SELECT * FROM tasks WHERE title LIKE '%page';    -- Ends with "page"

-- ILIKE (case-insensitive LIKE, PostgreSQL only)
SELECT * FROM tasks WHERE title ILIKE '%LOGIN%';

-- IN (match any value in list)
SELECT * FROM tasks WHERE status IN ('todo', 'inProgress');

-- BETWEEN (range)
SELECT * FROM tasks WHERE id BETWEEN 5 AND 10;

-- IS NULL / IS NOT NULL
SELECT * FROM tasks WHERE description IS NULL;
SELECT * FROM tasks WHERE description IS NOT NULL;
```

### Combining Conditions

```sql
-- AND (both conditions must be true)
SELECT * FROM tasks
WHERE status = 'todo' AND title LIKE '%login%';

-- OR (at least one condition must be true)
SELECT * FROM tasks
WHERE status = 'todo' OR status = 'inProgress';

-- NOT (negate condition)
SELECT * FROM tasks
WHERE NOT status = 'done';

-- Complex combinations with parentheses
SELECT * FROM tasks
WHERE (status = 'todo' OR status = 'inProgress')
  AND title LIKE '%design%';
```

---

## Updating Data

### Basic UPDATE Syntax

```sql
UPDATE table_name
SET column1 = value1, column2 = value2
WHERE condition;
```

### Update Single Column

```sql
-- Update status of task with id = 5
UPDATE tasks
SET status = 'done'
WHERE id = 5;
```

### Update Multiple Columns

```sql
-- Update title and description together
UPDATE tasks
SET title = 'New Title', description = 'New Description'
WHERE id = 5;
```

### Update with RETURNING

```sql
-- Get updated row back
UPDATE tasks
SET status = 'done'
WHERE id = 5
RETURNING *;
```

### ⚠️ Update Without WHERE (DANGEROUS!)

```sql
-- This updates ALL rows! Be careful!
UPDATE tasks
SET status = 'done';  -- All tasks marked as done

-- Always use WHERE unless you really want to update everything
```

### Dynamic Updates (Used in kanban-next)

```sql
-- Update only provided fields
UPDATE tasks
SET title = $1, description = $2
WHERE id = $3
RETURNING *;

-- Or build query dynamically based on which fields exist
```

---

## Deleting Data

### Basic DELETE Syntax

```sql
DELETE FROM table_name
WHERE condition;
```

### Delete Single Row

```sql
-- Delete task with id = 5
DELETE FROM tasks
WHERE id = 5;
```

### Delete Multiple Rows

```sql
-- Delete all completed tasks
DELETE FROM tasks
WHERE status = 'done';
```

### Delete with RETURNING

```sql
-- Get deleted row info
DELETE FROM tasks
WHERE id = 5
RETURNING id, title;
```

### ⚠️ Delete Without WHERE (VERY DANGEROUS!)

```sql
-- This deletes ALL rows! Be extremely careful!
DELETE FROM tasks;  -- All data gone!

-- Always use WHERE unless you really want to delete everything
```

### Delete vs DROP TABLE

```sql
-- DELETE: Removes rows, keeps table structure
DELETE FROM tasks;  -- Table still exists, just empty

-- DROP TABLE: Removes entire table
DROP TABLE tasks;  -- Table completely gone
```

---

## Parameterized Queries (Security)

### Why Use Parameters?

**❌ BAD - SQL Injection Vulnerability:**

```javascript
// Never do this! User input directly in query
const userId = request.body.id; // Could be "5 OR 1=1"
const query = `DELETE FROM tasks WHERE id = ${userId}`;
// Attacker could delete all tasks!
```

**✅ GOOD - Parameterized Query:**

```javascript
// Safe - parameters are escaped automatically
const userId = request.body.id;
const result = await sql`DELETE FROM tasks WHERE id = ${userId}`;
```

### Vercel Postgres Template Syntax

```javascript
import { sql } from "@vercel/postgres";

// ✅ Template literal syntax (safe)
const result = await sql`
  SELECT * FROM tasks WHERE id = ${id}
`;

// ✅ Multiple parameters
const result = await sql`
  INSERT INTO tasks (title, description, status)
  VALUES (${title}, ${description}, ${status})
  RETURNING *
`;
```

### PostgreSQL $1, $2 Syntax (Alternative)

```javascript
// ✅ Positional parameters
const result = await sql.query("SELECT * FROM tasks WHERE id = $1", [id]);

// ✅ Multiple parameters
const result = await sql.query(
  "INSERT INTO tasks (title, description) VALUES ($1, $2)",
  [title, description]
);
```

### Parameter Types

```javascript
// String parameter
await sql`SELECT * FROM tasks WHERE title = ${"My Task"}`;

// Number parameter
await sql`SELECT * FROM tasks WHERE id = ${5}`;

// Boolean parameter
await sql`SELECT * FROM users WHERE is_active = ${true}`;

// NULL parameter
await sql`UPDATE tasks SET description = ${null} WHERE id = ${5}`;

// Array with IN clause (Vercel Postgres)
const statuses = ["todo", "inProgress"];
await sql`SELECT * FROM tasks WHERE status = ANY(${statuses})`;
```

---

## Common PostgreSQL Patterns

### Pattern 1: Get Single Row by ID

```javascript
// Query
const result = await sql`SELECT * FROM tasks WHERE id = ${id}`;

// Check if found
if (result.rows.length === 0) {
  return { error: "Not found" };
}

// Get the row
const task = result.rows[0];
```

### Pattern 2: Insert and Get New Row

```javascript
const result = await sql`
  INSERT INTO tasks (title, description, status)
  VALUES (${title}, ${description}, ${status})
  RETURNING *
`;

const newTask = result.rows[0];
console.log("New task ID:", newTask.id);
```

### Pattern 3: Dynamic Update (Only Update Provided Fields)

```javascript
// Build query dynamically
const updates = [];
const values = [];
let paramIndex = 1;

if (title !== undefined) {
  updates.push(`title = $${paramIndex++}`);
  values.push(title);
}
if (description !== undefined) {
  updates.push(`description = $${paramIndex++}`);
  values.push(description);
}
if (status !== undefined) {
  updates.push(`status = $${paramIndex++}`);
  values.push(status);
}

values.push(id); // Add id as last parameter

const result = await sql.query(
  `UPDATE tasks SET ${updates.join(
    ", "
  )} WHERE id = $${paramIndex} RETURNING *`,
  values
);
```

### Pattern 4: Check Existence Before Operation

```javascript
// Check if task exists before updating
const check = await sql`SELECT id FROM tasks WHERE id = ${id}`;
if (check.rows.length === 0) {
  return { error: "Task not found" };
}

// Now safe to update
const result = await sql`
  UPDATE tasks SET status = ${status} WHERE id = ${id}
  RETURNING *
`;
```

### Pattern 5: Counting and Aggregation

```javascript
// Count tasks by status
const result = await sql`
  SELECT status, COUNT(*) as count
  FROM tasks
  GROUP BY status
`;

// Result: [{ status: 'todo', count: 5 }, { status: 'done', count: 3 }]
```

### Pattern 6: Search with Partial Match

```javascript
// Case-insensitive search
const searchTerm = "login";
const result = await sql`
  SELECT * FROM tasks
  WHERE title ILIKE ${"%" + searchTerm + "%"}
  OR description ILIKE ${"%" + searchTerm + "%"}
`;
```

### Pattern 7: Pagination

```javascript
const page = 1;
const limit = 10;
const offset = (page - 1) * limit;

const result = await sql`
  SELECT * FROM tasks
  ORDER BY created_at DESC
  LIMIT ${limit} OFFSET ${offset}
`;
```

---

## Reserved Keywords

**These words have special meaning in SQL and should NOT be used as column names:**

```sql
-- Common reserved keywords (avoid as column names)
SELECT, INSERT, UPDATE, DELETE
TABLE, COLUMN, DATABASE
WHERE, FROM, JOIN, ON
AND, OR, NOT
ORDER, GROUP, BY
LIMIT, OFFSET
PRIMARY, KEY, FOREIGN
CREATE, DROP, ALTER
INDEX, VIEW, TRIGGER
USER, PASSWORD, ADMIN
```

**❌ Problem Example:**

```sql
-- "column" is a reserved keyword!
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  column VARCHAR(50)  -- ERROR!
);
```

**✅ Solution:**

```sql
-- Use a different name
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  status VARCHAR(50)  -- Good!
);

-- Or escape with quotes (not recommended)
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  "column" VARCHAR(50)  -- Works but annoying
);
```

**Keywords encountered in kanban-next:**

- ❌ `column` → ✅ `status`
- ❌ `order` → ✅ `sort_order`
- ❌ `user` → ✅ `username`

---

## Best Practices

### 1. Always Use WHERE with UPDATE/DELETE

```sql
-- ❌ BAD - Updates everything
UPDATE tasks SET status = 'done';

-- ✅ GOOD - Updates specific row
UPDATE tasks SET status = 'done' WHERE id = 5;
```

### 2. Use Parameterized Queries (Prevent SQL Injection)

```javascript
// ❌ BAD - SQL injection risk
const query = `SELECT * FROM tasks WHERE id = ${userId}`;

// ✅ GOOD - Safe from injection
await sql`SELECT * FROM tasks WHERE id = ${userId}`;
```

### 3. Check for Empty Results

```javascript
const result = await sql`SELECT * FROM tasks WHERE id = ${id}`;

// ✅ Always check before accessing rows
if (result.rows.length === 0) {
  return { error: "Not found" };
}

const task = result.rows[0];
```

### 4. Use RETURNING for Insert/Update/Delete

```sql
-- ✅ Get back what you just changed
INSERT INTO tasks (title) VALUES ('New Task') RETURNING *;
UPDATE tasks SET status = 'done' WHERE id = 5 RETURNING *;
DELETE FROM tasks WHERE id = 5 RETURNING id;
```

### 5. Index Frequently Queried Columns

```sql
-- Speed up queries that filter by status
CREATE INDEX idx_tasks_status ON tasks(status);

-- Speed up queries that sort by created_at
CREATE INDEX idx_tasks_created_at ON tasks(created_at DESC);
```

### 6. Avoid SELECT \* in Production

```sql
-- ❌ BAD - Gets all columns (slow, wasteful)
SELECT * FROM tasks;

-- ✅ GOOD - Only get what you need
SELECT id, title, status FROM tasks;
```

### 7. Use Transactions for Multiple Operations

```javascript
// ✅ All succeed or all fail together
await sql.query("BEGIN");
try {
  await sql`INSERT INTO tasks (title) VALUES ('Task 1')`;
  await sql`INSERT INTO tasks (title) VALUES ('Task 2')`;
  await sql.query("COMMIT");
} catch (error) {
  await sql.query("ROLLBACK");
  throw error;
}
```

### 8. Name Columns with Snake Case

```sql
-- ✅ GOOD - PostgreSQL convention
created_at, updated_at, user_id

-- ❌ Avoid - Harder to work with
createdAt, UpdatedAt, userId
```

### 9. Always Handle Errors

```javascript
try {
  const result = await sql`SELECT * FROM tasks WHERE id = ${id}`;
  return result.rows[0];
} catch (error) {
  console.error("Database error:", error);
  return { error: "Database query failed" };
}
```

### 10. Use Database Constraints

```sql
-- Let database enforce rules
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,  -- Required
  status VARCHAR(50) CHECK (status IN ('todo', 'inProgress', 'done')),  -- Valid values only
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- Auto-set
);
```

---

## 📚 Quick Reference Cheat Sheet

```sql
-- CREATE TABLE
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  status VARCHAR(50) DEFAULT 'todo',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- INSERT
INSERT INTO tasks (title, status) VALUES ('New Task', 'todo') RETURNING *;

-- SELECT
SELECT * FROM tasks WHERE status = 'todo' ORDER BY created_at DESC;

-- UPDATE
UPDATE tasks SET status = 'done' WHERE id = 5 RETURNING *;

-- DELETE
DELETE FROM tasks WHERE id = 5 RETURNING id;

-- COUNT
SELECT COUNT(*) FROM tasks WHERE status = 'todo';

-- DROP TABLE
DROP TABLE IF EXISTS tasks;
```

---

## 🔍 Common Error Messages

### Error: "column does not exist"

```sql
-- ❌ Typo in column name
SELECT tittle FROM tasks;  -- Error!

-- ✅ Fix typo
SELECT title FROM tasks;
```

### Error: "syntax error at or near 'column'"

```sql
-- ❌ Using reserved keyword
CREATE TABLE tasks (column VARCHAR(50));

-- ✅ Use different name
CREATE TABLE tasks (status VARCHAR(50));
```

### Error: "null value in column violates not-null constraint"

```sql
-- ❌ Trying to insert NULL into NOT NULL column
INSERT INTO tasks (description) VALUES ('Test');  -- title is NULL!

-- ✅ Provide required field
INSERT INTO tasks (title, description) VALUES ('Task', 'Test');
```

### Error: "relation 'tasks' does not exist"

```sql
-- Table doesn't exist yet - run CREATE TABLE first
-- Or check for typos in table name
```

---

## 🎯 Real Examples from kanban-next

### 1. Get All Tasks

```javascript
// app/api/tasks/route.ts
const result = await sql`
  SELECT * FROM tasks 
  ORDER BY created_at DESC
`;

// Map database fields to frontend format
const tasks = result.rows.map((row) => ({
  id: row.id.toString(),
  title: row.title,
  description: row.description || "",
  column: row.status, // Database: status → Frontend: column
  createdAt: new Date(row.created_at).getTime(),
}));
```

### 2. Create New Task

```javascript
// app/api/tasks/route.ts
const result = await sql`
  INSERT INTO tasks (title, description, status)
  VALUES (${title}, ${description}, ${column})
  RETURNING *
`;

const newTask = result.rows[0];
```

### 3. Get Single Task

```javascript
// app/api/tasks/[id]/route.ts
const result = await sql`
  SELECT * FROM tasks WHERE id = ${id}
`;

if (result.rows.length === 0) {
  return NextResponse.json({ error: "Task not found" }, { status: 404 });
}

const task = result.rows[0];
```

### 4. Update Task

```javascript
// app/api/tasks/[id]/route.ts
const result = await sql.query(
  `UPDATE tasks 
   SET title = $1, description = $2, status = $3 
   WHERE id = $4 
   RETURNING *`,
  [title, description, column, id]
);
```

### 5. Delete Task

```javascript
// app/api/tasks/[id]/route.ts
const result = await sql`
  DELETE FROM tasks WHERE id = ${id} RETURNING id
`;

if (result.rows.length === 0) {
  return NextResponse.json({ error: "Task not found" }, { status: 404 });
}
```

---

## 🚀 Next Steps

**To learn more:**

1. **PostgreSQL Tutorial**: https://www.postgresqltutorial.com/
2. **SQL Practice**: https://www.sqlzoo.net/
3. **Vercel Postgres Docs**: https://vercel.com/docs/storage/vercel-postgres
4. **SQL Style Guide**: https://www.sqlstyle.guide/

**Advanced topics to explore later:**

- JOIN operations (combining multiple tables)
- Subqueries and CTEs
- Database indexes and performance
- Transactions and ACID properties
- Database migrations
- Foreign keys and relationships

---

**Created:** January 21, 2026  
**Project:** kanban-next PostgreSQL migration  
**Purpose:** Personal reference for SQL basics
