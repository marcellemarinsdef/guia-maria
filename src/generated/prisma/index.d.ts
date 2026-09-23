
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model KnowledgeDocument
 * 
 */
export type KnowledgeDocument = $Result.DefaultSelection<Prisma.$KnowledgeDocumentPayload>
/**
 * Model EmbeddedChunk
 * 
 */
export type EmbeddedChunk = $Result.DefaultSelection<Prisma.$EmbeddedChunkPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more KnowledgeDocuments
 * const knowledgeDocuments = await prisma.knowledgeDocument.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more KnowledgeDocuments
   * const knowledgeDocuments = await prisma.knowledgeDocument.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.knowledgeDocument`: Exposes CRUD operations for the **KnowledgeDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KnowledgeDocuments
    * const knowledgeDocuments = await prisma.knowledgeDocument.findMany()
    * ```
    */
  get knowledgeDocument(): Prisma.KnowledgeDocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.embeddedChunk`: Exposes CRUD operations for the **EmbeddedChunk** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmbeddedChunks
    * const embeddedChunks = await prisma.embeddedChunk.findMany()
    * ```
    */
  get embeddedChunk(): Prisma.EmbeddedChunkDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    KnowledgeDocument: 'KnowledgeDocument',
    EmbeddedChunk: 'EmbeddedChunk'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "knowledgeDocument" | "embeddedChunk"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      KnowledgeDocument: {
        payload: Prisma.$KnowledgeDocumentPayload<ExtArgs>
        fields: Prisma.KnowledgeDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KnowledgeDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KnowledgeDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeDocumentPayload>
          }
          findFirst: {
            args: Prisma.KnowledgeDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KnowledgeDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeDocumentPayload>
          }
          findMany: {
            args: Prisma.KnowledgeDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeDocumentPayload>[]
          }
          create: {
            args: Prisma.KnowledgeDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeDocumentPayload>
          }
          createMany: {
            args: Prisma.KnowledgeDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KnowledgeDocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeDocumentPayload>[]
          }
          delete: {
            args: Prisma.KnowledgeDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeDocumentPayload>
          }
          update: {
            args: Prisma.KnowledgeDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeDocumentPayload>
          }
          deleteMany: {
            args: Prisma.KnowledgeDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KnowledgeDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KnowledgeDocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeDocumentPayload>[]
          }
          upsert: {
            args: Prisma.KnowledgeDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeDocumentPayload>
          }
          aggregate: {
            args: Prisma.KnowledgeDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKnowledgeDocument>
          }
          groupBy: {
            args: Prisma.KnowledgeDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<KnowledgeDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.KnowledgeDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<KnowledgeDocumentCountAggregateOutputType> | number
          }
        }
      }
      EmbeddedChunk: {
        payload: Prisma.$EmbeddedChunkPayload<ExtArgs>
        fields: Prisma.EmbeddedChunkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmbeddedChunkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbeddedChunkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmbeddedChunkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbeddedChunkPayload>
          }
          findFirst: {
            args: Prisma.EmbeddedChunkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbeddedChunkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmbeddedChunkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbeddedChunkPayload>
          }
          findMany: {
            args: Prisma.EmbeddedChunkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbeddedChunkPayload>[]
          }
          create: {
            args: Prisma.EmbeddedChunkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbeddedChunkPayload>
          }
          createMany: {
            args: Prisma.EmbeddedChunkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmbeddedChunkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbeddedChunkPayload>[]
          }
          delete: {
            args: Prisma.EmbeddedChunkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbeddedChunkPayload>
          }
          update: {
            args: Prisma.EmbeddedChunkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbeddedChunkPayload>
          }
          deleteMany: {
            args: Prisma.EmbeddedChunkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmbeddedChunkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmbeddedChunkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbeddedChunkPayload>[]
          }
          upsert: {
            args: Prisma.EmbeddedChunkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbeddedChunkPayload>
          }
          aggregate: {
            args: Prisma.EmbeddedChunkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmbeddedChunk>
          }
          groupBy: {
            args: Prisma.EmbeddedChunkGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmbeddedChunkGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmbeddedChunkCountArgs<ExtArgs>
            result: $Utils.Optional<EmbeddedChunkCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    knowledgeDocument?: KnowledgeDocumentOmit
    embeddedChunk?: EmbeddedChunkOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type KnowledgeDocumentCountOutputType
   */

  export type KnowledgeDocumentCountOutputType = {
    chunks: number
  }

  export type KnowledgeDocumentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chunks?: boolean | KnowledgeDocumentCountOutputTypeCountChunksArgs
  }

  // Custom InputTypes
  /**
   * KnowledgeDocumentCountOutputType without action
   */
  export type KnowledgeDocumentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeDocumentCountOutputType
     */
    select?: KnowledgeDocumentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KnowledgeDocumentCountOutputType without action
   */
  export type KnowledgeDocumentCountOutputTypeCountChunksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmbeddedChunkWhereInput
  }


  /**
   * Models
   */

  /**
   * Model KnowledgeDocument
   */

  export type AggregateKnowledgeDocument = {
    _count: KnowledgeDocumentCountAggregateOutputType | null
    _min: KnowledgeDocumentMinAggregateOutputType | null
    _max: KnowledgeDocumentMaxAggregateOutputType | null
  }

  export type KnowledgeDocumentMinAggregateOutputType = {
    id: string | null
    documentId: string | null
    documentName: string | null
    documentType: string | null
    version: string | null
    source: string | null
    filePath: string | null
    contentHash: string | null
    embeddingModel: string | null
    indexedAt: Date | null
    updatedAt: Date | null
  }

  export type KnowledgeDocumentMaxAggregateOutputType = {
    id: string | null
    documentId: string | null
    documentName: string | null
    documentType: string | null
    version: string | null
    source: string | null
    filePath: string | null
    contentHash: string | null
    embeddingModel: string | null
    indexedAt: Date | null
    updatedAt: Date | null
  }

  export type KnowledgeDocumentCountAggregateOutputType = {
    id: number
    documentId: number
    documentName: number
    documentType: number
    version: number
    source: number
    filePath: number
    contentHash: number
    embeddingModel: number
    indexedAt: number
    updatedAt: number
    _all: number
  }


  export type KnowledgeDocumentMinAggregateInputType = {
    id?: true
    documentId?: true
    documentName?: true
    documentType?: true
    version?: true
    source?: true
    filePath?: true
    contentHash?: true
    embeddingModel?: true
    indexedAt?: true
    updatedAt?: true
  }

  export type KnowledgeDocumentMaxAggregateInputType = {
    id?: true
    documentId?: true
    documentName?: true
    documentType?: true
    version?: true
    source?: true
    filePath?: true
    contentHash?: true
    embeddingModel?: true
    indexedAt?: true
    updatedAt?: true
  }

  export type KnowledgeDocumentCountAggregateInputType = {
    id?: true
    documentId?: true
    documentName?: true
    documentType?: true
    version?: true
    source?: true
    filePath?: true
    contentHash?: true
    embeddingModel?: true
    indexedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type KnowledgeDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KnowledgeDocument to aggregate.
     */
    where?: KnowledgeDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KnowledgeDocuments to fetch.
     */
    orderBy?: KnowledgeDocumentOrderByWithRelationInput | KnowledgeDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KnowledgeDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KnowledgeDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KnowledgeDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KnowledgeDocuments
    **/
    _count?: true | KnowledgeDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KnowledgeDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KnowledgeDocumentMaxAggregateInputType
  }

  export type GetKnowledgeDocumentAggregateType<T extends KnowledgeDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateKnowledgeDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKnowledgeDocument[P]>
      : GetScalarType<T[P], AggregateKnowledgeDocument[P]>
  }




  export type KnowledgeDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KnowledgeDocumentWhereInput
    orderBy?: KnowledgeDocumentOrderByWithAggregationInput | KnowledgeDocumentOrderByWithAggregationInput[]
    by: KnowledgeDocumentScalarFieldEnum[] | KnowledgeDocumentScalarFieldEnum
    having?: KnowledgeDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KnowledgeDocumentCountAggregateInputType | true
    _min?: KnowledgeDocumentMinAggregateInputType
    _max?: KnowledgeDocumentMaxAggregateInputType
  }

  export type KnowledgeDocumentGroupByOutputType = {
    id: string
    documentId: string
    documentName: string
    documentType: string
    version: string
    source: string
    filePath: string
    contentHash: string
    embeddingModel: string
    indexedAt: Date
    updatedAt: Date
    _count: KnowledgeDocumentCountAggregateOutputType | null
    _min: KnowledgeDocumentMinAggregateOutputType | null
    _max: KnowledgeDocumentMaxAggregateOutputType | null
  }

  type GetKnowledgeDocumentGroupByPayload<T extends KnowledgeDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KnowledgeDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KnowledgeDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KnowledgeDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], KnowledgeDocumentGroupByOutputType[P]>
        }
      >
    >


  export type KnowledgeDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    documentName?: boolean
    documentType?: boolean
    version?: boolean
    source?: boolean
    filePath?: boolean
    contentHash?: boolean
    embeddingModel?: boolean
    indexedAt?: boolean
    updatedAt?: boolean
    chunks?: boolean | KnowledgeDocument$chunksArgs<ExtArgs>
    _count?: boolean | KnowledgeDocumentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["knowledgeDocument"]>

  export type KnowledgeDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    documentName?: boolean
    documentType?: boolean
    version?: boolean
    source?: boolean
    filePath?: boolean
    contentHash?: boolean
    embeddingModel?: boolean
    indexedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["knowledgeDocument"]>

  export type KnowledgeDocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    documentName?: boolean
    documentType?: boolean
    version?: boolean
    source?: boolean
    filePath?: boolean
    contentHash?: boolean
    embeddingModel?: boolean
    indexedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["knowledgeDocument"]>

  export type KnowledgeDocumentSelectScalar = {
    id?: boolean
    documentId?: boolean
    documentName?: boolean
    documentType?: boolean
    version?: boolean
    source?: boolean
    filePath?: boolean
    contentHash?: boolean
    embeddingModel?: boolean
    indexedAt?: boolean
    updatedAt?: boolean
  }

  export type KnowledgeDocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documentId" | "documentName" | "documentType" | "version" | "source" | "filePath" | "contentHash" | "embeddingModel" | "indexedAt" | "updatedAt", ExtArgs["result"]["knowledgeDocument"]>
  export type KnowledgeDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chunks?: boolean | KnowledgeDocument$chunksArgs<ExtArgs>
    _count?: boolean | KnowledgeDocumentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type KnowledgeDocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type KnowledgeDocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $KnowledgeDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KnowledgeDocument"
    objects: {
      chunks: Prisma.$EmbeddedChunkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      documentId: string
      documentName: string
      documentType: string
      version: string
      source: string
      filePath: string
      contentHash: string
      embeddingModel: string
      indexedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["knowledgeDocument"]>
    composites: {}
  }

  type KnowledgeDocumentGetPayload<S extends boolean | null | undefined | KnowledgeDocumentDefaultArgs> = $Result.GetResult<Prisma.$KnowledgeDocumentPayload, S>

  type KnowledgeDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KnowledgeDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KnowledgeDocumentCountAggregateInputType | true
    }

  export interface KnowledgeDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KnowledgeDocument'], meta: { name: 'KnowledgeDocument' } }
    /**
     * Find zero or one KnowledgeDocument that matches the filter.
     * @param {KnowledgeDocumentFindUniqueArgs} args - Arguments to find a KnowledgeDocument
     * @example
     * // Get one KnowledgeDocument
     * const knowledgeDocument = await prisma.knowledgeDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KnowledgeDocumentFindUniqueArgs>(args: SelectSubset<T, KnowledgeDocumentFindUniqueArgs<ExtArgs>>): Prisma__KnowledgeDocumentClient<$Result.GetResult<Prisma.$KnowledgeDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one KnowledgeDocument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KnowledgeDocumentFindUniqueOrThrowArgs} args - Arguments to find a KnowledgeDocument
     * @example
     * // Get one KnowledgeDocument
     * const knowledgeDocument = await prisma.knowledgeDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KnowledgeDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, KnowledgeDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KnowledgeDocumentClient<$Result.GetResult<Prisma.$KnowledgeDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KnowledgeDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeDocumentFindFirstArgs} args - Arguments to find a KnowledgeDocument
     * @example
     * // Get one KnowledgeDocument
     * const knowledgeDocument = await prisma.knowledgeDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KnowledgeDocumentFindFirstArgs>(args?: SelectSubset<T, KnowledgeDocumentFindFirstArgs<ExtArgs>>): Prisma__KnowledgeDocumentClient<$Result.GetResult<Prisma.$KnowledgeDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KnowledgeDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeDocumentFindFirstOrThrowArgs} args - Arguments to find a KnowledgeDocument
     * @example
     * // Get one KnowledgeDocument
     * const knowledgeDocument = await prisma.knowledgeDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KnowledgeDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, KnowledgeDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__KnowledgeDocumentClient<$Result.GetResult<Prisma.$KnowledgeDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more KnowledgeDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KnowledgeDocuments
     * const knowledgeDocuments = await prisma.knowledgeDocument.findMany()
     * 
     * // Get first 10 KnowledgeDocuments
     * const knowledgeDocuments = await prisma.knowledgeDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const knowledgeDocumentWithIdOnly = await prisma.knowledgeDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KnowledgeDocumentFindManyArgs>(args?: SelectSubset<T, KnowledgeDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KnowledgeDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a KnowledgeDocument.
     * @param {KnowledgeDocumentCreateArgs} args - Arguments to create a KnowledgeDocument.
     * @example
     * // Create one KnowledgeDocument
     * const KnowledgeDocument = await prisma.knowledgeDocument.create({
     *   data: {
     *     // ... data to create a KnowledgeDocument
     *   }
     * })
     * 
     */
    create<T extends KnowledgeDocumentCreateArgs>(args: SelectSubset<T, KnowledgeDocumentCreateArgs<ExtArgs>>): Prisma__KnowledgeDocumentClient<$Result.GetResult<Prisma.$KnowledgeDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many KnowledgeDocuments.
     * @param {KnowledgeDocumentCreateManyArgs} args - Arguments to create many KnowledgeDocuments.
     * @example
     * // Create many KnowledgeDocuments
     * const knowledgeDocument = await prisma.knowledgeDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KnowledgeDocumentCreateManyArgs>(args?: SelectSubset<T, KnowledgeDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many KnowledgeDocuments and returns the data saved in the database.
     * @param {KnowledgeDocumentCreateManyAndReturnArgs} args - Arguments to create many KnowledgeDocuments.
     * @example
     * // Create many KnowledgeDocuments
     * const knowledgeDocument = await prisma.knowledgeDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many KnowledgeDocuments and only return the `id`
     * const knowledgeDocumentWithIdOnly = await prisma.knowledgeDocument.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KnowledgeDocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, KnowledgeDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KnowledgeDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a KnowledgeDocument.
     * @param {KnowledgeDocumentDeleteArgs} args - Arguments to delete one KnowledgeDocument.
     * @example
     * // Delete one KnowledgeDocument
     * const KnowledgeDocument = await prisma.knowledgeDocument.delete({
     *   where: {
     *     // ... filter to delete one KnowledgeDocument
     *   }
     * })
     * 
     */
    delete<T extends KnowledgeDocumentDeleteArgs>(args: SelectSubset<T, KnowledgeDocumentDeleteArgs<ExtArgs>>): Prisma__KnowledgeDocumentClient<$Result.GetResult<Prisma.$KnowledgeDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one KnowledgeDocument.
     * @param {KnowledgeDocumentUpdateArgs} args - Arguments to update one KnowledgeDocument.
     * @example
     * // Update one KnowledgeDocument
     * const knowledgeDocument = await prisma.knowledgeDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KnowledgeDocumentUpdateArgs>(args: SelectSubset<T, KnowledgeDocumentUpdateArgs<ExtArgs>>): Prisma__KnowledgeDocumentClient<$Result.GetResult<Prisma.$KnowledgeDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more KnowledgeDocuments.
     * @param {KnowledgeDocumentDeleteManyArgs} args - Arguments to filter KnowledgeDocuments to delete.
     * @example
     * // Delete a few KnowledgeDocuments
     * const { count } = await prisma.knowledgeDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KnowledgeDocumentDeleteManyArgs>(args?: SelectSubset<T, KnowledgeDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KnowledgeDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KnowledgeDocuments
     * const knowledgeDocument = await prisma.knowledgeDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KnowledgeDocumentUpdateManyArgs>(args: SelectSubset<T, KnowledgeDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KnowledgeDocuments and returns the data updated in the database.
     * @param {KnowledgeDocumentUpdateManyAndReturnArgs} args - Arguments to update many KnowledgeDocuments.
     * @example
     * // Update many KnowledgeDocuments
     * const knowledgeDocument = await prisma.knowledgeDocument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more KnowledgeDocuments and only return the `id`
     * const knowledgeDocumentWithIdOnly = await prisma.knowledgeDocument.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KnowledgeDocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, KnowledgeDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KnowledgeDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one KnowledgeDocument.
     * @param {KnowledgeDocumentUpsertArgs} args - Arguments to update or create a KnowledgeDocument.
     * @example
     * // Update or create a KnowledgeDocument
     * const knowledgeDocument = await prisma.knowledgeDocument.upsert({
     *   create: {
     *     // ... data to create a KnowledgeDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KnowledgeDocument we want to update
     *   }
     * })
     */
    upsert<T extends KnowledgeDocumentUpsertArgs>(args: SelectSubset<T, KnowledgeDocumentUpsertArgs<ExtArgs>>): Prisma__KnowledgeDocumentClient<$Result.GetResult<Prisma.$KnowledgeDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of KnowledgeDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeDocumentCountArgs} args - Arguments to filter KnowledgeDocuments to count.
     * @example
     * // Count the number of KnowledgeDocuments
     * const count = await prisma.knowledgeDocument.count({
     *   where: {
     *     // ... the filter for the KnowledgeDocuments we want to count
     *   }
     * })
    **/
    count<T extends KnowledgeDocumentCountArgs>(
      args?: Subset<T, KnowledgeDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KnowledgeDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KnowledgeDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KnowledgeDocumentAggregateArgs>(args: Subset<T, KnowledgeDocumentAggregateArgs>): Prisma.PrismaPromise<GetKnowledgeDocumentAggregateType<T>>

    /**
     * Group by KnowledgeDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeDocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KnowledgeDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KnowledgeDocumentGroupByArgs['orderBy'] }
        : { orderBy?: KnowledgeDocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KnowledgeDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKnowledgeDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KnowledgeDocument model
   */
  readonly fields: KnowledgeDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KnowledgeDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KnowledgeDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chunks<T extends KnowledgeDocument$chunksArgs<ExtArgs> = {}>(args?: Subset<T, KnowledgeDocument$chunksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmbeddedChunkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the KnowledgeDocument model
   */
  interface KnowledgeDocumentFieldRefs {
    readonly id: FieldRef<"KnowledgeDocument", 'String'>
    readonly documentId: FieldRef<"KnowledgeDocument", 'String'>
    readonly documentName: FieldRef<"KnowledgeDocument", 'String'>
    readonly documentType: FieldRef<"KnowledgeDocument", 'String'>
    readonly version: FieldRef<"KnowledgeDocument", 'String'>
    readonly source: FieldRef<"KnowledgeDocument", 'String'>
    readonly filePath: FieldRef<"KnowledgeDocument", 'String'>
    readonly contentHash: FieldRef<"KnowledgeDocument", 'String'>
    readonly embeddingModel: FieldRef<"KnowledgeDocument", 'String'>
    readonly indexedAt: FieldRef<"KnowledgeDocument", 'DateTime'>
    readonly updatedAt: FieldRef<"KnowledgeDocument", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * KnowledgeDocument findUnique
   */
  export type KnowledgeDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeDocument
     */
    select?: KnowledgeDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeDocument
     */
    omit?: KnowledgeDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeDocumentInclude<ExtArgs> | null
    /**
     * Filter, which KnowledgeDocument to fetch.
     */
    where: KnowledgeDocumentWhereUniqueInput
  }

  /**
   * KnowledgeDocument findUniqueOrThrow
   */
  export type KnowledgeDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeDocument
     */
    select?: KnowledgeDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeDocument
     */
    omit?: KnowledgeDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeDocumentInclude<ExtArgs> | null
    /**
     * Filter, which KnowledgeDocument to fetch.
     */
    where: KnowledgeDocumentWhereUniqueInput
  }

  /**
   * KnowledgeDocument findFirst
   */
  export type KnowledgeDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeDocument
     */
    select?: KnowledgeDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeDocument
     */
    omit?: KnowledgeDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeDocumentInclude<ExtArgs> | null
    /**
     * Filter, which KnowledgeDocument to fetch.
     */
    where?: KnowledgeDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KnowledgeDocuments to fetch.
     */
    orderBy?: KnowledgeDocumentOrderByWithRelationInput | KnowledgeDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KnowledgeDocuments.
     */
    cursor?: KnowledgeDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KnowledgeDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KnowledgeDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KnowledgeDocuments.
     */
    distinct?: KnowledgeDocumentScalarFieldEnum | KnowledgeDocumentScalarFieldEnum[]
  }

  /**
   * KnowledgeDocument findFirstOrThrow
   */
  export type KnowledgeDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeDocument
     */
    select?: KnowledgeDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeDocument
     */
    omit?: KnowledgeDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeDocumentInclude<ExtArgs> | null
    /**
     * Filter, which KnowledgeDocument to fetch.
     */
    where?: KnowledgeDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KnowledgeDocuments to fetch.
     */
    orderBy?: KnowledgeDocumentOrderByWithRelationInput | KnowledgeDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KnowledgeDocuments.
     */
    cursor?: KnowledgeDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KnowledgeDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KnowledgeDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KnowledgeDocuments.
     */
    distinct?: KnowledgeDocumentScalarFieldEnum | KnowledgeDocumentScalarFieldEnum[]
  }

  /**
   * KnowledgeDocument findMany
   */
  export type KnowledgeDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeDocument
     */
    select?: KnowledgeDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeDocument
     */
    omit?: KnowledgeDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeDocumentInclude<ExtArgs> | null
    /**
     * Filter, which KnowledgeDocuments to fetch.
     */
    where?: KnowledgeDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KnowledgeDocuments to fetch.
     */
    orderBy?: KnowledgeDocumentOrderByWithRelationInput | KnowledgeDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KnowledgeDocuments.
     */
    cursor?: KnowledgeDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KnowledgeDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KnowledgeDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KnowledgeDocuments.
     */
    distinct?: KnowledgeDocumentScalarFieldEnum | KnowledgeDocumentScalarFieldEnum[]
  }

  /**
   * KnowledgeDocument create
   */
  export type KnowledgeDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeDocument
     */
    select?: KnowledgeDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeDocument
     */
    omit?: KnowledgeDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a KnowledgeDocument.
     */
    data: XOR<KnowledgeDocumentCreateInput, KnowledgeDocumentUncheckedCreateInput>
  }

  /**
   * KnowledgeDocument createMany
   */
  export type KnowledgeDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KnowledgeDocuments.
     */
    data: KnowledgeDocumentCreateManyInput | KnowledgeDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KnowledgeDocument createManyAndReturn
   */
  export type KnowledgeDocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeDocument
     */
    select?: KnowledgeDocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeDocument
     */
    omit?: KnowledgeDocumentOmit<ExtArgs> | null
    /**
     * The data used to create many KnowledgeDocuments.
     */
    data: KnowledgeDocumentCreateManyInput | KnowledgeDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KnowledgeDocument update
   */
  export type KnowledgeDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeDocument
     */
    select?: KnowledgeDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeDocument
     */
    omit?: KnowledgeDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a KnowledgeDocument.
     */
    data: XOR<KnowledgeDocumentUpdateInput, KnowledgeDocumentUncheckedUpdateInput>
    /**
     * Choose, which KnowledgeDocument to update.
     */
    where: KnowledgeDocumentWhereUniqueInput
  }

  /**
   * KnowledgeDocument updateMany
   */
  export type KnowledgeDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KnowledgeDocuments.
     */
    data: XOR<KnowledgeDocumentUpdateManyMutationInput, KnowledgeDocumentUncheckedUpdateManyInput>
    /**
     * Filter which KnowledgeDocuments to update
     */
    where?: KnowledgeDocumentWhereInput
    /**
     * Limit how many KnowledgeDocuments to update.
     */
    limit?: number
  }

  /**
   * KnowledgeDocument updateManyAndReturn
   */
  export type KnowledgeDocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeDocument
     */
    select?: KnowledgeDocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeDocument
     */
    omit?: KnowledgeDocumentOmit<ExtArgs> | null
    /**
     * The data used to update KnowledgeDocuments.
     */
    data: XOR<KnowledgeDocumentUpdateManyMutationInput, KnowledgeDocumentUncheckedUpdateManyInput>
    /**
     * Filter which KnowledgeDocuments to update
     */
    where?: KnowledgeDocumentWhereInput
    /**
     * Limit how many KnowledgeDocuments to update.
     */
    limit?: number
  }

  /**
   * KnowledgeDocument upsert
   */
  export type KnowledgeDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeDocument
     */
    select?: KnowledgeDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeDocument
     */
    omit?: KnowledgeDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the KnowledgeDocument to update in case it exists.
     */
    where: KnowledgeDocumentWhereUniqueInput
    /**
     * In case the KnowledgeDocument found by the `where` argument doesn't exist, create a new KnowledgeDocument with this data.
     */
    create: XOR<KnowledgeDocumentCreateInput, KnowledgeDocumentUncheckedCreateInput>
    /**
     * In case the KnowledgeDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KnowledgeDocumentUpdateInput, KnowledgeDocumentUncheckedUpdateInput>
  }

  /**
   * KnowledgeDocument delete
   */
  export type KnowledgeDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeDocument
     */
    select?: KnowledgeDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeDocument
     */
    omit?: KnowledgeDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeDocumentInclude<ExtArgs> | null
    /**
     * Filter which KnowledgeDocument to delete.
     */
    where: KnowledgeDocumentWhereUniqueInput
  }

  /**
   * KnowledgeDocument deleteMany
   */
  export type KnowledgeDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KnowledgeDocuments to delete
     */
    where?: KnowledgeDocumentWhereInput
    /**
     * Limit how many KnowledgeDocuments to delete.
     */
    limit?: number
  }

  /**
   * KnowledgeDocument.chunks
   */
  export type KnowledgeDocument$chunksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbeddedChunk
     */
    select?: EmbeddedChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmbeddedChunk
     */
    omit?: EmbeddedChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbeddedChunkInclude<ExtArgs> | null
    where?: EmbeddedChunkWhereInput
    orderBy?: EmbeddedChunkOrderByWithRelationInput | EmbeddedChunkOrderByWithRelationInput[]
    cursor?: EmbeddedChunkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmbeddedChunkScalarFieldEnum | EmbeddedChunkScalarFieldEnum[]
  }

  /**
   * KnowledgeDocument without action
   */
  export type KnowledgeDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeDocument
     */
    select?: KnowledgeDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeDocument
     */
    omit?: KnowledgeDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeDocumentInclude<ExtArgs> | null
  }


  /**
   * Model EmbeddedChunk
   */

  export type AggregateEmbeddedChunk = {
    _count: EmbeddedChunkCountAggregateOutputType | null
    _min: EmbeddedChunkMinAggregateOutputType | null
    _max: EmbeddedChunkMaxAggregateOutputType | null
  }

  export type EmbeddedChunkMinAggregateOutputType = {
    id: string | null
    contentHash: string | null
    embeddingModel: string | null
    documentId: string | null
  }

  export type EmbeddedChunkMaxAggregateOutputType = {
    id: string | null
    contentHash: string | null
    embeddingModel: string | null
    documentId: string | null
  }

  export type EmbeddedChunkCountAggregateOutputType = {
    id: number
    contentHash: number
    embeddingModel: number
    documentId: number
    _all: number
  }


  export type EmbeddedChunkMinAggregateInputType = {
    id?: true
    contentHash?: true
    embeddingModel?: true
    documentId?: true
  }

  export type EmbeddedChunkMaxAggregateInputType = {
    id?: true
    contentHash?: true
    embeddingModel?: true
    documentId?: true
  }

  export type EmbeddedChunkCountAggregateInputType = {
    id?: true
    contentHash?: true
    embeddingModel?: true
    documentId?: true
    _all?: true
  }

  export type EmbeddedChunkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmbeddedChunk to aggregate.
     */
    where?: EmbeddedChunkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmbeddedChunks to fetch.
     */
    orderBy?: EmbeddedChunkOrderByWithRelationInput | EmbeddedChunkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmbeddedChunkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmbeddedChunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmbeddedChunks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmbeddedChunks
    **/
    _count?: true | EmbeddedChunkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmbeddedChunkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmbeddedChunkMaxAggregateInputType
  }

  export type GetEmbeddedChunkAggregateType<T extends EmbeddedChunkAggregateArgs> = {
        [P in keyof T & keyof AggregateEmbeddedChunk]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmbeddedChunk[P]>
      : GetScalarType<T[P], AggregateEmbeddedChunk[P]>
  }




  export type EmbeddedChunkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmbeddedChunkWhereInput
    orderBy?: EmbeddedChunkOrderByWithAggregationInput | EmbeddedChunkOrderByWithAggregationInput[]
    by: EmbeddedChunkScalarFieldEnum[] | EmbeddedChunkScalarFieldEnum
    having?: EmbeddedChunkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmbeddedChunkCountAggregateInputType | true
    _min?: EmbeddedChunkMinAggregateInputType
    _max?: EmbeddedChunkMaxAggregateInputType
  }

  export type EmbeddedChunkGroupByOutputType = {
    id: string
    contentHash: string
    embeddingModel: string
    documentId: string
    _count: EmbeddedChunkCountAggregateOutputType | null
    _min: EmbeddedChunkMinAggregateOutputType | null
    _max: EmbeddedChunkMaxAggregateOutputType | null
  }

  type GetEmbeddedChunkGroupByPayload<T extends EmbeddedChunkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmbeddedChunkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmbeddedChunkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmbeddedChunkGroupByOutputType[P]>
            : GetScalarType<T[P], EmbeddedChunkGroupByOutputType[P]>
        }
      >
    >


  export type EmbeddedChunkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contentHash?: boolean
    embeddingModel?: boolean
    documentId?: boolean
    document?: boolean | KnowledgeDocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["embeddedChunk"]>

  export type EmbeddedChunkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contentHash?: boolean
    embeddingModel?: boolean
    documentId?: boolean
    document?: boolean | KnowledgeDocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["embeddedChunk"]>

  export type EmbeddedChunkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contentHash?: boolean
    embeddingModel?: boolean
    documentId?: boolean
    document?: boolean | KnowledgeDocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["embeddedChunk"]>

  export type EmbeddedChunkSelectScalar = {
    id?: boolean
    contentHash?: boolean
    embeddingModel?: boolean
    documentId?: boolean
  }

  export type EmbeddedChunkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contentHash" | "embeddingModel" | "documentId", ExtArgs["result"]["embeddedChunk"]>
  export type EmbeddedChunkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | KnowledgeDocumentDefaultArgs<ExtArgs>
  }
  export type EmbeddedChunkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | KnowledgeDocumentDefaultArgs<ExtArgs>
  }
  export type EmbeddedChunkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | KnowledgeDocumentDefaultArgs<ExtArgs>
  }

  export type $EmbeddedChunkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmbeddedChunk"
    objects: {
      document: Prisma.$KnowledgeDocumentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contentHash: string
      embeddingModel: string
      documentId: string
    }, ExtArgs["result"]["embeddedChunk"]>
    composites: {}
  }

  type EmbeddedChunkGetPayload<S extends boolean | null | undefined | EmbeddedChunkDefaultArgs> = $Result.GetResult<Prisma.$EmbeddedChunkPayload, S>

  type EmbeddedChunkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmbeddedChunkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmbeddedChunkCountAggregateInputType | true
    }

  export interface EmbeddedChunkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmbeddedChunk'], meta: { name: 'EmbeddedChunk' } }
    /**
     * Find zero or one EmbeddedChunk that matches the filter.
     * @param {EmbeddedChunkFindUniqueArgs} args - Arguments to find a EmbeddedChunk
     * @example
     * // Get one EmbeddedChunk
     * const embeddedChunk = await prisma.embeddedChunk.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmbeddedChunkFindUniqueArgs>(args: SelectSubset<T, EmbeddedChunkFindUniqueArgs<ExtArgs>>): Prisma__EmbeddedChunkClient<$Result.GetResult<Prisma.$EmbeddedChunkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmbeddedChunk that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmbeddedChunkFindUniqueOrThrowArgs} args - Arguments to find a EmbeddedChunk
     * @example
     * // Get one EmbeddedChunk
     * const embeddedChunk = await prisma.embeddedChunk.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmbeddedChunkFindUniqueOrThrowArgs>(args: SelectSubset<T, EmbeddedChunkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmbeddedChunkClient<$Result.GetResult<Prisma.$EmbeddedChunkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmbeddedChunk that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbeddedChunkFindFirstArgs} args - Arguments to find a EmbeddedChunk
     * @example
     * // Get one EmbeddedChunk
     * const embeddedChunk = await prisma.embeddedChunk.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmbeddedChunkFindFirstArgs>(args?: SelectSubset<T, EmbeddedChunkFindFirstArgs<ExtArgs>>): Prisma__EmbeddedChunkClient<$Result.GetResult<Prisma.$EmbeddedChunkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmbeddedChunk that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbeddedChunkFindFirstOrThrowArgs} args - Arguments to find a EmbeddedChunk
     * @example
     * // Get one EmbeddedChunk
     * const embeddedChunk = await prisma.embeddedChunk.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmbeddedChunkFindFirstOrThrowArgs>(args?: SelectSubset<T, EmbeddedChunkFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmbeddedChunkClient<$Result.GetResult<Prisma.$EmbeddedChunkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmbeddedChunks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbeddedChunkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmbeddedChunks
     * const embeddedChunks = await prisma.embeddedChunk.findMany()
     * 
     * // Get first 10 EmbeddedChunks
     * const embeddedChunks = await prisma.embeddedChunk.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const embeddedChunkWithIdOnly = await prisma.embeddedChunk.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmbeddedChunkFindManyArgs>(args?: SelectSubset<T, EmbeddedChunkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmbeddedChunkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmbeddedChunk.
     * @param {EmbeddedChunkCreateArgs} args - Arguments to create a EmbeddedChunk.
     * @example
     * // Create one EmbeddedChunk
     * const EmbeddedChunk = await prisma.embeddedChunk.create({
     *   data: {
     *     // ... data to create a EmbeddedChunk
     *   }
     * })
     * 
     */
    create<T extends EmbeddedChunkCreateArgs>(args: SelectSubset<T, EmbeddedChunkCreateArgs<ExtArgs>>): Prisma__EmbeddedChunkClient<$Result.GetResult<Prisma.$EmbeddedChunkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmbeddedChunks.
     * @param {EmbeddedChunkCreateManyArgs} args - Arguments to create many EmbeddedChunks.
     * @example
     * // Create many EmbeddedChunks
     * const embeddedChunk = await prisma.embeddedChunk.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmbeddedChunkCreateManyArgs>(args?: SelectSubset<T, EmbeddedChunkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmbeddedChunks and returns the data saved in the database.
     * @param {EmbeddedChunkCreateManyAndReturnArgs} args - Arguments to create many EmbeddedChunks.
     * @example
     * // Create many EmbeddedChunks
     * const embeddedChunk = await prisma.embeddedChunk.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmbeddedChunks and only return the `id`
     * const embeddedChunkWithIdOnly = await prisma.embeddedChunk.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmbeddedChunkCreateManyAndReturnArgs>(args?: SelectSubset<T, EmbeddedChunkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmbeddedChunkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmbeddedChunk.
     * @param {EmbeddedChunkDeleteArgs} args - Arguments to delete one EmbeddedChunk.
     * @example
     * // Delete one EmbeddedChunk
     * const EmbeddedChunk = await prisma.embeddedChunk.delete({
     *   where: {
     *     // ... filter to delete one EmbeddedChunk
     *   }
     * })
     * 
     */
    delete<T extends EmbeddedChunkDeleteArgs>(args: SelectSubset<T, EmbeddedChunkDeleteArgs<ExtArgs>>): Prisma__EmbeddedChunkClient<$Result.GetResult<Prisma.$EmbeddedChunkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmbeddedChunk.
     * @param {EmbeddedChunkUpdateArgs} args - Arguments to update one EmbeddedChunk.
     * @example
     * // Update one EmbeddedChunk
     * const embeddedChunk = await prisma.embeddedChunk.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmbeddedChunkUpdateArgs>(args: SelectSubset<T, EmbeddedChunkUpdateArgs<ExtArgs>>): Prisma__EmbeddedChunkClient<$Result.GetResult<Prisma.$EmbeddedChunkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmbeddedChunks.
     * @param {EmbeddedChunkDeleteManyArgs} args - Arguments to filter EmbeddedChunks to delete.
     * @example
     * // Delete a few EmbeddedChunks
     * const { count } = await prisma.embeddedChunk.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmbeddedChunkDeleteManyArgs>(args?: SelectSubset<T, EmbeddedChunkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmbeddedChunks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbeddedChunkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmbeddedChunks
     * const embeddedChunk = await prisma.embeddedChunk.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmbeddedChunkUpdateManyArgs>(args: SelectSubset<T, EmbeddedChunkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmbeddedChunks and returns the data updated in the database.
     * @param {EmbeddedChunkUpdateManyAndReturnArgs} args - Arguments to update many EmbeddedChunks.
     * @example
     * // Update many EmbeddedChunks
     * const embeddedChunk = await prisma.embeddedChunk.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmbeddedChunks and only return the `id`
     * const embeddedChunkWithIdOnly = await prisma.embeddedChunk.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmbeddedChunkUpdateManyAndReturnArgs>(args: SelectSubset<T, EmbeddedChunkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmbeddedChunkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmbeddedChunk.
     * @param {EmbeddedChunkUpsertArgs} args - Arguments to update or create a EmbeddedChunk.
     * @example
     * // Update or create a EmbeddedChunk
     * const embeddedChunk = await prisma.embeddedChunk.upsert({
     *   create: {
     *     // ... data to create a EmbeddedChunk
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmbeddedChunk we want to update
     *   }
     * })
     */
    upsert<T extends EmbeddedChunkUpsertArgs>(args: SelectSubset<T, EmbeddedChunkUpsertArgs<ExtArgs>>): Prisma__EmbeddedChunkClient<$Result.GetResult<Prisma.$EmbeddedChunkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmbeddedChunks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbeddedChunkCountArgs} args - Arguments to filter EmbeddedChunks to count.
     * @example
     * // Count the number of EmbeddedChunks
     * const count = await prisma.embeddedChunk.count({
     *   where: {
     *     // ... the filter for the EmbeddedChunks we want to count
     *   }
     * })
    **/
    count<T extends EmbeddedChunkCountArgs>(
      args?: Subset<T, EmbeddedChunkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmbeddedChunkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmbeddedChunk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbeddedChunkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmbeddedChunkAggregateArgs>(args: Subset<T, EmbeddedChunkAggregateArgs>): Prisma.PrismaPromise<GetEmbeddedChunkAggregateType<T>>

    /**
     * Group by EmbeddedChunk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbeddedChunkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmbeddedChunkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmbeddedChunkGroupByArgs['orderBy'] }
        : { orderBy?: EmbeddedChunkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmbeddedChunkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmbeddedChunkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmbeddedChunk model
   */
  readonly fields: EmbeddedChunkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmbeddedChunk.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmbeddedChunkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document<T extends KnowledgeDocumentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KnowledgeDocumentDefaultArgs<ExtArgs>>): Prisma__KnowledgeDocumentClient<$Result.GetResult<Prisma.$KnowledgeDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmbeddedChunk model
   */
  interface EmbeddedChunkFieldRefs {
    readonly id: FieldRef<"EmbeddedChunk", 'String'>
    readonly contentHash: FieldRef<"EmbeddedChunk", 'String'>
    readonly embeddingModel: FieldRef<"EmbeddedChunk", 'String'>
    readonly documentId: FieldRef<"EmbeddedChunk", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EmbeddedChunk findUnique
   */
  export type EmbeddedChunkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbeddedChunk
     */
    select?: EmbeddedChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmbeddedChunk
     */
    omit?: EmbeddedChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbeddedChunkInclude<ExtArgs> | null
    /**
     * Filter, which EmbeddedChunk to fetch.
     */
    where: EmbeddedChunkWhereUniqueInput
  }

  /**
   * EmbeddedChunk findUniqueOrThrow
   */
  export type EmbeddedChunkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbeddedChunk
     */
    select?: EmbeddedChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmbeddedChunk
     */
    omit?: EmbeddedChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbeddedChunkInclude<ExtArgs> | null
    /**
     * Filter, which EmbeddedChunk to fetch.
     */
    where: EmbeddedChunkWhereUniqueInput
  }

  /**
   * EmbeddedChunk findFirst
   */
  export type EmbeddedChunkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbeddedChunk
     */
    select?: EmbeddedChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmbeddedChunk
     */
    omit?: EmbeddedChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbeddedChunkInclude<ExtArgs> | null
    /**
     * Filter, which EmbeddedChunk to fetch.
     */
    where?: EmbeddedChunkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmbeddedChunks to fetch.
     */
    orderBy?: EmbeddedChunkOrderByWithRelationInput | EmbeddedChunkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmbeddedChunks.
     */
    cursor?: EmbeddedChunkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmbeddedChunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmbeddedChunks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmbeddedChunks.
     */
    distinct?: EmbeddedChunkScalarFieldEnum | EmbeddedChunkScalarFieldEnum[]
  }

  /**
   * EmbeddedChunk findFirstOrThrow
   */
  export type EmbeddedChunkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbeddedChunk
     */
    select?: EmbeddedChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmbeddedChunk
     */
    omit?: EmbeddedChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbeddedChunkInclude<ExtArgs> | null
    /**
     * Filter, which EmbeddedChunk to fetch.
     */
    where?: EmbeddedChunkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmbeddedChunks to fetch.
     */
    orderBy?: EmbeddedChunkOrderByWithRelationInput | EmbeddedChunkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmbeddedChunks.
     */
    cursor?: EmbeddedChunkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmbeddedChunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmbeddedChunks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmbeddedChunks.
     */
    distinct?: EmbeddedChunkScalarFieldEnum | EmbeddedChunkScalarFieldEnum[]
  }

  /**
   * EmbeddedChunk findMany
   */
  export type EmbeddedChunkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbeddedChunk
     */
    select?: EmbeddedChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmbeddedChunk
     */
    omit?: EmbeddedChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbeddedChunkInclude<ExtArgs> | null
    /**
     * Filter, which EmbeddedChunks to fetch.
     */
    where?: EmbeddedChunkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmbeddedChunks to fetch.
     */
    orderBy?: EmbeddedChunkOrderByWithRelationInput | EmbeddedChunkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmbeddedChunks.
     */
    cursor?: EmbeddedChunkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmbeddedChunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmbeddedChunks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmbeddedChunks.
     */
    distinct?: EmbeddedChunkScalarFieldEnum | EmbeddedChunkScalarFieldEnum[]
  }

  /**
   * EmbeddedChunk create
   */
  export type EmbeddedChunkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbeddedChunk
     */
    select?: EmbeddedChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmbeddedChunk
     */
    omit?: EmbeddedChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbeddedChunkInclude<ExtArgs> | null
    /**
     * The data needed to create a EmbeddedChunk.
     */
    data: XOR<EmbeddedChunkCreateInput, EmbeddedChunkUncheckedCreateInput>
  }

  /**
   * EmbeddedChunk createMany
   */
  export type EmbeddedChunkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmbeddedChunks.
     */
    data: EmbeddedChunkCreateManyInput | EmbeddedChunkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmbeddedChunk createManyAndReturn
   */
  export type EmbeddedChunkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbeddedChunk
     */
    select?: EmbeddedChunkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmbeddedChunk
     */
    omit?: EmbeddedChunkOmit<ExtArgs> | null
    /**
     * The data used to create many EmbeddedChunks.
     */
    data: EmbeddedChunkCreateManyInput | EmbeddedChunkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbeddedChunkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmbeddedChunk update
   */
  export type EmbeddedChunkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbeddedChunk
     */
    select?: EmbeddedChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmbeddedChunk
     */
    omit?: EmbeddedChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbeddedChunkInclude<ExtArgs> | null
    /**
     * The data needed to update a EmbeddedChunk.
     */
    data: XOR<EmbeddedChunkUpdateInput, EmbeddedChunkUncheckedUpdateInput>
    /**
     * Choose, which EmbeddedChunk to update.
     */
    where: EmbeddedChunkWhereUniqueInput
  }

  /**
   * EmbeddedChunk updateMany
   */
  export type EmbeddedChunkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmbeddedChunks.
     */
    data: XOR<EmbeddedChunkUpdateManyMutationInput, EmbeddedChunkUncheckedUpdateManyInput>
    /**
     * Filter which EmbeddedChunks to update
     */
    where?: EmbeddedChunkWhereInput
    /**
     * Limit how many EmbeddedChunks to update.
     */
    limit?: number
  }

  /**
   * EmbeddedChunk updateManyAndReturn
   */
  export type EmbeddedChunkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbeddedChunk
     */
    select?: EmbeddedChunkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmbeddedChunk
     */
    omit?: EmbeddedChunkOmit<ExtArgs> | null
    /**
     * The data used to update EmbeddedChunks.
     */
    data: XOR<EmbeddedChunkUpdateManyMutationInput, EmbeddedChunkUncheckedUpdateManyInput>
    /**
     * Filter which EmbeddedChunks to update
     */
    where?: EmbeddedChunkWhereInput
    /**
     * Limit how many EmbeddedChunks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbeddedChunkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmbeddedChunk upsert
   */
  export type EmbeddedChunkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbeddedChunk
     */
    select?: EmbeddedChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmbeddedChunk
     */
    omit?: EmbeddedChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbeddedChunkInclude<ExtArgs> | null
    /**
     * The filter to search for the EmbeddedChunk to update in case it exists.
     */
    where: EmbeddedChunkWhereUniqueInput
    /**
     * In case the EmbeddedChunk found by the `where` argument doesn't exist, create a new EmbeddedChunk with this data.
     */
    create: XOR<EmbeddedChunkCreateInput, EmbeddedChunkUncheckedCreateInput>
    /**
     * In case the EmbeddedChunk was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmbeddedChunkUpdateInput, EmbeddedChunkUncheckedUpdateInput>
  }

  /**
   * EmbeddedChunk delete
   */
  export type EmbeddedChunkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbeddedChunk
     */
    select?: EmbeddedChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmbeddedChunk
     */
    omit?: EmbeddedChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbeddedChunkInclude<ExtArgs> | null
    /**
     * Filter which EmbeddedChunk to delete.
     */
    where: EmbeddedChunkWhereUniqueInput
  }

  /**
   * EmbeddedChunk deleteMany
   */
  export type EmbeddedChunkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmbeddedChunks to delete
     */
    where?: EmbeddedChunkWhereInput
    /**
     * Limit how many EmbeddedChunks to delete.
     */
    limit?: number
  }

  /**
   * EmbeddedChunk without action
   */
  export type EmbeddedChunkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmbeddedChunk
     */
    select?: EmbeddedChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmbeddedChunk
     */
    omit?: EmbeddedChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbeddedChunkInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const KnowledgeDocumentScalarFieldEnum: {
    id: 'id',
    documentId: 'documentId',
    documentName: 'documentName',
    documentType: 'documentType',
    version: 'version',
    source: 'source',
    filePath: 'filePath',
    contentHash: 'contentHash',
    embeddingModel: 'embeddingModel',
    indexedAt: 'indexedAt',
    updatedAt: 'updatedAt'
  };

  export type KnowledgeDocumentScalarFieldEnum = (typeof KnowledgeDocumentScalarFieldEnum)[keyof typeof KnowledgeDocumentScalarFieldEnum]


  export const EmbeddedChunkScalarFieldEnum: {
    id: 'id',
    contentHash: 'contentHash',
    embeddingModel: 'embeddingModel',
    documentId: 'documentId'
  };

  export type EmbeddedChunkScalarFieldEnum = (typeof EmbeddedChunkScalarFieldEnum)[keyof typeof EmbeddedChunkScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type KnowledgeDocumentWhereInput = {
    AND?: KnowledgeDocumentWhereInput | KnowledgeDocumentWhereInput[]
    OR?: KnowledgeDocumentWhereInput[]
    NOT?: KnowledgeDocumentWhereInput | KnowledgeDocumentWhereInput[]
    id?: StringFilter<"KnowledgeDocument"> | string
    documentId?: StringFilter<"KnowledgeDocument"> | string
    documentName?: StringFilter<"KnowledgeDocument"> | string
    documentType?: StringFilter<"KnowledgeDocument"> | string
    version?: StringFilter<"KnowledgeDocument"> | string
    source?: StringFilter<"KnowledgeDocument"> | string
    filePath?: StringFilter<"KnowledgeDocument"> | string
    contentHash?: StringFilter<"KnowledgeDocument"> | string
    embeddingModel?: StringFilter<"KnowledgeDocument"> | string
    indexedAt?: DateTimeFilter<"KnowledgeDocument"> | Date | string
    updatedAt?: DateTimeFilter<"KnowledgeDocument"> | Date | string
    chunks?: EmbeddedChunkListRelationFilter
  }

  export type KnowledgeDocumentOrderByWithRelationInput = {
    id?: SortOrder
    documentId?: SortOrder
    documentName?: SortOrder
    documentType?: SortOrder
    version?: SortOrder
    source?: SortOrder
    filePath?: SortOrder
    contentHash?: SortOrder
    embeddingModel?: SortOrder
    indexedAt?: SortOrder
    updatedAt?: SortOrder
    chunks?: EmbeddedChunkOrderByRelationAggregateInput
  }

  export type KnowledgeDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    documentId?: string
    AND?: KnowledgeDocumentWhereInput | KnowledgeDocumentWhereInput[]
    OR?: KnowledgeDocumentWhereInput[]
    NOT?: KnowledgeDocumentWhereInput | KnowledgeDocumentWhereInput[]
    documentName?: StringFilter<"KnowledgeDocument"> | string
    documentType?: StringFilter<"KnowledgeDocument"> | string
    version?: StringFilter<"KnowledgeDocument"> | string
    source?: StringFilter<"KnowledgeDocument"> | string
    filePath?: StringFilter<"KnowledgeDocument"> | string
    contentHash?: StringFilter<"KnowledgeDocument"> | string
    embeddingModel?: StringFilter<"KnowledgeDocument"> | string
    indexedAt?: DateTimeFilter<"KnowledgeDocument"> | Date | string
    updatedAt?: DateTimeFilter<"KnowledgeDocument"> | Date | string
    chunks?: EmbeddedChunkListRelationFilter
  }, "id" | "documentId">

  export type KnowledgeDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    documentId?: SortOrder
    documentName?: SortOrder
    documentType?: SortOrder
    version?: SortOrder
    source?: SortOrder
    filePath?: SortOrder
    contentHash?: SortOrder
    embeddingModel?: SortOrder
    indexedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: KnowledgeDocumentCountOrderByAggregateInput
    _max?: KnowledgeDocumentMaxOrderByAggregateInput
    _min?: KnowledgeDocumentMinOrderByAggregateInput
  }

  export type KnowledgeDocumentScalarWhereWithAggregatesInput = {
    AND?: KnowledgeDocumentScalarWhereWithAggregatesInput | KnowledgeDocumentScalarWhereWithAggregatesInput[]
    OR?: KnowledgeDocumentScalarWhereWithAggregatesInput[]
    NOT?: KnowledgeDocumentScalarWhereWithAggregatesInput | KnowledgeDocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"KnowledgeDocument"> | string
    documentId?: StringWithAggregatesFilter<"KnowledgeDocument"> | string
    documentName?: StringWithAggregatesFilter<"KnowledgeDocument"> | string
    documentType?: StringWithAggregatesFilter<"KnowledgeDocument"> | string
    version?: StringWithAggregatesFilter<"KnowledgeDocument"> | string
    source?: StringWithAggregatesFilter<"KnowledgeDocument"> | string
    filePath?: StringWithAggregatesFilter<"KnowledgeDocument"> | string
    contentHash?: StringWithAggregatesFilter<"KnowledgeDocument"> | string
    embeddingModel?: StringWithAggregatesFilter<"KnowledgeDocument"> | string
    indexedAt?: DateTimeWithAggregatesFilter<"KnowledgeDocument"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"KnowledgeDocument"> | Date | string
  }

  export type EmbeddedChunkWhereInput = {
    AND?: EmbeddedChunkWhereInput | EmbeddedChunkWhereInput[]
    OR?: EmbeddedChunkWhereInput[]
    NOT?: EmbeddedChunkWhereInput | EmbeddedChunkWhereInput[]
    id?: StringFilter<"EmbeddedChunk"> | string
    contentHash?: StringFilter<"EmbeddedChunk"> | string
    embeddingModel?: StringFilter<"EmbeddedChunk"> | string
    documentId?: StringFilter<"EmbeddedChunk"> | string
    document?: XOR<KnowledgeDocumentScalarRelationFilter, KnowledgeDocumentWhereInput>
  }

  export type EmbeddedChunkOrderByWithRelationInput = {
    id?: SortOrder
    contentHash?: SortOrder
    embeddingModel?: SortOrder
    documentId?: SortOrder
    document?: KnowledgeDocumentOrderByWithRelationInput
  }

  export type EmbeddedChunkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    contentHash?: string
    AND?: EmbeddedChunkWhereInput | EmbeddedChunkWhereInput[]
    OR?: EmbeddedChunkWhereInput[]
    NOT?: EmbeddedChunkWhereInput | EmbeddedChunkWhereInput[]
    embeddingModel?: StringFilter<"EmbeddedChunk"> | string
    documentId?: StringFilter<"EmbeddedChunk"> | string
    document?: XOR<KnowledgeDocumentScalarRelationFilter, KnowledgeDocumentWhereInput>
  }, "id" | "contentHash">

  export type EmbeddedChunkOrderByWithAggregationInput = {
    id?: SortOrder
    contentHash?: SortOrder
    embeddingModel?: SortOrder
    documentId?: SortOrder
    _count?: EmbeddedChunkCountOrderByAggregateInput
    _max?: EmbeddedChunkMaxOrderByAggregateInput
    _min?: EmbeddedChunkMinOrderByAggregateInput
  }

  export type EmbeddedChunkScalarWhereWithAggregatesInput = {
    AND?: EmbeddedChunkScalarWhereWithAggregatesInput | EmbeddedChunkScalarWhereWithAggregatesInput[]
    OR?: EmbeddedChunkScalarWhereWithAggregatesInput[]
    NOT?: EmbeddedChunkScalarWhereWithAggregatesInput | EmbeddedChunkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmbeddedChunk"> | string
    contentHash?: StringWithAggregatesFilter<"EmbeddedChunk"> | string
    embeddingModel?: StringWithAggregatesFilter<"EmbeddedChunk"> | string
    documentId?: StringWithAggregatesFilter<"EmbeddedChunk"> | string
  }

  export type KnowledgeDocumentCreateInput = {
    id?: string
    documentId: string
    documentName: string
    documentType: string
    version: string
    source: string
    filePath: string
    contentHash: string
    embeddingModel: string
    indexedAt?: Date | string
    updatedAt?: Date | string
    chunks?: EmbeddedChunkCreateNestedManyWithoutDocumentInput
  }

  export type KnowledgeDocumentUncheckedCreateInput = {
    id?: string
    documentId: string
    documentName: string
    documentType: string
    version: string
    source: string
    filePath: string
    contentHash: string
    embeddingModel: string
    indexedAt?: Date | string
    updatedAt?: Date | string
    chunks?: EmbeddedChunkUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type KnowledgeDocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    documentName?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    contentHash?: StringFieldUpdateOperationsInput | string
    embeddingModel?: StringFieldUpdateOperationsInput | string
    indexedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chunks?: EmbeddedChunkUpdateManyWithoutDocumentNestedInput
  }

  export type KnowledgeDocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    documentName?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    contentHash?: StringFieldUpdateOperationsInput | string
    embeddingModel?: StringFieldUpdateOperationsInput | string
    indexedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chunks?: EmbeddedChunkUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type KnowledgeDocumentCreateManyInput = {
    id?: string
    documentId: string
    documentName: string
    documentType: string
    version: string
    source: string
    filePath: string
    contentHash: string
    embeddingModel: string
    indexedAt?: Date | string
    updatedAt?: Date | string
  }

  export type KnowledgeDocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    documentName?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    contentHash?: StringFieldUpdateOperationsInput | string
    embeddingModel?: StringFieldUpdateOperationsInput | string
    indexedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KnowledgeDocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    documentName?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    contentHash?: StringFieldUpdateOperationsInput | string
    embeddingModel?: StringFieldUpdateOperationsInput | string
    indexedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmbeddedChunkCreateInput = {
    id?: string
    contentHash: string
    embeddingModel: string
    document: KnowledgeDocumentCreateNestedOneWithoutChunksInput
  }

  export type EmbeddedChunkUncheckedCreateInput = {
    id?: string
    contentHash: string
    embeddingModel: string
    documentId: string
  }

  export type EmbeddedChunkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentHash?: StringFieldUpdateOperationsInput | string
    embeddingModel?: StringFieldUpdateOperationsInput | string
    document?: KnowledgeDocumentUpdateOneRequiredWithoutChunksNestedInput
  }

  export type EmbeddedChunkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentHash?: StringFieldUpdateOperationsInput | string
    embeddingModel?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
  }

  export type EmbeddedChunkCreateManyInput = {
    id?: string
    contentHash: string
    embeddingModel: string
    documentId: string
  }

  export type EmbeddedChunkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentHash?: StringFieldUpdateOperationsInput | string
    embeddingModel?: StringFieldUpdateOperationsInput | string
  }

  export type EmbeddedChunkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentHash?: StringFieldUpdateOperationsInput | string
    embeddingModel?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EmbeddedChunkListRelationFilter = {
    every?: EmbeddedChunkWhereInput
    some?: EmbeddedChunkWhereInput
    none?: EmbeddedChunkWhereInput
  }

  export type EmbeddedChunkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KnowledgeDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    documentName?: SortOrder
    documentType?: SortOrder
    version?: SortOrder
    source?: SortOrder
    filePath?: SortOrder
    contentHash?: SortOrder
    embeddingModel?: SortOrder
    indexedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KnowledgeDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    documentName?: SortOrder
    documentType?: SortOrder
    version?: SortOrder
    source?: SortOrder
    filePath?: SortOrder
    contentHash?: SortOrder
    embeddingModel?: SortOrder
    indexedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KnowledgeDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    documentName?: SortOrder
    documentType?: SortOrder
    version?: SortOrder
    source?: SortOrder
    filePath?: SortOrder
    contentHash?: SortOrder
    embeddingModel?: SortOrder
    indexedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type KnowledgeDocumentScalarRelationFilter = {
    is?: KnowledgeDocumentWhereInput
    isNot?: KnowledgeDocumentWhereInput
  }

  export type EmbeddedChunkCountOrderByAggregateInput = {
    id?: SortOrder
    contentHash?: SortOrder
    embeddingModel?: SortOrder
    documentId?: SortOrder
  }

  export type EmbeddedChunkMaxOrderByAggregateInput = {
    id?: SortOrder
    contentHash?: SortOrder
    embeddingModel?: SortOrder
    documentId?: SortOrder
  }

  export type EmbeddedChunkMinOrderByAggregateInput = {
    id?: SortOrder
    contentHash?: SortOrder
    embeddingModel?: SortOrder
    documentId?: SortOrder
  }

  export type EmbeddedChunkCreateNestedManyWithoutDocumentInput = {
    create?: XOR<EmbeddedChunkCreateWithoutDocumentInput, EmbeddedChunkUncheckedCreateWithoutDocumentInput> | EmbeddedChunkCreateWithoutDocumentInput[] | EmbeddedChunkUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: EmbeddedChunkCreateOrConnectWithoutDocumentInput | EmbeddedChunkCreateOrConnectWithoutDocumentInput[]
    createMany?: EmbeddedChunkCreateManyDocumentInputEnvelope
    connect?: EmbeddedChunkWhereUniqueInput | EmbeddedChunkWhereUniqueInput[]
  }

  export type EmbeddedChunkUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: XOR<EmbeddedChunkCreateWithoutDocumentInput, EmbeddedChunkUncheckedCreateWithoutDocumentInput> | EmbeddedChunkCreateWithoutDocumentInput[] | EmbeddedChunkUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: EmbeddedChunkCreateOrConnectWithoutDocumentInput | EmbeddedChunkCreateOrConnectWithoutDocumentInput[]
    createMany?: EmbeddedChunkCreateManyDocumentInputEnvelope
    connect?: EmbeddedChunkWhereUniqueInput | EmbeddedChunkWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EmbeddedChunkUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<EmbeddedChunkCreateWithoutDocumentInput, EmbeddedChunkUncheckedCreateWithoutDocumentInput> | EmbeddedChunkCreateWithoutDocumentInput[] | EmbeddedChunkUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: EmbeddedChunkCreateOrConnectWithoutDocumentInput | EmbeddedChunkCreateOrConnectWithoutDocumentInput[]
    upsert?: EmbeddedChunkUpsertWithWhereUniqueWithoutDocumentInput | EmbeddedChunkUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: EmbeddedChunkCreateManyDocumentInputEnvelope
    set?: EmbeddedChunkWhereUniqueInput | EmbeddedChunkWhereUniqueInput[]
    disconnect?: EmbeddedChunkWhereUniqueInput | EmbeddedChunkWhereUniqueInput[]
    delete?: EmbeddedChunkWhereUniqueInput | EmbeddedChunkWhereUniqueInput[]
    connect?: EmbeddedChunkWhereUniqueInput | EmbeddedChunkWhereUniqueInput[]
    update?: EmbeddedChunkUpdateWithWhereUniqueWithoutDocumentInput | EmbeddedChunkUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: EmbeddedChunkUpdateManyWithWhereWithoutDocumentInput | EmbeddedChunkUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: EmbeddedChunkScalarWhereInput | EmbeddedChunkScalarWhereInput[]
  }

  export type EmbeddedChunkUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<EmbeddedChunkCreateWithoutDocumentInput, EmbeddedChunkUncheckedCreateWithoutDocumentInput> | EmbeddedChunkCreateWithoutDocumentInput[] | EmbeddedChunkUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: EmbeddedChunkCreateOrConnectWithoutDocumentInput | EmbeddedChunkCreateOrConnectWithoutDocumentInput[]
    upsert?: EmbeddedChunkUpsertWithWhereUniqueWithoutDocumentInput | EmbeddedChunkUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: EmbeddedChunkCreateManyDocumentInputEnvelope
    set?: EmbeddedChunkWhereUniqueInput | EmbeddedChunkWhereUniqueInput[]
    disconnect?: EmbeddedChunkWhereUniqueInput | EmbeddedChunkWhereUniqueInput[]
    delete?: EmbeddedChunkWhereUniqueInput | EmbeddedChunkWhereUniqueInput[]
    connect?: EmbeddedChunkWhereUniqueInput | EmbeddedChunkWhereUniqueInput[]
    update?: EmbeddedChunkUpdateWithWhereUniqueWithoutDocumentInput | EmbeddedChunkUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: EmbeddedChunkUpdateManyWithWhereWithoutDocumentInput | EmbeddedChunkUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: EmbeddedChunkScalarWhereInput | EmbeddedChunkScalarWhereInput[]
  }

  export type KnowledgeDocumentCreateNestedOneWithoutChunksInput = {
    create?: XOR<KnowledgeDocumentCreateWithoutChunksInput, KnowledgeDocumentUncheckedCreateWithoutChunksInput>
    connectOrCreate?: KnowledgeDocumentCreateOrConnectWithoutChunksInput
    connect?: KnowledgeDocumentWhereUniqueInput
  }

  export type KnowledgeDocumentUpdateOneRequiredWithoutChunksNestedInput = {
    create?: XOR<KnowledgeDocumentCreateWithoutChunksInput, KnowledgeDocumentUncheckedCreateWithoutChunksInput>
    connectOrCreate?: KnowledgeDocumentCreateOrConnectWithoutChunksInput
    upsert?: KnowledgeDocumentUpsertWithoutChunksInput
    connect?: KnowledgeDocumentWhereUniqueInput
    update?: XOR<XOR<KnowledgeDocumentUpdateToOneWithWhereWithoutChunksInput, KnowledgeDocumentUpdateWithoutChunksInput>, KnowledgeDocumentUncheckedUpdateWithoutChunksInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EmbeddedChunkCreateWithoutDocumentInput = {
    id?: string
    contentHash: string
    embeddingModel: string
  }

  export type EmbeddedChunkUncheckedCreateWithoutDocumentInput = {
    id?: string
    contentHash: string
    embeddingModel: string
  }

  export type EmbeddedChunkCreateOrConnectWithoutDocumentInput = {
    where: EmbeddedChunkWhereUniqueInput
    create: XOR<EmbeddedChunkCreateWithoutDocumentInput, EmbeddedChunkUncheckedCreateWithoutDocumentInput>
  }

  export type EmbeddedChunkCreateManyDocumentInputEnvelope = {
    data: EmbeddedChunkCreateManyDocumentInput | EmbeddedChunkCreateManyDocumentInput[]
    skipDuplicates?: boolean
  }

  export type EmbeddedChunkUpsertWithWhereUniqueWithoutDocumentInput = {
    where: EmbeddedChunkWhereUniqueInput
    update: XOR<EmbeddedChunkUpdateWithoutDocumentInput, EmbeddedChunkUncheckedUpdateWithoutDocumentInput>
    create: XOR<EmbeddedChunkCreateWithoutDocumentInput, EmbeddedChunkUncheckedCreateWithoutDocumentInput>
  }

  export type EmbeddedChunkUpdateWithWhereUniqueWithoutDocumentInput = {
    where: EmbeddedChunkWhereUniqueInput
    data: XOR<EmbeddedChunkUpdateWithoutDocumentInput, EmbeddedChunkUncheckedUpdateWithoutDocumentInput>
  }

  export type EmbeddedChunkUpdateManyWithWhereWithoutDocumentInput = {
    where: EmbeddedChunkScalarWhereInput
    data: XOR<EmbeddedChunkUpdateManyMutationInput, EmbeddedChunkUncheckedUpdateManyWithoutDocumentInput>
  }

  export type EmbeddedChunkScalarWhereInput = {
    AND?: EmbeddedChunkScalarWhereInput | EmbeddedChunkScalarWhereInput[]
    OR?: EmbeddedChunkScalarWhereInput[]
    NOT?: EmbeddedChunkScalarWhereInput | EmbeddedChunkScalarWhereInput[]
    id?: StringFilter<"EmbeddedChunk"> | string
    contentHash?: StringFilter<"EmbeddedChunk"> | string
    embeddingModel?: StringFilter<"EmbeddedChunk"> | string
    documentId?: StringFilter<"EmbeddedChunk"> | string
  }

  export type KnowledgeDocumentCreateWithoutChunksInput = {
    id?: string
    documentId: string
    documentName: string
    documentType: string
    version: string
    source: string
    filePath: string
    contentHash: string
    embeddingModel: string
    indexedAt?: Date | string
    updatedAt?: Date | string
  }

  export type KnowledgeDocumentUncheckedCreateWithoutChunksInput = {
    id?: string
    documentId: string
    documentName: string
    documentType: string
    version: string
    source: string
    filePath: string
    contentHash: string
    embeddingModel: string
    indexedAt?: Date | string
    updatedAt?: Date | string
  }

  export type KnowledgeDocumentCreateOrConnectWithoutChunksInput = {
    where: KnowledgeDocumentWhereUniqueInput
    create: XOR<KnowledgeDocumentCreateWithoutChunksInput, KnowledgeDocumentUncheckedCreateWithoutChunksInput>
  }

  export type KnowledgeDocumentUpsertWithoutChunksInput = {
    update: XOR<KnowledgeDocumentUpdateWithoutChunksInput, KnowledgeDocumentUncheckedUpdateWithoutChunksInput>
    create: XOR<KnowledgeDocumentCreateWithoutChunksInput, KnowledgeDocumentUncheckedCreateWithoutChunksInput>
    where?: KnowledgeDocumentWhereInput
  }

  export type KnowledgeDocumentUpdateToOneWithWhereWithoutChunksInput = {
    where?: KnowledgeDocumentWhereInput
    data: XOR<KnowledgeDocumentUpdateWithoutChunksInput, KnowledgeDocumentUncheckedUpdateWithoutChunksInput>
  }

  export type KnowledgeDocumentUpdateWithoutChunksInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    documentName?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    contentHash?: StringFieldUpdateOperationsInput | string
    embeddingModel?: StringFieldUpdateOperationsInput | string
    indexedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KnowledgeDocumentUncheckedUpdateWithoutChunksInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    documentName?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    contentHash?: StringFieldUpdateOperationsInput | string
    embeddingModel?: StringFieldUpdateOperationsInput | string
    indexedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmbeddedChunkCreateManyDocumentInput = {
    id?: string
    contentHash: string
    embeddingModel: string
  }

  export type EmbeddedChunkUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentHash?: StringFieldUpdateOperationsInput | string
    embeddingModel?: StringFieldUpdateOperationsInput | string
  }

  export type EmbeddedChunkUncheckedUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentHash?: StringFieldUpdateOperationsInput | string
    embeddingModel?: StringFieldUpdateOperationsInput | string
  }

  export type EmbeddedChunkUncheckedUpdateManyWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentHash?: StringFieldUpdateOperationsInput | string
    embeddingModel?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}