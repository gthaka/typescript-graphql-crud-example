### TypeORM Env

Add the following to the .env file

```
TYPEORM_CONNECTION = mysql
TYPEORM_HOST = localhost
TYPEORM_USERNAME = user
TYPEORM_PASSWORD = pass
TYPEORM_DATABASE = db
TYPEORM_PORT = 3306
TYPEORM_SYNCHRONIZE = true
TYPEORM_LOGGING = true
TYPEORM_ENTITIES = src/entity/**/*.ts
TYPEORM_SUBSCRIBERS = src/subscriber/**/*.ts
TYPEORM_MIGRATIONS = src/migration/**/*.ts
TYPEORM_ENTITIES_DIR= src/entity
TYPEORM_MIGRATIONS_DIR= src/migration
TYPEORM_SUBSCRIBERS_DIR= src/subscriber
```