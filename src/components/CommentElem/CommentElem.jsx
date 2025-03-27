import React from 'react'



const CommentElem = ({ elemInfo }) => {


	return (
		<div
		    className={'commentElem card'}
		>
			<p>
				{elemInfo.body}
			</p>
			<div
				className={'info_section cont'}
			>
				<div
				    className={'username'}
				>
					{elemInfo.name}
				</div>
				<div
					className={'email'}
				>
					{elemInfo.email}
				</div>
			</div>
		</div>
	)
}

export default CommentElem