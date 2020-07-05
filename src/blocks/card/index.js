/**
 * Card Block
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.blockEditor;

registerBlockType('demo/card', {
	title: __('Card', 'demo'),
	description: __('Display a card with heading and description', 'demo'),
	category: 'widgets',
	attributes: {
		title: {
			type: 'string',
			source: 'html',
			selector: '.demo-card__title',
		},
		description: {
			type: 'string',
			source: 'html',
			selector: '.demo-card__content',
		},
	},
	supports: {
		className: false,
	},

	edit: (props) => {
		// Destructure props and attributes.
		const {
			attributes: {
				title,
				description,
			},
			setAttributes,
		} = props;

		return (
			<div className="demo-card">
				<div className="demo-card__inner">
					<RichText
						allowedFormats={[]}
						className="demo-card__title"
						multiline={false}
						onChange={(value) => setAttributes({ title: value })}
						placeholder="Add card title"
						tagName="h2"
						value={title}
					/>
					<RichText
						allowedFormats={[]}
						className="demo-card__content"
						multiline={'p'}
						onChange={(value) => setAttributes({ description: value })}
						placeholder="Add card content"
						tagName="div"
						value={description}
					/>
				</div>
			</div>
		);
	},

	save: (props) => {
		// Destructure attributes.
		const {
			attributes: {
				title,
				description,
			}
		} = props;

		return (
			<div className="demo-card">
				<div className="demo-card__inner">
					<h2
						className="demo-card__title"
						dangerouslySetInnerHTML={{ __html: title }}
					/>
					<div
						className="demo-card__content"
						dangerouslySetInnerHTML={{ __html: description }}
					/>
				</div>
			</div>
		);
	},
});
