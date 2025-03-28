import React, { useEffect, useState } from 'react'
import './App.sass'
import { getDataAPI } from "./http.js"
import PostElem from "./components/PostElem/PostElem.jsx"
import CommentElem from "./components/CommentElem/CommentElem.jsx"



const App = () => {

	const [data, setData] = useState({})
	const [selectedPost, setSelectedPost] = useState(null)
	const dataLimit = 100


	useEffect(() => {
		const getData = async () => {
			const posts = await getDataAPI('posts', dataLimit)
			const users = await getDataAPI('users', dataLimit)
			const comments = await getDataAPI('comments', dataLimit)

			return {
				posts,
				users,
				comments,
			}
		}

		getData()
			.then((data) => {
				setData(data)
			})
	}, [])


	return (
        <div
            id={'cover'}
            className={'cont'}
        >
	        <section
	            className={'posts_section'}
	        >
		        {
			        data.posts?.map(el =>
						<PostElem
							key={el.id}
							elemInfo={el}
							users={data.users}
							setSelectedPost={setSelectedPost}
							isPostSelected={selectedPost === el.id}
						/>
			        )
		        }
	        </section>
	        <section>
		        {
			        selectedPost &&
			        data.comments.filter(comment => comment.postId === selectedPost).map(el =>
				        <CommentElem
					        key={el.id}
					        elemInfo={el}
				        />
			        )
		        }
	        </section>
        </div>
	)
}

export default App