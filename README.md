# API Documentation

## Endpoints :

List of available endpoints:

- `POST /login`

Routes below need authentication

- `POST /register`

- `GET /branches`
- `POST /branches`
- `GET /branches/:id`
- `PUT /branches/:id`
- `DELETE /branches/:id`

- `GET /positions`
- `POST /positions`
- `GET /positions/:id`
- `PUT /positions/:id`
- `DELETE /positions/:id`

- `GET /employees`
- `POST /employees`
- `GET /employees/:id`
- `PUT /employees/:id`
- `DELETE /employees/:id`

&nbsp;

## 1. POST /login

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
  "access_token": "access_token"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email or Password cannot empty"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email or password"
}
```

&nbsp;

## 2. POST /register

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
  "access_token": "access_token"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email tidak boleh kosong"
}
```
```json
{
  "message": "Password tidak boleh kosong"
}
```
```json
{
  "message": "Email sudah terdaftar"
}
```


&nbsp;

## 3. GET /branches

Description:

- Get all branches data

Request:
- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
[
  ...,
  {
    "id": "352884e0-2c22-4fef-896e-e3021750e3ea",
    "name": "Cabang Jakarta Selatan"
  },
  ...,
]

```

&nbsp;

## 4. POST /branches

Description:

- Create a new branch

Request:
- headers:

```json
{
  "access_token": "string"
}
```
- body:

```json
{
  "name": "string"
}
```

_Response (200 - OK)_

```json
{
  "message": "Berhasil menambahkan cabang baru",
  "branch": {
    "id": "157504c6-0fd5-4a3f-8c9d-cfba6392a393",
    "name": "cabang",
    "updatedAt": "2023-12-17T13:17:06.118Z",
    "createdAt": "2023-12-17T13:17:06.118Z"
  }
}

```

&nbsp;
## 5. GET /branches/:id

Description:

- Get spesific branch data by id 

Request:
- headers:

```json
{
  "access_token": "string"
}
```
- query : 
```json
{
  "id": "string"
}
```

_Response (200 - OK)_

```json
{
  "id": "157504c6-0fd5-4a3f-8c9d-cfba6392a393",
  "name": "cabang"
}

```
&nbsp;

## 6. PUT /branches/:id

Description:

- Edit branch by id

Request:
- headers:

```json
{
  "access_token": "string"
}
```

- query : 
```json
{
  "id": "string"
}
```
- body:

```json
{
  "name": "string"
}
```

_Response (200 - OK)_

```json
{
  "message": "Berhasil mengedit nama cabang"
}

```
&nbsp;
## 7. DELETE /branches/:id

Description:

- Delete branch by id

Request:
- headers:

```json
{
  "access_token": "string"
}
```

- query : 
```json
{
  "id": "string"
}
```

_Response (200 - OK)_

```json
{
  "message": "Berhasil menghapus cabang"
}

```
&nbsp;


## 8. GET /positions

Description:

- Get all positions data

Request:
- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
[
  ...,
  {
    "id": "c4331483-e737-44d8-9165-f705ac5508c1",
    "name": "Teller"
  },
  ...,
]

```

&nbsp;

## 9. POST /positions

Description:

- Create a new position

Request:
- headers:

```json
{
  "access_token": "string"
}
```
- body:

```json
{
  "name": "string"
}
```

_Response (200 - OK)_

```json
{
  "message": "Berhasil menambahkan jabatan baru",
  "position": {
    "id": "521bb5b9-a180-4f80-86cc-ffefd624dddd",
    "name": "test",
    "updatedAt": "2023-12-17T13:24:28.632Z",
    "createdAt": "2023-12-17T13:24:28.632Z"
  }
}
```

&nbsp;
## 10. GET /positions/:id

Description:

- Get spesific position data by id 

Request:
- headers:

```json
{
  "access_token": "string"
}
```
- query : 
```json
{
  "id": "string"
}
```

_Response (200 - OK)_

```json
{
  "id": "521bb5b9-a180-4f80-86cc-ffefd624dddd",
  "name": "teller"
}

```
&nbsp;

## 11. PUT /positions/:id

Description:

- Edit position by id

Request:
- headers:

```json
{
  "access_token": "string"
}
```

- query : 
```json
{
  "id": "string"
}
```
- body:

```json
{
  "name": "string"
}
```

_Response (200 - OK)_

```json
{
  "message": "Berhasil mengedit nama jabatan"
}

```
&nbsp;
## 12. DELETE /positions/:id

Description:

- Delete position by id

Request:
- headers:

```json
{
  "access_token": "string"
}
```

- query : 
```json
{
  "id": "string"
}
```

_Response (200 - OK)_

```json
{
  "message": "Berhasil menghapus jabatan"
}

```
&nbsp;

## 13. GET /employees

Description:

- Get all employees data

Request:
- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
[
  ...,
  {
    "id": "a1cc2d70-a493-4d2e-b1b5-404150b1eb01",
    "firstName": "John",
    "lastName": "Doe",
    "BranchId": "de459730-aeea-4760-b558-f9b322be9de5",
    "PositionId": "c4331483-e737-44d8-9165-f705ac5508c1",
    "startDate": "2023-01-01T00:00:00.000Z",
    "endDate": "2024-01-10T00:00:00.000Z",
    "Branch": {
      "id": "de459730-aeea-4760-b558-f9b322be9de5",
      "name": "Cabang Jakarta Pusat"
    },
    "Position": {
      "id": "c4331483-e737-44d8-9165-f705ac5508c1",
      "name": "Teller"
    }
  },
  ...,
]

```

&nbsp;

## 14. POST /employees

Description:

- Create a new employee

Request:
- headers:

```json
{
  "access_token": "string"
}
```
- body:

```json
{
  "firstName": "string",
  "lastName": "string",
  "BranchId": "uuid",
  "PositionId": "uuid",
  "startDate": "date",
  "endDate": "date"
}
```

_Response (200 - OK)_

```json
{
  "message": "Berhasil menambahkan pegawai baru",
  "employee": {
    "id": "57949975-1dfb-4c7f-b6af-bb1c36bdfe7b",
    "firstName": "Jane",
    "lastName": "Smith",
    "BranchId": "352884e0-2c22-4fef-896e-e3021750e3ea",
    "PositionId": "ae57df22-f865-467c-b347-d3bd6f90d606",
    "startDate": "2023-02-15T00:00:00.000Z",
    "endDate": "2024-02-15T00:00:00.000Z",
    "updatedAt": "2023-12-17T13:24:28.632Z",
    "createdAt": "2023-12-17T13:24:28.632Z"
  }
}
```

&nbsp;
## 15. GET /employees/:id

Description:

- Get spesific employee data by id 

Request:
- headers:

```json
{
  "access_token": "string"
}
```
- query : 
```json
{
  "id": "string"
}
```

_Response (200 - OK)_

```json
{
  "employee": {
    "id": "57949975-1dfb-4c7f-b6af-bb1c36bdfe7b",
    "firstName": "Jane",
    "lastName": "Smith",
    "BranchId": "352884e0-2c22-4fef-896e-e3021750e3ea",
    "PositionId": "ae57df22-f865-467c-b347-d3bd6f90d606",
    "startDate": "2023-02-15T00:00:00.000Z",
    "endDate": "2024-02-15T00:00:00.000Z",
    "Branch": {
      "id": "352884e0-2c22-4fef-896e-e3021750e3ea",
      "name": "Cabang Jakarta Selatan"
    },
    "Position": {
      "id": "ae57df22-f865-467c-b347-d3bd6f90d606",
      "name": "Asisten Administrasi"
    }
  },
  "startDate": "2023-02-15",
  "endDate": "2024-02-15"
}

```
&nbsp;

## 16. PUT /employees/:id

Description:

- Edit employee by id

Request:
- headers:

```json
{
  "access_token": "string"
}
```

- query : 
```json
{
  "id": "string"
}
```
- body:

```json
{
  "firstName": "string",
  "lastName": "string",
  "BranchId": "uuid",
  "PositionId": "uuid",
  "startDate": "date",
  "endDate": "date"
}
```

_Response (200 - OK)_

```json
{
  "message": "Berhasil mengedit pegawai"
}

```
&nbsp;
## 17. DELETE /employees/:id

Description:

- Delete employee by id

Request:
- headers:

```json
{
  "access_token": "string"
}
```

- query : 
```json
{
  "id": "string"
}
```

_Response (200 - OK)_

```json
{
  "message": "Berhasil menghapus pegawai"
}

```
&nbsp;

## Global Error

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid Token"
}
```
