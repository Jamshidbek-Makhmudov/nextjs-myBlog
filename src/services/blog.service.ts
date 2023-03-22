import { request, gql } from 'graphql-request';

import { BlogsType } from 'src/interfaces/blogs.interface';
//import { CategoryType } from 'src/interfaces/categories.interface';
const graphqlAPI=process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string 

export const BlogsService={ 
  async getAllBLogs() {
		const query = gql`
			query GetBlogs {
				blogs {
					excerpt
					id
					slug
					title
					createdAt
					image {
						url
					}
					author {
						name
						avatar {
							url
						}
					}
					category {
						label
						slug
					}
				}
			}
		`;

		const result = await request<{blogs:BlogsType[]}>(graphqlAPI, query);
		return result.blogs;
		// bu <{blogs:BlogsType[]}> typescript- yani keladigan malumot object ichida, 
		//blogs bor va uni type biz bergan interfacetypega teng ba u array korinishida degani
	},

}