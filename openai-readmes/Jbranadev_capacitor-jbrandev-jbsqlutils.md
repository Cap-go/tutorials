# capacitor-jbrandev-jbsqlutils

ORM JBSqlUtils es un ORM desarrollado en java por José Carlos Alfredo Bran Aguirre, que permite gestionar BD's SQLite,
MySQL,
PostgreSQL y SQLServer, de una manera fácil y rápida sin interrumpir la ejecución del hilo principal del programa,
lo cual la hace un potente ORM, por medio del cual tendrá acceso a un CRUD, configurando únicamente la conexión del
modelo,
los atributos que posee la tabla en BD's cómo variables que pertenecerán al modelo en su aplicación.

Para mayor información sobre cómo utilizar JBSqlUtils desde Ionic visitar el siguiente enlace:
<https://github.com/Jbranadev/capacitor-jbrandev-jbsqlutils/blob/main/README.md>

Para mayor información sobre cómo utilizar JBSqlUtils desde Java visitar el siguiente enlace:
<https://github.com/Jbranadev/JBSqlUtils/blob/master/Readme.md>

---

## Estado del Proyecto :atom:

JBSqlUtils actualmente está en una etapa de desarrollo continuo, por lo cual sus observaciones y recomendaciones,
son bienvenidas para mejorar el proyecto.

---

## Información importante para poder usar JBSqlUtils en IONIC

Para poder utilizar JBSqlUtils en Ionic es importante realizar la siguiente configuración en su aplicación.

1. Ya incluido JBSqlUtils en su aplicación, en android studio, visualizar los archivos en la vista Project, expandiendo el modulo capacitor-jbrandev-jbsqlutils, copiar la carpeta libs a la carpeta principal de su aplicación, de modo que quede en el mismo nivel que la carpeta src, como lo muestra la siguiente imagen.

![](Imagenes/Libs.jpg)

2. Una vez realizado el paso 1, abrir el archivo build.gradle, modificarlo para que contenga la configuración descrita en la siguiente imagen, agregamos lo filtros ndk dentro de la defaultConfig de nuestra aplicación y los sourceSets en el mismo nivel que la defaultConfig.

![](Imagenes/BuildConfig.jpg)

---

## Install

```bash
npm install capacitor-jbrandev-jbsqlutils
npx cap sync
```

## API

<docgen-index>

- [`dropTableIfExist(...)`](#droptableifexist)
- [`createTable(...)`](#createtable)
- [`insertInto(...)`](#insertinto)
- [`update(...)`](#update)
- [`delete(...)`](#delete)
- [`select(...)`](#select)
- [Interfaces](#interfaces)
- [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### dropTableIfExist(...)

```typescript
dropTableIfExist(droptableOptions: DropTableOptions) => Promise<DropTableResult>
```

Elimina la tabla especificada como parametro

| Param                  | Type                                                          | Description                   |
| ---------------------- | ------------------------------------------------------------- | ----------------------------- |
| **`droptableOptions`** | <code><a href="#droptableoptions">DropTableOptions</a></code> | Nombre de la tabla a eliminar |

**Returns:** <code>Promise&lt;<a href="#droptableresult">DropTableResult</a>&gt;</code>

---

### createTable(...)

```typescript
createTable(createtableOptions: CreateTableOptions) => Promise<CreateTableResult>
```

Crea la tabla especificada como parametro

| Param                    | Type                                                              | Description                    |
| ------------------------ | ----------------------------------------------------------------- | ------------------------------ |
| **`createtableOptions`** | <code><a href="#createtableoptions">CreateTableOptions</a></code> | Definicion de la tabla a crear |

**Returns:** <code>Promise&lt;<a href="#createtableresult">CreateTableResult</a>&gt;</code>

---

### insertInto(...)

```typescript
insertInto(insertOptions: InsertOptions) => Promise<InsertResult>
```

Inserta un nuevo registro en la tabla proporcionada con los valores indicados en insertOptions

| Param               | Type                                                    | Description                                                         |
| ------------------- | ------------------------------------------------------- | ------------------------------------------------------------------- |
| **`insertOptions`** | <code><a href="#insertoptions">InsertOptions</a></code> | Tabla sobre la cual se realizara el Insert y los Valores a insertar |

**Returns:** <code>Promise&lt;<a href="#insertresult">InsertResult</a>&gt;</code>

---

### update(...)

```typescript
update(updateOptions: UpdateOptions) => Promise<UpdateResult>
```

Actualiza las columnas de la tabla especificada en updateOptions de acuerdo a la logica proporcionada

| Param               | Type                                                    | Description                         |
| ------------------- | ------------------------------------------------------- | ----------------------------------- |
| **`updateOptions`** | <code><a href="#updateoptions">UpdateOptions</a></code> | Definición de la tabla a actualizar |

**Returns:** <code>Promise&lt;<a href="#updateresult">UpdateResult</a>&gt;</code>

---

### delete(...)

```typescript
delete(deleteOptions: DeleteOptions) => Promise<DeleteResult>
```

Elimina los registros de la tabla especificada de acuerdo a la logica proporcionada

| Param               | Type                                                    | Description                                                                             |
| ------------------- | ------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| **`deleteOptions`** | <code><a href="#deleteoptions">DeleteOptions</a></code> | Definición de la logica a aplicar para eliminar los registros de la tabla proporcionada |

**Returns:** <code>Promise&lt;<a href="#deleteresult">DeleteResult</a>&gt;</code>

---

### select(...)

```typescript
select<T>(selectOptions: SelectOptions) => Promise<{ 'rows': T[]; }>
```

Obtiene los registros del tipo de dato proporcionado de la tabla especificada en el objeto selectOptions

| Param               | Type                                                    | Description                                        |
| ------------------- | ------------------------------------------------------- | -------------------------------------------------- |
| **`selectOptions`** | <code><a href="#selectoptions">SelectOptions</a></code> | Define la logica de la sentencia Select a ejecutar |

**Returns:** <code>Promise&lt;{ rows: T[]; }&gt;</code>

---

### Interfaces

#### DropTableResult

Resultado del metodo DropTableIfExist

| Prop          | Type                 | Description                                                                                                                          |
| ------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **`execute`** | <code>boolean</code> | True si la tabla fue eliminada en BD's, False si la tabla no existe en BD's o si sucede algun problema al ejecutar la sentencia SQL. |

#### DropTableOptions

Opciones disponibles a envíar en el metodo DropTableIfExist

| Prop                     | Type                                                          | Description                                                                |
| ------------------------ | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| **`tableName`**          | <code>string</code>                                           | Nombre de la tabla a eliminar                                              |
| **`propertysConection`** | <code><a href="#conectionoptions">ConectionOptions</a></code> | Define las propiedades de conexión a la BD's a la que se pegara JBSqlUtils |

#### ConectionOptions

Define las propiedades de conexión a la BD's a la que se pegara JBSqlUtils

| Prop               | Type                                          | Description                                                                                                                                                |
| ------------------ | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`dataBaseType`** | <code><a href="#database">DataBase</a></code> | Tipo de BD's a la cual se estara conectando el Modelo, los tipos disponibles son MySQL, SQLServer, PostgreSQL, SQLite.                                     |
| **`dataBase`**     | <code>string</code>                           | Nombre de la Base de Datos a la que se conectara el modelo.                                                                                                |
| **`port`**         | <code>string</code>                           | Puerto en el cual se encuentra escuchando la BD's a la cual se pegara JBSqlUtils este campo es obligatorio para conectarse a MySQL, SQLServer o PostgreSQL |
| **`host`**         | <code>string</code>                           | Host en el cual se encuentra la BD's a la que nos queremos conectar. este campo es obligatorio para conectarse a MySQL, SQLServer o PostgreSQL             |
| **`user`**         | <code>string</code>                           | Usuario con el cual el JBSqlUtils se conectara a la BD's. este campo es obligatorio para conectarse a MySQL, SQLServer o PostgreSQL                        |
| **`password`**     | <code>string</code>                           | Contraseña del usuario con el cual JBSqlUtils se conectara a la BD's. este campo es obligatorio para conectarse a MySQL, SQLServer o PostgreSQL            |

#### CreateTableResult

Resultado del metodo createTable

| Prop          | Type                 | Description                                                                                                                      |
| ------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **`execute`** | <code>boolean</code> | True si la tabla a sido creada, false si la tabla ya existe en BD's o si sucede un error al momento de ejecutar la sentencia SQL |

#### CreateTableOptions

Representación de la tabla a crear en BD's a traves del metodo createTable

| Prop                     | Type                                                          | Description                                                                |
| ------------------------ | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| **`tableName`**          | <code>string</code>                                           | Nombre de la tabla a crear                                                 |
| **`columnas`**           | <code>Column[]</code>                                         | Array de Columnas que tendra la tabla al momento de ser creada en BD's     |
| **`propertysConection`** | <code><a href="#conectionoptions">ConectionOptions</a></code> | Define las propiedades de conexión a la BD's a la que se pegara JBSqlUtils |

#### Column

Representación de una columna a crear en BD's

| Prop                | Type                                          | Description                                                                                                                                                                           |
| ------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`name`**          | <code>string</code>                           | Nombre de la columna                                                                                                                                                                  |
| **`default_value`** | <code>string</code>                           | Indica el valor por default que tendra la columna en BD's Es importante que para que este sea efectivo, agregar en las restriccions, la <a href="#constraint">Constraint.DEFAULT</a>. |
| **`dataTypeSQL`**   | <code><a href="#datatype">DataType</a></code> | <a href="#datatype">DataType</a> que indica el tipo de dato SQL que almacenara la columna.                                                                                            |
| **`restriccions`**  | <code>Constraint[]</code>                     | Array que Indica las restricciones SQL que tendra este campo.                                                                                                                         |

#### InsertResult

Define el resultado de insertar un registro en BD's

| Prop              | Type                | Description                                                                |
| ----------------- | ------------------- | -------------------------------------------------------------------------- |
| **`rows_insert`** | <code>number</code> | Cantidad de filas que se han visto afectadas al ejecutar la sentencia SQL. |

#### InsertOptions

Define la tabla sobre la cual se realizara el Insert y los valores a insertar

| Prop                     | Type                                                          | Description                                                                |
| ------------------------ | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| **`tableName`**          | <code>string</code>                                           | Nombre de la tabla sobre la que se efectuara el Insert                     |
| **`values`**             | <code>ValuesInsert[]</code>                                   | Array de valores a insertar en la tabla.                                   |
| **`propertysConection`** | <code><a href="#conectionoptions">ConectionOptions</a></code> | Define las propiedades de conexión a la BD's a la que se pegara JBSqlUtils |

#### ValuesInsert

Define el valor a insertar y en que columna

| Prop            | Type                | Description                                                        |
| --------------- | ------------------- | ------------------------------------------------------------------ |
| **`columName`** | <code>string</code> | Nombre de la columna en la que se insertara el valor proporcionado |
| **`value`**     | <code>any</code>    | Valor a insertar                                                   |

#### UpdateResult

Define el resultado de actualizar registros en BD's

| Prop              | Type                | Description                                                                |
| ----------------- | ------------------- | -------------------------------------------------------------------------- |
| **`rows_update`** | <code>number</code> | Cantidad de filas que se han visto afectadas al ejecutar la sentencia SQL. |

#### UpdateOptions

Define las columnas que seran actualizadas en la tabla especificada.

| Prop                     | Type                                                          | Description                                                                |
| ------------------------ | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| **`tableName`**          | <code>string</code>                                           | Nombre de la tabla a actualizar                                            |
| **`valueUpdate`**        | <code><a href="#valueupdate">ValueUpdate</a></code>           | Columnas a actualizar                                                      |
| **`propertysConection`** | <code><a href="#conectionoptions">ConectionOptions</a></code> | Define las propiedades de conexión a la BD's a la que se pegara JBSqlUtils |

#### ValueUpdate

Define la columna a actualizar con el valor proporcionado en la tabla especificada

| Prop                 | Type                                                | Description                                                                                   |
| -------------------- | --------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| **`columName`**      | <code>string</code>                                 | Nombre de la columna a actualizar                                                             |
| **`value`**          | <code>any</code>                                    | Valor a setear en la columna                                                                  |
| **`andValueUpdate`** | <code><a href="#valueupdate">ValueUpdate</a></code> | Agrega la capacidad de poder actualizar el valor de otra columna en la misma sentencia Update |
| **`where`**          | <code><a href="#where">Where</a></code>             | Agrega la logica de un filtro where a la actualización de registros en BD's                   |

#### Where

Proporciona la logica de una sentencia <a href="#where">Where</a> sobre la información que contiene esta interface, añadiendo la capacidad
de poder filtrar por medio de las sentencias AND, OR, TAKE Y ORDER BY

| Prop                  | Type                                                        | Description                                                                                  |
| --------------------- | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| **`columName`**       | <code>string</code>                                         | Nombre de la columna sobre la cual se evaluara la sentencia WHERE                            |
| **`operator`**        | <code><a href="#operator">Operator</a></code>               | Operador sobre el cual se evalura la columna respecto al valor proporcionado                 |
| **`value`**           | <code>any</code>                                            | Valor contra el que se evaluara la columna                                                   |
| **`and`**             | <code><a href="#and">And</a></code>                         | Agrega la logica de una sentencia <a href="#and">And</a> sobre la información proporcionada. |
| **`or`**              | <code><a href="#or">Or</a></code>                           | Agrega la logica de una sentencia <a href="#or">Or</a> sobre la información proporcionada.   |
| **`orderBy`**         | <code><a href="#orderby">OrderBy</a></code>                 | Tipo de ordenamiento que deseamos se aplique al realizar una sentencia con filtro where      |
| **`take`**            | <code><a href="#take">Take</a></code>                       | Cantidad maxima de registros a tomar dentro de una sentencia con filtro where                |
| **`openParentecis`**  | <code><a href="#openparentesis">OpenParentesis</a></code>   | Puede aperturar un parentecis para filtrar de una mejor manera los registros                 |
| **`closeParentecis`** | <code><a href="#closeparentesis">CloseParentesis</a></code> | Puede cerrar un parentecis para filtrar de una mejor manera los registros                    |

#### And

Proporciona la logica de una sentencia <a href="#and">And</a> sobre la información que contiene esta interface, añadiendo la capacidad
de poder filtrar por medio de las sentencias AND, OR, TAKE Y ORDER BY

| Prop                  | Type                                                        | Description                                                                                  |
| --------------------- | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| **`columName`**       | <code>string</code>                                         | Nombre de la columna sobre la cual se evaluara la sentencia AND                              |
| **`operator`**        | <code><a href="#operator">Operator</a></code>               | Operador sobre el cual se evalura la columna respecto al valor proporcionado                 |
| **`value`**           | <code>any</code>                                            | Valor contra el que se evaluara la columna                                                   |
| **`and`**             | <code><a href="#and">And</a></code>                         | Agrega la logica de una sentencia <a href="#and">And</a> sobre la información proporcionada. |
| **`or`**              | <code><a href="#or">Or</a></code>                           | Agrega la logica de una sentencia <a href="#or">Or</a> sobre la información proporcionada.   |
| **`orderBy`**         | <code><a href="#orderby">OrderBy</a></code>                 | Tipo de ordenamiento que deseamos se aplique al realizar una sentencia con filtro where      |
| **`take`**            | <code><a href="#take">Take</a></code>                       | Cantidad maxima de registros a tomar dentro de una sentencia con filtro where                |
| **`openParentecis`**  | <code><a href="#openparentesis">OpenParentesis</a></code>   | Puede aperturar un parentecis para filtrar de una mejor manera los registros                 |
| **`closeParentecis`** | <code><a href="#closeparentesis">CloseParentesis</a></code> | Puede cerrar un parentecis para filtrar de una mejor manera los registros                    |

#### Or

Proporciona la logica de una sentencia <a href="#or">Or</a> sobre la información que contiene esta interface, añadiendo la capacidad
de poder filtrar por medio de las sentencias AND, OR, TAKE Y ORDER BY

| Prop                  | Type                                                        | Description                                                                                  |
| --------------------- | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| **`columName`**       | <code>string</code>                                         | Nombre de la columna sobre la cual se evaluara la sentencia OR                               |
| **`operator`**        | <code><a href="#operator">Operator</a></code>               | Operador sobre el cual se evalura la columna respecto al valor proporcionado                 |
| **`value`**           | <code>any</code>                                            | Valor contra el que se evaluara la columna                                                   |
| **`and`**             | <code><a href="#and">And</a></code>                         | Agrega la logica de una sentencia <a href="#and">And</a> sobre la información proporcionada. |
| **`or`**              | <code><a href="#or">Or</a></code>                           | Agrega la logica de una sentencia <a href="#or">Or</a> sobre la información proporcionada.   |
| **`orderBy`**         | <code><a href="#orderby">OrderBy</a></code>                 | Tipo de ordenamiento que deseamos se aplique al realizar una sentencia con filtro where      |
| **`take`**            | <code><a href="#take">Take</a></code>                       | Cantidad maxima de registros a tomar dentro de una sentencia con filtro where                |
| **`openParentecis`**  | <code><a href="#openparentesis">OpenParentesis</a></code>   | Puede aperturar un parentecis para filtrar de una mejor manera los registros                 |
| **`closeParentecis`** | <code><a href="#closeparentesis">CloseParentesis</a></code> | Puede cerrar un parentecis para filtrar de una mejor manera los registros                    |

#### OrderBy

Define el tipo de ordenamiento que deseamos se ejecute al realizar una consulta, añadiendo la capacidad de poder
limitar la cantidad de resultados a travez de la sentencia TAKE

| Prop            | Type                                            | Description                                                                   |
| --------------- | ----------------------------------------------- | ----------------------------------------------------------------------------- |
| **`columName`** | <code>string</code>                             | Nombre de la columna por medio de la cual queremos ordenar                    |
| **`orderType`** | <code><a href="#ordertype">OrderType</a></code> | Tipo de ordenamiento que queremos realizar                                    |
| **`take`**      | <code><a href="#take">Take</a></code>           | Cantidad maxima de registros a tomar dentro de una sentencia con filtro where |

#### Take

Define un limite de registros a tomar dentro de una sentencia con filtro <a href="#where">Where</a>

| Prop         | Type                | Description                                                                                             |
| ------------ | ------------------- | ------------------------------------------------------------------------------------------------------- |
| **`limite`** | <code>number</code> | Cantidad Maxima de Registros que se desea tomar al filtrar con una sentencia <a href="#where">Where</a> |

#### OpenParentesis

Agrega la logica de agregar un operador previo y parentecis para filtrar de una mejor manera las consultas

| Prop                  | Type                                                        | Description                                                                                  |
| --------------------- | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| **`operatorPrev`**    | <code><a href="#operator">Operator</a></code>               | Operador previo a colocar antes de aperturar el parentecis                                   |
| **`columName`**       | <code>string</code>                                         | Nombre de la columna sobre la cual se evaluara la sentencia AND                              |
| **`operator`**        | <code><a href="#operator">Operator</a></code>               | Operador sobre el cual se evalura la columna respecto al valor proporcionado                 |
| **`value`**           | <code>any</code>                                            | Valor contra el que se evaluara la columna                                                   |
| **`and`**             | <code><a href="#and">And</a></code>                         | Agrega la logica de una sentencia <a href="#and">And</a> sobre la información proporcionada. |
| **`or`**              | <code><a href="#or">Or</a></code>                           | Agrega la logica de una sentencia <a href="#or">Or</a> sobre la información proporcionada.   |
| **`orderBy`**         | <code><a href="#orderby">OrderBy</a></code>                 | Tipo de ordenamiento que deseamos se aplique al realizar una sentencia con filtro where      |
| **`take`**            | <code><a href="#take">Take</a></code>                       | Cantidad maxima de registros a tomar dentro de una sentencia con filtro where                |
| **`openParentecis`**  | <code><a href="#openparentesis">OpenParentesis</a></code>   | Puede aperturar un parentecis para filtrar de una mejor manera los registros                 |
| **`closeParentecis`** | <code><a href="#closeparentesis">CloseParentesis</a></code> | Puede cerrar un parentecis para filtrar de una mejor manera los registros                    |

#### CloseParentesis

Proporciona la logica de un cierre de parentesis

| Prop                  | Type                                                        | Description                                                                                  |
| --------------------- | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| **`operatorPost`**    | <code><a href="#operator">Operator</a></code>               | Operador posterior a colocar antes de aperturar el parentecis                                |
| **`and`**             | <code><a href="#and">And</a></code>                         | Agrega la logica de una sentencia <a href="#and">And</a> sobre la información proporcionada. |
| **`or`**              | <code><a href="#or">Or</a></code>                           | Agrega la logica de una sentencia <a href="#or">Or</a> sobre la información proporcionada.   |
| **`orderBy`**         | <code><a href="#orderby">OrderBy</a></code>                 | Tipo de ordenamiento que deseamos se aplique al realizar una sentencia con filtro where      |
| **`take`**            | <code><a href="#take">Take</a></code>                       | Cantidad maxima de registros a tomar dentro de una sentencia con filtro where                |
| **`openParentecis`**  | <code><a href="#openparentesis">OpenParentesis</a></code>   | Puede aperturar un parentecis para filtrar de una mejor manera los registros                 |
| **`closeParentecis`** | <code><a href="#closeparentesis">CloseParentesis</a></code> | Puede cerrar un parentecis para filtrar de una mejor manera los registros                    |

#### DeleteResult

Define el resultado de eliminar registros en BD's

| Prop              | Type                | Description                                                                |
| ----------------- | ------------------- | -------------------------------------------------------------------------- |
| **`rows_delete`** | <code>number</code> | Cantidad de filas que se han sido eliminadas al ejecutar la sentencia SQL. |

#### DeleteOptions

Define la tabla y la logica a aplicar al momento de eliminar los registros de BD's

| Prop                     | Type                                                          | Description                                                                  |
| ------------------------ | ------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| **`tableName`**          | <code>string</code>                                           | Nombre de la tabla en la que se desea eliminar registros                     |
| **`where`**              | <code><a href="#where">Where</a></code>                       | Agrega la logica de un filtro where al momento de eliminar registros en BD's |
| **`propertysConection`** | <code><a href="#conectionoptions">ConectionOptions</a></code> | Define las propiedades de conexión a la BD's a la que se pegara JBSqlUtils   |

#### SelectOptions

Define las columnas a obtener en cada registro de la tabla especificada de acuerdo a la
logica proporcionada.

| Prop                     | Type                                                          | Description                                                                                                    |
| ------------------------ | ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **`tableName`**          | <code>string</code>                                           | Nombre de la tabla de la que se desean obtener los registros                                                   |
| **`where`**              | <code><a href="#where">Where</a></code>                       | Agrega la logica de un filtro where al momento de obtener registros de BD's                                    |
| **`columns`**            | <code>string[]</code>                                         | Define las columnas a obtener de la tabla, de desear obtener todas las columnas, no especificar esta propiedad |
| **`propertysConection`** | <code><a href="#conectionoptions">ConectionOptions</a></code> | Define las propiedades de conexión a la BD's a la que se pegara JBSqlUtils                                     |

### Enums

#### DataBase

| Members          | Value                     | Description |
| ---------------- | ------------------------- | ----------- |
| **`SQLite`**     | <code>"SQLite"</code>     | SQLite      |
| **`MySQL`**      | <code>"MySQL"</code>      | MySQL       |
| **`SQLServer`**  | <code>"SQLServer"</code>  | SQL Server  |
| **`PostgreSQL`** | <code>"PostgreSQL"</code> | PostgreSQL  |

#### DataType

| Members             | Value                        | Description                                                                                                                                                               |
| ------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`INTEGER`**       | <code>"INTEGER"</code>       | Entero de 32 bits con signo                                                                                                                                               |
| **`INT`**           | <code>"INT"</code>           | Entero de 32 bits con signo                                                                                                                                               |
| **`IDENTITY`**      | <code>"IDENTITY"</code>      | Tipo de dato auto incrementable en SQL Server                                                                                                                             |
| **`SERIAL`**        | <code>"SERIAL"</code>        | Tipo de dato auto incrementable en PostgreSQL                                                                                                                             |
| **`CHAR`**          | <code>"CHAR"</code>          | Cadena de caracteres de longitud fija                                                                                                                                     |
| **`VARCHAR`**       | <code>"VARCHAR"</code>       | Cadena de caracteres de longitud variable                                                                                                                                 |
| **`LONGVARCHAR`**   | <code>"LONGVARCHAR"</code>   | Cadenas de cualquier longitud (varios megabytes), debe definir el tamaño que desea tenga la columna por medio del metodo setSize, para esta numeración en especifico.     |
| **`ENUM`**          | <code>"ENUM"</code>          | Enum se tienen que definir las opciones disponibles a través del metodo setSize, envíando como parametro para esta numeración, las opciones que deseamos tenga disponible |
| **`SMALLINT`**      | <code>"SMALLINT"</code>      | entero de 16 bits                                                                                                                                                         |
| **`TINYINT`**       | <code>"TINYINT"</code>       | entero de 16 bits                                                                                                                                                         |
| **`REAL`**          | <code>"REAL"</code>          | Valor de coma flotante                                                                                                                                                    |
| **`FLOAT`**         | <code>"FLOAT"</code>         | Valor de coma flotante                                                                                                                                                    |
| **`DOUBLE`**        | <code>"DOUBLE"</code>        | Gran valor de punto flotante                                                                                                                                              |
| **`NUMERIC`**       | <code>"NUMERIC"</code>       | Valores decimales de precisión absoluta                                                                                                                                   |
| **`DECIMAL`**       | <code>"DECIMAL"</code>       | Valor decimal de precisión absoluta                                                                                                                                       |
| **`MONEY`**         | <code>"MONEY"</code>         | Valor decimal de precisión absoluta                                                                                                                                       |
| **`SMALLMONEY`**    | <code>"SMALLMONEY"</code>    | Valor decimal de precisión absoluta                                                                                                                                       |
| **`BIT`**           | <code>"BIT"</code>           | Bit único/valor binario (activado o desactivado)                                                                                                                          |
| **`BOOLEAN`**       | <code>"BOOLEAN"</code>       | Valor Booleano                                                                                                                                                            |
| **`BOOL`**          | <code>"BOOL"</code>          | Valor Booleano                                                                                                                                                            |
| **`BINARY`**        | <code>"BINARY"</code>        | Matriz de valores binarios                                                                                                                                                |
| **`VARBINARY`**     | <code>"VARBINARY"</code>     | Matriz de longitud variable de valores binarios, en mysql el valor maximo es de 21844 pero en sql server es de 8000                                                       |
| **`LONGVARBINARY`** | <code>"LONGVARBINARY"</code> | Matriz de valores binarios de cualquier longitud (varios megabytes) SQL Server                                                                                            |
| **`IMAGE`**         | <code>"IMAGE"</code>         | Cadena binaria de ancho variable                                                                                                                                          |
| **`OBJECT`**        | <code>"OBJECT"</code>        | Setea que el tipo de dato será un Object                                                                                                                                  |
| **`JSON`**          | <code>"JSON"</code>          | Setea que el tipo de dato será un JSON                                                                                                                                    |
| **`DATE`**          | <code>"DATE"</code>          | Valor de fecha                                                                                                                                                            |
| **`TIME`**          | <code>"TIME"</code>          | Valor del tiempo                                                                                                                                                          |
| **`TIMESTAMP`**     | <code>"TIMESTAMP"</code>     | Valor de tiempo con campo adicional de nanosegundos                                                                                                                       |
| **`SMALLDATETIME`** | <code>"SMALLDATETIME"</code> | Valor de tiempo con campo adicional de nanosegundos                                                                                                                       |
| **`DATETIME`**      | <code>"DATETIME"</code>      | Valor de tiempo con campo adicional de nanosegundos                                                                                                                       |
| **`DATETIME2`**     | <code>"DATETIME2"</code>     | Valor de tiempo con campo adicional de nanosegundos                                                                                                                       |

#### Constraint

| Members                 | Value                            | Description                                                                                                                                                                                                                                                                               |
| ----------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`NOT_NULL`**          | <code>"NOT_NULL"</code>          | Indica que la columna no acepta valores Nullos.                                                                                                                                                                                                                                           |
| **`UNIQUE`**            | <code>"UNIQUE"</code>            | El valor de esta columna tiene que ser unico                                                                                                                                                                                                                                              |
| **`CHECK`**             | <code>"CHECK"</code>             | Restriccion que permite indicarle que tipo de valores si serán aceptados por la columna Lo puede realizar a travez del metodo setRestriccion=String restriccion; de esta numeración. considerar que la misma restricción se aplicara para el resto de columnas que tengan un valor Check. |
| **`PRIMARY_KEY`**       | <code>"PRIMARY_KEY"</code>       | Indica que la columna funciona como clave primaria del modelo.                                                                                                                                                                                                                            |
| **`FOREIGN_KEY`**       | <code>"FOREIGN_KEY"</code>       | Indica que la columna funciona como clave foranea del modelo.                                                                                                                                                                                                                             |
| **`CURRENT_TIMESTAMP`** | <code>"CURRENT_TIMESTAMP"</code> | Indica que el campo tendra como valor por default el TimeStamp del momento en que se almacene el modelo.                                                                                                                                                                                  |
| **`DEFAULT`**           | <code>"DEFAULT"</code>           | Indica que la columna tendra un valor por default                                                                                                                                                                                                                                         |
| **`AUTO_INCREMENT`**    | <code>"AUTO_INCREMENT"</code>    | Indica que la columna autoincrementara su valor cada vez que se almacene un registro en la tabla correspondiente al modelo.                                                                                                                                                               |

#### Operator

| Members                | Value                           | Description       |
| ---------------------- | ------------------------------- | ----------------- |
| **`MAYOR_IGUAL_QUE`**  | <code>"MAYOR_IGUAL_QUE"</code>  | Operador &gt;=    |
| **`MAYOR_QUE`**        | <code>"MAYOR_QUE"</code>        | Operador &gt;     |
| **`IGUAL_QUE`**        | <code>"IGUAL_QUE"</code>        | Operador =        |
| **`DISTINTO`**         | <code>"DISTINTO"</code>         | Operador &lt;&gt; |
| **`MENOR_QUE`**        | <code>"MENOR_QUE"</code>        | Operador &lt;     |
| **`MENOR_IGUAL_QUE`**  | <code>"MENOR_IGUAL_QUE"</code>  | Operador &lt;=    |
| **`LIKE`**             | <code>"LIKE"</code>             | Operador LIKE     |
| **`OPEN_PARENTESIS`**  | <code>"OPEN_PARENTESIS"</code>  | Operador (        |
| **`CLOSE_PARENTESIS`** | <code>"CLOSE_PARENTESIS"</code> | Operador )        |
| **`ORDERBY`**          | <code>"ORDERBY"</code>          | Operador ORDER BY |
| **`AND`**              | <code>"AND"</code>              | Operador AND      |
| **`OR`**               | <code>"OR"</code>               | Operador OR       |
| **`NOT`**              | <code>"NOT"</code>              | Operador NOT      |

#### OrderType

| Members    | Value               | Description                                                       |
| ---------- | ------------------- | ----------------------------------------------------------------- |
| **`ASC`**  | <code>"ASC"</code>  | Indica que deseamos se ordene de manera Ascendente los registros  |
| **`DESC`** | <code>"DESC"</code> | Indica que deseamos se ordene de manera Descendente los registros |

</docgen-api>
