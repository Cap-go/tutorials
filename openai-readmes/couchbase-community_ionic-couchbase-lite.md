# @couchbase-community/ionic-couchbase-lite

Integration for Couchbase Lite in Ionic apps

## Install

```bash
npm install @couchbase-community/ionic-couchbase-lite
npx cap sync
```

## API

<docgen-index>

* [`Plugin_Configure(...)`](#plugin_configure)
* [`Database_Open(...)`](#database_open)
* [`Database_Save(...)`](#database_save)
* [`Database_GetCount(...)`](#database_getcount)
* [`Database_GetPath(...)`](#database_getpath)
* [`Database_Copy(...)`](#database_copy)
* [`Database_CreateIndex(...)`](#database_createindex)
* [`Database_DeleteIndex(...)`](#database_deleteindex)
* [`Database_GetIndexes(...)`](#database_getindexes)
* [`Database_Exists(...)`](#database_exists)
* [`Database_Close(...)`](#database_close)
* [`Database_Compact(...)`](#database_compact)
* [`Database_Delete(...)`](#database_delete)
* [`Database_PurgeDocument(...)`](#database_purgedocument)
* [`Database_DeleteDocument(...)`](#database_deletedocument)
* [`Database_GetDocument(...)`](#database_getdocument)
* [`Database_AddChangeListener(...)`](#database_addchangelistener)
* [`Database_SetLogLevel(...)`](#database_setloglevel)
* [`Database_SetFileLoggingConfig(...)`](#database_setfileloggingconfig)
* [`Document_GetBlobContent(...)`](#document_getblobcontent)
* [`Query_Execute(...)`](#query_execute)
* [`ResultSet_Next(...)`](#resultset_next)
* [`ResultSet_NextBatch(...)`](#resultset_nextbatch)
* [`ResultSet_AllResults(...)`](#resultset_allresults)
* [`ResultSet_Cleanup(...)`](#resultset_cleanup)
* [`Replicator_Create(...)`](#replicator_create)
* [`Replicator_Start(...)`](#replicator_start)
* [`Replicator_Restart(...)`](#replicator_restart)
* [`Replicator_AddChangeListener(...)`](#replicator_addchangelistener)
* [`Replicator_AddDocumentListener(...)`](#replicator_adddocumentlistener)
* [`Replicator_Stop(...)`](#replicator_stop)
* [`Replicator_ResetCheckpoint(...)`](#replicator_resetcheckpoint)
* [`Replicator_GetStatus(...)`](#replicator_getstatus)
* [`Replicator_Cleanup(...)`](#replicator_cleanup)
* [Interfaces](#interfaces)
* [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### Plugin_Configure(...)

```typescript
Plugin_Configure(args: PluginConfigureArgs) => any
```

| Param      | Type                                                                |
| ---------- | ------------------------------------------------------------------- |
| **`args`** | <code><a href="#pluginconfigureargs">PluginConfigureArgs</a></code> |

**Returns:** <code>any</code>

--------------------


### Database_Open(...)

```typescript
Database_Open(args: DatabaseOpenArgs) => any
```

| Param      | Type                                                          |
| ---------- | ------------------------------------------------------------- |
| **`args`** | <code><a href="#databaseopenargs">DatabaseOpenArgs</a></code> |

**Returns:** <code>any</code>

--------------------


### Database_Save(...)

```typescript
Database_Save(args: DatabaseSaveArgs) => any
```

| Param      | Type                                                          |
| ---------- | ------------------------------------------------------------- |
| **`args`** | <code><a href="#databasesaveargs">DatabaseSaveArgs</a></code> |

**Returns:** <code>any</code>

--------------------


### Database_GetCount(...)

```typescript
Database_GetCount(args: DatabaseArgs) => any
```

| Param      | Type                                                  |
| ---------- | ----------------------------------------------------- |
| **`args`** | <code><a href="#databaseargs">DatabaseArgs</a></code> |

**Returns:** <code>any</code>

--------------------


### Database_GetPath(...)

```typescript
Database_GetPath(args: DatabaseArgs) => any
```

| Param      | Type                                                  |
| ---------- | ----------------------------------------------------- |
| **`args`** | <code><a href="#databaseargs">DatabaseArgs</a></code> |

**Returns:** <code>any</code>

--------------------


### Database_Copy(...)

```typescript
Database_Copy(args: DatabaseCopyArgs) => any
```

| Param      | Type                                                          |
| ---------- | ------------------------------------------------------------- |
| **`args`** | <code><a href="#databasecopyargs">DatabaseCopyArgs</a></code> |

**Returns:** <code>any</code>

--------------------


### Database_CreateIndex(...)

```typescript
Database_CreateIndex(args: DatabaseCreateIndexArgs) => any
```

| Param      | Type                                                                        |
| ---------- | --------------------------------------------------------------------------- |
| **`args`** | <code><a href="#databasecreateindexargs">DatabaseCreateIndexArgs</a></code> |

**Returns:** <code>any</code>

--------------------


### Database_DeleteIndex(...)

```typescript
Database_DeleteIndex(args: DatabaseDeleteIndexArgs) => any
```

| Param      | Type                                                                        |
| ---------- | --------------------------------------------------------------------------- |
| **`args`** | <code><a href="#databasedeleteindexargs">DatabaseDeleteIndexArgs</a></code> |

**Returns:** <code>any</code>

--------------------


### Database_GetIndexes(...)

```typescript
Database_GetIndexes(args: DatabaseArgs) => any
```

| Param      | Type                                                  |
| ---------- | ----------------------------------------------------- |
| **`args`** | <code><a href="#databaseargs">DatabaseArgs</a></code> |

**Returns:** <code>any</code>

--------------------


### Database_Exists(...)

```typescript
Database_Exists(args: DatabaseExistsArgs) => any
```

| Param      | Type                                                              |
| ---------- | ----------------------------------------------------------------- |
| **`args`** | <code><a href="#databaseexistsargs">DatabaseExistsArgs</a></code> |

**Returns:** <code>any</code>

--------------------


### Database_Close(...)

```typescript
Database_Close(args: DatabaseArgs) => any
```

| Param      | Type                                                  |
| ---------- | ----------------------------------------------------- |
| **`args`** | <code><a href="#databaseargs">DatabaseArgs</a></code> |

**Returns:** <code>any</code>

--------------------


### Database_Compact(...)

```typescript
Database_Compact(args: DatabaseArgs) => any
```

| Param      | Type                                                  |
| ---------- | ----------------------------------------------------- |
| **`args`** | <code><a href="#databaseargs">DatabaseArgs</a></code> |

**Returns:** <code>any</code>

--------------------


### Database_Delete(...)

```typescript
Database_Delete(args: DatabaseArgs) => any
```

| Param      | Type                                                  |
| ---------- | ----------------------------------------------------- |
| **`args`** | <code><a href="#databaseargs">DatabaseArgs</a></code> |

**Returns:** <code>any</code>

--------------------


### Database_PurgeDocument(...)

```typescript
Database_PurgeDocument(args: DatabasePurgeDocumentArgs) => any
```

| Param      | Type                                                                            |
| ---------- | ------------------------------------------------------------------------------- |
| **`args`** | <code><a href="#databasepurgedocumentargs">DatabasePurgeDocumentArgs</a></code> |

**Returns:** <code>any</code>

--------------------


### Database_DeleteDocument(...)

```typescript
Database_DeleteDocument(args: DatabaseDeleteDocumentArgs) => any
```

| Param      | Type                                                                              |
| ---------- | --------------------------------------------------------------------------------- |
| **`args`** | <code><a href="#databasedeletedocumentargs">DatabaseDeleteDocumentArgs</a></code> |

**Returns:** <code>any</code>

--------------------


### Database_GetDocument(...)

```typescript
Database_GetDocument(args: DatabaseGetDocumentArgs) => any
```

| Param      | Type                                                                        |
| ---------- | --------------------------------------------------------------------------- |
| **`args`** | <code><a href="#databasegetdocumentargs">DatabaseGetDocumentArgs</a></code> |

**Returns:** <code>any</code>

--------------------


### Database_AddChangeListener(...)

```typescript
Database_AddChangeListener(args: DatabaseArgs, cb: PluginCallback) => any
```

| Param      | Type                                                                        |
| ---------- | --------------------------------------------------------------------------- |
| **`args`** | <code><a href="#databaseargs">DatabaseArgs</a></code>                       |
| **`cb`**   | <code>(data: PluginResultData, error?: PluginResultError) =&gt; void</code> |

**Returns:** <code>any</code>

--------------------


### Database_SetLogLevel(...)

```typescript
Database_SetLogLevel(args: DatabaseSetLogLevelArgs) => any
```

| Param      | Type                                                                        |
| ---------- | --------------------------------------------------------------------------- |
| **`args`** | <code><a href="#databasesetloglevelargs">DatabaseSetLogLevelArgs</a></code> |

**Returns:** <code>any</code>

--------------------


### Database_SetFileLoggingConfig(...)

```typescript
Database_SetFileLoggingConfig(args: DatabaseSetFileLoggingConfigArgs) => any
```

| Param      | Type                                                                                          |
| ---------- | --------------------------------------------------------------------------------------------- |
| **`args`** | <code><a href="#databasesetfileloggingconfigargs">DatabaseSetFileLoggingConfigArgs</a></code> |

**Returns:** <code>any</code>

--------------------


### Document_GetBlobContent(...)

```typescript
Document_GetBlobContent(args: DocumentGetBlobContentArgs) => any
```

| Param      | Type                                                                              |
| ---------- | --------------------------------------------------------------------------------- |
| **`args`** | <code><a href="#documentgetblobcontentargs">DocumentGetBlobContentArgs</a></code> |

**Returns:** <code>any</code>

--------------------


### Query_Execute(...)

```typescript
Query_Execute(args: QueryExecuteArgs) => any
```

| Param      | Type                                                          |
| ---------- | ------------------------------------------------------------- |
| **`args`** | <code><a href="#queryexecuteargs">QueryExecuteArgs</a></code> |

**Returns:** <code>any</code>

--------------------


### ResultSet_Next(...)

```typescript
ResultSet_Next(args: ResultSetNextArgs) => any
```

| Param      | Type                                                            |
| ---------- | --------------------------------------------------------------- |
| **`args`** | <code><a href="#resultsetnextargs">ResultSetNextArgs</a></code> |

**Returns:** <code>any</code>

--------------------


### ResultSet_NextBatch(...)

```typescript
ResultSet_NextBatch(args: ResultSetNextBatchArgs) => any
```

| Param      | Type                                                                      |
| ---------- | ------------------------------------------------------------------------- |
| **`args`** | <code><a href="#resultsetnextbatchargs">ResultSetNextBatchArgs</a></code> |

**Returns:** <code>any</code>

--------------------


### ResultSet_AllResults(...)

```typescript
ResultSet_AllResults(args: ResultSetAllResultsArgs, callback: PluginCallback) => any
```

| Param          | Type                                                                        |
| -------------- | --------------------------------------------------------------------------- |
| **`args`**     | <code><a href="#resultsetallresultsargs">ResultSetAllResultsArgs</a></code> |
| **`callback`** | <code>(data: PluginResultData, error?: PluginResultError) =&gt; void</code> |

**Returns:** <code>any</code>

--------------------


### ResultSet_Cleanup(...)

```typescript
ResultSet_Cleanup(args: ResultSetCleanupArgs) => any
```

| Param      | Type                                                                  |
| ---------- | --------------------------------------------------------------------- |
| **`args`** | <code><a href="#resultsetcleanupargs">ResultSetCleanupArgs</a></code> |

**Returns:** <code>any</code>

--------------------


### Replicator_Create(...)

```typescript
Replicator_Create(args: ReplicatorCreateArgs) => any
```

| Param      | Type                                                                  |
| ---------- | --------------------------------------------------------------------- |
| **`args`** | <code><a href="#replicatorcreateargs">ReplicatorCreateArgs</a></code> |

**Returns:** <code>any</code>

--------------------


### Replicator_Start(...)

```typescript
Replicator_Start(args: ReplicatorArgs) => any
```

| Param      | Type                                                      |
| ---------- | --------------------------------------------------------- |
| **`args`** | <code><a href="#replicatorargs">ReplicatorArgs</a></code> |

**Returns:** <code>any</code>

--------------------


### Replicator_Restart(...)

```typescript
Replicator_Restart(args: ReplicatorArgs) => any
```

| Param      | Type                                                      |
| ---------- | --------------------------------------------------------- |
| **`args`** | <code><a href="#replicatorargs">ReplicatorArgs</a></code> |

**Returns:** <code>any</code>

--------------------


### Replicator_AddChangeListener(...)

```typescript
Replicator_AddChangeListener(args: ReplicatorArgs, cb: PluginCallback) => any
```

| Param      | Type                                                                        |
| ---------- | --------------------------------------------------------------------------- |
| **`args`** | <code><a href="#replicatorargs">ReplicatorArgs</a></code>                   |
| **`cb`**   | <code>(data: PluginResultData, error?: PluginResultError) =&gt; void</code> |

**Returns:** <code>any</code>

--------------------


### Replicator_AddDocumentListener(...)

```typescript
Replicator_AddDocumentListener(args: ReplicatorArgs, cb: PluginCallback) => any
```

| Param      | Type                                                                        |
| ---------- | --------------------------------------------------------------------------- |
| **`args`** | <code><a href="#replicatorargs">ReplicatorArgs</a></code>                   |
| **`cb`**   | <code>(data: PluginResultData, error?: PluginResultError) =&gt; void</code> |

**Returns:** <code>any</code>

--------------------


### Replicator_Stop(...)

```typescript
Replicator_Stop(args: ReplicatorArgs) => any
```

| Param      | Type                                                      |
| ---------- | --------------------------------------------------------- |
| **`args`** | <code><a href="#replicatorargs">ReplicatorArgs</a></code> |

**Returns:** <code>any</code>

--------------------


### Replicator_ResetCheckpoint(...)

```typescript
Replicator_ResetCheckpoint(args: ReplicatorArgs) => any
```

| Param      | Type                                                      |
| ---------- | --------------------------------------------------------- |
| **`args`** | <code><a href="#replicatorargs">ReplicatorArgs</a></code> |

**Returns:** <code>any</code>

--------------------


### Replicator_GetStatus(...)

```typescript
Replicator_GetStatus(args: ReplicatorArgs) => any
```

| Param      | Type                                                      |
| ---------- | --------------------------------------------------------- |
| **`args`** | <code><a href="#replicatorargs">ReplicatorArgs</a></code> |

**Returns:** <code>any</code>

--------------------


### Replicator_Cleanup(...)

```typescript
Replicator_Cleanup(args: ReplicatorArgs) => any
```

| Param      | Type                                                      |
| ---------- | --------------------------------------------------------- |
| **`args`** | <code><a href="#replicatorargs">ReplicatorArgs</a></code> |

**Returns:** <code>any</code>

--------------------


### Interfaces


#### PluginConfigureArgs

| Prop         | Type             |
| ------------ | ---------------- |
| **`config`** | <code>any</code> |


#### DatabaseOpenArgs

| Prop         | Type                               |
| ------------ | ---------------------------------- |
| **`config`** | <code>DatabaseConfiguration</code> |


#### DatabaseSaveArgs

| Prop           | Type                                 |
| -------------- | ------------------------------------ |
| **`id`**       | <code>string</code>                  |
| **`document`** | <code>{ [key: string]: any; }</code> |


#### DatabaseArgs

| Prop       | Type                |
| ---------- | ------------------- |
| **`name`** | <code>string</code> |


#### DatabaseCopyArgs

| Prop          | Type                               |
| ------------- | ---------------------------------- |
| **`path`**    | <code>string</code>                |
| **`newName`** | <code>string</code>                |
| **`config`**  | <code>DatabaseConfiguration</code> |


#### DatabaseCreateIndexArgs

| Prop            | Type                |
| --------------- | ------------------- |
| **`indexName`** | <code>string</code> |
| **`index`**     | <code>any</code>    |


#### DatabaseDeleteIndexArgs

| Prop            | Type                |
| --------------- | ------------------- |
| **`indexName`** | <code>string</code> |


#### DatabaseExistsArgs

| Prop             | Type                |
| ---------------- | ------------------- |
| **`existsName`** | <code>string</code> |
| **`directory`**  | <code>string</code> |


#### DatabasePurgeDocumentArgs

| Prop        | Type                |
| ----------- | ------------------- |
| **`docId`** | <code>string</code> |


#### DatabaseDeleteDocumentArgs

| Prop                     | Type                                                              |
| ------------------------ | ----------------------------------------------------------------- |
| **`docId`**              | <code>string</code>                                               |
| **`document`**           | <code>{ [key: string]: any; }</code>                              |
| **`concurrencyControl`** | <code><a href="#concurrencycontrol">ConcurrencyControl</a></code> |


#### DatabaseGetDocumentArgs

| Prop        | Type                |
| ----------- | ------------------- |
| **`docId`** | <code>string</code> |


#### PluginListenerHandle

| Prop         | Type                      |
| ------------ | ------------------------- |
| **`remove`** | <code>() =&gt; any</code> |


#### DatabaseSetLogLevelArgs

| Prop           | Type                |
| -------------- | ------------------- |
| **`domain`**   | <code>string</code> |
| **`logLevel`** | <code>number</code> |


#### DatabaseSetFileLoggingConfigArgs

| Prop         | Type                                                                                          |
| ------------ | --------------------------------------------------------------------------------------------- |
| **`config`** | <code><a href="#databasefileloggingconfiguration">DatabaseFileLoggingConfiguration</a></code> |


#### DatabaseFileLoggingConfiguration

| Prop                 | Type                 |
| -------------------- | -------------------- |
| **`level`**          | <code>number</code>  |
| **`directory`**      | <code>string</code>  |
| **`maxRotateCount`** | <code>number</code>  |
| **`maxSize`**        | <code>number</code>  |
| **`usePlaintext`**   | <code>boolean</code> |


#### DocumentGetBlobContentArgs

| Prop             | Type                |
| ---------------- | ------------------- |
| **`documentId`** | <code>string</code> |
| **`key`**        | <code>string</code> |


#### QueryExecuteArgs

| Prop              | Type                                  |
| ----------------- | ------------------------------------- |
| **`query`**       | <code>any</code>                      |
| **`columnNames`** | <code>{ [name: string]: any; }</code> |


#### ResultSetNextArgs

| Prop              | Type                |
| ----------------- | ------------------- |
| **`resultSetId`** | <code>string</code> |


#### ResultSetNextBatchArgs

| Prop              | Type                |
| ----------------- | ------------------- |
| **`resultSetId`** | <code>string</code> |


#### ResultSetAllResultsArgs

| Prop              | Type                |
| ----------------- | ------------------- |
| **`resultSetId`** | <code>string</code> |


#### ResultSetCleanupArgs

| Prop              | Type                |
| ----------------- | ------------------- |
| **`resultSetId`** | <code>string</code> |


#### ReplicatorCreateArgs

| Prop         | Type             |
| ------------ | ---------------- |
| **`config`** | <code>any</code> |


#### ReplicatorArgs

| Prop               | Type                |
| ------------------ | ------------------- |
| **`replicatorId`** | <code>string</code> |


### Enums


#### ConcurrencyControl

| Members                | Value          |
| ---------------------- | -------------- |
| **`LAST_WRITE_WINS`**  | <code>0</code> |
| **`FAIL_ON_CONFLICT`** | <code>1</code> |

</docgen-api>
