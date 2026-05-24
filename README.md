# Mini Leads API

A small REST API for managing sales leads in a pipeline system.

Built with:

* Node.js
* Express.js
* MongoDB
* Mongoose
* Joi Validation

---

# Features

* Create Leads
* Update Leads
* List Leads with Pagination
* Filter Leads by Status
* Add Notes to Leads
* Atomic Note Updates using MongoDB `$push`
* Centralized Error Handling
* Seed Script with Fake Data

---

# Tech Stack

* Node.js
* Express
* MongoDB
* Mongoose
* Joi
* Faker.js

---

# Project Structure

```bash
src/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── lead.controller.js
│
├── middlewares/
│   ├── error.middleware.js
│   └── validate.middleware.js
│
├── models/
│   └── lead.model.js
│
├── routes/
│   └── leads.routes.js
│
├── validations/
│   └── lead.validation.js
│
├── utils/
│   └── ApiError.js
│
├── seed/
│   └── seedLeads.js
│
├── app.js
└── server.js
```

---

# Installation

## Clone Repository

```bash
git clone <your_repo_url>
```

---

## Install Dependencies

```bash
npm install
```

---

# Environment Variables

Create a `.env` file in the root directory.

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/leadData
```

---

# Running the Server

```bash
npm run dev
```

---

# Seed Database

```bash
npm run seed
```

This inserts 20 fake leads into the database.

---

# API Endpoints

---

## Create Lead

### POST `/leads`

### Request Body

```json
{
  "name": "Shristi",
  "email": "shristi@gmail.com",
  "phone": "9999999999",
  "status": "new"
}
```

### Response

```json
{
  "success": true,
  "data": {}
}
```

---

## Get Leads

### GET `/leads?page=1&limit=10&status=new`

### Query Params

| Param  | Description           |
| ------ | --------------------- |
| page   | Page number           |
| limit  | Number of records     |
| status | Filter by lead status |

---

## Update Lead

### PATCH `/leads/:id`

### Request Body

```json
{
  "status": "qualified"
}
```

---

## Add Note to Lead

### POST `/leads/:id/notes`

### Request Body

```json
{
  "text": "Client interested in premium plan"
}
```

---

# Lead Schema

```js
{
  name,
  email,
  phone,
  status,
  notes: [
    {
      text,
      createdAt
    }
  ],
  createdAt,
  updatedAt
}
```

---

# Validation

Joi is used for request validation.

The API validates:

* Required fields
* Email format
* Allowed status values

---

# Error Handling

Centralized error handling middleware is used for consistent API responses.

Example:

```json
{
  "success": false,
  "message": "Lead not found"
}
```

---

# Design Decisions

## Why Embedded Notes?

Notes are embedded inside the Lead document because:

* Notes are tightly coupled to leads
* Notes are always fetched together
* Simpler schema design
* Better read performance
* Atomic updates using MongoDB `$push`

---

## Why Atomic Updates?

MongoDB `$push` operator ensures safe concurrent note additions without race conditions.

---

# Future Improvements

* Authentication & Authorization
* Unit Testing
* Docker Support
* Swagger Documentation
* Rate Limiting
* Deployment

---

# Author

Shristi Soni

