import React from 'react'



const PostElem = ({ elemInfo, users, setSelectedPost, selectedPost }) => {


	return (
		<div
			className={'post_elem card'}
		>
			<h1>
				{elemInfo.title}
			</h1>
			<p>
				{elemInfo.body}
			</p>
			<div
			    className={'info_section cont'}
			>
				<div
				    className={'author'}
				>
					{users.find((user) => user.id === elemInfo.userId).name}
				</div>
				{
					selectedPost === elemInfo.id ?
					<button
						className={'selected'}
						onClick={() => setSelectedPost(null)}
					>
						Close comments
					</button>
						:
					<button
						onClick={() => setSelectedPost(elemInfo.id)}
					>
						Open comments
					</button>
				}
			</div>
		</div>
	)
}

export default PostElem