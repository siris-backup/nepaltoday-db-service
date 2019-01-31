import mongoose from 'mongoose';
import mongooseSchema from './src/database/mongooseSchema';

mongoose.connect('mongodb://localhost:27017/graphqldb');

export default {
	mongooseSchema
};
