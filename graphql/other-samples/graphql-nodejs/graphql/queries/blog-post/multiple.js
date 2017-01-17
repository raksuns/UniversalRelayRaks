import {GraphQLList} from 'graphql';

import blogPostType from '../../types/blog-post';
import getProjection from '../../get-projection';
import BlogPostModel from '../../../models/blogPost';

export default {
    type: new GraphQLList(blogPostType),
    args: {},
    resolve(root, params, options) {
        const projection = getProjection(options.fieldsASTs[0]);

        return BlogPostModel.find().select(projection).exec();
    }
};
