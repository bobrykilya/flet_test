import React, { memo } from 'react'



const PostElem = memo(({ elemInfo, users, setSelectedPost, isPostSelected }) => {


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
					isPostSelected ?
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
})

export default PostElem