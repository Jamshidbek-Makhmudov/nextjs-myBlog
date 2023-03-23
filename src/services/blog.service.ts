import { request, gql } from 'graphql-request';

import { BlogsType } from 'src/interfaces/blogs.interface';
import { CategoryType } from '../interfaces/categories.interface';
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
					description {
						text
					}
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
	async getLatestBlog() {
		const query = gql`
			query GetLatestBlog {
				blogs(last: 2) {
					id
					slug
					title
					createdAt
					description {
						text
					}
					image {
						url
					}
					author {
						name
						avatar {
							url
						}
					}
				}
			}
		`;

	const result = await request<{blogs:BlogsType[]}>(graphqlAPI, query);
	return result.blogs;
	},
	async getCategories() {
		const query = gql`
		query GetCategories {
		categories {
			label
			slug
		}}
	`;
		
	const result = await request<{categories:CategoryType[]}>(graphqlAPI, query);
	return result.categories;
	}, 

	async getDetailedBlog(slug:string){
		const query = gql`
		query GetDetailedBlog($slug: String!) {
			blog(where: { slug: $slug }) {
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
				description {
					html
					text
				}
			}
		}
			
	`;
	const result=await request<{blog:BlogsType}>(graphqlAPI, query,{slug})
	return result.blog
	},


	async getDetaieldCateogriesBlog(slug: string) {
		const query = gql`
			query getCategoriesBlog($slug: String!) {
				blogs(where: { category: { slug: $slug } }) {
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
					description {
						text
					}
				}
			}
		`;

		const result = await request<{ blogs: BlogsType[] }>(graphqlAPI, query, { slug });
		return result.blogs;
	},


}

//typescriptda ! belgisi important degani



