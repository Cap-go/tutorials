---
"title": "Tutorial on Using ORM SQLite Package with Capacitor",
"description": "A guide on integrating and using the @guilhermeabreudev/capacitor-orm-sqlite package to work with SQLite databases in Capacitor applications.",
"created_at": "2023-10-08",
"published": true,
"slug": "orm-sqlite"
---

# Tutorial on Using ORM SQLite Package with Capacitor

This tutorial will provide a step-by-step guide on how to integrate and use the @guilhermeabreudev/capacitor-orm-sqlite package to work with SQLite databases in Capacitor applications. The package simplifies the interaction and manipulation of SQLite databases, making it easier to manage data in mobile applications.

## Installation

To install the `@guilhermeabreudev/capacitor-orm-sqlite` package, run the following command:

```bash
npm install @guilhermeabreudev/capacitor-orm-sqlite
npx cap sync && npx cap copy
```

### Configuration

1. Add the Plugin to Your Project
   Make sure the plugin is correctly registered in your Capacitor project.

2. SQLite Configuration
   Follow the configurations for SQLite detailed in the [official documentation](https://github.com/capacitor-community/sqlite/blob/master/README.md).

3. Create the Connection
   Establish the connection in the initial file of your project.

**Angular Example - app-component.ts**

```typescript
new DatabaseConnectionOrmSQlite(
    new SQLiteConnection(CapacitorSQLite),
    'Database Name',
    'Encryption Type',
    'Encryption Mode',
    { version: number },
    { readOnly: boolean },
    { showSqlLog: boolean }
)
```

The plugin will manage the connection, removing the need to manually open or close connections.

### Basic Usage

#### Define Models

Define your database models using decorators:

**Client Model Example**

```typescript
import { Column, EntityName, OneToMany } from '@guilhermeabreudev/capacitor-orm-sqlite';

@EntityName('Cliente')
export class Cliente {

  @Column({
    primaryKey: true
  })
  public id!: number;

  @Column()
  public nome!: number;

  @Column()
  public descricao!: string;

  @OneToMany()
  public carro: Carro[] | null = null;

  constructor(pCliente: Partial<ICliente>) {
    this.id = pCliente.id ?? this.id;
    this.nome = pCliente.nome ?? this.nome;
    this.descricao = pCliente.descricao ?? this.descricao;
  }

}
```

**Car Model Example**

```typescript
import { Column, EntityName, ManyToOne } from '@guilhermeabreudev/capacitor-orm-sqlite';

@EntityName('Carro')
export class Carro {

  @Column({
    primaryKey: true
  })
  public id!: number;

  @Column()
  public marca!: number;

  @Column()
  public placa!: string;

  @ManyToOne()
  public cliente: IClient | null = null;

  constructor(oCarro: Partial<ICarro>) {
    this.id = oCarro.id ?? this.id;
    this.marca = oCarro.marca ?? this.marca;
    this.placa = oCarro.placa ?? this.placa;
  }

}
```

#### Additional Configurations

Make sure to update your `capacitor.config.json` file with the necessary configurations. 

For more detailed information on the plugin and additional reading, refer to the official [Capacitor documentation](https://capacitorjs.com/docs/), [SQL Datatypes Guide](https://www.sqlite.org/datatype3.html), and more.

## Web & Android Quirks

The package follows the guidelines and browser support from the Capacitor Team. Detailed instructions for Angular, Vue, React, and Android environments are provided in the official documentation:

- [Capacitor Browser Support](https://capacitorjs.com/docs/v3/web#browser-support)
- [Web Environment Setup Instructions](https://capacitorjs.com/docs/v3/web#environment-setup)
- [Android Studio Build Error Fix](https://stackoverflow.com/questions/63291529/how-to-fix-more-than-one-file-was-found-with-os-independent-path-build-data-pro)

These quirks and environment-specific instructions are crucial to ensure successful implementation and execution of the plugin.

---

This tutorial provides a comprehensive guide to integrating and leveraging the @guilhermeabreudev/capacitor-orm-sqlite package for SQLite database management in Capacitor projects. Follow the provided steps and configurations to enhance data handling in your mobile applications.