// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { CFtemplate, CFstack } = initSchema(schema);

export {
  CFtemplate,
  CFstack
};