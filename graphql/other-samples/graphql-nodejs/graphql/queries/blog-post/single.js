import {GraphQLList, GraphQLID, GraphQLNonNull} from 'graphql';
import {Types} from 'mongoose';

import blogPostTypes from '../../types/blog-post';
import getProjection from '../../get-projection';
import BlogPostModel from '../../../models/blogPost';

export default {
    type: blogPostTypes,
    args : {
        id: {
            name: 'id',
            type : new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params, options) {
        const projection = getProjection(options.fieldASTs[0]);

        return BlogPostModel.findById(params.id).select(projection).exec();
    }
};
