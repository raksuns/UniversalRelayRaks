// @flow weak

import Persister from '../../units/urb-persister-memory/graphql/PersisterMemory'
import PersisterMongoDB from '../../units/urb-persister-mongodb/graphql/PersisterMongoDB'


const defaultPersister = new PersisterMongoDB( );
export default defaultPersister