import { SchemaContext } from './context';

/**
 * A generic schema. Note that schemas can either be single
 * entities or arrays of entities.
 *
 * See: https://schema.org/Product for an example.
 */
export type Schema<T> = SchemaContext<T> | SchemaContext<T>[];
